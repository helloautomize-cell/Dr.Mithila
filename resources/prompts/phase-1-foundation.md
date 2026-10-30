# Phase 1 · Foundation and styleguide
Branch: phase-1. Deploy a Vercel preview. Do not merge to main until I approve.

Read resources/docs/design-development-plan.md fully (section 0 overrides everything) and open resources/reference/the-mental-health-preview.html in a browser. Before starting, confirm these paths exist and list them: resources/docs/design-development-plan.md, resources/docs/new-website-content.md, resources/docs/site-plan.md, resources/reference/the-mental-health-preview.html, resources/images/. If any is missing, STOP and tell me.

Non-negotiables: tokens and fonts exactly as plan section 2 (Figtree, Instrument Serif italic for one accent word per heading, Noto Sans Devanagari); paper background #FAF7F2; body text at least 17px; tap targets 48px; contrast AA; all motion respects prefers-reduced-motion; no em or en dashes in copy; no "best", "cure", "guaranteed", testimonials or ratings; Tele-MANAS 14416 and 112 on every page; she is a psychologist, not a psychiatrist; never call the team small; every section carries icons, imagery or motion, never plain text alone.

## Tasks
1. Create the Next.js app (App Router, TypeScript strict, Tailwind v4, ESLint, Prettier) next to resources/ without touching it.
2. Implement all tokens from plan section 2 as CSS variables and Tailwind theme. Load fonts with next/font, self-hosted; preload only Figtree.
3. Create lib/icons.ts with every line icon used in the reference (copy the SVG paths from the reference script), plus an <Icon> and <IconTile> component.
4. Write scripts/process-images.mjs (sharp): from resources/images/ produce public/images/ in WebP and AVIF at 640, 960, 1280, 1600 widths, plus public/images/alt-text.json.
5. Build /styleguide (noindex) showing every component in plan section 3 with real copy: BookButton, GhostButton, Eyebrow, IconTile, WordReveal, CharReveal, CredentialPanel, OrbitExplorer (SVG brain with roots, rings, six nodes), PhotoCollage35, WaterfallTimeline, AudiencePicker, JourneyScroller, TeamGrid, AwardCard, ServiceRow, MapIllustration, CrisisStrip, HelpCallout, MobileActionBar in a phone frame, ScrollProgress, swatches with a contrast table, type scale with a Devanagari sample.
Acceptance: matches the reference at 390 and 1440; Lighthouse accessibility 100 on /styleguide; no console errors; reduced motion verified.

## Report
- What was built, by part; deviations and why
- Screenshots at 390 and 1440 of every new page or component, side by side with the reference
- Tests run and results
- Remaining issues
STOP after this. Do not start the next phase.
