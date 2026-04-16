# Quick Reference: SEO & Blog Publishing

## 🚀 Launch Checklist (Before Going Live)

```
☐ Domain configured in meta tags
☐ OG image created (1200x630px) 
☐ All internal links tested
☐ Mobile responsiveness verified
☐ Build successful: npm run build
☐ Deploy to Vercel/hosting
☐ Sitemap submitted to Google Search Console
☐ Google Analytics 4 installed
☐ Robots.txt accessible at /robots.txt
☐ Security headers configured
☐ 301 redirects setup (if migrating)
```

---

## 📝 Blog Post Structure Template

```typescript
{
  id: 'post-[number]',
  slug: 'your-post-slug',
  category: 'Guide',
  title: 'Main Keyword: How to Achieve Goal (2026)',
  excerpt: 'Compelling 100-150 character summary of your article.',
  content: `<section class="prose-article">
    <h1>Title Here</h1>
    <p>Opening paragraph with context and benefit.</p>
    
    <h2>Key Section 1</h2>
    <p>Details and explanation</p>
    
    <h2>Key Section 2</h2>
    <ul>
      <li>Benefit 1</li>
      <li>Benefit 2</li>
    </ul>
    
    <h2>Conclusion</h2>
    <p>Summary with CTA</p>
  </section>`,
  author: 'Your Name',
  publishDate: '2026-02-16',
  readTime: 10,
  tags: ['tag1', 'tag2', 'tag3'],
  featured: false,
}
```

---

## 📊 SEO Checklist Per Post

```
Title & Meta:
☐ Title: 50-60 chars with primary keyword
☐ Meta description: 150-160 chars
☐ Unique (no duplicates across site)
☐ Goal-oriented language

Content:
☐ 800+ words minimum (1000-2000 ideal)
☐ H1 title once per page
☐ H2/H3 hierarchy logical
☐ Paragraphs 2-4 sentences max
☐ 3-5 internal links naturally placed
☐ Main keyword in first paragraph
☐ Key terms in bold for scannability

Structure:
☐ Introduction with context
☐ Main points with subheadings
☐ Lists for easy reading
☐ Conclusion with CTA
☐ Links to related content

Technical:
☐ Images with alt text
☐ No 404 links
☐ Mobile preview tested
☐ Read time estimate accurate
☐ Tags relevant (3-5)
☐ Author specified
```

---

## 🔗 Important URLs

```
Sitemap:        /sitemap.xml
Blog Sitemap:   /blog-sitemap.xml
Robots.txt:     /robots.txt
Blog Index:     /#blog
Blog Post:      /#blog-post:your-slug
```

---

## 💡 Content Ideas (Copy & Paste)

### Guides
- "How to Use [Tool] for [Task] in 5 Steps"
- "Complete Beginner's Guide to [Tool]"
- "Best Practices for [Category] Tools"
- "[Tool] Tutorial: From Setup to Results"

### Case Studies
- "How I [Achieved X] Using [Tool] in [Timeframe]"
- "Real Workflow: [Designer Name]'s Process"
- "Before & After: Using [Tool] for [Task]"

### Comparisons
- "[Tool A] vs [Tool B]: Which is Better?"
- "Free Alternatives to [Premium Tool]"
- "Comparing [Category]: Top 5 Tools Reviewed"

### Interviews
- "Interview: [Designer] on AI Tools & Workflow"
- "Expert Q&A: Everything About [Tool]"

### Roundups
- "Best AI Tools for [Category] in 2026"
- "[Tool Category] Tools: Weekly Roundup"
- "Hidden Gems: Underrated Design Tools"

---

## 📈 Keyword Research Quick Tips

```
1. Start with: who, what, when, where, why questions
2. Use AnswerThePublic.com to find exact questions
3. Check Google autocomplete for related keywords
4. Look at "People also ask" on Google SERP
5. Analyze top 5 ranking articles for keywords
6. Use free tool: Ubersuggest keyword research
```

**Target**: 
- Long-tail keywords (3-4 words)
- Lower competition
- High search intent
- Less than 10K monthly searches to start

---

## 🔄 Publishing Frequency Guide

| Experience | Frequency | Target |
|------------|-----------|--------|
| Getting Started | 3-5/week | Build authority |
| Established | 2-3/week | Maintain ranking |
| Mature Blog | 1-2/week | Quality focus |

**Golden Rule**: Consistent > Perfect

---

## 📍 File Locations You Need to Know

```
EDIT BLOG POSTS HERE:
→ frontend/data.ts (find BLOG_POSTS array)

EDIT SITE META TAGS:
→ frontend/index.html (head section)

EDIT SEO SETTINGS:
→ frontend/utils/SEOManager.ts

ADD TOOLS TO DIRECTORY:
→ frontend/data.ts (TOOLS array)

BRAND COLORS/FONTS:
→ frontend/vite.config.ts (tailwind config)
```

---

## 🎯 Monthly SEO Checklist

```
WEEK 1: Planning
☐ Identify keywords for the month
☐ Plan content calendar
☐ Outline 4-5 blog posts

WEEK 2: Creation
☐ Write 2-3 draft posts
☐ Internal link planning
☐ Image asset gathering

WEEK 3: Publishing
☐ Publish 3-5 posts
☐ Submit URLs to Search Console
☐ Share on social media

WEEK 4: Analysis
☐ Check Google Search Console
☐ Review analytics
☐ Update top-performing posts
☐ Plan next month
```

---

## 🛠️ Common Tasks

### Add New Blog Post
1. Edit `frontend/data.ts`
2. Add BlogPost to BLOG_POSTS array
3. Run `npm run build`
4. Deploy
5. Submit URL to Search Console

### Update Existing Post
1. Edit content in `frontend/data.ts`
2. Update `modifiedDate` field
3. Run `npm run build`
4. Deploy
5. Request re-indexing in Search Console

### Check Rankings
1. Go to Google Search Console
2. Click "Performance"
3. View "Average position" for keywords
4. Sort by "Impressions" to find visibility

### Monitor Traffic
1. Google Analytics 4
2. Left menu → "Reports"
3. "Realtime" for live visitors
4. "Traffic" for trends

---

## 🚨 SEO Mistakes to Avoid

```
❌ NEVER:
- Duplicate meta descriptions
- Keyword stuff for ranking
- Copy competitor content
- Ignore internal linking
- Publish thin content (<300 words)
- Add broken links
- Use auto-generated content
- Keywords in wrong places

✅ DO:
- Write for humans first
- Use keywords naturally
- Create unique value
- Link strategically
- Update old posts
- Test all links
- Review analytics
- Publish consistently
```

---

## 📊 Metrics to Track

```
PRIMARY:
- Organic traffic (Google Analytics)
- Keyword rankings (Google Search Console)
- Click-through rate (Search Console)
- Pages per session (Analytics)

SECONDARY:
- Bounce rate
- Average session duration
- Conversion rate (if applicable)
- Backlinks (Ahrefs/SEMrush)

TOOLS:
- Google Search Console (Free)
- Google Analytics 4 (Free)
- Ubersuggest (Freemium)
- AnswerThePublic (Freemium)
```

---

## 💬 Need Help?

```
For SEO Best Practices:
→ Read: SEO_IMPLEMENTATION_GUIDE.md

For Blog Publishing:
→ Read: DAILY_BLOG_GUIDE.md

For Code Questions:
→ Check: Component files (commented)

For Google Stuff:
→ Visit: Google Search Console & Analytics
```

---

## 🎓 Learning Resources

```
Keyword Research:
- Google Trends
- AnswerThePublic
- Ahrefs Blog
- Moz Learning Center

Content Strategy:
- HubSpot Blog
- Neil Patel
- Backlinko
- Search Engine Journal

Technical SEO:
- Google Search Central
- Moz Technical SEO
- Screaming Frog (tool)
- GTmetrix (site speed)
```

---

**Bookmark this page in your browser for quick reference!**

*Last updated: April 16, 2026*
