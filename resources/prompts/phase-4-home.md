# Phase 4 · Home page and templates polish
Branch: phase-4. Deploy a Vercel preview. Do not merge to main until I approve.

Read resources/docs/design-development-plan.md fully (section 0 overrides everything) and open resources/reference/the-mental-health-preview.html in a browser. Before starting, confirm these paths exist and list them: resources/docs/design-development-plan.md, resources/docs/new-website-content.md, resources/docs/site-plan.md, resources/reference/the-mental-health-preview.html, resources/images/. If any is missing, STOP and tell me.

Non-negotiables: tokens and fonts exactly as plan section 2 (Figtree, Instrument Serif italic for one accent word per heading, Noto Sans Devanagari); paper background #FAF7F2; body text at least 17px; tap targets 48px; contrast AA; all motion respects prefers-reduced-motion; no em or en dashes in copy; no "best", "cure", "guaranteed", testimonials or ratings; Tele-MANAS 14416 and 112 on every page; she is a psychologist, not a psychiatrist; never call the team small; every section carries icons, imagery or motion, never plain text alone.

## Tasks
1. Build Home exactly as the reference, in the order in plan section 4: hero (WordReveal H1, arch portrait, two glass chips, concern pills), CredentialPanel, OrbitExplorer, PhotoCollage35, Why (icon cards, lead with arrow marker, CharReveal heading), Her story (WaterfallTimeline), Recognition (AwardCards), Team, Where do I start (AudiencePicker), How we can help, Your first session (JourneyScroller, 5 steps ending on Agree on a plan), Visit us, In her words, Quick answers, closing quote band.
2. Bring the profile, team, services and concern templates up to the reference (anxiety page in the reference is the model for all concern pages).
3. Hero portrait is the only preloaded image; reveals never delay it.
Acceptance: side-by-side screenshots of Home at 390 and 1440 against the reference; JourneyScroller pins on desktop and falls back to a vertical list on mobile and under reduced motion; Home first-load JS at most 200 KB gzipped.

## Report
- What was built, by part; deviations and why
- Screenshots at 390 and 1440 of every new page or component, side by side with the reference
- Tests run and results
- Remaining issues
STOP after this. Do not start the next phase.
