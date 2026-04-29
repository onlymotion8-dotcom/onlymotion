
import React, { useState, useEffect } from 'react';
import { Menu, X, Play } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '首頁', id: 'home' },
    { name: '作品集', id: 'portfolio' },
    { name: '直式 Reels', id: 'reels' },
    { name: '關於我們', id: 'about' },
    { name: '聯絡我們', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
            <Play className="text-white fill-current w-5 h-5 ml-0.5" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tighter uppercase leading-none">OnlyMotion</h1>
            <p className="text-[10px] text-blue-500 font-medium tracking-[0.2em] uppercase mt-1">淳青影像工作室</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-medium tracking-wide motion-border pb-1 ${
                activeSection === item.id ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => onNavigate('contact')}
            className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105"
          >
            立即洽詢
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-effect border-t border-gray-800 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left text-lg font-medium ${
                  activeSection === item.id ? 'text-blue-500' : 'text-gray-300'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
