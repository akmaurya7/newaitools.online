import React, { useMemo, useState } from 'react';
import { ArrowRight, BookOpen, Search, Sparkles, X } from 'lucide-react';
import { useSEO } from '../hooks/useSEO.ts';
import { BLOG_POSTS } from '../data.ts';

type BlogCategory = 'All' | 'Guide' | 'Case Study' | 'Comparison' | 'Tutorial' | 'Interview';

export const BlogListing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  useSEO({
    title: 'AI Tools Blog: Guides, Reviews & Comparisons | newaitools',
    description: 'Read practical AI tool guides, workflow tutorials, comparisons, and case studies for creators, teams, and growing businesses.',
    keywords: ['AI tools blog', 'AI tutorials', 'AI tool comparisons', 'case studies', 'AI tool guides'],
    canonical: 'https://newaitools.online/blog',
    breadcrumbs: [{ name: 'Home', url: 'https://newaitools.online/' }, { name: 'Blog', url: 'https://newaitools.online/blog' }]
  });

  const categories: BlogCategory[] = ['All', 'Guide', 'Case Study', 'Comparison', 'Tutorial', 'Interview'];
  const filteredPosts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return BLOG_POSTS.filter(post =>
      (selectedCategory === 'All' || post.category === selectedCategory) &&
      (!query || [post.title, post.excerpt, post.author, ...post.tags].some(value => value.toLowerCase().includes(query)))
    );
  }, [selectedCategory, searchQuery]);

  return <main className="min-h-[70vh] bg-[#f8f7f4]">
    <section className="border-b border-ink/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <a href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-ink/55 transition hover:text-accent"><span aria-hidden="true">←</span> Back to home</a>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div><p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent"><BookOpen size={15} /> The newaitools blog</p><h1 className="max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">Ideas and guides for getting more from AI tools.</h1><p className="mt-5 max-w-2xl text-base leading-7 text-ink/60 md:text-lg">Practical tool guides, comparisons, workflows, and lessons for your next project.</p></div>
          <div className="flex shrink-0 items-center gap-2 rounded-2xl bg-[#f8f7f4] px-4 py-3 text-sm font-semibold text-ink/60"><Sparkles size={17} className="text-accent" />{BLOG_POSTS.length} articles to explore</div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-2xl border border-ink/[0.08] bg-white p-4 shadow-[0_2px_12px_rgba(26,23,20,0.025)] sm:p-5">
        <label className="flex max-w-2xl items-center gap-3 rounded-xl border border-ink/10 bg-[#f8f7f4] px-4 py-3.5 transition focus-within:border-accent/40 focus-within:ring-4 focus-within:ring-accent/10"><Search size={18} className="shrink-0 text-ink/40" /><input type="search" placeholder="Search articles, topics, or authors" value={searchQuery} onChange={event => setSearchQuery(event.target.value)} className="w-full bg-transparent text-sm outline-none placeholder:text-ink/40" aria-label="Search blog articles" />{searchQuery && <button type="button" onClick={() => setSearchQuery('')} aria-label="Clear search" className="rounded-full p-1 text-ink/45 transition hover:bg-white hover:text-accent"><X size={16} /></button>}</label>
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Filter articles by category">{categories.map(category => <button type="button" key={category} onClick={() => setSelectedCategory(category)} aria-pressed={selectedCategory === category} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${selectedCategory === category ? 'bg-ink text-white shadow-sm' : 'bg-[#f8f7f4] text-ink/60 hover:bg-accent/10 hover:text-accent'}`}>{category}</button>)}</div>
      </div>

      <div className="mb-5 flex items-center justify-between gap-4"><p className="text-sm text-ink/50" aria-live="polite">Showing <span className="font-semibold text-ink">{filteredPosts.length}</span> {filteredPosts.length === 1 ? 'article' : 'articles'}</p>{(searchQuery || selectedCategory !== 'All') && <button type="button" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} className="text-sm font-semibold text-accent hover:underline">Clear filters</button>}</div>

      {filteredPosts.length ? <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{filteredPosts.map(post => <article key={post.id} className="group flex h-full flex-col rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-[0_2px_12px_rgba(26,23,20,0.025)] transition duration-200 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-[0_14px_36px_rgba(26,23,20,0.08)] sm:p-7">
        <div className="mb-5 flex items-center justify-between gap-3"><span className="rounded-full border border-accent/10 bg-orange-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-accent">{post.category}</span><span className="text-xs font-medium text-ink/40">{post.readTime} min read</span></div>
        <h2 className="font-serif text-2xl leading-snug text-ink transition group-hover:text-accent"><a href={`/blog/${post.slug}`} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">{post.title}</a></h2>
        <p className="mt-3 flex-grow text-sm leading-6 text-ink/60">{post.excerpt}</p>
        <div className="mt-6 flex items-end justify-between gap-4 border-t border-ink/[0.07] pt-4"><div className="text-xs leading-5 text-ink/45"><time dateTime={post.publishDate}>{new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</time><span className="block">By {post.author}</span></div><a href={`/blog/${post.slug}`} className="inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-accent">Read article <ArrowRight size={15} className="transition group-hover:translate-x-1" /></a></div>
      </article>)}</div> : <div className="rounded-2xl border border-dashed border-ink/15 bg-white px-6 py-16 text-center"><p className="font-serif text-2xl text-ink">No articles found</p><p className="mt-2 text-sm text-ink/55">Try another search or clear the category filter.</p><button type="button" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} className="mt-5 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent">Show all articles</button></div>}
    </section>

    <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-6 rounded-3xl bg-[#201d1a] p-8 text-white md:flex-row md:items-center md:p-10"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">Keep exploring</p><h2 className="font-serif text-3xl md:text-4xl">Find a tool for your next idea.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/60">Browse the directory by task, category, and pricing to find a good fit.</p></div><a href="/tools" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-ink transition hover:bg-orange-100">Explore AI tools <ArrowRight size={16} /></a></div></section>
  </main>;
};
