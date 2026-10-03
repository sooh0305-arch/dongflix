
import React, { useState, useEffect } from 'react';
import { X, Play, ChevronLeft, ChevronRight, Briefcase, GraduationCap, Award, TrendingUp, Info } from 'lucide-react';
import { Content, SubItem } from '../types';

interface ModalProps {
  isOpen: boolean;
  content: Content | null;
  onClose: () => void;
}

const ContentModal: React.FC<ModalProps> = ({ isOpen, content, onClose }) => {
  const [activeSubItem, setActiveSubItem] = useState<SubItem | null>(null);
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    if (content?.subItems && content.subItems.length > 0) {
      setActiveSubItem(content.subItems[0]);
    } else {
        setActiveSubItem(null);
    }
    setCardIndex(0);
  }, [content, isOpen]);

  if (!isOpen || !content) return null;

  const handleSubItemClick = (item: SubItem) => {
    setActiveSubItem(item);
    setCardIndex(0);
    const player = document.getElementById('modal-player');
    player?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeSubItem?.images && cardIndex < activeSubItem.images.length - 1) {
      setCardIndex(prev => prev + 1);
    }
  };

  const prevCard = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (cardIndex > 0) {
      setCardIndex(prev => prev - 1);
    }
  };

  // 경력 사항이 있는 경우(프로필 모달) 상단 이미지를 표시하지 않음
  const hasCareer = !!content.careerHistory;

  return (
    <div className="fixed inset-0 z-[100] flex justify-center items-start pt-4 md:pt-10 overflow-y-auto overflow-x-hidden no-scrollbar">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-[950px] bg-[#181818] rounded-lg shadow-2xl overflow-hidden transform transition-all scale-100 mb-20 animate-fade-in mx-2">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          aria-label="상세 화면 닫기"
          className="absolute top-4 right-4 z-[110] bg-[#181818]/60 backdrop-blur-md rounded-full p-2 hover:bg-[#333] transition"
        >
          <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>

        {/* Dynamic Viewer Section - Hidden if career info exists */}
        {!hasCareer && (
          <div id="modal-player" className="relative w-full bg-black min-h-[240px] md:min-h-[500px]">
              {content.contentType === 'video' && activeSubItem?.assetUrl ? (
                  <div className="aspect-video w-full h-full flex items-center justify-center">
                      <video 
                          key={activeSubItem.id}
                          src={activeSubItem.assetUrl} 
                          controls
                          playsInline
                          preload="metadata"
                          poster={activeSubItem.posterUrl}
                          aria-label={activeSubItem.title}
                          autoPlay
                          className="w-full h-full object-contain"
                      />
                  </div>
              ) : content.contentType === 'card' && activeSubItem?.images ? (
                  <div className="relative w-full flex items-start justify-center bg-[#111]">
                      <img 
                          src={activeSubItem.images[cardIndex]} 
                          alt={`${activeSubItem.title} ${cardIndex + 1}`} 
                          className="w-full max-w-[800px] h-auto object-contain transition-all duration-300" 
                          referrerPolicy="no-referrer"
                      />
                      
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 md:px-4 pointer-events-none">
                          <button 
                              onClick={prevCard} 
                              aria-label="이전 이미지"
                              disabled={cardIndex === 0}
                              className={`p-2 md:p-3 rounded-full bg-black/50 text-white pointer-events-auto transition hover:bg-black/80 disabled:opacity-0 ${cardIndex === 0 ? 'cursor-default' : 'cursor-pointer'}`}
                          >
                              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                          </button>
                          <button 
                              onClick={nextCard} 
                              aria-label="다음 이미지"
                              disabled={cardIndex === (activeSubItem.images?.length || 0) - 1}
                              className={`p-2 md:p-3 rounded-full bg-black/50 text-white pointer-events-auto transition hover:bg-black/80 disabled:opacity-0 ${cardIndex === (activeSubItem.images?.length || 0) - 1 ? 'cursor-default' : 'cursor-pointer'}`}
                          >
                              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                          </button>
                      </div>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-bold text-white backdrop-blur-md">
                          {cardIndex + 1} / {activeSubItem.images.length}
                      </div>
                  </div>
              ) : content.contentType === 'webtoon' && activeSubItem?.images ? (
                  <div className="w-full max-h-[400px] md:max-h-[600px] overflow-y-auto no-scrollbar bg-[#111] flex flex-col items-center">
                      <div className="sticky top-0 w-full bg-[#181818]/80 backdrop-blur-sm p-2 text-center text-[10px] md:text-xs font-bold text-gray-400 z-30 uppercase tracking-widest">
                          스크롤하여 감상
                      </div>
                      {activeSubItem.images.map((img, idx) => (
                          <img 
                              key={idx} 
                              src={img} 
                              alt={`Webtoon page ${idx}`} 
                              className="w-full max-w-[600px] block"
                              referrerPolicy="no-referrer"
                          />
                      ))}
                      <div className="py-10 text-gray-500 font-bold text-xs">END</div>
                  </div>
              ) : (
                  <div className="relative h-[200px] md:h-[480px]">
                      <img src={content.detailImageUrl || content.imageUrl} alt={content.title} className="w-full h-full object-cover brightness-[0.7]" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent"></div>
                  </div>
              )}
          </div>
        )}

        {/* Content Details */}
        <div className={`px-4 md:px-12 pb-10 ${hasCareer ? 'pt-16 md:pt-20' : 'pt-6 md:pt-8'}`}>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-y-8 md:gap-x-12">
            
            {/* Left side */}
            <div>
              <div className="flex items-center space-x-3 mb-4 md:mb-6 text-xs md:text-sm font-medium">
                {content.matchScore != null && <span className="text-[#46d369] font-bold">{content.matchScore}% 일치</span>}
                <span className="text-gray-400">{content.year || '2024'}</span>
                {content.contentType === 'video' && <span className="border border-gray-500 px-1 text-[9px] md:text-[10px] text-gray-400 rounded-sm leading-none">HD</span>}
                <span className="text-gray-400">{content.duration || 'Special'}</span>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-white break-keep leading-tight">
                {hasCareer ? 'DONG-FLIX 프로필' : (activeSubItem ? activeSubItem.title : content.title)}
              </h2>

              {/* 지원금 성과 강조 (Amount Highlight Section) */}
              {content.amount && !hasCareer && (
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-lg mb-6 animate-fade-in shadow-inner">
                   <div className="bg-[#E50914] p-3 rounded-full">
                      <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-white" />
                   </div>
                   <div>
                      <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest mb-0.5">핵심 성과 지표 (KPI)</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-gray-300 text-xs md:text-sm">정부 지원금 확보액:</span>
                        <span className="text-white text-xl md:text-2xl font-black">{content.amount}</span>
                      </div>
                   </div>
                </div>
              )}

              <p className="text-white text-sm md:text-base leading-relaxed md:leading-7 mb-8 text-gray-300 break-keep">
                {activeSubItem ? activeSubItem.description : content.description}
              </p>

              {/* Career History Section */}
              {content.careerHistory && (
                <div className="mt-6 mb-10 animate-fade-in">
                   <div className="flex items-center space-x-2 mb-4 md:mb-6">
                      <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-[#E50914]" />
                      <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight">Experience</h3>
                   </div>
                   <div className="space-y-6 relative border-l border-gray-700 ml-2 pl-4 md:pl-6">
                      {content.careerHistory.map((job, idx) => (
                        <div key={idx} className="relative">
                           <div className="absolute -left-[21px] md:-left-[31px] top-1.5 w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#E50914] shadow-[0_0_8px_#E50914]"></div>
                           <p className="text-[10px] md:text-xs font-bold text-[#E50914] mb-1">{job.period}</p>
                           <h4 className="text-base md:text-lg font-bold text-white mb-1">{job.company}</h4>
                           <p className="text-xs md:text-sm text-gray-300 leading-relaxed break-keep">{job.role}</p>
                        </div>
                      ))}
                   </div>
                </div>
              )}
              
              {/* Episode List (SubItems) */}
              {content.subItems && (
                <div className="border-t border-gray-700 pt-6 md:pt-8 mt-8 md:mt-10">
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <h3 className="text-lg md:text-xl font-bold text-white">Episodes</h3>
                    <span className="text-xs md:text-sm text-gray-400">{content.title}</span>
                  </div>
                  
                  <div className="space-y-3 md:space-y-4">
                    {content.subItems.map((item, index) => (
                      <div 
                        key={item.id}
                        className={`group flex flex-col sm:flex-row items-start sm:items-center p-3 md:p-4 rounded-md cursor-pointer transition-all duration-300 border border-transparent ${activeSubItem?.id === item.id ? 'bg-[#333] border-gray-500 shadow-xl scale-[1.01]' : 'hover:bg-[#262626]'}`}
                        onClick={() => handleSubItemClick(item)}
                      >
                        <div className="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
                           <span className="text-xl md:text-2xl font-bold text-gray-500 mr-4 md:mr-5 w-6 text-center">{index + 1}</span>
                           <div className="relative w-28 md:w-36 h-16 md:h-20 bg-[#2a2a2a] rounded overflow-hidden flex-shrink-0 mr-4 shadow-md">
                              <img 
                                src={item.images ? item.images[0] : (item.posterUrl || content.imageUrl)}
                                alt={item.title}
                                loading="lazy" 
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 flex items-center justify-center">
                                  <Play className={`w-6 h-6 md:w-8 md:h-8 text-white ${activeSubItem?.id === item.id ? 'opacity-100 scale-110' : 'opacity-0 group-hover:opacity-100 group-hover:scale-110'} transition-all`} />
                              </div>
                           </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-1">
                            <h4 className="font-bold text-white truncate text-sm md:text-base group-hover:text-[#E50914] transition-colors">{item.title}</h4>
                            {item.duration && <span className="text-[10px] md:text-sm text-gray-400 ml-2">{item.duration}</span>}
                          </div>
                          <p className="text-[11px] md:text-sm text-gray-400 line-clamp-2 leading-snug break-keep">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right side (Tags & Details) */}
            <div className="mt-0 md:mt-2">
              <div className="space-y-6 md:space-y-8">
                {/* Education */}
                {content.education && (
                  <div className="animate-fade-in">
                    <span className="text-gray-500 flex items-center gap-1 text-[10px] md:text-xs uppercase tracking-widest mb-2 md:mb-3">
                      <GraduationCap className="w-3.5 h-3.5 md:w-4 md:h-4" /> 학력
                    </span>
                    <ul className="space-y-1.5 md:space-y-2">
                      {content.education.map((edu, i) => (
                        <li key={i} className="text-white text-xs md:text-sm leading-snug">{edu}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Certifications */}
                {content.certifications && (
                  <div className="animate-fade-in">
                    <span className="text-gray-500 flex items-center gap-1 text-[10px] md:text-xs uppercase tracking-widest mb-2 md:mb-3">
                      <Award className="w-3.5 h-3.5 md:w-4 md:h-4" /> 자격 사항
                    </span>
                    <ul className="space-y-1.5 md:space-y-2">
                      {content.certifications.map((cert, i) => (
                        <li key={i} className="text-white text-xs md:text-sm leading-snug">{cert}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Genre (Tags) Section - Only show if NOT the main career profile */}
                {!hasCareer && (
                  <>
                    <div className="animate-fade-in">
                      <span className="text-gray-500 flex items-center gap-1 text-[10px] md:text-xs uppercase tracking-widest mb-2">
                        <Info className="w-3.5 h-3.5 md:w-4 md:h-4" /> 장르
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {content.tags.map(tag => (
                          <span key={tag} className="text-white hover:text-[#E50914] cursor-pointer transition text-[11px] md:text-sm font-medium">{tag.replace('#','')}</span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                
                <div className="animate-fade-in">
                  <span className="text-gray-500 block text-[10px] md:text-xs uppercase tracking-widest mb-2">사용 기술</span>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-white text-[11px] md:text-sm leading-relaxed font-medium">
                    <span>Adobe Creative Suite</span>
                    <span className="text-gray-600">•</span>
                    <span>AI (Gemini, ChatGPT)</span>
                    <span className="text-gray-600">•</span>
                    <span>Data Analytics</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentModal;
