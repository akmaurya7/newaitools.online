import React, { useMemo, useState } from 'react';
import {
  ArrowLeft, ArrowRight, AudioLines, BriefcaseBusiness, ChartNoAxesCombined, Code2,
  GraduationCap, HeartPulse, Image, Layers3, LifeBuoy, Megaphone, Network, Search,
  ShieldCheck, ShoppingBag, Sparkles, Video, WandSparkles, Workflow, Wrench, BookOpen,
  FileText, Globe2, Users, Landmark, BrainCircuit, Palette, Headphones, type LucideIcon
} from 'lucide-react';
import { CATEGORIES, TOOLS, type Tool } from '../data.ts';
import { useSEO } from '../hooks/useSEO.ts';
import { ToolCard } from './ToolCard.tsx';

export const categorySlug = (category: string) => category.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const categoryDescriptions: Record<string, string> = {
  'Writing & Text': 'Write, edit, summarize, and polish everything from quick notes to long-form content.',
  'Research & Knowledge': 'Find answers, explore sources, and make sense of the information you work with.',
  'Image & Graphic Design': 'Generate images, shape visual identities, and speed up everyday design work.',
  'Video': 'Create, edit, and transform video for campaigns, stories, and social content.',
  'Audio & Music': 'Make speech, music, podcasts, and audio production easier with AI.',
  'Coding & Development': 'Move from idea to code with assistants for building, debugging, and shipping software.',
  'Website & App Creation': 'Create websites and working applications with less setup and faster iteration.',
  'Data & Analytics': 'Explore datasets, generate insights, and turn numbers into useful decisions.',
  'Productivity': 'Spend less time on busywork and keep your ideas and tasks moving.',
  'Business & Operations': 'Support everyday business workflows, planning, and operations with AI.',
  'Marketing & Advertising': 'Plan campaigns and create marketing content that is ready to refine and publish.',
  'Sales & CRM': 'Help teams understand customers, manage leads, and move deals forward.',
  'Social Media': 'Plan, create, and improve content for social channels.',
  'Education & Learning': 'Learn new topics and create more personal learning experiences.',
  'Presentations & Documents': 'Turn ideas and source material into polished decks and documents.',
  'Automation & AI Agents': 'Connect tools and automate multi-step work with workflows and agents.',
  'Customer Support': 'Help teams answer questions and deliver faster, more consistent customer support.',
  'E-commerce': 'Improve product content, customer experiences, and store operations.',
  'Finance': 'Assist with financial analysis, reporting, planning, and routine finance work.',
  'Legal': 'Support legal research and document workflows with focused AI products.',
  'Healthcare': 'Explore AI products supporting clinical documentation and healthcare workflows.',
  'HR & Recruitment': 'Make recruiting and people operations easier to manage.',
  'IT & DevOps': 'Work with infrastructure, cloud services, and technical operations more efficiently.',
  '3D & Game Development': 'Create 3D assets and bring game ideas to life with AI assistance.',
  'Translation & Localization': 'Adapt content across languages while keeping it clear and natural.',
  'SEO': 'Research search demand and improve content visibility.',
  'Meetings & Communication': 'Capture conversations, decisions, and action items automatically.',
  'Personal / Lifestyle': 'Explore AI for personal planning, everyday questions, and life outside work.',
  'Scientific & Academic': 'Search, review, and work with academic research and scientific knowledge.',
  'Knowledge Management': 'Organize and query the knowledge spread across your documents and workspace.',
  'Specialized Industry AI': 'Discover AI products designed for focused professional and industry workflows.',
  'AI Infrastructure / Models / APIs': 'Explore foundational models and APIs for building AI-powered products.'
};

const categoryIcons: Record<string, LucideIcon> = {
  'Writing & Text': FileText, 'Research & Knowledge': BookOpen, 'Image & Graphic Design': Palette,
  Video, 'Audio & Music': Headphones, 'Coding & Development': Code2,
  'Website & App Creation': Globe2, 'Data & Analytics': ChartNoAxesCombined,
  Productivity: Sparkles, 'Business & Operations': BriefcaseBusiness,
  'Marketing & Advertising': Megaphone, 'Sales & CRM': Users,
  'Social Media': Network, 'Education & Learning': GraduationCap,
  'Presentations & Documents': Layers3, 'Automation & AI Agents': Workflow,
  'Customer Support': LifeBuoy, 'E-commerce': ShoppingBag, Finance: Landmark,
  Legal: ShieldCheck, Healthcare: HeartPulse, 'HR & Recruitment': Users,
  'IT & DevOps': Wrench, '3D & Game Development': WandSparkles,
  'Translation & Localization': Globe2, SEO: Search,
  'Meetings & Communication': AudioLines, 'Scientific & Academic': BrainCircuit,
  'Personal / Lifestyle': Sparkles, 'Specialized Industry AI': BriefcaseBusiness,
  'Knowledge Management': BookOpen, 'AI Infrastructure / Models / APIs': Network
};

export const getCatalogTools = (): Tool[] => {
  const seen = new Set<string>();
  return TOOLS.filter(tool => {
    const key = `${tool.name.toLowerCase()}|${tool.category}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

const PageIntro: React.FC<{ eyebrow: string; title: string; description: string; backHref?: string; backLabel?: string }> = ({ eyebrow, title, description, backHref, backLabel }) => (
  <section className="border-b border-ink/10 bg-white">
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      {backHref && <a href={backHref} className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-ink/55 transition hover:text-accent"><ArrowLeft size={16} />{backLabel}</a>}
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h1 className="max-w-4xl font-serif text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">{title}</h1>
      <p className="mt-5 max-w-2xl text-base leading-7 text-ink/60 md:text-lg">{description}</p>
    </div>
  </section>
);

export const CategoryDirectory: React.FC = () => {
  const tools = getCatalogTools();
  useSEO({
    title: 'AI Tool Categories: Writing, Video, Coding & More | newaitools',
    description: 'Browse AI tools by category, including writing, research, image generation, video, coding, automation, business, and more.',
    keywords: ['AI tool categories', 'AI tools directory', 'AI software'],
    canonical: 'https://newaitools.online/categories',
    breadcrumbs: [{ name: 'Home', url: 'https://newaitools.online/' }, { name: 'Categories', url: 'https://newaitools.online/categories' }]
  });

  return <main className="min-h-[70vh] bg-[#f8f7f4]">
    <PageIntro eyebrow="Browse the directory" title="What do you want to get done?" description="Start with a category to find tools built for the kind of work you have in mind. Each collection brings relevant products together in one place." />
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mb-7 flex items-end justify-between gap-4">
        <div><h2 className="font-serif text-2xl text-ink">All categories</h2><p className="mt-1 text-sm text-ink/50">{CATEGORIES.length} areas of work</p></div>
        <a href="/tools" className="hidden items-center gap-2 text-sm font-semibold text-accent sm:flex">View all tools <ArrowRight size={16} /></a>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((category, index) => {
          const Icon = categoryIcons[category] || Image;
          const count = tools.filter(tool => tool.category === category).length;
          return <a key={category} href={`/category/${categorySlug(category)}`} className="group rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-[0_2px_12px_rgba(26,23,20,0.025)] transition duration-200 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-[0_14px_36px_rgba(26,23,20,0.08)]">
            <div className="mb-5 flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f6eee8] text-accent"><Icon size={20} strokeWidth={1.8} /></span>
              <span className="text-xs font-medium text-ink/40">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="font-serif text-xl text-ink transition group-hover:text-accent">{category}</h3>
            <p className="mt-2 min-h-[3rem] text-sm leading-6 text-ink/55">{categoryDescriptions[category]}</p>
            <div className="mt-5 flex items-center justify-between border-t border-ink/[0.07] pt-4">
              <span className="text-xs font-semibold text-ink/45">{count} {count === 1 ? 'tool' : 'tools'}</span>
              <span className="flex items-center gap-1 text-sm font-semibold text-accent">Explore <ArrowRight size={15} className="transition group-hover:translate-x-1" /></span>
            </div>
          </a>;
        })}
      </div>
    </section>
  </main>;
};

export const ToolDirectory: React.FC = () => {
  const [query, setQuery] = useState('');
  const tools = getCatalogTools();
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return tools;
    return tools.filter(tool => [tool.name, tool.category, tool.description, ...(tool.tags || [])].some(value => value.toLowerCase().includes(normalized)));
  }, [query]);
  useSEO({
    title: 'Best AI Tools Directory: Browse AI Software | newaitools',
    description: 'Search and compare a curated directory of AI tools across creative, business, productivity, and technical categories.',
    keywords: ['best AI tools', 'AI tools directory', 'AI software', 'AI tool comparison'], canonical: 'https://newaitools.online/tools',
    breadcrumbs: [{ name: 'Home', url: 'https://newaitools.online/' }, { name: 'Tools', url: 'https://newaitools.online/tools' }]
  });
  return <main className="min-h-[70vh] bg-[#f8f7f4]">
    <PageIntro eyebrow="The full directory" title="Explore AI tools" description="Search the directory or narrow your discovery by a category. Find the right product for your next idea, project, or workflow." />
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <label className="mb-6 flex max-w-xl items-center gap-3 rounded-xl border border-ink/10 bg-white px-4 py-3.5 shadow-sm focus-within:border-accent/40 focus-within:ring-4 focus-within:ring-accent/10"><Search size={18} className="shrink-0 text-ink/40" /><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search by tool, category, or task" className="w-full bg-transparent text-sm outline-none placeholder:text-ink/40" aria-label="Search AI tools" />{query && <button onClick={() => setQuery('')} className="text-xs font-semibold text-accent">Clear</button>}</label>
      <div className="mb-5 flex items-center justify-between"><p className="text-sm text-ink/50">{filtered.length} {filtered.length === 1 ? 'tool' : 'tools'}</p><a href="/categories" className="text-sm font-semibold text-accent">Browse categories →</a></div>
      {filtered.length ? <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map(tool => <ToolCard key={`${tool.id}-${tool.category}`} tool={tool} />)}</div> : <div className="rounded-2xl border border-dashed border-ink/15 bg-white py-16 text-center"><p className="font-serif text-2xl">No tools found</p><p className="mt-2 text-sm text-ink/55">Try a different search term.</p></div>}
    </section>
  </main>;
};

export const CategoryDetail: React.FC<{ category: string }> = ({ category }) => {
  const [query, setQuery] = useState('');
  const categoryTools = getCatalogTools().filter(tool => tool.category === category);
  const normalized = query.trim().toLowerCase();
  const filtered = categoryTools.filter(tool => !normalized || [tool.name, tool.description, ...(tool.tags || [])].some(value => value.toLowerCase().includes(normalized)));
  const Icon = categoryIcons[category] || Image;
  useSEO({
    title: `${category} AI Tools | newaitools`,
    description: categoryDescriptions[category] || `Explore AI tools in ${category}.`,
    keywords: [category, `${category} AI tools`, 'AI tools'],
    canonical: `https://newaitools.online/category/${categorySlug(category)}`,
    breadcrumbs: [{ name: 'Home', url: 'https://newaitools.online/' }, { name: 'Categories', url: 'https://newaitools.online/categories' }, { name: category, url: `https://newaitools.online/category/${categorySlug(category)}` }]
  });
  return <main className="min-h-[70vh] bg-[#f8f7f4]">
    <section className="border-b border-ink/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <a href="/categories" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-ink/55 transition hover:text-accent"><ArrowLeft size={16} />All categories</a>
        <div className="flex items-start gap-4"><span className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f6eee8] text-accent"><Icon size={22} /></span><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">Category collection</p><h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">{category} AI tools</h1><p className="mt-4 max-w-2xl text-base leading-7 text-ink/60">{categoryDescriptions[category]}</p><p className="mt-4 text-sm font-semibold text-ink/40">{categoryTools.length} curated {categoryTools.length === 1 ? 'tool' : 'tools'}</p></div></div>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {categoryTools.length > 0 ? <>
        <label className="mb-6 flex max-w-xl items-center gap-3 rounded-xl border border-ink/10 bg-white px-4 py-3.5 shadow-sm focus-within:border-accent/40 focus-within:ring-4 focus-within:ring-accent/10"><Search size={18} className="shrink-0 text-ink/40" /><input value={query} onChange={event => setQuery(event.target.value)} placeholder={`Search ${category} tools`} className="w-full bg-transparent text-sm outline-none placeholder:text-ink/40" aria-label={`Search ${category} tools`} /></label>
        {filtered.length ? <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{filtered.map(tool => <ToolCard key={`${tool.id}-${tool.category}`} tool={tool} />)}</div> : <div className="rounded-2xl border border-dashed border-ink/15 bg-white py-16 text-center"><p className="font-serif text-2xl">No matching tools</p><p className="mt-2 text-sm text-ink/55">Try a different search.</p></div>}
      </> : <div className="rounded-2xl border border-ink/[0.08] bg-white px-6 py-12 text-center"><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f6eee8] text-accent"><Sparkles size={20} /></span><h2 className="mt-5 font-serif text-2xl">We’re building this collection</h2><p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-ink/55">There aren’t any tools listed here yet. Explore the other categories while we grow this collection.</p><a href="/categories" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent">Browse all categories <ArrowRight size={16} /></a></div>}
    </section>
  </main>;
};

export const lookupCategory = (slug: string) => CATEGORIES.find(category => categorySlug(category) === slug);
