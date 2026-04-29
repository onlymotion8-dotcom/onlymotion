
import React from 'react';
import { Film, Zap, Heart, Camera } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Film className="w-6 h-6" />, value: '150+', label: '完成專案' },
    { icon: <Zap className="w-6 h-6" />, value: '50+', label: '品牌客戶' },
    { icon: <Camera className="w-6 h-6" />, value: '10+', label: '業界經驗' },
    { icon: <Heart className="w-6 h-6" />, value: '100%', label: '客戶滿意度' },
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl"></div>
            <img 
              src="https://picsum.photos/seed/onlymotion-about/800/1000" 
              alt="Studio Life" 
              className="rounded-2xl shadow-2xl relative z-10 w-full grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          <div className="text-center lg:text-left">
            <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">About OnlyMotion</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">讓靜止的故事<br /><span className="text-blue-600">隨光影而律動</span></h2>
            
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              淳青影像工作室 (OnlyMotion Studio) 成立於 2014 年，我們專注於將創意轉化為震撼的視覺體驗。無論是極具真實感的實拍影片，還是充滿想像力的動態動畫，我們都能精準捕捉品牌的靈魂。
            </p>
            
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              我們的團隊由資深導演、攝影師與動效設計師組成，致力於為客戶提供一站式的影像解決方案。從腳本構思、現場拍攝到後期特效，OnlyMotion 始終堅持對品質的極致追求。
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-4 text-blue-500">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-tighter">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
