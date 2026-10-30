# Run report — The Mental Health rebuild (Phases 1–5)

Date: 30 Oct 2026 · Built with Next.js 16.4.3, React 19, TypeScript strict, Tailwind v4, Turbopack.

## What changed

- **Phase 1 · Foundation** — design tokens, fonts, 35-icon library, image pipeline (sharp → AVIF/WebP), all reference components, `/styleguide/` (noindex).
- **Phase 2 · Site shell** — crisis strip, utility bar, header with "How we help" mega-dropdown, mobile sheet menu, MobileActionBar (<1024px, crisis variant, hides while typing), footer + legal links, cookie banner (essential vs analytics), breadcrumbs + JSON-LD, brand 404.
- **Phase 3 · Content pipeline** — 40 markdown pages generated from `resources/docs/new-website-content.md` into `resources/content/` with Zod-validated frontmatter; catch-all route; one schema `@graph` per page; `[CONFIRM]` chips (dev-only); `npm run launch-check`; 301 map for legacy `.html` and `/blog/` URLs.
- **Phase 4 · Home + templates** — full reference Home (hero, credentials, orbit explorer, 35y collage, why, story timeline, awards, team, audience picker, ways, journey scroller, visit, Instagram, FAQs, closing band); services page with the 13-row list; team page with TeamGrid; spec-directive cleaning.
- **Phase 5 · Health Library + QA** — 3 starter posts (`first-therapy-session`, `panic-attacks`, `online-counselling-for-nris`) with in-brief, sources, reviewer box, crisis callout, related links, BlogPosting schema, `?p=` 301s; library index cards; full QA suite; `RUN_REPORT.md` (this file).

## QA results

| Check | Result |
|---|---|
| `npm run lint` | 0 problems |
| `npm run build` | 49 routes, all static/PPR |
| Playwright sweep: 43 URLs × 4 widths (390/768/1024/1440) | 0 horizontal overflow, 0 console errors, 0 nested interactive |
| `/get-help-now/` | crisis strip visible in first viewport, 112 + 14416 present |
| Accordions | all `details` open/close correctly |
| Reduced motion | journey unpinned, characters visible, orbit spin off, animations disabled |
| Lighthouse (production build, `next start`) | **perf 100 · a11y 100 · best 100** on `/`, `/anxiety/`, `/health-library/first-therapy-session/` |
| SEO | 63–66 — the only failing audit is `is-crawlable`, which is intentional sitewide noindex until launch. All other SEO audits pass; flipping `SITE_INDEXABLE` at launch lifts this. |
| `npm run launch-check` | **FAIL — 193 `[CONFIRM]` markers** (expected; they block launch by design) |

## Remaining `[CONFIRM]` markers — grouped

**193 markers.** Groups need Dr. Desai's answers:

- **Identity & credentials (≈90)** — RCI CRR number, legal entity, degrees/universities, languages (Marathi/Gujarati), founding year, award wordings, LinkedIn, bio lines in her own words.
- **Availability & hours (≈30)** — session days/hours (in-person, online, phone), floor/room details, reply time, Sunday rule, phone-answering window.
- **Session details (≈15)** — session length in minutes, late-cancel window, payment methods, advance/refund rules, video platform, age ranges for child therapy.
- **Team (≈10)** — team member details/consent, who is still on the team, psychiatrist + coordinator names.
- **Practice details (≈15)** — WhatsApp number, email, second phone, what she offers workplaces, therapy approaches she actually uses, waiting area.
- **Library/misc (≈15)** — post payment method for clients abroad, last-reviewed dates, case-story consent, misc per-page items.
- Remainder — bare `[CONFIRM]` placeholders with no note.

## Next actions for the client

1. Answer the `[CONFIRM]` markers above (each is a yellow chip on the site).
2. Review each page as written (Part 8 review guide in the content doc) and reply "Approved with corrections" or "Approved as written" — that date becomes "Last reviewed".
3. Provide: RCI CRR number, logo/photos if newer, team confirmations, legal entity name.
4. Then: clear markers → `npm run launch-check` → Phase 6 (booking form, Resend, consent-gated analytics, map facade) → deploy to Vercel `bom1`.

## Known deviations / open items

- Deploy not done — no Vercel access here; everything is uncommitted in the working tree.
- Per-post `/blog/?p=ID` 301s exist for the 3 published posts + merged dupes; the other 16 posts redirect to `/health-library/` until they are written.
- `robots.txt` disallows all + `X-Robots-Tag: noindex` until launch.
- Concern/profile/visit pages use the shared sidebar template; deeper per-page layouts (profile split-hero, plan-your-visit tabs, contact form) are polish items.
- Contact page form ships in Phase 6.
