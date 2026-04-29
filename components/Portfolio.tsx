
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ProjectCategory, Project } from '../types';
import { Play, ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(ProjectCategory.ALL);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredProjects = activeCategory === ProjectCategory.ALL
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">精選作品集</h2>
          
          <div className="flex justify-center gap-4 border-b border-gray-800 pb-2 max-w-fit mx-auto">
            {[ProjectCategory.ALL, ProjectCategory.LIVE_ACTION, ProjectCategory.ANIMATION].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium transition-all relative ${
                  activeCategory === cat ? 'text-blue-500' : 'text-gray-500 hover:text-white'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <div className="absolute bottom-[-10px] left-0 w-full h-1 bg-blue-500 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Thumbnail Container */}
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-500 shadow-lg"
                  >
                    <Play className="fill-current ml-1" />
                  </a>
                </div>
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold rounded-full uppercase tracking-tighter">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Info Container */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <span className="text-xs text-gray-500 font-mono">{project.year}</span>
                </div>
                <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Client: {project.client}</span>
                  <a 
                    href={project.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
