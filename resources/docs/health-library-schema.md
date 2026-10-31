# Health library · content schema

The Mental Health, Dr. Mithila Desai · Prepared by Automize Media Labs, 31 October 2026 · Status: draft for approval

Visual reference: `04-preview/the-mental-health-site-preview-v14-library.html`, pages `#library` (index) and `#guide` (article template, modelled on the panic attacks guide).
Rules and copy reference: `02-plan/site-plan.md` (sections 2, 4, 5, 7, 11) and `02-plan/new-website-content.md` (Page 9 and Part 7).

Note on the reference site: drmalathi.vercel.app/guides could not be opened from the cloud workspace (network block and the site's robots rules). This schema follows a standard guides structure. It will be adjusted to the reference once screenshots arrive.

---

## 1. URLs

| Page | URL | Notes |
|---|---|---|
| Library index | `/health-library/` | H1 "Health *library*". Listing, topics, search, guides by concern |
| Topic page | `/health-library/topic/[topic-slug]/` | Same listing, filtered. Own title, description and H1, so each topic can rank. The topic chips on the index link here and also filter in place with JS |
| Guide | `/health-library/[slug]/` | Lowercase, hyphenated, no dates, no category in the path, so a guide can change topic without a new URL |
| Search | `/health-library/?q=...` | Client-side only, `noindex` when `q` is set |
| Author | none | The author chip links to `/dr-mithila-desai/` |
| Editorial policy | `/editorial-policy/` | Linked from every guide and the index |

`trailingSlash: true`. Old blog URLs (`/blog/?p=ID`) 301 to the new slugs, see `site-plan.md` section 10 and the `oldUrl` field below.

---

## 2. Topics (fixed list)

| slug | Label | Icon | Cover tone | Card line |
|---|---|---|---|---|
| `starting-therapy` | Starting therapy | door | `light` (clay) | First sessions, how many sessions, and when to begin. |
| `anxiety-and-mood` | Anxiety and mood | mind | `espresso` | Worry, panic, low mood, and helping someone you love. |
| `ocd` | OCD | loop | `sage` | What OCD therapy involves. |
| `relationships` | Relationships | rings | `honey` | Couples, marriage and choosing the right kind of help. |
| `children-and-teens` | Children and teens | sprout | `sage-light` | Signs a child may need support. |
| `work-and-burnout` | Work and burnout | briefcase | `walnut` | Burnout and support at work. |
| `online-therapy` | Online therapy | globe | `dark` | Video sessions from home, in India or abroad. |

Topics later (from the year-one list, add only when a guide exists): `everyday-mental-health`, `crisis-and-safety`.

---

## 3. Guide frontmatter

File: `resources/content/health-library/[slug].mdx`, validated with Zod at build time. A build fails on a missing required field.

| Field | Type | Required | Rule |
|---|---|---|---|
| `slug` | string | yes | Matches the file name |
| `title` | string | yes | Meta title, ends " \| The Mental Health". Max 60 characters before the suffix |
| `description` | string | yes | Meta description, 140 to 160 characters, must match the body (no "9 signs" if the body has 7) |
| `h1` | string | yes | Sentence case, one accent word in `*stars*` (serif italic) |
| `dek` | string | yes | 1 to 2 sentences under the H1 |
| `topic` | enum (section 2) | yes | One topic only |
| `concerns` | string[] | no | Concern or service page slugs this guide supports, for example `["anxiety"]`. Drives "Guides by concern" and the concern pages' "From the health library" block |
| `tags` | string[] | no | Max 4, shown as chips at the end |
| `author` | ref | yes | `dr-mithila-desai` `[CONFIRM: she wrote or reviewed each post]` |
| `reviewer` | ref | yes | `dr-mithila-desai` |
| `datePublished` | date | yes | Original blog date for migrated posts |
| `dateModified` | date | yes | Shown as "Updated" |
| `lastReviewed` | date | yes | Set at clinical sign-off. `[CONFIRM]` until then |
| `readingTime` | number | auto | Words / 200, rounded up. Never typed by hand |
| `cover` | object | yes | `{ kind: "designed", icon, tone }` or `{ kind: "photo", src, alt }`. Designed covers are the default: tone colour, tree watermark, large line icon. No stock photos, no people in despair, no pills |
| `inBrief` | object | yes | `{ summary: string (2 to 3 sentences), points: string[] (2 to 4) }`. Summary text for migrated posts is in content Part 7 |
| `faqs` | {q, a}[] | yes | 3 to 6. Answers 40 to 80 words, each complete on its own. Also output as `FAQPage` |
| `sources` | {title, publisher, year, url?}[] | yes | At least 1. Named bodies (WHO, NICE, NIMHANS, APA DSM-5-TR). No unsourced statistics anywhere in the body |
| `relatedGuides` | slug[] | no | Max 3. Fallback: newest guides in the same topic |
| `relatedServices` | path[] | yes | 2 to 4 service or concern pages, always including the matching concern page when there is one |
| `featured` | boolean | no | Only one guide true at a time: the hero card on the index |
| `startHere` | 1 \| 2 \| 3 | no | Position in "Three guides to read first" |
| `crisis` | literal `true` | yes | The crisis callout cannot be switched off |
| `oldUrl` | string | no | For example `/blog/?p=71`. Generates the 301 |
| `status` | `draft` \| `review` \| `published` | yes | Only `published` is listed, built and put in the sitemap in production. Development shows all, with a status chip |

### Example (the approved preview guide)

```yaml
slug: panic-attacks
title: "Panic attacks: what they are and how therapy helps | The Mental Health"
description: "What a panic attack is, how it feels, what to do during one and how therapy helps, from clinical psychologist Dr. Mithila Desai in Borivali, Mumbai."
h1: "Panic attacks: what they are and how therapy *helps*"
dek: "A sudden wave of fear, a racing heart, the sense that something is badly wrong. Here is what is happening in a panic attack, what to do during one, and how therapy helps panic become less frequent and less frightening."
topic: anxiety-and-mood
concerns: [anxiety]
tags: [Panic, Anxiety, Therapy]
author: dr-mithila-desai
reviewer: dr-mithila-desai
datePublished: 2023-10-04
dateModified: "[CONFIRM: launch date]"
lastReviewed: "[CONFIRM]"
cover: { kind: designed, icon: heart, tone: espresso }
inBrief:
  summary: "A panic attack is a sudden wave of intense fear with strong body sensations that peaks within minutes. It is frightening but not dangerous in itself. Therapy helps people understand and reduce panic."
  points:
    - "It usually peaks within about 10 minutes, then eases."
    - "New chest pain or breathlessness needs a medical check first."
    - "Fear of the next attack is what often keeps panic going."
    - "Talking therapy helps many people, in person or online."
relatedGuides: [panic-attack-vs-anxiety-attack, cbt-and-rebt-explained, signs-you-need-a-psychologist]
relatedServices: [/anxiety/, /individual-therapy/, /online-therapy/, /get-help-now/]
crisis: true
oldUrl: /blog/?p=71
status: review
```

---

## 4. Body components (MDX)

The body is plain Markdown with H2s. These components are allowed and nothing else:

| Component | Use | Preview |
|---|---|---|
| `<FeelGrid body={[...]} mind={[...]} />` | Two cards of signs (body and mind). Only signs already in the approved copy | "What it can feel like" |
| `<Warn>` | Red-tinted medical note | "Panic or a physical problem?" |
| `<Loop title steps={[{t, d}]} note />` | Dark 4-step cycle that lights up on scroll | "The panic loop" |
| `<DoList items={[{icon, t, d}]} />` | Numbered icon cards for self-help steps. First icon can breathe | "What to do during one" |
| `<Steps items={[{icon, t, d}]} />` | Vertical therapy path, tiles turn walnut as you scroll | "How therapy helps" |
| `<Approach />`, `<Medicine />`, `<Confidentiality />`, `<AssessmentLine />` | Global copy blocks from `site-plan.md` section 4, never retyped | |
| `<MidCta />` | Espresso booking card, once per guide, after about 60% of the body | |
| `<Crisis />` | Full crisis callout with 14416 and 112 call buttons | Required in every guide |

H2s are numbered automatically (01, 02...) and build the "On this page" list. Max 9 H2s.

---

## 5. Page anatomy

**Index `/health-library/`**
1. Hero: breadcrumb, tag pill with guide count, H1, intro (content Page 9), search box, "Often read" quick searches. Right: featured guide photo card plus a glass "Every guide reviewed" chip.
2. Trust strip: 4 cells (named author, sources, dates, information not a diagnosis).
3. 01 Browse by topic: bento. Starting therapy is the 2 by 2 tile with its first 3 guides; 6 topic tiles with counts; espresso "Can't find your question?" tile to booking.
4. 02 New to therapy: 3 `startHere` guides in a numbered row.
5. All guides: sticky toolbar (topic chips with counts, sort Newest or A to Z), live result count, 3-column card grid, empty state. 12 cards, then "Show more" (pagination only after 24 guides).
6. 03 Guides by concern (espresso): concern rows with their guides and a link to the concern page.
7. 04 How we write these guides: Dr. Desai photo with RCI chip, 4 editorial rules, link to `/editorial-policy/`.
8. Coming next: 4 titles from the year-one list (`site-plan.md` section 11), dashed cards, not links.
9. End band with booking and the short crisis line.

**Card**: designed cover (topic label, reading time chip, icon), title, 3-line excerpt from `inBrief.summary`, footer with author avatar, name, date, "Reviewed" in sage.

**Guide `/health-library/[slug]/`**
1. Hero: breadcrumb (Home / Health library / Topic), tag pill, H1, dek, meta row (author, published, updated, reading time), copy link, print, share. Right: cover (designed, or a topic illustration such as the panic wave).
2. In brief box (summary plus 2 to 4 tick points).
3. Three columns: sticky "On this page" with reading progress | body (max 70ch) | sticky booking card plus "Need help now?" box. Under 1180px the right column goes; under 860px the contents list hides.
4. After the body: FAQs, sources, tags, reviewer box, previous and next guide (same topic first).
5. How we can help (4 related services), Related guides (3 cards), end band.

---

## 6. Structured data

| Page | Types |
|---|---|
| Index | `CollectionPage` + `ItemList` of guide URLs, `BreadcrumbList` |
| Topic page | `CollectionPage` (about = topic name) + `ItemList`, `BreadcrumbList` |
| Guide | `BlogPosting` (headline, description, image, `author` and `reviewedBy` = `#dr-mithila-desai`, `datePublished`, `dateModified`, `lastReviewed`, `about` = `MedicalCondition` when `concerns` maps to one, `isPartOf` = library `#collection`, `publisher` = `#practice`), `FAQPage` from `faqs`, `BreadcrumbList` |

The `Person` is never `Physician`. No `Review`, `AggregateRating` or star markup.

---

## 7. Writing rules for every guide

From `site-plan.md` section 5, plus:
- Answer first: the In brief box must make sense on its own.
- No em or en dashes, sentence case, no "best", "cure", "guaranteed", "100%", no promise of results or session counts.
- No diagnosis ("you have"), use "signs that can mean", "many people notice".
- No fees, no testimonials, no client stories unless labelled as a composite with details changed and confirmed by Dr. Desai.
- Every statistic has a source in `sources`. Remove any that do not.
- Never describe self-harm or suicide methods. The crisis callout is on every guide.
- Facts not yet confirmed stay as `[CONFIRM]` chips.

---

## 8. Open items

1. Reference screenshots of drmalathi.vercel.app/guides and one child page, to align layout and fields.
2. Revised bodies for the other 18 migrated posts: need the local crawl of the old blog (`01-research/raw-sources/crawl-thementalhealth.mjs`). Until then they are `status: draft`.
3. Dr. Desai confirms she wrote or reviewed each post, and signs off `lastReviewed` dates.
4. Approach wording for the `<Approach />` block `[CONFIRM]`.
5. Canonical host (`www` or not) for share links.
