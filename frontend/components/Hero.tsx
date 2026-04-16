import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-ink mb-6">
        The best AI tools for freelance designers.<br className="hidden md:block" /> Curated, tested, ranked.
      </h1>
      <p className="text-lg md:text-xl text-ink/70 mb-10 max-w-2xl mx-auto font-medium">
        Save 10+ hours a week. We find the tools, you do the work.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <a 
          href="#tools" 
          className="w-full sm:w-auto bg-ink text-paper px-8 py-4 text-base font-medium hover:bg-ink/90 transition-colors rounded-sm"
        >
          Browse All Tools
        </a>
        <a 
          href="#tools" 
          className="w-full sm:w-auto text-ink font-medium hover:text-accent transition-colors px-8 py-4 flex items-center justify-center gap-2"
        >
          Top Free Tools <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      <div className="inline-flex items-center justify-center space-x-2 text-sm font-medium text-ink/60 bg-ink/5 px-4 py-2 rounded-full">
        <span>Trusted by 12,000+ designers</span>
        <span>&middot;</span>
        <span>Updated weekly</span>
        <span>&middot;</span>
        <span>80+ tools listed</span>
      </div>
    </section>
  );
};