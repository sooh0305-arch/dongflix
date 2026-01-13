
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

      // 1. Create a safe Doc ID
      // Encode prompt to base64 to create a unique ID, but replace '/' with '-' to prevent Firestore path issues.
      const safeId = btoa(unescape(encodeURIComponent(prompt)))
        .replace(/\//g, '-')  // Replace slashes
        .replace(/\+/g, '_')  // Replace pluses
        .substring(0, 150);   // Limit length
        
      const docId = `img_${safeId}`;
      let cachedUrl = null;

      // 2. Try to fetch from Firestore Cache with Timeout
      try {
        const docRef = doc(db, "generated_images", docId);
        
        // Increased timeout to 3000ms to give Firestore more time on slow connections
        const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error("Firestore timeout")), 3000)
        );

        const docSnap: any = await Promise.race([
            getDoc(docRef),
            timeoutPromise
        ]);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.url) {
            cachedUrl = data.url;
            console.log(`[Cache Hit] Loaded from DB: ${alt.substring(0, 20)}...`);
          }
        }
      } catch (firestoreErr) {
        console.warn(`[Cache Miss] Could not read from DB (${alt}):`, firestoreErr);
      }

      if (cachedUrl) {
        if (isMounted) {
          setImageUrl(cachedUrl);
          setLoading(false);
        }
        return;
      }

      // 3. If not in cache, generate using Gemini
      console.log(`[Generating] Requesting AI image for: ${alt}`);
      
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: `${prompt} | 2D flat minimalist illustration, red and white palette, dark background, high quality` }],
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
          // 4. Try to save to Firestore
          try {
            const docRef = doc(db, "generated_images", docId);
            // Check approximate size (Firestore limit is 1MB)
            if (foundImageUrl.length > 1000000) {
                console.warn("Image too large for Firestore, skipping save.");
            } else {
                await setDoc(docRef, {
                  url: foundImageUrl,
                  prompt: prompt,
                  createdAt: serverTimestamp(),
                  version: "2.0"
                }, { merge: true });
                console.log(`[Saved] Successfully saved to DB: ${alt}`);
            }
          } catch (saveErr: any) {
             console.error("FAILED to save image to DB. Check Firestore Rules.", saveErr);
             if (saveErr.code === 'permission-denied') {
                 console.error(">> ACTION REQUIRED: Go to Firebase Console -> Firestore -> Rules and allow read/write.");
             }
          }
          
          if (isMounted) setImageUrl(foundImageUrl);
        } else {
          console.error("No image data found in AI response");
          setError(true);
        }
      } catch (err: any) {
        console.error("Image generation process failed:", err);
        if (isMounted) {
          // Check for quota error (429)
          if (err?.message?.includes('429') || err?.status === 429) {
            console.warn("Quota exceeded for AI generation.");
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
  }, [prompt, alt]);

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
            <p className="text-[8px] text-gray-300 mt-1 leading-tight">DB 저장 실패 또는<br/>요청 횟수 초과입니다.</p>
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
