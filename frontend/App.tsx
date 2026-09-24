import React from 'react';
import { ArrowRight, Compass, Layers3, Sparkles, Workflow } from 'lucide-react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ToolCard } from './components/ToolCard.tsx';
import { StatsBanner } from './components/StatsBanner.tsx';
import { BlogSection } from './components/BlogSection.tsx';
import { Newsletter } from './components/Newsletter.tsx';
import { Footer } from './components/Footer.tsx';
import { BlogListing } from './components/BlogListing.tsx';
import { BlogPostView } from './components/BlogPostView.tsx';
import { CATEGORIES, TOOLS } from './data.ts';
import { CategoryDetail, CategoryDirectory, ToolDirectory, categorySlug, getCatalogTools, lookupCategory } from './components/DirectoryPages.tsx';
import { useSEO } from './hooks/useSEO.ts';
import { WORKFLOWS } from './workflows.ts';
import { WorkflowDirectory, WorkflowDetail } from './components/WorkflowPages.tsx';

const HomePage: React.FC = () => {
  useSEO({
    title: 'Best AI Tools Directory & Workflows | newaitools',
    description: 'Compare the best AI tools for writing, research, design, video, coding, business, and more. Browse 32 categories and practical AI workflows.',
    keywords: ['best AI tools', 'AI tools directory', 'AI software', 'AI workflows', 'AI tool categories'],
    canonical: 'https://newaitools.online/',
    breadcrumbs: [{ name: 'Home', url: 'https://newaitools.online/' }]
  });

  const topPicks = TOOLS.filter(tool => tool.section === 'top').slice(0, 3);
  const categoryPreviews = CATEGORIES.slice(0, 6);
  const catalog = getCatalogTools();
  return <main className="flex-grow bg-[#f8f7f4]">
    <Hero />
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mb-7 flex items-end justify-between gap-4"><div><p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent"><Compass size={14} /> Explore by intent</p><h2 className="font-serif text-3xl text-ink md:text-4xl">Start with a category</h2></div><a href="/categories" className="hidden items-center gap-2 text-sm font-semibold text-accent sm:flex">All categories <ArrowRight size={16} /></a></div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">{categoryPreviews.map((item, index) => {
        const count = catalog.filter(tool => tool.category === item).length;
        return <a key={item} href={`/category/${categorySlug(item)}`} className="group flex items-center justify-between rounded-2xl border border-ink/[0.08] bg-white p-5 transition hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-lg"><span className="flex items-center gap-4"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f6eee8] text-sm font-bold text-accent">{String(index + 1).padStart(2, '0')}</span><span><span className="block font-semibold text-ink">{item}</span><span className="mt-1 block text-xs text-ink/45">{count} {count === 1 ? 'tool' : 'tools'}</span></span></span><ArrowRight size={17} className="text-ink/30 transition group-hover:translate-x-1 group-hover:text-accent" /></a>;
      })}</div>
      <a href="/categories" className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-ink/10 bg-white px-4 py-3 text-sm font-semibold text-ink transition hover:border-accent/25 hover:text-accent sm:hidden">See all categories <ArrowRight size={16} /></a>
    </section>
    <section className="border-y border-ink/[0.07] bg-white py-14 md:py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4"><div><p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent"><Sparkles size={14} /> A good place to begin</p><h2 className="font-serif text-3xl text-ink md:text-4xl">Popular tools</h2></div><a href="/tools" className="flex items-center gap-2 text-sm font-semibold text-accent">View directory <ArrowRight size={16} /></a></div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{topPicks.map(tool => <ToolCard key={tool.id} tool={tool} />)}</div>
    </div></section>
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent"><Workflow size={14} /> From first step to finish</p><h2 className="font-serif text-3xl text-ink md:text-4xl">Follow a complete workflow</h2></div><a href="/workflows" className="inline-flex items-center gap-2 text-sm font-semibold text-accent">Explore all workflows <ArrowRight size={16} /></a></div><div className="grid gap-4 md:grid-cols-2">{WORKFLOWS.slice(0, 2).map((workflow, index) => <a key={workflow.slug} href={`/workflow/${workflow.slug}`} className="group flex flex-col justify-between rounded-3xl border border-ink/[0.08] bg-white p-6 transition hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-lg sm:p-7"><div><span className="inline-flex items-center gap-2 rounded-full bg-[#f6eee8] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.13em] text-accent"><span>{String(index + 1).padStart(2, '0')}</span>{workflow.category}</span><h3 className="mt-4 font-serif text-2xl text-ink">{workflow.shortTitle}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-ink/55">{workflow.tagline}</p></div><span className="mt-6 flex flex-wrap items-center gap-2">{workflow.steps.map((step, stepIndex) => <React.Fragment key={step.tool}><span className="rounded-lg bg-[#f8f7f4] px-2.5 py-1.5 text-xs font-semibold text-ink/65">{step.tool}</span>{stepIndex < workflow.steps.length - 1 && <ArrowRight size={13} className="text-ink/25" />}</React.Fragment>)}</span><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink transition group-hover:text-accent">See the steps <ArrowRight size={15} /></span></a>)}</div></section>
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-6 rounded-3xl bg-[#201d1a] p-8 text-white md:flex-row md:items-center md:p-12"><div><p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-300"><Layers3 size={14} /> Built to help you find your fit</p><h2 className="max-w-2xl font-serif text-3xl md:text-4xl">32 categories. One clear place to explore.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/60">From a first draft to a finished product, find a tool for the next step in your workflow.</p></div><a href="/categories" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-ink transition hover:bg-orange-100">Browse categories <ArrowRight size={16} /></a></div></section>
    <StatsBanner /><BlogSection /><Newsletter />
  </main>;
};

const App: React.FC = () => {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const categorySlugPath = path.match(/^\/category\/([^/]+)$/)?.[1];
  const category = categorySlugPath ? lookupCategory(decodeURIComponent(categorySlugPath)) : undefined;
  const workflowSlug = path.match(/^\/workflow\/([^/]+)$/)?.[1];
  const workflow = workflowSlug ? WORKFLOWS.find(item => item.slug === decodeURIComponent(workflowSlug)) : undefined;
  const blogSlug = path.match(/^\/blog\/([^/]+)$/)?.[1];
  const handleNavigate = (destination: string) => {
    if (destination === 'home') window.location.href = '/';
    else if (destination === 'blog') window.location.href = '/blog';
    else if (destination.startsWith('blog-post:')) window.location.href = `/blog/${destination.replace('blog-post:', '')}`;
  };

  let page: React.ReactNode;
  if (categorySlugPath) page = category ? <CategoryDetail category={category} /> : <main className="min-h-[65vh] bg-[#f8f7f4] px-4 py-24 text-center"><h1 className="font-serif text-4xl">Category not found</h1><a href="/categories" className="mt-5 inline-block font-semibold text-accent">Browse all categories →</a></main>;
  else if (path === '/categories') page = <CategoryDirectory />;
  else if (path === '/tools') page = <ToolDirectory />;
  else if (path === '/workflows') page = <WorkflowDirectory />;
  else if (workflowSlug) page = workflow ? <WorkflowDetail workflow={workflow} /> : <main className="min-h-[65vh] bg-[#f8f7f4] px-4 py-24 text-center"><h1 className="font-serif text-4xl">Workflow not found</h1><a href="/workflows" className="mt-5 inline-block font-semibold text-accent">Browse all workflows →</a></main>;
  else if (path === '/blog') page = <BlogListing onNavigate={handleNavigate} />;
  else if (blogSlug) page = <BlogPostView slug={decodeURIComponent(blogSlug)} onNavigate={handleNavigate} />;
  else if (path === '/') page = <HomePage />;
  else page = <main className="min-h-[65vh] bg-[#f8f7f4] px-4 py-24 text-center"><h1 className="font-serif text-4xl">Page not found</h1><p className="mt-3 text-ink/55">The page you’re looking for may have moved.</p><a href="/" className="mt-6 inline-block rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white">Back to home</a></main>;

  return <div className="min-h-screen flex flex-col"><Navbar /><div className="flex-grow">{page}</div><Footer /></div>;
};

export default App;
