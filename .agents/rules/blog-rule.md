# Blog Writing Rules

Whenever you are asked to write, rewrite, analyze, or audit a blog post for this project, you **MUST** use the skills provided by the `claude-blog` plugin and operate using the high-tier `gemini-3.1-pro` model capabilities for maximum reasoning and deep research.

1. Always read the relevant skill instructions (e.g., `blog-write`, `blog-rewrite`, `blog-seo-check`) before starting.
2. Adhere to the formatting, structure, and quality standards defined in those skills.
3. Incorporate Key Takeaways, FAQs, answer-first formatting, and maintain a highly focused narrative.
4. **Sitemap Indexing:** Whenever a new blog is written and added to the project, you must ensure the sitemap is updated so the blog is indexed. For this project, run `npx tsx generate-sitemap.ts` (or the equivalent command to execute `generate-sitemap.ts`) to regenerate the sitemaps.
5. **Git Push:** After writing any blogs, regenerating sitemaps, or making any content updates, you must always commit and push the changes to GitHub.
6. **Attention-Grabbing Titles:** Further, if you write any blog, you must give it a title that quickly grabs attention (e.g., highly engaging, curiosity-inducing, or strongly benefit-driven).
7. **Deep Dive Research:** You must perform a complete deep dive research using web search for every blog. Gather accurate, in-depth data, latest statistics, and deep insights before writing. Do not just summarize surface-level marketing copy.
8. **Minimalist Images:** Any generated images must be "light, clean, and minimal editorial illustrations". Use a soft, modern color palette with negative space that matches the aesthetic established in the NotebookLM blog. Avoid overly complex, busy, or hyper-realistic images. Use `gemini-3.1-pro-image` if available.
9. **Monetization & Strategy:** All blogs must fit into one of four high-converting formats:
   - "X vs Y" comparisons for bottom-of-funnel users.
   - "Best [Category] Tools for [Specific Audience]" listicles.
   - Data-Driven Workflow Tutorials showing how to combine tools.
   - Deep-Dive Single Tool Reviews.
10. **Writing Style Strictness:** Use an "Answer-First" introduction (answer the query in paragraph 1). Use hard data instead of adjectives (e.g., "generated in 42 seconds" not "it's really fast"). Always interlink to specific tool and category pages on this site.
