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

  const topPicksTools = useMemo(() => {
    return TOOLS.filter(tool => tool.section === 'top');
  }, []);

  const mainTools = useMemo(() => {
    if (activeCategory === 'All') {
      return TOOLS.filter(tool => tool.section === 'main');
    }
    return TOOLS.filter(tool => tool.section === 'main' && tool.category === activeCategory);
  }, [activeCategory]);

  const freeTools = useMemo(() => {
    return TOOLS.filter(tool => tool.section === 'free');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Top Picks Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="font-serif text-4xl text-ink">Top Picks for Designers</h2>
              <span className="text-2xl">🔥</span>
            </div>
            <p className="text-ink/60 text-lg">Most used by designers worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topPicksTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>

        {/* Main Tools Section */}
        <div id="tools" className="scroll-mt-24">
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <h2 className="font-serif text-4xl text-ink mb-8">Explore All Tools</h2>
          </section>

          <FilterBar 
            activeCategory={activeCategory} 
            onSelectCategory={setActiveCategory} 
          />
          
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
            {mainTools.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mainTools.map(tool => (
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

        {/* Free Tools Section */}
        <section className="bg-paper/30 py-20 mb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="font-serif text-4xl text-ink mb-2">Free Tools Designers Love</h2>
              <p className="text-ink/60 text-lg">Zero cost, maximum impact</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {freeTools.map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </section>

        <StatsBanner />
        <BlogSection />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default App;