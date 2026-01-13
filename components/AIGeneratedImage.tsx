
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Loader2, Wand2, AlertCircle } from 'lucide-react';
import { db } from '../firebase';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

interface AIGeneratedImageProps {
  prompt: string;
  alt: string;
  className?: string;
  fallbackUrl: string;
}

const AIGeneratedImage: React.FC<AIGeneratedImageProps> = ({ prompt, alt, className, fallbackUrl }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isQuotaExceeded, setIsQuotaExceeded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchAndGenerate = async () => {
      setLoading(true);
      setError(false);
      setIsQuotaExceeded(false);

      // Sanitize prompt for doc ID
      const docId = btoa(unescape(encodeURIComponent(prompt))).substring(0, 120);
      let cachedUrl = null;

      // 1. Try to fetch from Firestore Cache with Timeout
      try {
        const docRef = doc(db, "generated_images", docId);
        
        // Race condition: If Firestore takes longer than 1.5s, fail fast.
        const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error("Firestore timeout")), 1500)
        );

        const docSnap: any = await Promise.race([
            getDoc(docRef),
            timeoutPromise
        ]);

        if (docSnap.exists()) {
          cachedUrl = docSnap.data().url;
          console.log(`Loaded from DB: ${alt}`);
        }
      } catch (firestoreErr) {
        // Silently ignore DB errors (offline or permission)
      }

      if (cachedUrl) {
        if (isMounted) {
          setImageUrl(cachedUrl);
          setLoading(false);
        }
        return;
      }

      // 2. If not in cache, generate using Gemini
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: `${prompt} | 2D flat minimalist illustration, red and white palette, dark background` }],
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9"
            }
          }
        });

        if (!isMounted) return;

        let foundImageUrl = null;
        if (response.candidates?.[0]?.content?.parts) {
          for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
              foundImageUrl = `data:image/png;base64,${part.inlineData.data}`;
              break;
            }
          }
        }

        if (foundImageUrl) {
          // 3. Try to save to Firestore (Fire and forget, ignoring errors)
          try {
            const docRef = doc(db, "generated_images", docId);
            setDoc(docRef, {
              url: foundImageUrl,
              prompt: prompt,
              createdAt: serverTimestamp()
            }, { merge: true }).then(() => {
                console.log(`Saved to DB: ${alt}`);
            }).catch((err) => {
                console.warn("Failed to save image to DB:", err);
            });
          } catch (saveErr) {
             console.warn("Error initiating save to DB:", saveErr);
          }
          
          if (isMounted) setImageUrl(foundImageUrl);
        } else {
          setError(true);
        }
      } catch (err: any) {
        console.error("Image generation process failed:", err);
        if (isMounted) {
          // Check for quota error (429)
          if (err?.message?.includes('429') || err?.status === 429) {
            setIsQuotaExceeded(true);
          }
          setError(true);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchAndGenerate();

    return () => {
      isMounted = false;
    };
  }, [prompt]);

  if (loading) {
    return (
      <div className={`flex flex-col items-center justify-center bg-[#1a1a1a] ${className}`}>
        <Loader2 className="w-8 h-8 text-[#E50914] animate-spin mb-2" />
        <div className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
          <Wand2 className="w-3 h-3" /> Art Rendering...
        </div>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className="relative w-full h-full group">
        <img
          src={fallbackUrl}
          alt={alt}
          className={`${className} object-cover grayscale opacity-50`}
        />
        {isQuotaExceeded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-4 text-center">
            <AlertCircle className="w-6 h-6 text-[#E50914] mb-1" />
            <p className="text-[10px] text-white font-bold uppercase tracking-tight">API 할당량 초과</p>
            <p className="text-[8px] text-gray-300 mt-1 leading-tight">임시 이미지를 표시합니다.<br/>나중에 다시 시도해주세요.</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={`${className} object-cover animate-fade-in`}
    />
  );
};

export default AIGeneratedImage;
