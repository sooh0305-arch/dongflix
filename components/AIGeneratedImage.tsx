
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
        // 안전한 API KEY 접근 (브라우저 환경 호환)
        let apiKey = '';
        
        // 1. process.env 체크 (Node/Webpack 등)
        if (typeof process !== 'undefined' && process.env && process.env.API_KEY) {
            apiKey = process.env.API_KEY;
        } 
        // 2. import.meta.env 체크 (Vite 등)
        else {
            try {
                // @ts-ignore
                if (import.meta && import.meta.env && import.meta.env.API_KEY) {
                    // @ts-ignore
                    apiKey = import.meta.env.API_KEY;
                }
            } catch (e) {
                // import.meta가 지원되지 않는 환경 무시
            }
        }

        if (!apiKey) {
           // 키가 없으면 조용히 폴백으로 전환 (에러 발생시키지 않음)
           console.warn("API Key not found, using fallback image.");
           if (isMounted) {
             setUseFallback(true);
             setLoading(false);
           }
           return;
        }

        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: `${prompt} | 2D flat minimalist illustration, red neon and black dark grey theme, high quality, cinematic lighting, vector graphic style` }],
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
          if (isMounted) setImageUrl(foundImageUrl);
        } else {
          if (isMounted) setUseFallback(true);
        }
      } catch (err: any) {
        console.warn(`[AI GEN FAILED] ${alt}`, err);
        if (isMounted) {
          // 429 에러(Quota Exceeded) 발생 시 세션에 기록하여 재시도 방지
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
        />
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
