
export interface SubItem {
  id: string;
  title: string;
  description: string;
  duration?: string;
  assetUrl?: string; // Video URL or main image
  images?: string[]; // For card news or webtoon multi-images
}

export interface CareerItem {
  period: string;
  company: string;
  role: string;
  details?: string;
}

export interface Content {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imagePrompt?: string; // Prompt for Gemini AI image generation
  videoUrl?: string; 
  category: string;
  rank?: number; 
  badges?: string[];
  matchScore?: number; 
  year?: string;
  duration?: string;
  contentType?: 'video' | 'card' | 'webtoon'; // Display mode
  subItems?: SubItem[]; // Episodes or sub-categories
  careerHistory?: CareerItem[];
  education?: string[];
  certifications?: string[];
}

export type Category = 'trending' | 'originals' | 'tech' | 'culture';

export interface RowProps {
  title: string;
  data: Content[];
  isLargeRow?: boolean;
  isRanked?: boolean;
  onContentClick: (content: Content) => void;
}
