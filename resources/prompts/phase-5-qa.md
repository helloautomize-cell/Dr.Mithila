# Phase 5 · Health Library, preview deploy and QA
Branch: phase-5. Deploy a Vercel preview. Do not merge to main until I approve.

Read resources/docs/design-development-plan.md fully (section 0 overrides everything) and open resources/reference/the-mental-health-preview.html in a browser. Before starting, confirm these paths exist and list them: resources/docs/design-development-plan.md, resources/docs/new-website-content.md, resources/docs/site-plan.md, resources/reference/the-mental-health-preview.html, resources/images/. If any is missing, STOP and tell me.

Non-negotiables: tokens and fonts exactly as plan section 2 (Figtree, Instrument Serif italic for one accent word per heading, Noto Sans Devanagari); paper background #FAF7F2; body text at least 17px; tap targets 48px; contrast AA; all motion respects prefers-reduced-motion; no em or en dashes in copy; no "best", "cure", "guaranteed", testimonials or ratings; Tele-MANAS 14416 and 112 on every page; she is a psychologist, not a psychiatrist; never call the team small; every section carries icons, imagery or motion, never plain text alone.

## Tasks
1. Health Library list and post templates; publish the 3 starter posts named in the content file.
2. Deploy the preview (noindex). Run Lighthouse mobile 3 times on the deployed URL for Home, profile, anxiety and contact; report medians (targets: performance 90+, accessibility 100, best practices 100).
3. Playwright tests: no overflow at 390/768/1024/1440; no a a, a button, button a; crisis numbers visible on every route; reduced motion disables orbit spin, journey pinning, char reveal and waterfall shimmer.
4. Write client-inputs-needed.md from launch-check output.
Acceptance: all tests green; medians reported.

## Report
- What was built, by part; deviations and why
- Screenshots at 390 and 1440 of every new page or component, side by side with the reference
- Tests run and results
- Remaining issues
STOP after this. Do not start the next phase.
