
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
  imagePrompt?: string; // Prompt for AI generation
  videoUrl?: string; 
  category: string;
  rank?: number; 
  badges?: string[];
  matchScore?: number; 
  year?: string;
  duration?: string;
  amount?: string; // 성과 금액 (예: 9,560만원)
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
