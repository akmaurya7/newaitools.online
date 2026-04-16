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
    link: 'https://www.hostinger.com/in?REFERRALCODE=UWNAMAURYN6F',
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

export interface BlogPost {
  id: string;
  slug: string;
  category: 'Guide' | 'Case Study' | 'Comparison' | 'Tutorial' | 'Interview';
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  modifiedDate?: string;
  readTime: number;
  tags: string[];
  featured?: boolean;
  ogImage?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'best-ai-tools-for-freelance-designers-2026',
    category: 'Guide',
    title: 'Best AI Tools for Freelance Designers (2026)',
    excerpt: 'Save hours every week with these powerful AI tools. From Canva Pro to Framer AI, discover the top tools transforming designer workflows.',
    content: `<section class="prose-article">
<h1>Best AI Tools for Freelance Designers in 2026</h1>
<p>The AI revolution has fundamentally changed how designers work. What once took days now takes hours, and what took hours now takes minutes. This comprehensive guide covers 80+ AI tools that are actively used by freelance designers worldwide.</p>

<h2>Why AI Tools Matter for Designers</h2>
<p>The design landscape has shifted dramatically. AI isn't replacing designers—it's amplifying their capabilities. Designers who master these tools are commanding higher rates and delivering more projects.</p>

<h2>Top AI Tools by Category</h2>

<h3>Logo Design Tools</h3>
<ul>
<li><strong>Looka</strong> - AI logo maker that generates thousands of options in seconds</li>
<li><strong>Canva Pro</strong> - All-in-one design with AI magic tools</li>
</ul>

<h3>Image Generation</h3>
<ul>
<li><strong>Adobe Firefly</strong> - Professional-grade image generation</li>
<li><strong>Leonardo AI</strong> - Perfect for concept art and design mockups</li>
</ul>

<h3>Website Building</h3>
<ul>
<li><strong>Framer AI</strong> - Build websites with conversational AI</li>
<li><strong>Hostinger Builder</strong> - AI-powered hosting and design</li>
</ul>

<h2>How to Get Started</h2>
<p>Start with one tool, master it, then expand. Most tools offer free trials—use them to test your workflow before committing financially.</p>

<h2>Conclusion</h2>
<p>The designers thriving in 2026 are those embracing AI as a tool, not fearing it. Pick the right tools for your niche and watch your productivity soar.</p>
</section>`,
    author: 'Design Team',
    publishDate: '2026-01-15',
    readTime: 12,
    tags: ['AI Tools', 'Design', 'Freelance', 'Productivity'],
    featured: true,
  },
  {
    id: 'post-2',
    slug: 'how-i-used-framer-ai-to-deliver-a-client-site-in-4-hours',
    category: 'Case Study',
    title: 'How I used Framer AI to deliver a client site in 4 hours',
    excerpt: 'A detailed case study showing how modern designers leverage AI to compress project timelines without sacrificing quality.',
    content: `<section class="prose-article">
<h1>Case Study: Building a Client Site in 4 Hours with Framer AI</h1>
<p>Last week, a potential client reached out with an urgent request: they needed a professional website in 48 hours. Instead of turning them down, I accepted the challenge using Framer AI. Here's how I did it.</p>

<h2>The Brief</h2>
<p>A small marketing agency needed a modern, professional website showcasing their services. They wanted:</p>
<ul>
<li>Hero section with clear value proposition</li>
<li>Services landing pages</li>
<li>Case studies section</li>
<li>Contact form</li>
<li>Blog integration</li>
</ul>

<h2>The Process</h2>
<p>Breaking it down into 4 hours of work meant being strategic about every step...</p>

<h3>Hour 1: Setup & Design System</h3>
<p>I described the brand vision to Framer AI and let it generate initial design components. Then I customized colors, fonts,and spacing to match brand guidelines.</p>

<h3>Hours 2-3: Page Templates</h3>
<p>Using AI-powered components, I assembled service pages and case study templates. AI suggestions accelerated my decision-making on layout and copy.</p>

<h3>Hour 4: Polish & Deploy</h3>
<p>Final tweaks, form integration, and deployment took less than an hour with Framer's built-in hosting.</p>

<h2>Results</h2>
<p>Client received a beautiful, functional website in 4 hours of work. They were thrilled, I charged premium rates, and booked 3 more projects from their network.</p>

<h2>Key Takeaways</h2>
<ul>
<li>AI amplifies speed without sacrificing quality</li>
<li>Knowing your tools deeply is critical</li>
<li>Client confidence in your process closes deals</li>
</ul>
</section>`,
    author: 'Alex Rivera',
    publishDate: '2026-01-10',
    readTime: 8,
    tags: ['Framer', 'Case Study', 'Web Design', 'AI Tools'],
    featured: true,
  },
  {
    id: 'post-3',
    slug: 'canva-pro-vs-adobe-firefly-comparison-2026',
    category: 'Comparison',
    title: 'Canva Pro vs Adobe Firefly: Which one is worth it in 2026?',
    excerpt: 'An honest comparison of the two biggest players in AI-powered design, helping you choose the right tool for your workflow.',
    content: `<section class="prose-article">
<h1>Canva Pro vs Adobe Firefly: Which Tool Wins in 2026?</h1>
<p>Both Canva Pro and Adobe Firefly have established themselves as essential tools for modern designers. But which one deserves space in your toolkit? Let's compare.</p>

<h2>Canva Pro Overview</h2>
<p>Canva Pro is the all-in-one design solution. It excels at quick turnarounds and offers a massive template library.</p>
<ul>
<li>Price: $13/month</li>
<li>Best for: Social media, marketing materials, presentations</li>
<li>Learning curve: Minimal</li>
</ul>

<h2>Adobe Firefly Overview</h2>
<p>Firefly is Adobe's answer to image generation. It's powerful but part of the Creative Cloud ecosystem.</p>
<ul>
<li>Price: $55/month+ (Creative Cloud)</li>
<li>Best for: Professional image generation, print-quality assets</li>
<li>Learning curve: Moderate</li>
</ul>

<h2>Head-to-Head Comparison</h2>

<h3>Image Quality</h3>
<p><strong>Winner: Adobe Firefly</strong> - Produces higher quality, more nuanced images.</p>

<h3>Speed & Ease of Use</h3>
<p><strong>Winner: Canva Pro</strong> - Faster to learn and execute designs.</p>

<h3>Pricing</h3>
<p><strong>Winner: Canva Pro</strong> - Significantly cheaper at $13/month vs $55/month.</p>

<h3>Integration with Other Tools</h3>
<p><strong>Winner: Adobe Firefly</strong> - Seamless integration with Photoshop, Illustrator, InDesign.</p>

<h2>The Verdict</h2>
<p>If you're a solo freelancer focused on marketing materials and social content: <strong>Canva Pro</strong>.</p>
<p>If you work with high-end clients and need print-quality assets: <strong>Adobe Firefly</strong>.</p>
<p>Pro Tip: Many professionals use both. Canva for quick wins, Firefly for premium work.</p>
</section>`,
    author: 'Design Team',
    publishDate: '2026-01-05',
    readTime: 10,
    tags: ['Comparison', 'Canva', 'Adobe', 'Design Tools'],
    featured: false,
  }
];