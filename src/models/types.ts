export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  medium?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string[];
  technologies?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'journal' | 'conference' | 'workshop' | 'preprint';
  url?: string;
  doi?: string;
  abstract?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: number;
  description: string;
  category: 'award' | 'recognition' | 'competition' | 'incubation' | 'milestone';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  url: string;
  readTime?: string;
  tags?: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ToastNotification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
}