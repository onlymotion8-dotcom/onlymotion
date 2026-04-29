
import React, { useState } from 'react';
import { REELS } from '../constants';
import { Play, X, Instagram } from 'lucide-react';

const Reels: React.FC = () => {
  const [selectedReel, setSelectedReel] = useState<typeof REELS[0] | null>(null);

  return (
    <section id="reels" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">Visual Stories</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">短影音作品 Reels</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            專為手機螢幕設計的視覺體驗，結合快節湊剪輯與動感節奏，為品牌打造專屬的社群流量密碼。
          </p>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {REELS.map((reel) => (
            <div 
              key={reel.id}
              className="group relative aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-500/20 hover:shadow-2xl"
              onClick={() => setSelectedReel(reel)}
            >
              {/* Thumbnail */}
              <img 
                src={reel.thumbnail} 
                alt={reel.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-sm font-bold text-white mb-2 leading-tight">{reel.title}</h3>
                  <div className="flex flex-wrap gap-1">
                    {reel.tags.map(tag => (
                      <span key={tag} className="text-[8px] px-1.5 py-0.5 bg-white/10 backdrop-blur-md rounded-full text-blue-300">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Play Icon Center */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                  <Play className="text-white fill-current w-5 h-5 ml-1" />
                </div>
              </div>

              {/* Instagram Style Icon Top Right */}
              <div className="absolute top-3 right-3 opacity-60 group-hover:opacity-100 transition-opacity">
                <Instagram size={16} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Basic Video Modal */}
      {selectedReel && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setSelectedReel(null)} />
          
          <div className="relative w-full max-w-[400px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
            <button 
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
              onClick={() => setSelectedReel(null)}
            >
              <X size={24} />
            </button>
            
            <div className="w-full h-full flex items-center justify-center bg-zinc-900">
               {/* In a real scenario, this would be an iframe or video tag */}
               <div className="text-center p-8">
                  <Play size={64} className="mx-auto mb-4 text-blue-500 opacity-20" />
                  <h2 className="text-2xl font-bold mb-2">{selectedReel.title}</h2>
                  <p className="text-gray-500 mb-6">影片播放介面</p>
                  <a 
                    href={selectedReel.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-all inline-block"
                  >
                    前往觀看完整影片
                  </a>
               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reels;
