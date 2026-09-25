/**
 * Sitemap Generator
 * Generates XML sitemaps for SEO
 * Run: npx tsx generate-sitemap.ts
 */

import fs from 'fs';
import path from 'path';
import { BLOG_POSTS, TOOLS, CATEGORIES } from './frontend/data.ts';
import { WORKFLOWS } from './frontend/workflows.ts';

const DOMAIN = 'https://newaitools.online';

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

const categorySlug = (category: string) => category.toLowerCase().replace(/[^a-z0-9]+/g, '-');

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
    {
      loc: `${DOMAIN}/categories`,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      loc: `${DOMAIN}/tools`,
      changefreq: 'daily',
      priority: 0.8
    },
    {
      loc: `${DOMAIN}/workflows`,
      changefreq: 'weekly',
      priority: 0.8
    }
  ];

  // Add all categories
  CATEGORIES.forEach(category => {
    urls.push({
      loc: `${DOMAIN}/category/${categorySlug(category)}`,
      changefreq: 'weekly',
      priority: 0.7
    });
  });

  // Add all workflows
  WORKFLOWS.forEach(workflow => {
    urls.push({
      loc: `${DOMAIN}/workflow/${workflow.slug}`,
      changefreq: 'weekly',
      priority: 0.7
    });
  });

  // Add all tools
  TOOLS.forEach(tool => {
    urls.push({
      loc: `${DOMAIN}/tool/${tool.id}`,
      changefreq: 'weekly',
      priority: 0.6
    });
  });

  const urlEntries = urls.map(generateURL).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};

const generateBlogSitemap = (): string => {
  const urls: URLEntry[] = BLOG_POSTS.map(post => ({
    loc: `${DOMAIN}/blog/${post.slug}`,
    lastmod: post.publishDate,
    changefreq: 'daily',
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
    ...(BLOG_POSTS.length > 0 ? [{
      loc: `${DOMAIN}/blog-sitemap.xml`,
      lastmod: new Date().toISOString().split('T')[0]
    }] : [])
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

  // Write a blog sitemap only while published blog posts exist.
  const blogSitemapPath = path.join(publicDir, 'blog-sitemap.xml');
  if (BLOG_POSTS.length > 0) {
    fs.writeFileSync(blogSitemapPath, generateBlogSitemap());
    console.log('✓ Generated blog-sitemap.xml');
  } else if (fs.existsSync(blogSitemapPath)) {
    fs.unlinkSync(blogSitemapPath);
    console.log('✓ Removed empty blog-sitemap.xml');
  }

  // Write sitemap index
  fs.writeFileSync(
    path.join(publicDir, 'sitemap_index.xml'),
    generateSitemapIndex()
  );
  console.log('✓ Generated sitemap_index.xml');

  console.log('\nSitemaps generated successfully!');
};

main();
