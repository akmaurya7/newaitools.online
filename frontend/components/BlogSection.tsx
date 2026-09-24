import React from 'react';
import { ArrowRight, BookOpen, FileSearch, Workflow } from 'lucide-react';

const topics = [
  { icon: FileSearch, title: 'Honest tool reviews', text: 'Hands-on tests that explain what a tool does well, where it falls short, and who it suits.' },
  { icon: BookOpen, title: 'Clear comparisons', text: 'Side-by-side guidance for choosing between products for one specific task.' },
  { icon: Workflow, title: 'Step-by-step workflows', text: 'Repeatable examples that show how tools fit into real work.' },
];

export const BlogSection: React.FC = () => <section id="blog" className="border-y border-ink/[0.07] bg-white py-14 md:py-16">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent"><BookOpen size={14} /> From the blog</p><h2 className="font-serif text-3xl text-ink md:text-4xl">Useful advice for choosing AI tools</h2><p className="mt-2 text-sm text-ink/55">We’re rebuilding the blog around practical, firsthand guidance.</p></div><a href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-accent">About the blog <ArrowRight size={16} /></a></div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">{topics.map(({ icon: Icon, title, text }) => <a key={title} href="/blog" className="group rounded-2xl border border-ink/[0.08] bg-[#f8f7f4] p-5 transition hover:-translate-y-0.5 hover:border-accent/25 hover:bg-white hover:shadow-lg"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f6eee8] text-accent"><Icon size={19} /></span><h3 className="mt-4 font-serif text-xl text-ink transition group-hover:text-accent">{title}</h3><p className="mt-2 text-sm leading-6 text-ink/55">{text}</p></a>)}</div>
  </div>
</section>;
