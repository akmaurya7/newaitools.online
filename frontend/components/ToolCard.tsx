import React from 'react';
import { Tool } from '../data.ts';
import { ArrowRight, Star } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  // Determine pricing badge colors
  let pricingClass = 'bg-ink/5 text-ink';
  if (tool.pricing === 'Free') pricingClass = 'bg-free/10 text-free';
  if (tool.pricing === 'Paid') pricingClass = 'bg-accent/10 text-accent';

  // Generate stars
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} size={14} className="fill-accent text-accent" />);
      } else if (i === fullStars && hasHalfStar) {
        // Simple half star representation using a full star with lower opacity for simplicity in this stack
        stars.push(<Star key={i} size={14} className="fill-accent/50 text-accent/50" />);
      } else {
        stars.push(<Star key={i} size={14} className="text-ink/20" />);
      }
    }
    return stars;
  };

  return (
    <div className="group relative bg-white border border-ink/10 p-6 rounded-2xl shadow-[0_8px_30px_rgba(26,23,20,0.04)] hover:shadow-[0_18px_50px_rgba(26,23,20,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      
      {/* Top Pick Ribbon */}
      {tool.isTopPick && (
        <div className="absolute -top-3 -right-3 bg-accent text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 shadow-sm z-10 rotate-3">
          Top Pick
        </div>
      )}

      {/* Category Badge */}
      <div className="mb-4">
          <span className="inline-block bg-orange-50 text-accent text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 border border-accent/10 rounded-full">
          {tool.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <a href={`/tool/${encodeURIComponent(tool.id)}`} aria-label={`View details about ${tool.name}`} className="inline-block"><h3 className="font-serif text-2xl text-ink mb-2 group-hover:text-accent transition-colors">
          {tool.name}
        </h3></a>
        <p className="text-ink/70 text-sm mb-6 line-clamp-2">
          {tool.description}
        </p>
        
        {/* Tags */}
        {tool.tags && tool.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tool.tags.map((tag, idx) => (
              <span key={idx} className="text-xs bg-accent/10 text-accent font-semibold px-2 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Meta & Action */}
      <div className="mt-auto pt-6 border-t border-ink/5">
        <a href={`/tool/${encodeURIComponent(tool.id)}`} className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">Explore tool details <ArrowRight size={15} /></a>
        <div className="flex items-center justify-between mb-5">
          <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-sm ${pricingClass}`}>
            {tool.pricing}
          </span>
          {tool.rating !== undefined && <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {renderStars(tool.rating)}
            </div>
            <span className="text-sm font-medium text-ink/80">{tool.rating}</span>
          </div>}
        </div>
        
        <a 
          href={tool.link || '#tools'}
          target={tool.link ? '_blank' : undefined}
          rel={tool.link ? 'noopener noreferrer' : undefined}
          className="block w-full text-center border border-ink/10 bg-ink text-white hover:bg-accent hover:border-accent transition-colors py-3 text-sm font-semibold rounded-xl"
        >
          Try Tool →
        </a>
      </div>
    </div>
  );
};
