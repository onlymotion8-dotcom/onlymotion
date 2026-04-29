
export enum ProjectCategory {
  LIVE_ACTION = '實拍',
  ANIMATION = '動畫',
  ALL = '全部'
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  thumbnail: string;
  videoUrl: string;
  description: string;
  year: string;
  client: string;
}

export interface Reel {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
