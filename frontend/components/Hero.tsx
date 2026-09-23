import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative mx-auto mb-16 mt-4 max-w-7xl overflow-hidden rounded-[32px] bg-gradient-to-br from-orange-100 via-amber-50 to-emerald-50 px-4 pt-12 sm:rounded-[44px] sm:px-6 lg:px-8 md:pt-16">
      <div className="mx-auto max-w-4xl py-12 text-center md:py-16">
      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-accent shadow-sm"><span className="h-2 w-2 rounded-full bg-emerald-500" /> The AI directory for getting things done</span>
      <h1 className="font-serif text-5xl leading-[1.05] text-ink mb-6 md:text-7xl">
        Find the right AI tool<br className="hidden md:block" /> for <span className="text-accent">what’s next.</span>
      </h1>
      <p className="text-lg md:text-xl text-ink/65 mb-10 max-w-2xl mx-auto">
        Explore trusted tools for creating, researching, building, and getting more done. Search by tool or browse by category.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <a 
          href="/tools"
          className="w-full rounded-xl bg-ink px-8 py-4 text-base font-semibold text-paper shadow-lg shadow-ink/10 transition hover:bg-accent sm:w-auto"
        >
          Explore the directory
        </a>
        <a 
          href="/categories"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-ink/10 bg-white/70 px-8 py-4 font-semibold text-ink transition hover:border-accent/25 hover:text-accent sm:w-auto"
        >
          Browse categories <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <div className="inline-flex items-center justify-center space-x-2 text-sm font-medium text-ink/60 bg-ink/5 px-4 py-2 rounded-full">
        <span>Curated across 32 categories</span>
        <span>&middot;</span>
        <span>Tools for every workflow</span>
        <span>&middot;</span>
        <span>One directory, less searching</span>
      </div>
      </div>
    </section>
  );
};
