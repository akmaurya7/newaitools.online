import React, { useEffect } from 'react';
import { useSEO } from '../hooks/useSEO';
import { BLOG_POSTS } from '../data';
import { ArrowLeft } from 'lucide-react';

interface BlogPostViewProps {
  slug: string;
  onNavigate: (view: string) => void;
}

export const BlogPostView: React.FC<BlogPostViewProps> = ({ slug, onNavigate }) => {
  const post = BLOG_POSTS.find(p => p.slug === slug);

  useSEO({
    title: post ? `${post.title} | DesignAI.tools` : 'Blog Post | DesignAI.tools',
    description: post?.excerpt || 'Read more design insights and AI tool guides',
    keywords: post?.tags,
    type: 'blog',
    author: post?.author,
    publishDate: post?.publishDate,
    modifiedDate: post?.modifiedDate,
    canonical: `https://designai.tools/blog/${slug}`,
    breadcrumbs: [
      { name: 'Home', url: 'https://designai.tools/' },
      { name: 'Blog', url: 'https://designai.tools/blog' },
      { name: post?.title || 'Article', url: `https://designai.tools/blog/${slug}` }
    ]
  });

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-serif mb-4">Post not found</h1>
          <button 
            onClick={() => onNavigate('home')}
            className="text-accent hover:underline"
          >
            ← Back to home
          </button>
        </div>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter(
    p => p.category === post.category && p.id !== post.id
  ).slice(0, 3);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Back Button */}
      <button 
        onClick={() => onNavigate('blog')}
        className="flex items-center gap-2 text-ink/60 hover:text-ink mb-8 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to blog</span>
      </button>

      {/* Article Header */}
      <header className="mb-12">
        <div className="mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-accent">
            {post.category}
          </span>
          <div className="flex items-center gap-4 mt-2 text-sm text-ink/60">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.publishDate}>
              {new Date(post.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>
        <h1 className="font-serif text-5xl text-ink leading-[1.2] mb-6">
          {post.title}
        </h1>
        <p className="text-xl text-ink/70 leading-relaxed">
          {post.excerpt}
        </p>
      </header>

      {/* Article Content */}
      <div 
        className="prose prose-slate max-w-none mb-16"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Article Meta */}
      <footer className="border-t border-ink/10 pt-8 mb-16">
        <div className="mb-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-ink/60 mb-3">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <a
                key={tag}
                href={`/?tag=${encodeURIComponent(tag)}`}
                className="px-3 py-1 bg-ink/5 text-ink text-sm rounded-full hover:bg-ink/10 transition-colors"
              >
                #{tag}
              </a>
            ))}
          </div>
        </div>

        {/* Author Info */}
        <div className="flex items-start gap-4 p-4 bg-ink/5 rounded-lg">
          <div className="w-12 h-12 bg-accent rounded-full" />
          <div>
            <p className="font-medium text-ink">About {post.author}</p>
            <p className="text-sm text-ink/60">
              Design strategist and AI tools enthusiast sharing practical workflows and insights.
            </p>
          </div>
        </div>
      </footer>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-ink/10 pt-16">
          <h2 className="font-serif text-3xl text-ink mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map(relatedPost => (
              <a
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(`blog-post:${relatedPost.slug}`);
                }}
                className="group p-4 border border-ink/10 rounded-lg hover:border-accent transition-colors"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  {relatedPost.category}
                </span>
                <h3 className="font-serif text-lg text-ink group-hover:text-accent transition-colors mt-2 leading-snug">
                  {relatedPost.title}
                </h3>
                <p className="text-sm text-ink/60 mt-2 line-clamp-2">
                  {relatedPost.excerpt}
                </p>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <div className="mt-20 p-8 bg-ink text-paper rounded-lg text-center">
        <h3 className="font-serif text-2xl mb-3">Discover More Design Tools</h3>
        <p className="mb-6 text-paper/80">
          Join 12,000+ designers discovering new AI tools every week
        </p>
        <button
          onClick={() => onNavigate('home')}
          className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-sm font-medium transition-colors"
        >
          Browse All Tools
        </button>
      </div>
    </article>
  );
};
