import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-paper pt-16 pb-8 border-t border-ink/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <a href="#" className="font-serif text-2xl tracking-tight text-ink block mb-2">
              DesignAI.tools
            </a>
            <p className="text-ink/60 text-sm">
              Helping designers work smarter with AI.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#" className="text-sm font-medium text-ink/70 hover:text-accent transition-colors">About</a>
            <a href="#" className="text-sm font-medium text-ink/70 hover:text-accent transition-colors">Advertise</a>
            <a href="#" className="text-sm font-medium text-ink/70 hover:text-accent transition-colors">Affiliate Disclosure</a>
            <a href="#" className="text-sm font-medium text-ink/70 hover:text-accent transition-colors">Contact</a>
          </nav>
        </div>

        <div className="text-center border-t border-ink/10 pt-8">
          <p className="text-xs text-ink/40 max-w-2xl mx-auto leading-relaxed">
            Some links on this site are affiliate links. We may earn a commission at no cost to you if you make a purchase through these links. This helps support the site and allows us to continue curating the best tools.
          </p>
          <p className="text-xs text-ink/40 mt-4">
            &copy; {new Date().getFullYear()} DesignAI.tools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};