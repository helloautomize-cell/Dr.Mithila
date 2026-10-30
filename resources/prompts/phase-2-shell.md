# Phase 2 · Site shell
Branch: phase-2. Deploy a Vercel preview. Do not merge to main until I approve.

Read resources/docs/design-development-plan.md fully (section 0 overrides everything) and open resources/reference/the-mental-health-preview.html in a browser. Before starting, confirm these paths exist and list them: resources/docs/design-development-plan.md, resources/docs/new-website-content.md, resources/docs/site-plan.md, resources/reference/the-mental-health-preview.html, resources/images/. If any is missing, STOP and tell me.

Non-negotiables: tokens and fonts exactly as plan section 2 (Figtree, Instrument Serif italic for one accent word per heading, Noto Sans Devanagari); paper background #FAF7F2; body text at least 17px; tap targets 48px; contrast AA; all motion respects prefers-reduced-motion; no em or en dashes in copy; no "best", "cure", "guaranteed", testimonials or ratings; Tele-MANAS 14416 and 112 on every page; she is a psychologist, not a psychiatrist; never call the team small; every section carries icons, imagery or motion, never plain text alone.

## Tasks
1. Crisis strip (espresso) with 112, Tele-MANAS 14416 and a Get help now link, on every page.
2. Sticky header: logo, nav from lib/nav.ts per site-plan.md section 3 (Dr. Desai, How we help with a compact dropdown of services and concerns, Our team, Your first session, Get help now in red), BookButton. Glass on scroll.
3. Mobile menu: full-screen sheet, accordion groups collapsed, 48px rows, fixed footer with Book and Call.
4. MobileActionBar below 1024px: Book, Call (sheet), WhatsApp (message built from page title via lib/whatsapp.ts). Shows red Call 14416 on /get-help-now/ and the self-harm page. Hidden while typing in a form.
5. Footer exactly as the reference, plus legal links and cookie settings. Cookie banner (essential vs analytics). Breadcrumbs with JSON-LD on inner pages. 404 page on brand.
6. ScrollProgress bar.
Acceptance: no overlap or overflow at 390, 768, 1024, 1440; keyboard navigation and Esc work in menus.

## Report
- What was built, by part; deviations and why
- Screenshots at 390 and 1440 of every new page or component, side by side with the reference
- Tests run and results
- Remaining issues
STOP after this. Do not start the next phase.
