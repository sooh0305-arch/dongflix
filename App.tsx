
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Row from './components/Row';
import Footer from './components/Footer';
import ContentModal from './components/ContentModal';
import LandingPage from './components/LandingPage';
import IntroAnimation from './components/IntroAnimation';
import SearchResults from './components/SearchResults';
import { Content } from './types';
import { 
  HERO_CONTENT, 
  TRENDING_DATA, 
  ORIGINALS_DATA, 
  TECH_DATA, 
  CULTURE_DATA 
} from './constants';

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem('dong-flix-intro-shown');
  });
  const [showLanding, setShowLanding] = useState(true);
  const [modalContent, setModalContent] = useState<Content | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleIntroComplete = () => {
    sessionStorage.setItem('dong-flix-intro-shown', 'true');
    setShowIntro(false);
  };

  const handleEnterApp = () => {
    setShowLanding(false);
    window.scrollTo(0, 0);
  };

  const handleOpenModal = (content: Content) => {
    setModalContent(content);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    document.body.style.overflow = 'auto';
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (showIntro) {
    return <IntroAnimation onComplete={handleIntroComplete} />;
  }

  if (showLanding) {
    return <LandingPage onEnter={handleEnterApp} />;
  }

  return (
    <div className="relative min-h-screen bg-[#141414] overflow-x-hidden font-roboto antialiased selection:bg-[#E50914] selection:text-white">
      <Navbar 
        onSearch={handleSearch} 
        onProfileClick={() => handleOpenModal(HERO_CONTENT)}
      />
      
      <main className="relative pt-0">
        {searchQuery ? (
          <SearchResults 
            query={searchQuery} 
            onContentClick={handleOpenModal} 
          />
        ) : (
          <>
            <Hero 
              content={HERO_CONTENT} 
              onInfoClick={() => handleOpenModal(HERO_CONTENT)}
            />
            
            <div className="relative z-10 mt-16 md:mt-24 lg:mt-32 space-y-12 md:space-y-20 pb-20">
              <section id="hrd">
                <Row 
                  title="HRD 시리즈: 교육 운영 & 성과" 
                  data={TRENDING_DATA} 
                  isRanked={true}
                  onContentClick={handleOpenModal}
                />
              </section>
              <section id="creative">
                <Row 
                  title="크리에이티브: 온라인 콘텐츠 제작" 
                  data={ORIGINALS_DATA} 
                  isLargeRow={true} 
                  onContentClick={handleOpenModal}
                />
              </section>
              <section id="tech">
                <Row 
                  title="New Releases: AI & Tech" 
                  data={TECH_DATA} 
                  onContentClick={handleOpenModal}
                />
              </section>
              <section id="culture">
                <Row 
                  title="Docu-Series: 조직문화" 
                  data={CULTURE_DATA} 
                  onContentClick={handleOpenModal}
                />
              </section>
            </div>
          </>
        )}
      </main>
      
      <Footer />
      <ContentModal 
        isOpen={isModalOpen} 
        content={modalContent} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}

export default App;
