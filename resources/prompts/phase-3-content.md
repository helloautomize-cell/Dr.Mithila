# Phase 3 · Content pipeline and all pages
Branch: phase-3. Deploy a Vercel preview. Do not merge to main until I approve.

Read resources/docs/design-development-plan.md fully (section 0 overrides everything) and open resources/reference/the-mental-health-preview.html in a browser. Before starting, confirm these paths exist and list them: resources/docs/design-development-plan.md, resources/docs/new-website-content.md, resources/docs/site-plan.md, resources/reference/the-mental-health-preview.html, resources/images/. If any is missing, STOP and tell me.

Non-negotiables: tokens and fonts exactly as plan section 2 (Figtree, Instrument Serif italic for one accent word per heading, Noto Sans Devanagari); paper background #FAF7F2; body text at least 17px; tap targets 48px; contrast AA; all motion respects prefers-reduced-motion; no em or en dashes in copy; no "best", "cure", "guaranteed", testimonials or ratings; Tele-MANAS 14416 and 112 on every page; she is a psychologist, not a psychiatrist; never call the team small; every section carries icons, imagery or motion, never plain text alone.

## Tasks
1. Move every page from resources/docs/new-website-content.md into resources/content/**.md with Zod-validated frontmatter (title, description, url, reviewer, lastReviewed, schema, related, icon).
2. Render every URL in site-plan.md section 2 using the templates in plan section 4 (profile, team, services hub, concern and therapy template, first session, contact, FAQs, get help now, library, legal, thank you). Every block gets an icon; every page has at least one reveal or scroll moment.
3. [CONFIRM] renders as a yellow chip in development and is hidden in production. Add npm run launch-check that lists every remaining [CONFIRM] and fails if any exist.
4. One schema @graph per page per site-plan.md section 7. 301 redirects from site-plan.md section 10. trailingSlash true. SITE_INDEXABLE=false (noindex header, meta and robots Disallow).
Acceptance: every route returns 200, launch-check output attached, no nested interactive elements.

## Report
- What was built, by part; deviations and why
- Screenshots at 390 and 1440 of every new page or component, side by side with the reference
- Tests run and results
- Remaining issues
STOP after this. Do not start the next phase.
