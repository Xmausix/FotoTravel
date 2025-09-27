export interface User {
  id: string;
  email: string;
  createdAt: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  hash: string;
  content: string;
  template: 'classic' | 'hero' | 'gallery';
  location?: string;
  lat?: number;
  lng?: number;
  views: number;
  createdAt: string;
  authorId: string;
  images: string[];
  excerpt: string;
  thumbnail?: string;
}

export interface Comment {
  id: string;
  content: string;
  author: string;
  postId: string;
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}