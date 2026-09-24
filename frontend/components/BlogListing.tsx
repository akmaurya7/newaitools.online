import React from 'react';
import { ArrowRight, BookOpen, CheckCircle2, FileSearch, Sparkles, Workflow } from 'lucide-react';
import { useSEO } from '../hooks/useSEO.ts';

const editorialTracks = [
  { icon: FileSearch, number: '01', title: 'Tool reviews that show the work', description: 'Test a real task from start to finish. Share the steps, output, strengths, trade-offs, and who should choose the tool.' },
  { icon: BookOpen, number: '02', title: 'Comparisons that help people decide', description: 'Compare two or three tools for one specific job, using the same task and clear criteria such as quality, effort, limits, and cost.' },
  { icon: Workflow, number: '03', title: 'Useful workflows and tutorials', description: 'Show a repeatable process with screenshots, prompts, settings, time saved, and the parts that still need a human review.' },
];

export const BlogListing: React.FC = () => {
  useSEO({
    title: 'AI Tools Blog | newaitools',
    description: 'Practical AI tool reviews, honest comparisons, and step-by-step workflows from newaitools.',
    keywords: ['AI tools blog', 'AI tool reviews', 'AI tool comparisons', 'AI workflows'],
    canonical: 'https://newaitools.online/blog',
    breadcrumbs: [{ name: 'Home', url: 'https://newaitools.online/' }, { name: 'Blog', url: 'https://newaitools.online/blog' }]
  });

  return <main className="min-h-[70vh] bg-[#f8f7f4]">
    <section className="border-b border-ink/10 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <a href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-ink/55 transition hover:text-accent"><span aria-hidden="true">←</span> Home</a>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div><p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent"><BookOpen size={15} /> The newaitools blog</p><h1 className="max-w-3xl font-serif text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">Make a better choice about your next AI tool.</h1><p className="mt-5 max-w-2xl text-base leading-7 text-ink/60 md:text-lg">We’re refreshing our articles. The blog will focus on hands-on reviews, clear comparisons, and workflows you can put to work.</p></div>
          <a href="/tools" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3.5 text-sm font-bold text-white transition hover:bg-accent">Explore AI tools <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mb-7 flex items-end justify-between gap-4"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">Our editorial focus</p><h2 className="font-serif text-3xl text-ink md:text-4xl">Practical articles, built around real tasks</h2></div><span className="hidden items-center gap-2 text-sm text-ink/45 sm:flex"><Sparkles size={15} /> Independent, useful, specific</span></div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">{editorialTracks.map(track => { const Icon = track.icon; return <article key={track.number} className="rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-[0_2px_12px_rgba(26,23,20,0.025)] transition hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-lg sm:p-7"><div className="mb-6 flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f6eee8] text-accent"><Icon size={20} strokeWidth={1.8} /></span><span className="text-xs font-semibold text-ink/35">{track.number}</span></div><h3 className="font-serif text-2xl leading-snug text-ink">{track.title}</h3><p className="mt-3 text-sm leading-6 text-ink/55">{track.description}</p></article>; })}</div>

      <div className="mt-10 rounded-2xl border border-dashed border-ink/15 bg-white px-6 py-12 text-center sm:py-16"><span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6eee8] text-accent"><CheckCircle2 size={21} /></span><h2 className="mt-5 font-serif text-2xl text-ink">The old sample articles have been removed.</h2><p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-ink/55">We’re preparing the first useful, tested guides. Until then, browse the tool directory and compare products directly.</p><a href="/tools" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-white transition hover:bg-ink">Browse the tool directory <ArrowRight size={15} /></a></div>
    </section>

    <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-6 rounded-3xl bg-[#201d1a] p-8 text-white md:flex-row md:items-center md:p-10"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-orange-300">Find your next step</p><h2 className="font-serif text-3xl md:text-4xl">Start with the task you need to do.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/60">Explore tools by category, pricing, and what they’re useful for.</p></div><a href="/categories" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-ink transition hover:bg-orange-100">Browse categories <ArrowRight size={16} /></a></div></section>
  </main>;
};
