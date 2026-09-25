# Daily Blog Publishing Guide

This repository's blog process is based on the current editorial guidance in
https://github.com/AgriciDaniel/claude-blog

## Mandatory editorial reference

Before writing or updating any article, always consult the latest main branch of claude-blog. Do not rely on a remembered copy. Record the upstream commit SHA used for the run so the editorial baseline is reproducible.

At minimum, review:
- skills/blog/SKILL.md
- skills/blog-write/SKILL.md
- skills/blog/templates/<selected-template>.md
- skills/blog/references/content-templates.md
- skills/blog/references/research-quality.md
- skills/blog/references/synthesis-contract.md
- skills/blog/references/visual-media.md
- skills/blog/references/eeat-signals.md
- skills/blog/references/internal-linking.md
- skills/blog/references/quality-scoring.md
- skills/blog/references/editorial-heuristics.md
- skills/blog/references/ai-slop-detection.md
- skills/blog/references/blog-delivery-contract.md
- skills/blog-write/references/delivery.md
- agents/blog-reviewer.md

The reference repository is an editorial baseline. Adapt its rules to this site's React + TypeScript implementation. For claude-blog v2.2.0, treat the five-gate delivery contract as the quality model: capability discovery, format completeness, visual verification, blocking content review, and asset/link integrity. Do not claim the upstream markdown/PDF pipeline passed when only the NewAITools adaptation was checked.

## Publishing flow

Discover topic -> choose search intent -> choose claude-blog template -> research -> verify evidence -> outline -> write -> add visuals -> add internal links -> update linked workflows/tools/pages -> QA -> build -> commit -> deploy

## Research

Use current web research. Prefer primary sources for product capabilities, pricing, limits, policies, and technical behavior. Use independent sources when they add evidence or context.

For material public claims:
- Verify the claim in the original source.
- Keep the relevant publication or update date when it affects interpretation.
- Include the publisher/source name and a stable URL.
- Record methodology or limitations when they matter.
- Drop unsupported statistics instead of keeping them with vague wording.
- Treat citations as verification paths, not proof by themselves.
- For time-sensitive or changing product information, re-check the current official documentation in the same run.

Do not fabricate statistics, benchmarks, pricing, usage limits, product capabilities, quotes, first-hand tests, customer results, source titles, screenshots, or other evidence.

## Template selection

Choose the template that matches the actual reader intent.
- How-to/process -> how-to-guide
- Best/list -> listicle
- Case study/results -> case-study
- X vs Y -> comparison
- Broad comprehensive topic -> pillar-page
- Genuine hands-on review -> product-review
- Opinion/trend analysis -> thought-leadership
- Multi-source/expert collection -> roundup
- Technical walkthrough with tested code -> tutorial
- Timely announcement/news -> news-analysis
- Original research -> data-research
- Q&A reference -> faq-knowledge

Do not call something a review or case study without the corresponding evidence.

## Article structure

Use one H1, then H2 and H3 only.

Important sections should answer the heading early. A summary or Key Takeaways block should appear near the top when it helps the reader.

Use tables, lists, diagrams, screenshots, or charts only when they clarify the material. Prefer useful visuals over decorative filler.

FAQ sections are optional and should answer genuine reader questions.

Avoid formulaic AI prose, repetitive transitions, vague superlatives, and em/en dashes in synthesized prose.

For longer posts, add a table of contents or jump navigation when it materially improves scanning. Do not force navigation, charts, statistics, FAQs, or fixed word counts when the topic does not warrant them.

## Internal linking

Each article should contain contextual internal links to relevant pages.

Use descriptive anchors and link to the page that actually delivers on the promise.

Every new article must be checked for:
- at least 3 contextual internal links when relevant
- no generic anchors such as click here, read more, or this article
- no broken URLs
- no unresolved INTERNAL-LINK placeholders
- reciprocal links where they are contextually useful
- no orphaning of the new page

## Critical workflow consistency rule

A blog link is a promise of a useful next step.

Whenever an article mentions or links to a workflow:
1. Open the workflow page.
2. Verify the tools and sequence against current official documentation.
3. Update the workflow in the same change when anything is missing or stale.
4. Make each step executable and example-driven.
5. Show Input -> Action -> Example -> Expected Output -> Quality Gate -> Handoff.
6. Explain manual versus automatic handoffs where relevant.
7. Make sure the article uses the same examples, tool names, sequence, and verification logic.
8. Update any linked tool entry, category page, renderer, sitemap, or related article required by the change.

This rule applies both to scheduled and manual publishing.

## Technical publishing

The site's current blog schema is TypeScript data rendered by BlogPostView.tsx.

When adding a post:
- Register it in frontend/data/blogs/index.ts.
- Keep the slug stable once published.
- Add a local raster cover/OG asset where possible; raw SVG should not be used as the social OG image.
- Use descriptive alt text for every image.
- Confirm canonical, Open Graph, Twitter, and BlogPosting metadata through the existing SEO layer.
- Use the site's existing HTML structure: section class="prose-article".
- Keep external source URLs as normal HTML links. Never paste tool citation tokens into TypeScript source.
- Keep inline SVGs sanitized and accessible when used.
- Update supporting pages whenever article claims or links require it.
- Run npm run build before publication when the environment allows it.

## Quality review

Before publication, perform:
1. factual/source review
2. structure and readability review
3. internal-link audit
4. asset and image-alt audit
5. metadata/canonical/OG review
6. workflow/tool/category consistency audit
7. editorial pattern review for repetitive or formulaic structure
8. final sweep for placeholders, fabricated claims, unsupported first-person experience, and em/en dashes

The upstream claude-blog delivery contract calls for reviewer score >= 90/100 and zero P0 issues. Apply that as the editorial target for automated blog work.

## Maintenance

Substantive changes should update modifiedDate.

Do not change dates merely to create freshness signals.

Update existing posts when a material product change, factual correction, broken link, workflow mismatch, or editorial-quality issue is discovered. Re-check the latest claude-blog main branch before every maintenance pass.
