
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Loader2, Wand2 } from 'lucide-react';

interface AIGeneratedImageProps {
  prompt: string;
  alt: string;
  className?: string;
  fallbackUrl: string;
}

const AIGeneratedImage: React.FC<AIGeneratedImageProps> = ({ prompt, alt, className, fallbackUrl }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const SESSION_KEY = 'gemini_quota_exceeded';

    const fetchAndGenerate = async () => {
      // 이미 할당량이 초과된 것으로 기록되어 있으면 바로 폴백 이미지 사용
      if (sessionStorage.getItem(SESSION_KEY) === 'true') {
          if (isMounted) {
            setUseFallback(true);
            setLoading(false);
          }
          return;
      }

      setLoading(true);
      
      try {
        // Use process.env.GEMINI_API_KEY directly as mandated by guidelines.
        if (!process.env.GEMINI_API_KEY) {
           console.warn("API Key not found, using fallback image.");
           if (isMounted) {
             setUseFallback(true);
             setLoading(false);
           }
           return;
        }

        // Initialize GoogleGenAI right before generating content as per guidelines.
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: `${prompt} | 2D flat vector graphic illustration, dark grey textured background, vibrant glowing neon red (#E50914) accents, pure white elements, dynamic perspective, corporate tech vibe, no photorealism, clean geometric shapes` }],
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9"
            }
          }
        });

        if (!isMounted) return;

        let foundImageUrl: string | null = null;
        if (response.candidates?.[0]?.content?.parts) {
          for (const part of response.candidates[0].content.parts) {
            // Find the image part in the response.
            if (part.inlineData) {
              foundImageUrl = `data:image/png;base64,${part.inlineData.data}`;
              break;
            }
          }
        }

        if (foundImageUrl) {
          if (isMounted) setImageUrl(foundImageUrl);
        } else {
          if (isMounted) setUseFallback(true);
        }
      } catch (err: any) {
        console.warn(`[AI GEN FAILED] ${alt}`, err);
        if (isMounted) {
          // Handle quota exceeded error gracefully.
          if (err?.message?.includes('429') || err?.status === 429) {
            sessionStorage.setItem(SESSION_KEY, 'true');
          }
          setUseFallback(true);
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
        <Loader2 className="w-6 h-6 text-[#E50914] animate-spin mb-2" />
        <div className="flex items-center gap-1.5 text-[10px] text-gray-400 uppercase tracking-widest font-bold animate-pulse">
          <Wand2 className="w-3 h-3" /> Generating...
        </div>
      </div>
    );
  }

  if (useFallback || !imageUrl) {
    return (
        <img
          src={fallbackUrl}
          alt={alt}
          className={`${className} object-cover`}
          referrerPolicy="no-referrer"
        />
    );
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={`${className} object-cover animate-fade-in`}
      referrerPolicy="no-referrer"
    />
  );
};

export default AIGeneratedImage;
