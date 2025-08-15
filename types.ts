export interface Illustration {
  id: number;
  type: 'image' | 'video' | 'album';
  title: string;
  desc: string;
  url: string;
  span: string;
  albumImages?: string[];
  objectFit?: 'cover' | 'contain';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}