import React, { useEffect, useState, useMemo } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [showSpectrum, setShowSpectrum] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // 1. Logo sequence starts.
    // 2. The 'D' zooms. Triggering the spectrum at 1450ms 
    // to sync with the moment the expanding 'D' fills the viewer's gaze.
    const tBurst = setTimeout(() => setShowSpectrum(true), 1450);
    
    // Start fading out the intro
    const tFade = setTimeout(() => setIsFading(true), 2700);
    
    // Final callback to main app
    const tEnd = setTimeout(onComplete, 3300);

    return () => {
      clearTimeout(tBurst);
      clearTimeout(tFade);
      clearTimeout(tEnd);
    };
  }, [onComplete]);

  const spectrumLines = useMemo(() => {
    const palette = [
      '#E50914', '#B20710', '#F5E050', '#FF00FF', 
      '#800080', '#00A8E1', '#0071AD', '#53d7e8', '#ffffff'
    ];
    return Array.from({ length: 95 }).map((_, i) => ({
      id: i,
      width: Math.random() * 8 + 1,
      left: Math.random() * 100,
      delay: Math.random() * 0.005,
      color: palette[Math.floor(Math.random() * palette.length)],
      opacity: Math.random() * 0.9 + 0.1,
    }));
  }, []);

  return (
    <div className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden transition-opacity duration-700 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      
      {/* Background Noise Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.1] bg-noise"></div>
      
      {/* 
        The 'D' Logo 
        - Started at scale(0.5) to give more depth and cinematic feel.
      */}
      <div className="relative flex items-center justify-center animate-logo-sequence overflow-visible">
        <span 
            className="font-bebas text-[25rem] md:text-[42rem] font-bold leading-none select-none text-[#E50914]"
            style={{
                transform: 'scaleX(0.78)', 
                letterSpacing: '-0.02em'
            }}
        >
            D
        </span>
      </div>

      {/* Prism Spectrum Effect */}
      {showSpectrum && (
        <div className="absolute inset-0 w-full h-full pointer-events-none flex z-20">
          {spectrumLines.map((line) => (
            <div
                key={line.id}
                className="absolute top-0 bottom-0 animate-spectrum"
                style={{
                    left: `${line.left}%`,
                    width: `${line.width}%`,
                    backgroundColor: line.color,
                    opacity: line.opacity,
                    boxShadow: `0 0 80px ${line.color}`,
                    animationDelay: `${line.delay}s`,
                }}
            />
          ))}
          <div className="absolute inset-0 bg-white/70 animate-flash z-30"></div>
        </div>
      )}

      {/* CRT Scanline & TV Vignette */}
      <div className="absolute inset-0 pointer-events-none z-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,4px_100%]"></div>
        <div className="absolute inset-0 shadow-[inset_0_0_500px_rgba(0,0,0,0.8)]"></div>
      </div>

      <style>{`
        @keyframes logoSequence {
            0% { transform: scale(0); opacity: 0; }
            5% { transform: scale(0.5); opacity: 1; }  /* Smaller starting size */
            35% { transform: scale(0.5); opacity: 1; } /* Hold small for depth */
            100% { transform: scale(4500); opacity: 1; } /* Zoom even more for impact */
        }

        @keyframes spectrum {
            0% { transform: scaleY(0) scaleX(0.2); opacity: 0; }
            10% { opacity: 1; transform: scaleY(1) scaleX(4); }
            60% { opacity: 1; }
            100% { transform: scaleY(4) scaleX(0); opacity: 0; }
        }

        @keyframes flash {
            0% { opacity: 0; }
            20% { opacity: 1; }
            100% { opacity: 0; }
        }

        .animate-logo-sequence { 
            animation: logoSequence 2.8s cubic-bezier(0.7, 0, 0.84, 0) forwards; 
            will-change: transform;
        }
        
        .animate-spectrum { animation: spectrum 0.5s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
        .animate-flash { animation: flash 0.3s ease-out forwards; }
        
        .bg-noise {
            background-image: url('https://media.giphy.com/media/oEI9uWUic9VTi/giphy.gif');
            background-size: cover;
            mix-blend-mode: overlay;
        }
      `}</style>
    </div>
  );
};

export default IntroAnimation;