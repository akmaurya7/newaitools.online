import React from 'react';
import { CATEGORIES } from '../data.ts';

interface FilterBarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ activeCategory, onSelectCategory }) => {
  return (
    <div id="categories" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
      <div className="flex overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar gap-3">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all border ${
              activeCategory === category
                ? 'bg-accent border-accent text-white'
                : 'bg-transparent border-ink/20 dark:border-dark-border text-ink dark:text-dark-text hover:border-ink/50 dark:hover:border-dark-border/80'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};