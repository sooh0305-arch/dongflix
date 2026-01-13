import React from 'react';
import { ChevronRight } from 'lucide-react';

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col font-roboto overflow-x-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
         <img 
           src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-52043743669c/KR-ko-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
           alt="Background" 
           className="w-full h-full object-cover opacity-60 scale-105"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center px-6 md:px-12 py-6 max-w-7xl mx-auto w-full">
        <span className="text-[#E50914] text-4xl md:text-5xl font-bebas font-bold tracking-wide cursor-pointer">
            DONG-FLIX
        </span>
        <button 
            className="bg-[#E50914] text-white px-5 py-2 rounded font-medium text-sm md:text-base hover:bg-[#c11119] transition"
            onClick={onEnter}
        >
            로그인
        </button>
      </header>

      {/* Main Center Content */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4 w-full max-w-5xl mx-auto mt-[-50px]">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight drop-shadow-lg">
           HRD와 크리에이티브,<br className="hidden md:block" /> 
           경계를 넘나드는 포트폴리오.
        </h1>
        <p className="text-lg md:text-2xl font-medium mb-8 drop-shadow-md">
           어디서나 자유롭게 역량을 확인하고, 부담 없이 연락하세요.
        </p>
        
        <div className="w-full max-w-3xl">
            <p className="text-base md:text-xl text-gray-200 mb-4">
              준비되셨나요? 클릭 한 번으로 모든 커리어를 확인해보세요.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0 w-full justify-center">
                <button 
                    onClick={onEnter}
                    className="flex items-center justify-center bg-[#E50914] text-white text-2xl font-bold py-4 px-8 rounded hover:bg-[#f6121d] transition shadow-xl w-full md:w-auto"
                >
                    DONG-FLIX 시작하기 <ChevronRight className="w-8 h-8 ml-2" />
                </button>
            </div>
        </div>
      </main>
      
      {/* Decorative Gradient Line at bottom */}
      <div className="relative z-10 h-2 w-full bg-[#232323]"></div>
    </div>
  );
};

export default LandingPage;