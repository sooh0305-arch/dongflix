import React from 'react';
import { Play, Info } from 'lucide-react';
import { Content } from '../types';
import AIGeneratedImage from './AIGeneratedImage';

interface HeroProps {
  content: Content;
  onInfoClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ content, onInfoClick }) => {
  return (
    <div className="relative min-h-[80vh] md:min-h-[85vh] lg:h-[95vh] w-full text-white flex flex-col pt-32 md:pt-40 pb-16 md:pb-32 lg:pb-40">
      {/* Background Image Container */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        {content.imagePrompt ? (
          <AIGeneratedImage 
            prompt={content.imagePrompt} 
            alt={content.title}
            className="w-full h-full object-cover brightness-[0.5]"
            fallbackUrl={content.imageUrl}
          />
        ) : (
          <img 
            src={content.imageUrl} 
            alt={content.title} 
            className="w-full h-full object-cover brightness-[0.5]"
            referrerPolicy="no-referrer"
          />
        )}
        {/* Stronger Bottom Gradient to blend into the rows */}
        <div className="absolute bottom-0 w-full h-[60%] bg-gradient-to-t from-[#141414] via-[#141414]/80 to-transparent"></div>
        {/* Top Gradient for Navbar readability */}
        <div className="absolute top-0 w-full h-32 md:h-48 bg-gradient-to-b from-black/90 via-black/50 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative px-4 md:px-12 max-w-4xl w-full z-10 animate-fade-in mt-auto">
        
        {/* Series Logo Type */}
        <div className="flex items-center space-x-1 mb-2 md:mb-3">
           <span className="text-[#E50914] font-black text-3xl md:text-4xl font-bebas tracking-tighter">D</span>
           <span className="text-gray-300 font-bold tracking-[0.2em] text-[10px] md:text-sm uppercase">Series</span>
        </div>
        
        {/* Title */}
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-bebas leading-[1] mb-3 md:mb-6 drop-shadow-2xl max-w-[90%] md:max-w-full">
          {content.title}
        </h1>
        
        {/* Meta Data Line */}
        <div className="flex items-center flex-wrap gap-2 md:gap-3 mb-3 md:mb-6 text-xs md:text-base font-medium">
          <span className="text-[#46d369] font-bold">{content.matchScore}% 일치</span>
          <span className="text-gray-300">{content.year}</span>
          <span className="border border-gray-400 px-1 py-0.5 text-[9px] md:text-[10px] text-gray-300 rounded-sm leading-none">HD</span>
          <span className="text-gray-300">{content.duration || 'Season 1'}</span>
        </div>

        {/* Subtitle/Tagline */}
        <p className="text-base md:text-2xl font-bold mb-2 md:mb-4 text-white drop-shadow-md break-keep">
            {content.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs md:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl drop-shadow-md line-clamp-3 leading-relaxed break-keep">
          {content.description}
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-2 md:gap-3">
          <button 
            className="flex-1 md:flex-none flex items-center justify-center px-4 md:px-10 py-2 md:py-3 bg-white text-black rounded-md hover:bg-white/80 transition font-bold text-sm md:text-lg"
            onClick={onInfoClick}
          >
            <Play className="w-4 h-4 md:w-6 md:h-6 mr-2 fill-black" />
            재생
          </button>
          
          <button 
            onClick={onInfoClick}
            className="flex-1 md:flex-none flex items-center justify-center px-4 md:px-10 py-2 md:py-3 bg-[rgba(109,109,110,0.7)] text-white rounded-md hover:bg-[rgba(109,109,110,0.4)] transition font-bold text-sm md:text-lg backdrop-blur-sm"
          >
            <Info className="w-4 h-4 md:w-6 md:h-6 mr-2" />
            프로필
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;