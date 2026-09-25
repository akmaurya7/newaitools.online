# Blog Writing Reference Contract

This repository uses **AgriciDaniel/claude-blog** as the required upstream editorial reference for all new and updated blog content.

Reference repository:
https://github.com/AgriciDaniel/claude-blog

## Required rule

Before writing, rewriting, researching, reviewing, or publishing any blog post, consult the latest `main` branch of the reference repository. Do not rely on a remembered or copied version of its guidance.

At minimum, review:

- `skills/blog/SKILL.md`
- `skills/blog-write/SKILL.md`
- `skills/blog/templates/<selected-template>.md`
- `skills/blog/references/blog-delivery-contract.md`
- `skills/blog/references/research-quality.md`
- `skills/blog/references/synthesis-contract.md`
- `skills/blog/references/visual-media.md`
- `skills/blog/references/eeat-signals.md`
- `skills/blog/references/internal-linking.md`
- `skills/blog/references/quality-scoring.md`
- `agents/blog-reviewer.md`

## NewAITools adaptation

The reference repository is an editorial and QA baseline, not a requirement to copy its exact file format. Adapt its principles to the React + TypeScript data model used by this site.

Every published article should:

1. Match the reader's search intent and use the appropriate content template.
2. Start answer-first and include a useful **Key Takeaways** section when it helps.
3. Use a clean H1 > H2 > H3 hierarchy.
4. Use current, authoritative sources for load-bearing claims.
5. Never invent statistics, pricing, product limits, capabilities, tests, quotes, or first-hand experience.
6. Distinguish documentation-based analysis from genuine hands-on testing.
7. Use contextual internal links with descriptive anchor text.
8. Use visuals when they improve understanding, with accurate alt text.
9. Remove all draft placeholders before publication.
10. Keep citations close to the claims they support and avoid duplicate source dumps.
11. Avoid em dashes and en dashes in synthesized article prose.
12. Maintain accurate publish/modified dates and page metadata.
13. Review product, pricing, workflow, and capability claims against current official documentation.
14. Run the site's own build/QA checks where available before publishing.

## Workflow consistency rule

A blog link is a promise of a useful next step.

Whenever an article describes, recommends, or links to a workflow, audit that workflow page in the same change. The workflow must be:

**Input -> Action -> Example -> Expected Output -> Quality Gate -> Handoff**

The article and workflow must describe the same tools, sequence, examples, and verification logic. Explain which handoffs are manual and which are automatic when relevant.

If a tool capability, category, related article, workflow, or renderer must change to keep the article correct, update the required supporting page in the same change.

## Comparison and review rule

Comparisons should describe documented differences and meaningful trade-offs without inventing benchmark results.

A product review may claim hands-on findings only when the test actually happened and the methodology or evidence can be inspected.

## Maintenance rule

When upstream `claude-blog` changes, future blog runs must re-check the current reference and apply relevant changes. Existing articles should be updated when a material editorial, factual, SEO, or workflow-consistency issue is discovered.
