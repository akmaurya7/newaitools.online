/**
 * Sitemap Generator
 * Generates XML sitemaps for SEO
 * Run: npx tsx generate-sitemap.ts
 */

import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://designai.tools';

interface URLEntry {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

const generateURL = (url: URLEntry): string => {
  return `  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`;
};

const generateMainSitemap = (): string => {
  const urls: URLEntry[] = [
    {
      loc: `${DOMAIN}/`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: 1.0
    },
    {
      loc: `${DOMAIN}/blog`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: 0.9
    },
    // Tool category pages
    {
      loc: `${DOMAIN}/?category=Logo Design`,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      loc: `${DOMAIN}/?category=UI/UX`,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      loc: `${DOMAIN}/?category=Image Gen`,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      loc: `${DOMAIN}/?category=Video`,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      loc: `${DOMAIN}/?category=Presentations`,
      changefreq: 'weekly',
      priority: 0.7
    },
    {
      loc: `${DOMAIN}/?category=Copywriting`,
      changefreq: 'weekly',
      priority: 0.7
    }
  ];

  const urlEntries = urls.map(generateURL).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};

const generateBlogSitemap = (): string => {
  // In production, this would read from your blog data
  const blogPosts = [
    {
      slug: 'best-ai-tools-for-freelance-designers-2026',
      publishDate: '2026-01-15'
    },
    {
      slug: 'how-i-used-framer-ai-to-deliver-a-client-site-in-4-hours',
      publishDate: '2026-01-10'
    },
    {
      slug: 'canva-pro-vs-adobe-firefly-comparison-2026',
      publishDate: '2026-01-05'
    }
  ];

  const urls: URLEntry[] = blogPosts.map(post => ({
    loc: `${DOMAIN}/blog/${post.slug}`,
    lastmod: post.publishDate,
    changefreq: 'monthly',
    priority: 0.8
  }));

  const urlEntries = urls.map(generateURL).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};

const generateSitemapIndex = (): string => {
  const sitemaps = [
    {
      loc: `${DOMAIN}/sitemap.xml`,
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      loc: `${DOMAIN}/blog-sitemap.xml`,
      lastmod: new Date().toISOString().split('T')[0]
    }
  ];

  const sitemapEntries = sitemaps.map(sm => `  <sitemap>
    <loc>${sm.loc}</loc>
    <lastmod>${sm.lastmod}</lastmod>
  </sitemap>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`;
};

// Generate all sitemaps
const main = () => {
  const publicDir = path.join(__dirname, 'frontend', 'public');
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Write main sitemap
  fs.writeFileSync(
    path.join(publicDir, 'sitemap.xml'),
    generateMainSitemap()
  );
  console.log('✓ Generated sitemap.xml');

  // Write blog sitemap
  fs.writeFileSync(
    path.join(publicDir, 'blog-sitemap.xml'),
    generateBlogSitemap()
  );
  console.log('✓ Generated blog-sitemap.xml');

  // Write sitemap index
  fs.writeFileSync(
    path.join(publicDir, 'sitemap_index.xml'),
    generateSitemapIndex()
  );
  console.log('✓ Generated sitemap_index.xml');

  console.log('\nSitemaps generated successfully!');
};

main();
