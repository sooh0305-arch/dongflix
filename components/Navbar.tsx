import React, { useState, useEffect, useRef } from 'react';
import { Search, Bell, Menu, X } from 'lucide-react';

interface NavbarProps {
  onSearch: (query: string) => void;
  onProfileClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, onProfileClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      setSearchQuery('');
      onSearch('');
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    onSearch(val);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // If search was open, close it
      if (isSearchOpen) {
        setIsSearchOpen(false);
        setSearchQuery('');
        onSearch('');
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-[60] transition-colors duration-500 ${isScrolled || isSearchOpen ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/90 to-transparent'}`}>
      <div className="flex items-center justify-between px-4 md:px-12 py-3 md:py-4">
        <div className="flex items-center space-x-4 md:space-x-8">
          {/* Logo */}
          <a 
            href="#" 
            className="text-[#E50914] text-2xl md:text-4xl font-bebas font-bold tracking-wide cursor-pointer"
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setSearchQuery('');
                onSearch('');
                setIsSearchOpen(false);
            }}
          >
            DONG-FLIX
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm text-gray-300 font-medium">
            <a 
              href="#" 
              className="text-white font-bold hover:text-gray-300 transition"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              홈
            </a>
            <a 
              href="#hrd" 
              className="hover:text-gray-300 transition"
              onClick={(e) => scrollToSection(e, 'hrd')}
            >
              HRD 시리즈
            </a>
            <a 
              href="#creative" 
              className="hover:text-gray-300 transition"
              onClick={(e) => scrollToSection(e, 'creative')}
            >
              크리에이티브
            </a>
            <a 
              href="#tech" 
              className="hover:text-gray-300 transition"
              onClick={(e) => scrollToSection(e, 'tech')}
            >
              AI & Tech
            </a>
            <a 
              href="#culture" 
              className="hover:text-gray-300 transition"
              onClick={(e) => scrollToSection(e, 'culture')}
            >
              조직문화
            </a>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-3 md:space-x-6 text-white">
          
          {/* Search Bar */}
          <div className={`flex items-center transition-all duration-300 border ${isSearchOpen ? 'w-36 md:w-64 bg-black border-white px-2 py-1' : 'w-6 border-transparent'}`}>
            <Search 
                className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-gray-300 flex-shrink-0" 
                onClick={handleSearchToggle}
            />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="성과, 기술 검색"
              className={`bg-transparent outline-none text-xs md:text-sm ml-2 w-full transition-opacity duration-300 ${isSearchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {isSearchOpen && searchQuery && (
                <X className="w-4 h-4 cursor-pointer text-gray-400 hover:text-white" onClick={() => { setSearchQuery(''); onSearch(''); searchInputRef.current?.focus(); }} />
            )}
          </div>

          <Bell className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-gray-300 hidden md:block" />
          <div 
            className="flex items-center cursor-pointer group"
            onClick={onProfileClick}
          >
            <div className="w-7 h-7 md:w-8 md:h-8 rounded bg-red-600 overflow-hidden">
               <img src="https://picsum.photos/seed/avatar/200/200" alt="Profile" referrerPolicy="no-referrer" />
            </div>
            <Menu className="w-5 h-5 ml-2 md:hidden" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;