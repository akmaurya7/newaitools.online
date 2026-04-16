export type PricingType = 'Free' | 'Freemium' | 'Paid';

export interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  pricing: PricingType;
  rating: number;
  isTopPick?: boolean;
}

export const CATEGORIES = [
  'All',
  'Logo Design',
  'UI/UX',
  'Image Gen',
  'Video',
  'Presentations',
  'Color Tools',
  'Copywriting'
];

export const TOOLS: Tool[] = [
  {
    id: 'canva-pro',
    name: 'Canva Pro',
    category: 'Logo Design',
    description: 'Design anything with AI-powered magic',
    pricing: 'Freemium',
    rating: 4.7,
    isTopPick: true,
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    category: 'Image Gen',
    description: 'Generate pro-grade images from text prompts',
    pricing: 'Paid',
    rating: 4.5,
  },
  {
    id: 'framer-ai',
    name: 'Framer AI',
    category: 'UI/UX',
    description: 'Build client websites with AI in minutes',
    pricing: 'Freemium',
    rating: 4.6,
    isTopPick: true,
  },
  {
    id: 'looka',
    name: 'Looka',
    category: 'Logo Design',
    description: 'AI logo maker for freelance brand kits',
    pricing: 'Paid',
    rating: 4.3,
  },
  {
    id: 'runway-ml',
    name: 'Runway ML',
    category: 'Video',
    description: 'AI video generation for designer reels',
    pricing: 'Freemium',
    rating: 4.4,
  },
  {
    id: 'uizard',
    name: 'Uizard',
    category: 'UI/UX',
    description: 'Turn rough sketches into polished wireframes',
    pricing: 'Freemium',
    rating: 4.2,
  },
  {
    id: 'khroma',
    name: 'Khroma',
    category: 'Color Tools',
    description: 'AI learns your taste, generates palettes',
    pricing: 'Free',
    rating: 4.5,
  },
  {
    id: 'presentations-ai',
    name: 'Presentations.AI',
    category: 'Presentations',
    description: 'Auto-design decks from your content',
    pricing: 'Freemium',
    rating: 4.1,
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    category: 'Copywriting',
    description: 'Write client proposals and UX copy fast',
    pricing: 'Freemium',
    rating: 4.3,
  }
];

export const BLOG_POSTS = [
  {
    id: 'post-1',
    category: 'Opinion',
    title: '5 AI tools that replaced my $500/month design subscriptions',
    excerpt: 'How I streamlined my freelance stack and saved money without sacrificing quality.',
  },
  {
    id: 'post-2',
    category: 'Case Study',
    title: 'How I used Framer AI to deliver a client site in 4 hours',
    excerpt: 'A step-by-step breakdown of my rapid prototyping and development workflow.',
  },
  {
    id: 'post-3',
    category: 'Comparison',
    title: 'Canva Pro vs Adobe Firefly: Which one is worth it in 2025?',
    excerpt: 'An honest look at the strengths and weaknesses of the two biggest players.',
  }
];