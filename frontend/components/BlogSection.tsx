import React from 'react';
import { BLOG_POSTS } from '../data.ts';

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-24">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-ink mb-3">Editorial & Insights</h2>
          <p className="text-ink/70">Real workflows from working designers.</p>
        </div>
        <a href="/blog" className="hidden md:block text-accent font-medium hover:underline underline-offset-4">
          View all articles &rarr;
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_POSTS.map((post) => (
          <a 
            key={post.id} 
            href={post.id === 'post-1' ? '/blog' : '#'}
            className="group cursor-pointer flex flex-col h-full no-underline"
          >
            <article className="flex flex-col h-full">
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  {post.category}
                </span>
              </div>
              <h3 className="font-serif text-xl text-ink mb-3 group-hover:text-accent transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-ink/70 text-sm mb-6 flex-grow">
                {post.excerpt}
              </p>
              <div className="mt-auto">
                <span className="text-sm font-medium text-ink group-hover:text-accent transition-colors flex items-center gap-1">
                  Read article <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </article>
          </a>
        ))}
      </div>
      
      <div className="mt-8 text-center md:hidden">
         <a href="/blog" className="text-accent font-medium hover:underline underline-offset-4">
          View all articles &rarr;
        </a>
      </div>
    </section>
  );
};