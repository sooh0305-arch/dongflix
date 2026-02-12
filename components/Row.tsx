
import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Content, RowProps } from '../types';

const Row: React.FC<RowProps> = ({ title, data, isLargeRow, isRanked, onContentClick }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: 'left' | 'right') => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth / 2 
        : scrollLeft + clientWidth / 2;
      
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-2 md:space-y-4 px-4 md:px-12 my-2 md:my-8 group relative z-20">
      <h2 className="w-full md:w-fit cursor-pointer text-base md:text-2xl font-bold text-[#e5e5e5] transition duration-200 hover:text-white mb-1 md:mb-3 flex items-end gap-2">
        {title}
        {isRanked && <span className="hidden md:inline text-xs font-normal text-[#E50914] border border-[#E50914] px-1 ml-2">DATA INSIGHT</span>}
      </h2>
      
      <div className="group/row relative">
        <ChevronLeft
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover/row:opacity-100 ${!isMoved && 'hidden'}`}
          onClick={() => handleClick('left')}
        />

        <div
          ref={rowRef}
          className="flex items-center space-x-3 md:space-x-6 overflow-x-scroll no-scrollbar py-3 md:py-4 px-1 md:px-2 scroll-smooth"
        >
          {data.map((item) => (
            <div 
              key={item.id} 
              className={`relative flex-shrink-0 cursor-pointer transition duration-300 ease-in-out md:hover:scale-105 hover:z-50 rounded-md overflow-hidden
                ${isRanked ? 'h-28 md:h-40 w-[200px] md:w-[300px]' : 
                  isLargeRow ? 'h-36 md:h-56 w-[220px] md:w-[380px]' : 'h-24 md:h-36 w-[140px] md:w-[220px]'}`}
              onClick={() => onContentClick(item)}
            >
              {isRanked ? (
                // Clean Text Card Layout
                <div className="h-full w-full bg-[#2a2a2a] p-3 md:p-4 flex flex-col justify-between border-l-4 border-[#E50914] shadow-xl">
                    <div>
                        <p className="text-[#46d369] font-bold text-[10px] md:text-sm mb-0.5 md:mb-1">기여도 {item.matchScore}%</p>
                        <h3 className="text-white font-bold text-sm md:text-lg line-clamp-2 leading-tight">{item.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1 md:mt-2">
                        {item.tags.slice(0, 2).map((tag, idx) => (
                            <span key={idx} className="text-[8px] md:text-[10px] text-gray-400 border border-gray-600 px-1 py-0.5 rounded leading-none">
                                {tag.replace('#','')}
                            </span>
                        ))}
                    </div>
                </div>
              ) : (
                // Standard Image Layout
                <>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover shadow-md brightness-[0.8]"
                    />
                    
                    {/* Hover Overlay - Only on Desktop */}
                    <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex-col justify-end p-3">
                        <div className="text-xs font-bold transform translate-y-2 hover:translate-y-0 transition duration-300">
                            <p className="text-white text-[10px] md:text-xs mb-1 line-clamp-1">{item.title}</p>
                            <div className="flex flex-wrap gap-1">
                                <span className="text-[#46d369] text-[10px]">기여도 {item.matchScore}%</span>
                            </div>
                        </div>
                    </div>
                    {/* Mobile Only Title Overlay */}
                    <div className="md:hidden absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-white text-[10px] font-bold truncate">{item.title}</p>
                    </div>
                </>
              )}
            </div>
          ))}
        </div>

        <ChevronRight
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover/row:opacity-100"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
};

export default Row;
    