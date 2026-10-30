# Design and development plan · The Mental Health

30 October 2026 · Prepared by Automize Media Labs · Step 5

Visual reference: the approved preview v7, https://claude.ai/artifact/YZhyWT6cqoTgpJ7byqWB3w (local copy `04-preview/the-mental-health-site-preview-v7.html`).
Rules reference: `02-plan/site-plan.md` and `02-plan/new-website-content.md`.

---

## 0. Overrides (read first, these win over everything below)

1. **The approved preview wins for visuals. The plan wins for rules and copy.** Where the preview and the master prompt's generic Oliva library differ, follow the preview.
2. **Deliberate differences from the master prompt, approved by the user:**
   - Page background is warm paper `#FAF7F2` with white bands, not pure white. White cards sit on paper.
   - One practitioner: **one large arch portrait**, no fan, no swap.
   - Glass is used only for the two floating hero cards. Cards elsewhere are solid white with a hairline.
   - There are no illustrated PNG service badges. Services use **line icons in tinted tiles**: 56 to 72px tiles holding 26 to 32px icons. This is the approved look, so ignore the master prompt's rule that line icons are only for UI at 32px and under.
   - Section numbering follows the Home order below. It is not the master prompt's 01 to 09 list.
3. **The user's standing design rule:** every page must carry icons, imagery and motion. No section is plain text alone. Every card has an icon tile, every list has markers, and every page has at least one scroll-driven moment.
4. **Copy rules:** no em or en dashes, sentence case, no "best", "cure" or "guaranteed", no testimonials or ratings, Tele-MANAS 14416 and 112 on every page. "Psychologist, not psychiatrist" is said plainly. Never describe the team as small. Overseas clients are "Indians living abroad". Never mention Young Achievers. Use Power of Mind only as the earlier name.
5. **`[CONFIRM]`** shows as a yellow chip in development and is hidden in production. `npm run launch-check` fails while any `[CONFIRM]` remains.

---

## 1. Stack

- Next.js App Router (latest stable), TypeScript strict, Tailwind v4 with tokens as CSS variables.
- `next/font`: Figtree (preloaded), Instrument Serif italic, Noto Sans Devanagari (not preloaded).
- `next/image` with sharp; Radix Dialog for the mobile menu and call sheet; native `<details>` for FAQs.
- No Framer Motion and no Lenis. All motion is CSS plus one small `useScrollProgress` hook and an IntersectionObserver reveal. JS budget: Home first load at most 200 KB gzipped.
- Content in `resources/content/**.md` with Zod frontmatter.
- Vercel, region `bom1`. `SITE_INDEXABLE=false` until launch (noindex header, meta and robots).
- Forms: Server Action plus Resend. No database.

Single sources: `lib/site-config.ts`, `lib/nav.ts`, `lib/icons.ts`, `lib/team.ts`, `lib/services.ts`, `lib/whatsapp.ts`, `lib/consent.ts`.

---

## 2. Tokens

```css
:root{
  --walnut:#723E22;      /* primary, from the logo root brown */
  --walnut-500:#5C3119;  /* hover, strokes */
  --espresso:#2A1D17;    /* dark bands, button label block */
  --espresso-2:#33241C;  /* cards on dark */
  --clay-100:#F3EBE3;    /* icon tiles, chips, tints */
  --paper:#FAF7F2;       /* page background */
  --white:#FFFFFF;       /* cards, bands */
  --ink:#241A15; --ink-2:#66564C; --line:#E7DCD1;
  --honey:#D9AE84;       /* glow, accent on dark only, never text on light */
  --sage:#5E6E57;        /* success, availability dot */
  --alert:#B3261E; --alert-50:#FBEFEE;  /* crisis only */
  --on-dark:#FAF7F2; --on-dark-2:#CDBBAE; --dark-line:rgba(250,247,242,.14);
  --grad:linear-gradient(90deg,#723E22,#2A1D17);
  --shadow:0 1px 2px rgba(36,26,21,.04),0 18px 40px -20px rgba(42,29,23,.28);
  --ease:cubic-bezier(.22,1,.36,1);
}
```

Contrast (all pass AA on paper and white): ink 15.9:1, ink-2 6.6:1, walnut 8.7:1, alert 6.3:1. Honey is used only on espresso, at 7.8:1.

**Type**

| Style | Desktop | Mobile |
|---|---|---|
| Hero H1 | clamp to 104px, line-height .98, -0.045em, weight 400 | 46px |
| Inner H1 | 100px / .97 | 46px |
| H2 | 60px / 1.04, -0.03em | 34px |
| H3 | 22 to 34px, weight 500 | 20 to 24px |
| Eyebrow | 12px, 600, uppercase, .18em, with a 28px rule before it | same |
| Lead | 20px / 1.6, ink-2 | 17px |
| Body | 17px / 1.65 (minimum) | 17px |

One Instrument Serif italic accent word per heading, in walnut (honey on dark).

**Shape:** container 1240px with 40px gutters (16px on mobile). Section padding clamps from 80 to 150px. Card radius 24 to 28px, pill buttons, and an arch at `999px 999px 28px 28px`.

---

## 3. Components (names for the codebase)

| Component | Spec (see the preview for the exact look) |
|---|---|
| `BookButton` | Two-part pill: a walnut icon block (54px) and an espresso label. On hover the icon block widens to 62px, the button lifts 2px and follows the cursor slightly (magnetic, desktop only). |
| `GhostButton` | Pill with a hairline border and a translucent white fill. |
| `Eyebrow` | Rule plus uppercase label, with an optional number ("02 · Her story"). |
| `IconTile` | A 46 to 72px rounded square with a clay-100 gradient and walnut line icon. Optional honey dot at the top right. On hover it rotates -8deg and fills walnut with a white icon. |
| `CharReveal` heading | Splits into characters that fade from 14% to 100% opacity as the heading moves through the viewport (scroll-linked). Used on Why, Her story and Where do I start. |
| `WordReveal` H1 | Words rise and unblur with a 70ms stagger on load. Never delays the LCP image. |
| `CredentialPanel` | Rounded 4-cell panel: IconTile, large serif value, caption. Values: 35 yrs, PhD, RCI, "Borivali & abroad". |
| `OrbitExplorer` | Line-art brain with roots (SVG, self-drawing) inside two slowly rotating rings. Six icon nodes, three item buttons on each side. Hover, click or auto-cycle (4s) highlights the node, draws a dashed link and lights the matching brain region. Below 980px the ring sits on top and the items form a grid. |
| `PhotoCollage35` | Two overlapping rounded photos and a rotating circular-text seal ("Years of practice · Mumbai · since 1989"). |
| `WaterfallTimeline` | A vertical milestone list. A flowing gradient line grows down with scroll and each milestone lights up as the line reaches it. |
| `AudiencePicker` | Five icon cards (Myself, My child, My teen, Us as a couple, My family) and an animated panel with an icon, heading, line, Book button and concern list. |
| `JourneyScroller` | Desktop: the section pins for about 4.6 viewports and five step cards slide sideways. The active card lifts and a honey path draws behind the cards, with a "03 / 05" counter and progress bar. Step 5 is "Agree on a plan" with a "Your plan" tag. Mobile: a vertical list with a filling line. |
| `TeamGrid` | The lead card spans two rows (photo, role, link to profile). Other cards show photo or initials, role eyebrow, name, qualification and `[CONFIRM]`. |
| `AwardCard` | Full-bleed photo with a dark gradient and a caption (body, year, title). The photo zooms on hover. |
| `ServiceRow` | An IconTile with a number, title, one line and a round arrow that rotates on hover. |
| `MapIllustration` | A stylised street sketch with a pin. The real Google map loads only on click, after consent. |
| `CrisisStrip`, `HelpCallout` | Espresso top strip; alert-50 callout with a red button. |
| `MobileActionBar` | Floating espresso pill: Book (gradient), Call, WhatsApp. Shows "Call 14416" in red on Get help now and the self-harm page. |
| `ScrollProgress` | A 3px gradient bar at the top. |

All motion respects `prefers-reduced-motion`. Reveals keep content visible without JS.

---

## 4. Pages

**Home**, in order: crisis strip, header, hero (H1 "Healing begins when you feel *heard*.", portrait arch, two glass chips, concern pills), CredentialPanel, OrbitExplorer, 35 years collage, 01 Why (6 icon cards and the lead with an arrow marker), 02 Her story (WaterfallTimeline), 03 Recognition (AwardCards), Team (4 cards), 04 Where do I start (AudiencePicker), 05 How we can help (4 icon columns), 06 Your first session (JourneyScroller), 07 Visit us (map and card), 08 In her words (Instagram strip), 09 Quick answers, closing quote band, footer.

**Templates** (each takes its copy from `new-website-content.md`):
- **Doctor profile** (`/dr-mithila-desai/`): split hero, About with principle quote, How she works (6 icon cards), training and awards timeline, chip groups, FAQs.
- **Our team** (`/our-team/`): TeamGrid, working together, FAQs.
- **Services hub** (`/services/`): ServiceRows plus assessments, organisations and "what we do not offer" icon cards.
- **Concern and therapy pages** (Pages 12 to 33): hero with tree watermark, "at a glance" strip, sticky side box (book, related, crisis), signs list, how therapy helps (numbered steps), things to try, FAQs, reviewer box, sources. Each page gets one hero IconTile and an icon in every block.
- **Plan your first session**, **Contact and book**, **FAQs**, **Get help now** (alert hero, big call buttons, icon cards, numbers grid), **Health Library** list and post, the 7 legal pages, thank you, 404.

---

## 5. Images

- `public/images/dr-mithila-desai/`: `portrait.jpg` (hero), `elle-2026.jpg` (sharp, 993x1400), `award-2023.jpg` (sharp, 1125x1398). Source: `04-preview/photos/`.
- Team photos come from the old site, but only after each person's written consent. Until then, show initials on a clay gradient.
- A professional shoot is still recommended (6 photos: therapy room, entrance, waiting area, portrait in window light, hands and tea, the garden view).
- `scripts/process-images.mjs` resizes to 640, 960, 1280 and 1600 widths in WebP and AVIF. Only the hero portrait is preloaded.

---

## 6. Build phases (one branch and preview each)

| Phase | Scope | Done when |
|---|---|---|
| 1 Foundation | App, tokens, fonts, icons, images script, `/styleguide` showing every component in section 3 | Matches the preview at 390 and 1440 |
| 2 Shell | Crisis strip, header and mobile sheet, MobileActionBar, footer, cookie banner, breadcrumbs, 404 | Approved |
| 3 Content | Markdown pipeline, every page in the site plan rendering, `[CONFIRM]` chips, launch-check, schema `@graph` | All routes render, no overflow |
| 4 Home and templates | Home exactly as the preview; profile, team, concern and service templates | Approved |
| 5 Library and QA | Blog posts, preview deploy (noindex), Lighthouse medians, Playwright tests | Mobile performance 90 or higher, accessibility 100 |
| 6 Forms and analytics | Booking form (Server Action, Resend), consent-gated GA4, map facade | Approved |

---

## 7. Acceptance checks (every phase)

- No horizontal overflow at 390, 768, 1024 and 1440.
- No `a a`, `a button` or `button a` nesting.
- Zero third-party requests before consent.
- Reduced motion turns off the orbit spin, the pin-and-slide journey (falls back to a vertical list), the char reveal (text shows in full) and the waterfall shimmer.
- Crisis numbers visible on every page.
- `launch-check` lists every remaining `[CONFIRM]`.

---

## 8. Open client items (blockers for launch, not for the build)

RCI CRR number; degrees with institutions and years; start year (1989?); hours; reply time; WhatsApp number; email; fees policy wording; session length; youngest age seen; languages; team list, roles and photo consent; whether the team psychiatrist can be booked directly; approval of the principle quote and the "sunlight and candor" line; domain and DNS access; Resend sender domain; GA4 property.
