import fs from 'fs';
import path from 'path';
import { BLOG_POSTS, CATEGORIES, TOOLS } from './frontend/data.ts';
import { WORKFLOWS } from './frontend/workflows.ts';
import { categorySlug } from './frontend/utils/categoryRoutes.ts';

const DOMAIN = 'https://www.newaitools.online';
const dist = path.join(__dirname, 'frontend', 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

type Page = { path: string; title: string; description: string; heading: string; body: string };
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char] || char));
const pageUrl = (route: string) => `${DOMAIN}${route === '/' ? '/' : route}`;

const pages: Page[] = [
  { path: '/', title: 'Best AI Tools Directory 2026: Compare AI Software & Workflows', description: 'Compare the best AI tools for writing, research, design, video, coding, business, and more.', heading: 'Find the right AI tool for what’s next.', body: 'Research-led AI tool reviews, comparisons, categories, and practical workflows.' },
  { path: '/tools', title: 'Best AI Tools Directory: Compare AI Software | newaitools', description: 'Browse and compare AI tools by category, use case, pricing model, and workflow.', heading: 'Explore AI tools', body: `Browse ${TOOLS.length} AI tools across ${CATEGORIES.length} practical categories.` },
  { path: '/categories', title: 'AI Tool Categories: Find Software by Use Case | newaitools', description: 'Explore AI tool categories for writing, research, design, coding, marketing, productivity, and more.', heading: 'What do you want to get done?', body: `Explore ${CATEGORIES.length} AI software categories by use case.` },
  { path: '/workflows', title: 'AI Workflows: Practical Toolchains from Idea to Finish | newaitools', description: 'Follow practical AI workflows that connect tools into repeatable steps.', heading: 'A tool is a start. A workflow gets it done.', body: `${WORKFLOWS.length} practical workflows for turning ideas into finished work.` },
  { path: '/about', title: 'About us | newaitools', description: 'Learn how newaitools researches and presents AI tools, software, and workflows.', heading: 'About newaitools', body: 'An independent directory for comparing AI software and building practical workflows.' },
  { path: '/contact', title: 'Contact | newaitools', description: 'Contact newaitools about corrections, partnerships, and site feedback.', heading: 'Contact newaitools', body: 'Send corrections for outdated prices, broken links, missing tools, or factual errors.' },
  { path: '/privacy-policy', title: 'Privacy policy | newaitools', description: 'Privacy information for visitors to newaitools.online.', heading: 'Privacy policy', body: 'Information about analytics, cookies, third-party services, and privacy requests.' },
  { path: '/terms-of-service', title: 'Terms of service | newaitools', description: 'Terms for using the newaitools.online directory and editorial content.', heading: 'Terms of service', body: 'Terms for using this informational directory, its comparisons, and external links.' },
  { path: '/blog', title: 'AI Tools Blog: Reviews, Comparisons & Workflows | newaitools', description: 'Research-led AI tool reviews, comparisons, tutorials, and practical workflows.', heading: 'The newaitools blog', body: `${BLOG_POSTS.length} research-led articles about AI tools and workflows.` },
];

for (const category of CATEGORIES.filter(category => TOOLS.some(tool => tool.category === category))) {
  const route = `/category/${categorySlug(category)}`;
  pages.push({ path: route, title: `${category} AI Tools: Best Software & Workflows | newaitools`, description: `Compare AI tools for ${category.toLowerCase()}, including practical uses, pricing labels, and workflow guidance.`, heading: `${category} AI tools`, body: `Browse tools and workflows for ${category.toLowerCase()}.` });
}
for (const workflow of WORKFLOWS) pages.push({ path: `/workflow/${workflow.slug}`, title: `${workflow.shortTitle} | AI Workflow | newaitools`, description: workflow.tagline, heading: workflow.shortTitle, body: workflow.tagline });
for (const tool of TOOLS) pages.push({ path: `/tool/${tool.id}`, title: `${tool.name}: Uses, Pricing & Details | newaitools`, description: tool.description, heading: tool.name, body: `${tool.description} Category: ${tool.category}. Pricing label: ${tool.pricing}.` });
for (const post of BLOG_POSTS) pages.push({ path: `/blog/${post.slug}`, title: `${post.title} | newaitools`, description: post.excerpt, heading: post.title, body: post.excerpt });

const inject = (html: string, page: Page) => {
  const canonical = pageUrl(page.path);
  const schema = JSON.stringify({ '@context': 'https://schema.org', '@type': 'WebPage', name: page.title, description: page.description, url: canonical }).replace(/</g, '\\u003c');
  const metadata = `<title>${escapeHtml(page.title)}</title><meta name="description" content="${escapeHtml(page.description)}"><link rel="canonical" href="${canonical}"><meta property="og:title" content="${escapeHtml(page.title)}"><meta property="og:description" content="${escapeHtml(page.description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${DOMAIN}/og-image.svg"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escapeHtml(page.title)}"><meta name="twitter:description" content="${escapeHtml(page.description)}"><meta name="twitter:image" content="${DOMAIN}/og-image.svg"><script type="application/ld+json">${schema}</script>`;
  const content = `<main id="seo-prerender" data-route="${escapeHtml(page.path)}"><h1>${escapeHtml(page.heading)}</h1><p>${escapeHtml(page.body)}</p><nav aria-label="Primary"><a href="/tools">AI tools</a> <a href="/categories">Categories</a> <a href="/workflows">Workflows</a> <a href="/blog">Blog</a></nav></main>`;
  const cleaned = html
    .replace(/\s*<title>[\s\S]*?<\/title>/, '')
    .replace(/\s*<meta name="description"[^>]*>/g, '')
    .replace(/\s*<link rel="canonical"[^>]*>/g, '')
    .replace(/\s*<meta property="og:[^"]+"[^>]*>/g, '')
    .replace(/\s*<meta name="twitter:[^"]+"[^>]*>/g, '');
  return cleaned
    .replace('</head>', `${metadata}</head>`)
    .replace(/<div id="root">[\s\S]*<\/div>\s*<\/body>/, `<div id="root">${content}</div>\n</body>`);
};

for (const page of pages) {
  const target = page.path === '/' ? path.join(dist, 'index.html') : path.join(dist, page.path.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, inject(template, page));
}
console.log(`Generated static SEO HTML for ${pages.length} routes.`);
