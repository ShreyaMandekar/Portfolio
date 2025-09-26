export interface Project {
  _id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'ai-ml' | 'desktop' | 'other';
  images: ProjectImage[];
  videos: ProjectVideo[];
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  features: string[];
  status: 'completed' | 'in-progress' | 'planned';
  priority: number;
  startDate?: Date;
  endDate?: Date;
  isFeatured: boolean;
  views: number;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectImage {
  url: string;
  alt: string;
  isMain: boolean;
}

export interface ProjectVideo {
  url: string;
  title: string;
  isMain: boolean;
}

export interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: Date;
}

export interface Visitor {
  _id: string;
  ipAddress: string;
  userAgent: string;
  country: string;
  city: string;
  visitCount: number;
  lastVisit: Date;
  firstVisit: Date;
  pagesVisited: PageVisit[];
  referrer: string;
  device: 'desktop' | 'mobile' | 'tablet';
  browser: string;
  os: string;
}

export interface PageVisit {
  page: string;
  visitCount: number;
  lastVisit: Date;
}