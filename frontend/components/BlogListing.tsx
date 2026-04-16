import React, { useState, useMemo } from 'react';
import { useSEO } from '../hooks/useSEO';
import { BLOG_POSTS } from '../data';
import { Search } from 'lucide-react';

interface BlogListingProps {
  onNavigate: (view: string) => void;
}

type BlogCategory = 'All' | 'Guide' | 'Case Study' | 'Comparison' | 'Tutorial' | 'Interview';

export const BlogListing: React.FC<BlogListingProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  useSEO({
    title: 'Blog - DesignAI.tools | AI Design Insights & Tutorials',
    description: 'Read expert insights, tutorials, and case studies on using AI tools for freelance design. Updated weekly with practical workflows and tool comparisons.',
    keywords: ['Design blog', 'AI tutorials', 'Freelance design', 'Case studies', 'Design tips'],
    canonical: 'https://designai.tools/blog',
    breadcrumbs: [
      { name: 'Home', url: 'https://designai.tools/' },
      { name: 'Blog', url: 'https://designai.tools/blog' }
    ]
  });

  const categories: BlogCategory[] = ['All', 'Guide', 'Case Study', 'Comparison', 'Tutorial', 'Interview'];

  const filteredPosts = useMemo(() => {
    let results = BLOG_POSTS;

    if (selectedCategory !== 'All') {
      results = results.filter(post => post.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return results;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-paper dark:bg-dark-bg">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <button
          onClick={() => onNavigate('home')}
          className="text-ink/60 dark:text-dark-text-secondary hover:text-ink dark:hover:text-dark-text mb-8 transition-colors text-sm font-medium"
        >
          ← Back to home
        </button>

        <h1 className="font-serif text-5xl md:text-6xl text-ink dark:text-dark-text mb-4">
          Design Insights & Tutorials
        </h1>
        <p className="text-xl text-ink/70 dark:text-dark-text-secondary max-w-2xl">
          Expert insights on AI tools, design workflows, and practical tutorials from the DesignAI.tools community. Updated weekly.
        </p>
      </section>

      {/* Search & Filter */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-ink/40 dark:text-dark-text-secondary/40" size={20} />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-ink/20 dark:border-dark-border bg-white dark:bg-dark-card text-ink dark:text-dark-text placeholder:text-ink/40 dark:placeholder:text-dark-text-secondary/40 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-accent text-white'
                  : 'bg-ink/5 dark:bg-white/10 text-ink dark:text-dark-text hover:bg-ink/10 dark:hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-ink/60 dark:text-dark-text-secondary mt-6">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
        </p>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="group flex flex-col border border-ink/10 dark:border-dark-border bg-white dark:bg-dark-card rounded-lg overflow-hidden hover:border-accent transition-all hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-black/30"
              >
                {/* Placeholder for featured image */}
                {post.featured && index === 0 && (
                  <div className="w-full h-40 bg-gradient-to-br from-accent/20 dark:from-accent/30 to-accent/10 dark:to-accent/20 flex items-center justify-center" />
                )}

                <div className="p-6 flex flex-col flex-grow">
                  {/* Category & Meta */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">
                      {post.category}
                    </span>
                    <span className="text-xs text-ink/40 dark:text-dark-text-secondary/60">{post.readTime} min read</span>
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-xl text-ink dark:text-dark-text mb-3 group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-ink/70 dark:text-dark-text-secondary text-sm mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-ink/50 dark:text-dark-text-secondary/60">
                      <time dateTime={post.publishDate}>
                        {new Date(post.publishDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </time>
                      {' '} by {post.author}
                    </div>
                    <button
                      onClick={() => onNavigate(`blog-post:${post.slug}`)}
                      className="text-accent font-medium hover:underline text-sm"
                    >
                      Read →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-ink/60 dark:text-dark-text-secondary text-lg mb-4">
              No articles found matching your search.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-accent hover:underline font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="bg-ink dark:bg-dark-card text-paper dark:text-dark-text py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-4">Get Weekly Design Insights</h2>
          <p className="text-paper/80 mb-6">
            Join {12000} designers who get fresh AI tool reviews and design workflows delivered to their inbox every week.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-sm text-ink focus:outline-none"
            />
            <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-sm font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
