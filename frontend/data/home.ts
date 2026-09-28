import type { Tool } from '../data.ts';

export const CATEGORIES = [
  'Writing & Text', 'Research & Knowledge', 'Image & Graphic Design', 'Video', 'Audio & Music',
  'Coding & Development', 'Website & App Creation', 'Data & Analytics', 'Productivity',
  'Business & Operations', 'Marketing & Advertising', 'Sales & CRM', 'Social Media',
  'Education & Learning', 'Presentations & Documents', 'Automation & AI Agents',
  'Customer Support', 'E-commerce', 'Finance', 'Legal', 'Healthcare', 'HR & Recruitment',
  'IT & DevOps', '3D & Game Development', 'Translation & Localization', 'SEO',
  'Meetings & Communication', 'Personal / Lifestyle', 'Scientific & Academic',
  'Specialized Industry AI', 'Knowledge Management', 'AI Infrastructure / Models / APIs'
] as const;

export const TOP_PICKS: Tool[] = [
  {
    id: 'canva-pro',
    name: 'Canva',
    category: 'Image & Graphic Design',
    description: 'Design anything with AI-powered magic',
    pricing: 'Freemium',
    rating: 4.7,
    isTopPick: true,
    tags: ['🔥 Most Used by Designers', '🔥 Popular in India'],
    section: 'top',
    link: 'https://www.canva.com/',
    analysisId: 'canva-pro',
  },
  {
    id: 'framer-ai',
    name: 'Framer AI',
    category: 'Website & App Creation',
    description: 'Build client websites with AI in minutes',
    pricing: 'Freemium',
    rating: 4.6,
    isTopPick: true,
    tags: ['🔥 Most Used by Designers'],
    section: 'top',
    link: 'https://www.framer.com/ai/',
    analysisId: 'framer',
  },
  {
    id: 'hostinger',
    name: 'Hostinger',
    category: 'Website & App Creation',
    description: 'AI-powered website builder & hosting',
    pricing: 'Paid',
    rating: 4.5,
    tags: ['🔥 Most Used by Designers', '🔥 Popular in India'],
    section: 'top',
    link: 'https://www.hostinger.com/in?REFERRALCODE=UWNAMAURYN6F',
    analysisId: 'hostinger',
  },
];
