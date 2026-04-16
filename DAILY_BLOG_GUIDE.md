# Daily Blog Publishing Quick Start

## For Publishing Daily Blog Posts

### 1. Create Blog Post Content

**File to edit**: `/frontend/data.ts`

Add your new BlogPost at the top of the array:

```typescript
{
  id: 'post-5',
  slug: 'your-slug-url-format', // e.g., 'best-ui-tools-2026'
  category: 'Guide' | 'Case Study' | 'Comparison' | 'Tutorial' | 'Interview',
  title: 'Your SEO-Optimized Title Here',
  excerpt: 'Short preview shown in blog listings (100-150 chars)',
  content: `<section class="prose-article">
    <h1>Title Matching H1</h1>
    <p>Introduction paragraph</p>
    
    <h2>Section Title</h2>
    <p>Your content here with <strong>bold</strong> and <em>italic</em></p>
    
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
  </section>`,
  author: 'Your Name',
  publishDate: '2026-02-16', // YYYY-MM-DD format
  modifiedDate: undefined, // Update if edited later
  readTime: 10, // Estimated minutes to read
  tags: ['tag1', 'tag2', 'tag3'], // 3-5 relevant tags
  featured: false, // Set to true for featured on homepage
}
```

### 2. SEO Checklist

Before hitting publish, verify:

- ✅ **Title**: 50-60 characters, includes main keyword
- ✅ **Excerpt**: 100-150 characters, compelling preview
- ✅ **Meta**: Unique, describes article value
- ✅ **Keywords**: Primary keyword in title, excerpt, first paragraph
- ✅ **Length**: 800+ words recommended
- ✅ **Structure**: H1 > H2 > H3 hierarchy
- ✅ **Links**: 3-5 internal links to related content
- ✅ **Formatting**: Bold key terms, lists for scannability
- ✅ **Tags**: 3-5 relevant tags for categorization
- ✅ **Read Time**: Estimate: ~200 words = 1 minute

### 3. Deploy Changes

```bash
# In your terminal
cd designai.tools

# Build the project
npm run build

# The built files are ready for deployment
```

### 4. Submit to Google

After deploying:

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "New URL" 
3. Paste your blog post URL: `https://designai.tools/blog/your-slug`
4. Click "Request Indexing"

Google will crawl and index within 24-48 hours.

---

## Content Ideas for Daily Posts

### Guiding Framework
Each post should answer ONE specific question readers have:

### Monday Ideas (Most Popular)
- "How to use [Tool] for [Task]"
- "[Tool] Tutorial for Beginners"
- "5 AI Tools for [Category]"

### Wednesday Ideas (Mid-week Boost)
- "[Tool A] vs [Tool B] Comparison"
- "Case Study: How I..."
- "Mistakes Using [Tool]"

### Friday Ideas (Weekend Resource)
- "Weekly AI Tool Roundup"
- "Designer Interview"
- "Workflow: [Designer Name]"

### Evergreen Ideas (Anytime)
- "Free Alternatives to [Premium Tool]"
- "Hidden Features in [Tool]"
- "Setup Guide: Getting Started with [Tool]"
- "Improving Your Design with [Tool]"

---

## HTML Formatting Reference

```html
<!-- Headings -->
<h2>Main Topic</h2>
<h3>Subtopic</h3>

<!-- Text styles -->
<strong>Bold text</strong>
<em>Italic text</em>
<code>code snippet</code>

<!-- Lists -->
<ul>
  <li>Unordered list item</li>
  <li>Another item</li>
</ul>

<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>

<!-- Links -->
<a href="https://example.com">Link text</a>

<!-- Blockquote -->
<blockquote>Quote text here</blockquote>

<!-- Line break -->
<hr>

<!-- Section wrapper (required) -->
<section class="prose-article">
  Your content...
</section>
```

---

## Publishing Timeline Recommendation

- **New blogs**: 3-5 posts per week minimum for first 3 months
- **Established blogs**: 2-3 posts per week consistent
- **Mature blogs**: 1-2 posts per week of high-quality content

Quality > Quantity. A single 2,000-word article beats ten 300-word ones.

---

## FAQ

**Q: How long until my posts rank?**
A: 2-6 weeks for initial crawl/index, 2-6 months to rank in top 10.

**Q: Can I edit posts after publishing?**
A: Yes! Update whenever, it improves rankings. Update `modifiedDate` in data.ts.

**Q: Should I use images?**
A: Highly recommended. Add descriptions in alt text for SEO.

**Q: What about internal links?**
A: Link to relevant blog posts and tool pages. 3-5 per post is ideal.

**Q: How do I know what to write about?**
A: Check Google Search Console for queries people use to find you, then write posts targeting those keywords.

---

## Support & Maintenance

- Check Google Search Console weekly for errors
- Monitor blog analytics in Google Analytics 4
- Update top-performing posts every 3-6 months
- Build backlinks by sharing on social/communities
- Track keyword rankings monthly

Good luck with your daily posting! 🚀
