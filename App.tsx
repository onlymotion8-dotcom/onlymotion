
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Reels from './components/Reels';
import About from './components/About';
import Contact from './components/Contact';
import GeminiAssistant from './components/GeminiAssistant';
import { ChevronDown, Play, MousePointer2 } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: id === 'home' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  // Intersection Observer for scroll spying
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    ['home', 'portfolio', 'reels', 'about', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
          <img 
            src="https://picsum.photos/seed/onlymotion-hero/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-20 text-center">
          <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-blue-400">Professional Video Production</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none animate-in fade-in slide-in-from-bottom-8 duration-1000">
            ONLY<span className="text-blue-600">MOTION</span><br />
            <span className="text-4xl md:text-6xl text-gray-400 font-light">淳青影像工作室</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000">
            專注於品牌形象實拍與創意動態動畫，<br />
            用專業的視覺語彙，為您的品牌注入無限動能。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-16 duration-1000">
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full flex items-center gap-2 transition-all group"
            >
              觀看作品集
              <Play size={16} className="fill-current group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('reels')}
              className="px-10 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold rounded-full flex items-center gap-2 transition-all"
            >
              直式 Reels
              <MousePointer2 size={16} />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity" onClick={() => scrollToSection('portfolio')}>
          <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
          <ChevronDown size={20} />
        </div>
      </section>

      {/* Main Sections */}
      <Portfolio />
      <Reels />
      <About />
      <Contact />

      {/* Footer */}
      <footer className="py-12 bg-zinc-950 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Play className="text-white fill-current w-4 h-4 ml-0.5" />
              </div>
              <span className="text-lg font-bold tracking-tighter uppercase">OnlyMotion</span>
            </div>
            
            <div className="text-gray-500 text-sm">
              © 2024 OnlyMotion Studio 淳青影像工作室. All Rights Reserved.
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      <GeminiAssistant />
    </div>
  );
};

export default App;
