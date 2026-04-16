import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-serif text-2xl tracking-tight text-ink">
              DesignAI.tools
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#tools" className="text-ink/80 hover:text-accent transition-colors text-sm font-medium">Tools</a>
            <a href="#categories" className="text-ink/80 hover:text-accent transition-colors text-sm font-medium">Categories</a>
            <a href="#blog" className="text-ink/80 hover:text-accent transition-colors text-sm font-medium">Blog</a>
            <a href="#submit" className="text-ink/80 hover:text-accent transition-colors text-sm font-medium">Submit a Tool</a>
            <a 
              href="#newsletter" 
              className="bg-accent text-white px-5 py-2.5 text-sm font-medium hover:bg-accent/90 transition-colors rounded-sm"
            >
              Get Free Toolkit
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-ink hover:text-accent focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-paper border-b border-ink/10 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            <a href="#tools" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-ink hover:bg-ink/5">Tools</a>
            <a href="#categories" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-ink hover:bg-ink/5">Categories</a>
            <a href="#blog" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-ink hover:bg-ink/5">Blog</a>
            <a href="#submit" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-ink hover:bg-ink/5">Submit a Tool</a>
            <div className="pt-4 px-3">
              <a 
                href="#newsletter" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-accent text-white px-5 py-3 text-base font-medium hover:bg-accent/90 transition-colors rounded-sm"
              >
                Get Free Toolkit
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};