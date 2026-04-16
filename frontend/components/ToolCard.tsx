import React from 'react';
import { Tool } from '../data.ts';
import { Star } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  // Determine pricing badge colors
  let pricingClass = 'bg-ink/5 dark:bg-white/10 text-ink dark:text-dark-text';
  if (tool.pricing === 'Free') pricingClass = 'bg-free/10 dark:bg-free/20 text-free dark:text-green-400';
  if (tool.pricing === 'Paid') pricingClass = 'bg-accent/10 dark:bg-accent/20 text-accent dark:text-orange-400';

  // Generate stars
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} size={14} className="fill-accent text-accent" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Star key={i} size={14} className="fill-accent/50 text-accent/50" />);
      } else {
        stars.push(<Star key={i} size={14} className="text-ink/20 dark:text-dark-border" />);
      }
    }
    return stars;
  };

  return (
    <div className="group relative bg-white dark:bg-dark-card border border-ink/10 dark:border-dark-border p-6 rounded-sm shadow-sm dark:shadow-xl dark:shadow-black/30 hover:shadow-xl dark:hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      
      {/* Top Pick Ribbon */}
      {tool.isTopPick && (
        <div className="absolute -top-3 -right-3 bg-accent text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 shadow-sm z-10 rotate-3">
          Top Pick
        </div>
      )}

      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-block bg-paper dark:bg-dark-bg text-ink dark:text-dark-text text-xs font-bold uppercase tracking-wider px-2.5 py-1 border border-ink/10 dark:border-dark-border rounded-sm">
          {tool.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h3 className="font-serif text-2xl text-ink dark:text-dark-text mb-2 group-hover:text-accent transition-colors">
          {tool.name}
        </h3>
        <p className="text-ink/70 dark:text-dark-text-secondary text-sm mb-6 line-clamp-2">
          {tool.description}
        </p>
        
        {/* Tags */}
        {tool.tags && tool.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tool.tags.map((tag, idx) => (
              <span key={idx} className="text-xs bg-accent/10 dark:bg-accent/20 text-accent dark:text-orange-400 font-semibold px-2 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Meta & Action */}
      <div className="mt-auto pt-6 border-t border-ink/5 dark:border-dark-border/30">
        <div className="flex items-center justify-between mb-5">
          <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-sm ${pricingClass}`}>
            {tool.pricing}
          </span>
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {renderStars(tool.rating)}
            </div>
            <span className="text-sm font-medium text-ink/80 dark:text-dark-text-secondary">{tool.rating}</span>
          </div>
        </div>
        
        <a 
          href={tool.link || '#'} 
          target={tool.link ? '_blank' : '_self'}
          rel={tool.link ? 'noopener noreferrer' : ''}
          className="block w-full text-center border border-ink dark:border-dark-text text-ink dark:text-dark-text hover:bg-ink dark:hover:bg-dark-text hover:text-paper dark:hover:text-dark-bg transition-colors py-2.5 text-sm font-medium rounded-sm"
        >
          Try Tool →
        </a>
      </div>
    </div>
  );
};