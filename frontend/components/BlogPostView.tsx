import React from 'react';
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
    title: post ? `${post.title} | newaitools` : 'Blog Post | newaitools',
    description: post?.excerpt || 'Read more design insights and AI tool guides',
    keywords: post?.tags,
    type: 'blog',
    author: post?.author,
    publishDate: post?.publishDate,
    modifiedDate: post?.modifiedDate,
    ogImage: post?.ogImage ? `https://newaitools.online${post.ogImage}` : undefined,
    canonical: `https://newaitools.online/blog/${slug}`,
    breadcrumbs: [
      { name: 'Home', url: 'https://newaitools.online/' },
      { name: 'Blog', url: 'https://newaitools.online/blog' },
      { name: post?.title || 'Article', url: `https://newaitools.online/blog/${slug}` }
    ]
  });

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-serif mb-4">Post not found</h1>
          <a href="/blog" className="text-accent hover:underline">← Back to blog</a>
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

      {post.ogImage && <figure className="mb-12">
        <img
          src={post.ogImage}
          alt={post.ogImageAlt || `Illustration related to ${post.title}`}
          width="1600"
          height="900"
          fetchPriority="high"
          decoding="async"
          className="aspect-[16/9] w-full rounded-2xl border border-ink/10 bg-ink/5 object-cover shadow-sm"
        />
        <figcaption className="mt-2 text-sm text-ink/45">{post.ogImageAlt || `Illustration related to ${post.title}`}</figcaption>
      </figure>}

      {/* Article Content */}
      <style>{`
        .editorial-content { color: #302c28; font-size: 1.0625rem; line-height: 1.82; }
        .editorial-content p { margin: 0 0 1.35rem; }
        .editorial-content h2 { margin: 4.5rem 0 1.25rem; padding-top: 1.15rem; border-top: 1px solid rgba(26,23,20,.12); font-family: "DM Serif Display", serif; font-size: clamp(2rem, 4vw, 2.8rem); line-height: 1.08; color: #1a1714; }
        .editorial-content h3 { margin: 2.35rem 0 .6rem; font-size: 1.2rem; line-height: 1.35; color: #1a1714; }
        .editorial-content a { color: #a53d1b; font-weight: 650; text-decoration: underline; text-decoration-color: rgba(200,82,42,.35); text-underline-offset: 3px; }
        .editorial-content a:hover { color: #7f2f15; text-decoration-color: currentColor; }
        .editorial-content ul, .editorial-content ol { margin: 1.25rem 0 1.75rem; padding-left: 1.3rem; }
        .editorial-content li { margin: .5rem 0; padding-left: .25rem; }
        .editorial-content blockquote { margin: 1.75rem 0; border-left: 3px solid #c8522a; background: #fffaf6; padding: 1.25rem 1.35rem; color: #4f4740; }
        .editorial-content table { width: 100%; border-collapse: collapse; font-size: .94rem; line-height: 1.55; }
        .editorial-content th { background: #201d1a; color: #fffaf5; font-size: .75rem; letter-spacing: .08em; text-transform: uppercase; }
        .editorial-content th, .editorial-content td { padding: 1rem; vertical-align: top; text-align: left; border-bottom: 1px solid rgba(26,23,20,.1); }
        .editorial-content tr:nth-child(even) td { background: rgba(248,247,244,.75); }
        .article-deck { max-width: 44rem; font-family: "DM Serif Display", serif; font-size: clamp(1.45rem, 2.6vw, 1.9rem); line-height: 1.35; color: #302c28; }
        .editorial-brief { margin: 2.5rem 0; overflow: hidden; border: 1px solid rgba(26,23,20,.11); border-radius: 1.25rem; background: #fff; box-shadow: 0 16px 40px rgba(26,23,20,.05); }
        .editorial-brief__head { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1rem 1.25rem; background: #201d1a; color: #fffaf5; }
        .editorial-brief__head span { font-size: .72rem; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
        .editorial-brief__head strong { font-size: .82rem; color: #f8c3a9; }
        .editorial-brief__grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .editorial-brief__item { min-height: 9.5rem; padding: 1.35rem; border-right: 1px solid rgba(26,23,20,.1); }
        .editorial-brief__item:last-child { border-right: 0; }
        .editorial-brief__label { display: block; margin-bottom: .65rem; color: #c8522a; font-size: .72rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
        .editorial-brief__item p { margin: 0; font-size: .94rem; line-height: 1.55; }
        .article-jump-links { margin: 2.25rem 0 3.5rem; border-top: 1px solid rgba(26,23,20,.12); border-bottom: 1px solid rgba(26,23,20,.12); padding: 1rem 0; }
        .article-jump-links span { display: block; margin-bottom: .55rem; color: #766d65; font-size: .7rem; font-weight: 800; letter-spacing: .13em; text-transform: uppercase; }
        .article-jump-links a { display: inline-block; margin: .2rem 1rem .2rem 0; font-size: .9rem; }
        .takeaway-panel { margin: 2.25rem 0 3.75rem; border-radius: 1.25rem; background: linear-gradient(135deg, #fff3ea, #fffaf5); padding: 1.6rem; }
        .takeaway-panel h2 { margin: 0 0 .9rem; padding: 0; border: 0; font-size: 1.8rem; }
        .takeaway-panel ul { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .3rem 1.6rem; margin: 0; padding-left: 1.2rem; }
        .research-figure { margin: 2.5rem 0 3.25rem; border: 1px solid rgba(26,23,20,.1); border-radius: 1.25rem; background: #fff; padding: 1.25rem; }
        .research-figure svg { display: block; width: 100%; height: auto; }
        .research-figure figcaption { margin-top: .9rem; color: #766d65; font-size: .86rem; line-height: 1.45; }
        .workflow-steps { list-style: none; margin: 1.75rem 0; padding: 0; counter-reset: workflow; }
        .workflow-steps li { position: relative; margin: 0 0 .85rem; padding: 1.2rem 1.2rem 1.2rem 4rem; border: 1px solid rgba(26,23,20,.1); border-radius: 1rem; background: #fff; }
        .workflow-steps li::before { position: absolute; left: 1.1rem; top: 1.1rem; width: 2rem; height: 2rem; border-radius: 999px; background: #201d1a; color: #fff; content: counter(workflow); counter-increment: workflow; display: grid; place-items: center; font-size: .78rem; font-weight: 800; }
        .workflow-steps strong { display: block; color: #1a1714; font-size: 1rem; }
        .research-note { margin: 2rem 0; border-radius: 1rem; border: 1px solid rgba(45,106,79,.2); background: #f3faf5; padding: 1.25rem 1.35rem; }
        .research-note__label { margin-bottom: .45rem; color: #2d6a4f; font-size: .72rem; font-weight: 800; letter-spacing: .13em; text-transform: uppercase; }
        .research-note p:last-child { margin-bottom: 0; }
        @media (max-width: 640px) { .editorial-brief__grid, .takeaway-panel ul { grid-template-columns: 1fr; } .editorial-brief__item { min-height: 0; border-right: 0; border-bottom: 1px solid rgba(26,23,20,.1); } .editorial-brief__item:last-child { border-bottom: 0; } .editorial-content h2 { margin-top: 3.25rem; } }
      `}</style>
      <div 
        className="editorial-content prose prose-slate max-w-none mb-16"
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
              Research-led guidance on AI tools, grounded in public product documentation and linked sources.
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
          Research-led guides, comparisons, and practical AI tool workflows
        </p>
        <a href="/tools" className="inline-block bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-sm font-medium transition-colors">
          Browse All Tools
        </a>
      </div>
    </article>
  );
};
