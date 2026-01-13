
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
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const generateImage = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: prompt }],
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9"
            }
          }
        });

        if (!isMounted) return;

        let foundImageUrl = null;
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            foundImageUrl = `data:image/png;base64,${part.inlineData.data}`;
            break;
          }
        }

        if (foundImageUrl) {
          setImageUrl(foundImageUrl);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Image generation failed:", err);
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    generateImage();

    return () => {
      isMounted = false;
    };
  }, [prompt]);

  if (loading) {
    return (
      <div className={`flex flex-col items-center justify-center bg-[#1a1a1a] ${className}`}>
        <Loader2 className="w-8 h-8 text-[#E50914] animate-spin mb-2" />
        <div className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
          <Wand2 className="w-3 h-3" /> AI Drawing...
        </div>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <img
        src={fallbackUrl}
        alt={alt}
        className={`${className} object-cover grayscale opacity-50`}
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
