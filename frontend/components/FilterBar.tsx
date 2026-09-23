import React from 'react';
import { CATEGORIES, TOOLS } from '../data.ts';

interface FilterBarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ activeCategory, onSelectCategory }) => {
  return (
    <div id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <div className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-ink/45">Browse by category</div>
      <div className="flex overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar gap-2">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
              activeCategory === category
                ? 'bg-ink border-ink text-white shadow-md'
                : 'bg-white/80 border-ink/10 text-ink/75 hover:border-accent/40 hover:text-accent'
            }`}
          >
            {category}
            <span className={`ml-2 text-xs ${activeCategory === category ? 'text-white/60' : 'text-ink/35'}`}>{category === 'All' ? TOOLS.length : TOOLS.filter(tool => tool.category === category).length}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
