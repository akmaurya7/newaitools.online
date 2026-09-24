import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => <footer className="border-t border-ink/10 bg-white">
  <div className="mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 lg:px-8">
    <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
      <div className="max-w-sm"><a href="/" aria-label="newaitools home" className="group inline-flex items-center gap-2.5"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-white transition group-hover:bg-accent"><Sparkles size={16} /></span><span className="font-sans text-[21px] font-extrabold leading-none tracking-[-0.075em] text-ink"><span>newai</span><span className="text-accent">tools</span></span></a><p className="mt-4 text-sm leading-6 text-ink/55">A clearer way to discover useful AI tools, categories, and workflows.</p></div>
      <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-ink/60"><a href="/tools" className="transition hover:text-accent">Tools</a><a href="/categories" className="transition hover:text-accent">Categories</a><a href="/workflows" className="transition hover:text-accent">Workflows</a><a href="/blog" className="inline-flex items-center gap-1 transition hover:text-accent">Blog <ArrowUpRight size={13} /></a></nav>
    </div>
    <div className="mt-10 flex flex-col gap-3 border-t border-ink/[0.08] pt-5 text-xs text-ink/40 sm:flex-row sm:items-center sm:justify-between"><p>Some links may be affiliate links. We may earn a commission at no extra cost to you.</p><p>© {new Date().getFullYear()} newaitools. All rights reserved.</p></div>
  </div>
</footer>;
