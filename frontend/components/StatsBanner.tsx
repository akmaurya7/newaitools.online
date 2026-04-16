import React from 'react';

export const StatsBanner: React.FC = () => {
  return (
    <section className="bg-ink dark:bg-dark-card text-paper dark:text-dark-text py-16 my-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-paper/20 dark:divide-dark-border/30">
          <div className="py-4 md:py-0">
            <div className="font-serif text-4xl md:text-5xl text-accent mb-2">80+</div>
            <div className="text-sm font-medium uppercase tracking-widest text-paper/70 dark:text-dark-text-secondary">Tools Reviewed</div>
          </div>
          <div className="py-4 md:py-0">
            <div className="font-serif text-4xl md:text-5xl text-accent mb-2">10hrs</div>
            <div className="text-sm font-medium uppercase tracking-widest text-paper/70 dark:text-dark-text-secondary">Saved Per Week</div>
          </div>
          <div className="py-4 md:py-0">
            <div className="font-serif text-4xl md:text-5xl text-accent mb-2">Weekly</div>
            <div className="text-sm font-medium uppercase tracking-widest text-paper/70 dark:text-dark-text-secondary">Updated Every Week</div>
          </div>
        </div>
      </div>
    </section>
  );
};