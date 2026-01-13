import React from 'react';
import { Content } from '../types';
import { TRENDING_DATA, ORIGINALS_DATA, TECH_DATA, CULTURE_DATA } from '../constants';

interface SearchResultsProps {
  query: string;
  onContentClick: (content: Content) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query, onContentClick }) => {
  const allData = [
    ...TRENDING_DATA,
    ...ORIGINALS_DATA,
    ...TECH_DATA,
    ...CULTURE_DATA
  ];

  const filteredResults = allData.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.subtitle?.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase()) ||
    item.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="pt-24 md:pt-32 px-4 md:px-12 min-h-screen animate-fade-in">
      <h2 className="text-gray-400 text-lg md:text-xl mb-8">
        검색 결과: <span className="text-white font-bold">"{query}"</span>
      </h2>

      {filteredResults.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-10">
          {filteredResults.map((item) => (
            <div 
              key={item.id}
              className="group relative cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => onContentClick(item)}
            >
              <div className="aspect-video rounded overflow-hidden mb-2 bg-[#2a2a2a]">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover brightness-[0.8] group-hover:brightness-100 transition"
                />
              </div>
              <div className="space-y-1">
                <p className="text-[#46d369] text-[10px] md:text-xs font-bold">기여도 {item.matchScore}%</p>
                <h3 className="text-white text-xs md:text-sm font-bold line-clamp-1">{item.title}</h3>
                <div className="flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                   {item.tags.slice(0, 2).map(tag => (
                       <span key={tag} className="text-[8px] text-gray-500">{tag}</span>
                   ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-gray-500 text-lg">검색 결과가 없습니다.</p>
          <p className="text-gray-600 text-sm mt-2">다른 키워드로 검색해 보세요.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;