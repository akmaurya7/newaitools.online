export type PricingType = 'Free' | 'Freemium' | 'Paid';

export interface Tool {
  id: string;
  name: string;
  category: string;
  description: string;
  pricing: PricingType;
  rating: number;
  isTopPick?: boolean;
  tags?: string[];
  section?: 'top' | 'main' | 'free';
  link?: string;
  noSignupRequired?: boolean;
}

export const CATEGORIES = [
  'All',
  'Logo Design',
  'UI/UX',
  'Image Gen',
  'Video',
  'Presentations',
  'Color Tools',
  'Copywriting',
  'Website Tools',
  'Image Tools',
  'Design Tools'
];

export const TOOLS: Tool[] = [
  // Top Picks Section
  {
    id: 'canva-pro',
    name: 'Canva Pro',
    category: 'Logo Design',
    description: 'Design anything with AI-powered magic',
    pricing: 'Freemium',
    rating: 4.7,
    isTopPick: true,
    tags: ['🔥 Most Used by Designers', '🔥 Popular in India'],
    section: 'top',
  },
  {
    id: 'framer-ai',
    name: 'Framer AI',
    category: 'Website Tools',
    description: 'Build client websites with AI in minutes',
    pricing: 'Freemium',
    rating: 4.6,
    isTopPick: true,
    tags: ['🔥 Most Used by Designers'],
    section: 'top',
  },
  {
    id: 'hostinger',
    name: 'Hostinger',
    category: 'Website Tools',
    description: 'AI-powered website builder & hosting',
    pricing: 'Paid',
    rating: 4.5,
    tags: ['🔥 Most Used by Designers', '🔥 Popular in India'],
    section: 'top',
  },
  {
    id: 'writesonic',
    name: 'Writesonic',
    category: 'Copywriting',
    description: 'AI copywriting for sales pages & ads',
    pricing: 'Freemium',
    rating: 4.4,
    tags: ['🔥 Most Used by Designers'],
    section: 'top',
  },

  // Main Tools Grid
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    category: 'Image Gen',
    description: 'Generate pro-grade images from text prompts',
    pricing: 'Paid',
    rating: 4.5,
    section: 'main',
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo AI',
    category: 'Image Gen',
    description: 'AI image generation for creators',
    pricing: 'Freemium',
    rating: 4.6,
    tags: ['🔥 Popular in India'],
    section: 'main',
  },
  {
    id: 'looka',
    name: 'Looka',
    category: 'Logo Design',
    description: 'AI logo maker for freelance brand kits',
    pricing: 'Paid',
    rating: 4.3,
    section: 'main',
  },
  {
    id: 'durable',
    name: 'Durable',
    category: 'Website Tools',
    description: 'One-page website builder for service pros',
    pricing: 'Paid',
    rating: 4.4,
    tags: ['🔥 Popular in India'],
    section: 'main',
  },
  {
    id: 'runway-ml',
    name: 'Runway ML',
    category: 'Video',
    description: 'AI video generation for designer reels',
    pricing: 'Freemium',
    rating: 4.4,
    section: 'main',
  },
  {
    id: 'uizard',
    name: 'Uizard',
    category: 'UI/UX',
    description: 'Turn rough sketches into polished wireframes',
    pricing: 'Freemium',
    rating: 4.2,
    section: 'main',
  },
  {
    id: 'khroma',
    name: 'Khroma',
    category: 'Color Tools',
    description: 'AI learns your taste, generates palettes',
    pricing: 'Free',
    rating: 4.5,
    section: 'main',
  },
  {
    id: 'presentations-ai',
    name: 'Presentations.AI',
    category: 'Presentations',
    description: 'Auto-design decks from your content',
    pricing: 'Freemium',
    rating: 4.1,
    section: 'main',
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    category: 'Copywriting',
    description: 'Write client proposals and UX copy fast',
    pricing: 'Freemium',
    rating: 4.3,
    section: 'main',
  },

  // Free Tools Section
  {
    id: 'remove-bg',
    name: 'Remove.bg',
    category: 'Image Tools',
    description: 'Remove image backgrounds instantly with AI',
    pricing: 'Free',
    rating: 4.7,
    section: 'free',
    link: 'https://www.remove.bg',
    noSignupRequired: true,
    tags: ['🆓 No signup required'],
  },
  {
    id: 'photopea',
    name: 'Photopea',
    category: 'Design Tools',
    description: 'Free browser-based alternative to Photoshop',
    pricing: 'Free',
    rating: 4.6,
    section: 'free',
    link: 'https://www.photopea.com',
    noSignupRequired: true,
    tags: ['🆓 No signup required', '🔥 Popular in India'],
  },
  {
    id: 'squoosh',
    name: 'Squoosh',
    category: 'Image Tools',
    description: 'Compress and optimize images for web performance',
    pricing: 'Free',
    rating: 4.6,
    section: 'free',
    link: 'https://squoosh.app',
    noSignupRequired: true,
    tags: ['🆓 No signup required'],
  },
  {
    id: 'khroma',
    name: 'Khroma',
    category: 'Color Tools',
    description: 'AI-powered color palette generator that learns your preferences',
    pricing: 'Free',
    rating: 4.5,
    section: 'free',
    link: 'https://www.khroma.co',
    noSignupRequired: true,
    tags: ['🆓 No signup required'],
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