
import { Project, ProjectCategory, Reel } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '城市脈動 - 2024 形象短片',
    category: ProjectCategory.LIVE_ACTION,
    thumbnail: 'https://picsum.photos/seed/onlymotion1/800/450',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: '捕捉台北街頭的黎明與黑夜，展現城市不息的生命力。',
    year: '2024',
    client: 'Taipei Tourism Bureau'
  },
  {
    id: '2',
    title: 'CyberFuture 未來紀元',
    category: ProjectCategory.ANIMATION,
    thumbnail: 'https://picsum.photos/seed/onlymotion2/800/450',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: '全 3D 建模製作，探討人工智慧與人類共存的賽博龐克世界。',
    year: '2023',
    client: 'TechVision Co.'
  },
  {
    id: '3',
    title: '食之藝術 - 頂級法式餐廳形象',
    category: ProjectCategory.LIVE_ACTION,
    thumbnail: 'https://picsum.photos/seed/onlymotion3/800/450',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: '細膩的高格率攝影，呈現食材轉化為佳餚的動人瞬間。',
    year: '2024',
    client: 'Lumière Fine Dining'
  },
  {
    id: '4',
    title: '夢境之森 - 手繪風格短篇',
    category: ProjectCategory.ANIMATION,
    thumbnail: 'https://picsum.photos/seed/onlymotion4/800/450',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: '結合傳統手繪質感與現代數位合成，打造奇幻的童話氛圍。',
    year: '2023',
    client: 'Studio Ghibli Inspired'
  },
  {
    id: '5',
    title: '速度與激情 - 品牌汽車廣告',
    category: ProjectCategory.LIVE_ACTION,
    thumbnail: 'https://picsum.photos/seed/onlymotion5/800/450',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: '專業車拍穩定器作業，展現極致的動態張力與流線美學。',
    year: '2024',
    client: 'AeroMotors'
  },
  {
    id: '6',
    title: '數位浪潮 - 資料視覺化動效',
    category: ProjectCategory.ANIMATION,
    thumbnail: 'https://picsum.photos/seed/onlymotion6/800/450',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: '簡潔有力的 Motion Graphics，將複雜數據轉化為易懂的視覺饗宴。',
    year: '2023',
    client: 'FinTech Hub'
  }
];

export const REELS: Reel[] = [
  {
    id: 'r1',
    title: '潮流生活快剪',
    thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://vimeo.com/76979871',
    tags: ['潮流', '生活', '剪輯']
  },
  {
    id: 'r2',
    title: '美食饗宴 Reels',
    thumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://vimeo.com/76979871',
    tags: ['美食', '慢動作', '質感']
  },
  {
    id: 'r3',
    title: '動感運動挑戰',
    thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://vimeo.com/76979871',
    tags: ['運動', '快節奏', '轉場']
  },
  {
    id: 'r4',
    title: '光影人像側拍',
    thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://vimeo.com/76979871',
    tags: ['人像', '光影', '側拍']
  },
  {
    id: 'r5',
    title: '旅拍回顧 Shorts',
    thumbnail: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://vimeo.com/76979871',
    tags: ['旅行', '回顧', '大自然']
  },
  {
    id: 'r6',
    title: '品牌開箱 Reels',
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop',
    videoUrl: 'https://vimeo.com/76979871',
    tags: ['開箱', '品牌', '極簡']
  }
];
