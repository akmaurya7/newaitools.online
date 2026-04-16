import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { FilterBar } from './components/FilterBar.tsx';
import { ToolCard } from './components/ToolCard.tsx';
import { StatsBanner } from './components/StatsBanner.tsx';
import { BlogSection } from './components/BlogSection.tsx';
import { Newsletter } from './components/Newsletter.tsx';
import { Footer } from './components/Footer.tsx';
import { TOOLS } from './data.ts';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTools = useMemo(() => {
    if (activeCategory === 'All') {
      return TOOLS;
    }
    return TOOLS.filter(tool => tool.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <div id="tools" className="scroll-mt-24">
          <FilterBar 
            activeCategory={activeCategory} 
            onSelectCategory={setActiveCategory} 
          />
          
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map(tool => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border border-dashed border-ink/20 rounded-sm">
                <p className="text-ink/60 text-lg">No tools found in this category yet.</p>
                <button 
                  onClick={() => setActiveCategory('All')}
                  className="mt-4 text-accent font-medium hover:underline"
                >
                  View all tools
                </button>
              </div>
            )}
          </section>
        </div>

        <StatsBanner />
        <BlogSection />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default App;