import React from 'react';

export const StatsBanner: React.FC = () => {
  return (
    <section className="bg-ink text-paper py-16 my-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-paper/20">
          <div className="py-4 md:py-0">
            <div className="font-serif text-4xl md:text-5xl text-accent mb-2">80+</div>
            <div className="text-sm font-medium uppercase tracking-widest text-paper/70">Tools Reviewed</div>
          </div>
          <div className="py-4 md:py-0">
            <div className="font-serif text-4xl md:text-5xl text-accent mb-2">10hrs</div>
            <div className="text-sm font-medium uppercase tracking-widest text-paper/70">Saved Per Week</div>
          </div>
          <div className="py-4 md:py-0">
            <div className="font-serif text-4xl md:text-5xl text-accent mb-2">Weekly</div>
            <div className="text-sm font-medium uppercase tracking-widest text-paper/70">Updated Every Week</div>
          </div>
        </div>
      </div>
    </section>
  );
};