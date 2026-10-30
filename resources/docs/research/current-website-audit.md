# Current website audit · Dr. Mithila Desai · thementalhealth.in

Prepared by Automize Media Labs · 29 Oct 2026 · Step 1 of the rebuild (Part 2.1 of the master prompt)

Sources: the live site (7 static pages, 21 blog posts) and 9 public profiles. Everything here is in `raw-sources/`, with URLs. Facts that only the client can settle are marked `[CONFIRM: ...]`. Directory listings contradict each other, so none of their numbers are treated as fact.

**Capture note.** The cloud workspace could not download the site directly (network policy), so pages were read with a page reader. Names, headings, list items, numbers, dates and URLs are exact. Long paragraphs are outlined. Run `raw-sources/crawl-thementalhealth.mjs` on the agency machine for the verbatim archive before the content step.

---

## 0. Executive summary

- **Who she is.** Dr. Mithila Desai is a **clinical psychologist, not a medical doctor**. "Dr." comes from a PhD (claimed: Clinical Psychology, Mumbai University). She cannot prescribe medicine. Every source agrees on psychologist; none supports a medical degree.
- **Practice.** Talk therapy (CBT, REBT, mindfulness, acceptance-based work, "EFT") for adults, children and teens, couples and families; psychometric assessment; online counselling, including for clients abroad; corporate wellness and EAP work; career guidance for students through her company **Young Achievers**.
- **Brands in use (needs a decision).** "The Mental Health" (website), "Dr Mithila Desai's Power Of Mind Clinic" (Practo, Justdial, Lybrate, Eka), "Young Achievers" (legal operator named on the site, Practo URL slug), "The Mental Health Clinic" and "The Mental Health Co." (blog bio, Eka). `[CONFIRM: one public brand name and how the others relate]`
- **Address.** The address you gave (17, Shraddha SBI Staff Gulmohar CHS, Gulmohar Rd, Shimpoli, Borivali West 400092) matches Practo, with the landmark "opposite Banana Leaf Restaurant". The old website shows only "Padma Nagar, Borivali West". Four directories still show an older Borivali address (101 Hill View Apartment, Link Road, Chikoowadi), and two show an Andheri West (Lokhandwala) clinic.
- **Biggest problems on the live site (🔴).** Patient testimonials with cure claims ("cured", "without medicine") and a 4.7 star counter; "one of the first best 10 mental health specialists in Mumbai"; "Without Resorting to Harmful Medications" and "reduce dependence on psychiatric medications"; lorem ipsum in four tabs; a broken "00 Years of Experience" counter; a broken Contact link on the blog; no Tele-MANAS or emergency line anywhere.
- **Inconsistent facts everywhere.** Experience is stated as 14, 20, 29, 30, 34, 35+, 37 and 38 years. Degrees and years differ by source. There are 3 phone numbers, 2 emails, and 5 different sets of hours. The new site needs one confirmed version of each.
- **Content worth keeping.** The 11-question FAQ (rewrite), the conditions list (dedupe and filter), the 2026 blog series (16 posts, structured, mostly compliant, needs a named reviewer, sources and helplines; drop one duplicate), and three 2023 posts in her own voice.
- **Tech.** Static HTML template (developer: Blackcurrant Labs) plus a separate WordPress blog at `/blog/` with `?p=` URLs. Same title tag on every page, no alt text, no schema seen. 34 URLs need 301s.

---

## 1. Practice identity

| Item | What the sources say | Status |
|---|---|---|
| Practitioner | Dr. Mithila Desai, Clinical Psychologist | Found |
| Profession | Clinical psychologist and psychotherapist. Practo shows "Ms." and "Mental Health Counselor / Counselling Psychologist" | Found; title line `[CONFIRM]` |
| Website brand | "The Mental Health" · hero eyebrow "An Initiative by Dr Mithila Desai" | Found |
| Clinic brand on directories | "Dr Mithila Desai's Power Of Mind Clinic" (Borivali; also Lokhandwala, Andheri W) | Found |
| Company | Young Achievers: career guidance for students, named as the website operator and in "Billing Lable" | Found; legal entity `[CONFIRM]` |
| Other names | The Mental Health Clinic, The Mental Health Co. | Found; relation `[CONFIRM]` |
| Tagline | "What mental health needs is more sunlight, more candor, and more unashamed conversations!" (footer) | Found; reuse `[CONFIRM]` |
| Start year | "started way back in 1989" (home); 1986 chose psychology (WAHStory); degrees dated 1988 | `[CONFIRM: practice start year]` |
| Team | Psychiatrist, public-health physician, 2 psychologists, 1 coordinator (see 1.1) | `[CONFIRM: who is still on the team]` |

### 1.1 Doctors and team (as published)

**Dr. Mithila Desai**
- Home: "I'm Dr. Mithila Desai Clinical Psychologist" · "My journey in the field of clinical psychology started way back in 1989" · "It's been more then 34yrs of practice" (sic)
- Blog bio (exact): "Dr. Mithila Desai – Clinical Psychologist, Entrepreneur, 35+ years in mental health. Ph.D. Clinical Psychology, Mumbai University; Founder of Young Achievers, The Power of Mind & The Mental Health Clinic Mumbai – guided students, corporate EAPs, and therapy across anxiety, depression, trauma & relationships."
- Practo bio quote: "Healing begins the moment you feel truly heard."
- Qualifications claimed (conflicting):
  - MA Applied Psychology, University of Mumbai, 1988 (Eka, Practo bio, ClinicSpots)
  - Masters in Clinical Psychology, D. G. Ruparel College, 1988 (myUpchar)
  - PhD Clinical Psychology, University of Mumbai: 1988 (Eka) or 1990 (myUpchar) or no year (blog)
  - PhD, International University of Applied Sciences, 2012 (Eka only)
  - M.A. Clinical Psychology and Psychotherapy, University of Mumbai, 1992 (myUpchar)
  - MA Psychology, University of Mumbai, 2012 (Practo education line)
  - CBT-REBT Practitioner (psychotherapy), 2014 (Eka)
- Registration: directories say "Maharashtra Medical Council". **That council registers medical doctors, not psychologists.** In India a clinical psychologist registers with the **Rehabilitation Council of India (RCI)** (CRR number), and the Mental Healthcare Act 2017 defines a clinical psychologist that way. Eka shows "760249596", which is not a recognisable format. `[CONFIRM: RCI CRR number and year]`
- Awards: see section 1.2.
- Languages: English and Hindi (Lybrate, MyMediland); English only (Eka). `[CONFIRM: Marathi? Gujarati?]`
- EAP: "affiliated with Optum for over 12 years" (MyMediland). Do not name a corporate client without written permission.
- Media: "guest columnist for Femina, Midday and Psycho Logs" (WAHStory, MyMediland). **No article could be found.** `[CONFIRM: links or scans]`

**Team (about.html, exact lines)**
| Name | Line on site |
|---|---|
| Dr Sujay Prabhugaonkar (shown truncated "Prabhugaonk") | MBBS, DPM (Mum) · Consultant Psychiatrist |
| Dr. Neha Pansare | M.B.B.S., M.P.H · Public health professional |
| Ms. Ashmi R. Shah (file name "asmi") | Master in Clinical Psychology |
| Vishwa Shah | Coordinator |
| Ashika Shah (file name "aashika") | Clinical Psychologist |

`[CONFIRM: current team, exact name spelling, roles, registration (MMC for the two MBBS doctors, RCI for psychologists), and written consent for photos]`. If a psychiatrist is on the team, the site may say medication review is available "with our consultant psychiatrist" instead of the current anti-medication lines.

### 1.2 Awards (all self-reported, no award-body page found)

| Award | Year | Body | Where seen |
|---|---|---|---|
| IES Excellence Award / NASP Award for Excellence in the Provision of School Psychological Services | 2006 | Indian Education Society | Eka, WAHStory |
| Excellence in Clinical Psychology (relationship counselling) | 2012 | not stated | WAHStory |
| Global Women Achievers Award & Psychological Transformer | 2018 | not stated | Website, WAHStory, Practo, MyMediland |
| SEAS Women's Achievers Award | 2018 | not stated | Eka |
| "Abdul Kalam award for excellence" | **2018** | not stated | Practo |
| Women's Achiever's Award | 2020 | not stated | Eka |
| Dr. APJ Abdul Kalam Health Award, service excellence in mental health | **2023** | not stated | Website, WAHStory |
| National Award for Excellence in Mental Health | 2023 | not stated | Eka |
| Women's Entrepreneurs Award and Excellence in Mental Health & Wellness | 2023 | not stated | Eka |
| Midday / Free Press Journal feature, Women's Day | 2023 | press | Eka (not found online) |

`[CONFIRM: final list with exact titles, bodies and years; certificates on file]`. Note the Abdul Kalam award is dated 2018 on Practo and 2023 on the website. Awards may be shown as plain facts (title, body, year) only.

---

## 2. Services

**Real, stated on the website (home "Our Services Include:")**: Anxiety · Depression, Suicidal Thoughts/Ideations, Sleep Disorders · Low Self-Esteem, Loneliness, Jealousy · Addiction or Dependencies · Obsessive Compulsive Disorder/Behavior · Emotional Imbalances · Body Image Issues · Self-Harm · Building Healthy Relationships & Boundaries, Intimacy Problems · Trauma Healing from Bullying, Hoarding, and Chronic Victimhood.

**Service cards**: Personal and individual therapy · Special sessions for Kids (ADHD, anxiety, OCD, eating disorders, self-harm, trauma, behavioural disorders) · Corporate wellness / EAP ("Boost the Business outcomes") · Dating and relationships · Self-esteem issues · Stress, depression and anxiety management · Neurodiversity and counselling · Online counselling, including international clients.

**Appointment form programmes**: Mental Illness · Depression · Anxiety · Stress · Couples Counselling · LGBTQ. Booking for: Kid · Teenager · Adult · Couple · Family · Senior.

**About page**: psychotherapy; assessment; adult, child, relationship and couples therapy; training for psychology students; services for groups, corporations and organisations.

**FAQ**: psychometric tests (IQ, personality, psycho-neurological, aptitude).

**Therapy approaches named**: CBT, REBT, DBT, "EFT" (site says Emotionally Focused Therapy, Practo says Emotional Freedom Techniques), mindfulness, acceptance therapy, progressive relaxation, ERP for OCD (blog). `[CONFIRM: which approaches she actually uses, in her words. Do not ask for protocols.]`

**Seen only on directories**: career counselling; de-addiction and tobacco cessation; grief; anger management; parenting; pre-marital and marital counselling; personality assessment; "neuropsychological diagnosis"; psycho-educational evaluation for neurodiversity; LGBTQ-friendly practice.

**Exclude or reword (one line each)**
- "Adolescent Medicine", "Chronic Health Issues Management", "fever, cold": medical services a psychologist does not provide (directory errors).
- "Neuropsychological diagnosis": only if she holds that training. `[CONFIRM]`
- "Without Resorting to Harmful Medications", "reduce dependence on psychiatric medications", "non-medication-based model": discourages prescribed treatment and implies comparison. Replace with "talk therapy; if medicine may help, we work with your psychiatrist".
- "Trauma Healing from ... Hoarding": hoarding is a condition, not trauma; split into its own line.
- "Mental Illness" as a booking option: too broad and stigmatising; use "Not sure yet".

**Lorem ipsum (demo leftovers)**: four tabs, Adults, Individual, Families, Businesses, all read "Scelerisque eleifend donec pretium vulpu- tate sapien".

**Signboards**: not seen. `[CONFIRM: clinic photos]`

---

## 3. NAP, hours, FAQs, forms

### Names, addresses
| Address | Where | Status |
|---|---|---|
| **17, Shraddha SBI Staff Gulmohar CHS, Gulmohar Rd, Shimpoli, Borivali West, Mumbai, Maharashtra 400092**, opp. Banana Leaf Restaurant | Your brief, Practo (doctor + clinic), Justdial title | Likely current. `[CONFIRM: floor/wing, lift, nearest station]` |
| Padma Nagar, Borivali West, Mumbai 400092 | Website header, footer, contact | Vague; replace |
| 101, Hill View Apartment, (New) Link Road, Chikoowadi, Borivali West 400092, opp. Om Sai Car Service Center | Eka, Lybrate, myUpchar, MyMediland | Probably old. `[CONFIRM: closed?]` |
| B-107, Twin Towers, 2nd Cross Rd, behind Rajput Dairy, Lokhandwala, Andheri West 400053 (at Vitatsu Dental & Multispeciality Clinic) | MyMediland, Lybrate ("107, Dwin Tower"), Practo bio, WAHStory | `[CONFIRM: still practising here?]` |
| Bandra | MyMediland ("has run centres in") | Past |

### Phones and email
| Number | Where | Note |
|---|---|---|
| +91 87796 51309 | Your brief ("land line") | Format is a 10-digit mobile series. `[CONFIRM: landline or mobile, and is it on WhatsApp?]` |
| +91 98190 66941 | Website header, footer, FAQ, policies, blog | `[CONFIRM: keep?]` |
| +91 91677 66941 | Website WhatsApp link (wa.me/919167766941), MyMediland | `[CONFIRM: WhatsApp number]` |
| mithiladesai@yahoo.com | Website footer, contact | |
| thementalhealth.in@gmail.com | Privacy, Terms, blog | `[CONFIRM: ONE email for forms and privacy]` |

### Hours (five versions)
| Source | Hours |
|---|---|
| Website | Mon-Fri 9:30am-7:00pm · Sat 9:30am-3:30pm · Sunday "Urgent appointments only" |
| Website form | slots 9:30am to 3:30pm only |
| Practo (Gulmohar Rd) | Tue, Thu, Sat 4-8 (pm assumed) |
| Eka (Hill View) | Mon-Sat 11:00am-8:30pm |
| MyMediland | Borivali Tue/Thu/Sat 12:30-7:30pm, Wed/Fri 6-8pm · Andheri Mon/Wed/Fri 10am-2pm |

`[CONFIRM: days and hours per clinic; phone-answering hours; online session hours, including early or late slots for clients abroad]`

### Fees (default: not shown on the site)
Practo ₹3,250 · Lybrate and myUpchar ₹2,000 · website "Advance booking Rs 500/-" · blog meta "₹800-₹3,000" (generic Mumbai range, not her fee). `[CONFIRM: show fees? advance-payment rule and refund policy]`

### FAQs
11 questions on faq.html (listed in raw-sources/01). Useful base for a rewritten FAQ. Two answers need care: "Severe cases ... mainly treated with medication" is fine as general information; add "a psychiatrist decides on medicine".

### Forms
One appointment form (programme, booking-for, time slot). Field list for name, phone and email, the consent line and the form handler could not be seen. No consent checkbox seen; no privacy notice next to the form. The main CTA sends visitors to ClinicSpots, an outside booking site. Advance Rs 500 mentioned without method.

---

## 4. Google profiles

- Maps link supplied: https://maps.app.goo.gl/Eem6wa6ysR3Swfs27?g_st=iw. **Google blocks automated reading; nothing could be read.** `[CONFIRM: screenshot of name, category, rating and count, hours, website, photos; manager access]`
- Things to check when you open it: is the name keyword-stuffed ("Best psychologist ..."), is the category "Psychologist", does the website field point to thementalhealth.in, do hours match the confirmed hours, is there a second profile for Hill View or Andheri that should be marked closed or moved.
- Practo's clinic page also has wrong services attached (breast augmentation, teeth aligners, pregnancy treatments). Ask Practo to clean it up.

---

## 5. Full URL inventory (for 301s)

Two hosts: `www.thementalhealth.in` (static) and `thementalhealth.in/blog/` (WordPress). Redirect the apex and www to the chosen canonical. Query-string URLs (`?p=`, `?cat=`, `?paged=`) need redirects that match on the query (Next.js `redirects()` with `has: [{ type: "query", key: "p", value: "56" }]`).

| # | Old URL | Type | Suggested target (final in site plan) |
|---|---|---|---|
| 1 | / and /index.html | Home | / |
| 2 | /about.html | About | /about/dr-mithila-desai |
| 3 | /faq.html | FAQ | /faqs |
| 4 | /make-appointment.html | Contact + form | /book-appointment |
| 5 | /contact.html | **Broken** (linked from blog nav) | /contact |
| 6 | /privacy-policy.html | Legal | /privacy-policy |
| 7 | /terms-conditions.html | Legal | /terms-of-use |
| 8 | /blog/ , /blog/?paged=2 , /blog/?paged=3 | Blog index | /blog |
| 9 | /blog/?cat=1, 22, 23 (Uncategorized, blog, article) | Category | /blog |
| 10 | /blog/?cat=24, 39, 44, 52, 56, 60, 65, 69, 74, 78, 82, 86 (+ others with no posts seen) | Keyword categories | /blog or the matching service page |
| 11 | /blog/tag/* (about 50 tags) | Tags | /blog |
| 12 | /blog/author/admin | Author | /about/dr-mithila-desai |
| 13 | /blog/?m=YYYYMM | Archives | /blog |
| 14-34 | /blog/?p=1, 16, 56, 60, 71, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104 | Posts (21) | /blog/[new-slug]; ?p=1 → ?p=16's new slug (duplicate); ?p=103 and ?p=104 → one slug |
| - | /assets/images/company-video.mp4 | Video | Review, then drop or re-host |

The crawl script also asks for `robots.txt`, `sitemap.xml` and `wp-sitemap.xml`, which were not readable from here.

---

## 6. Tech stack and admin ownership

| Item | Finding |
|---|---|
| Main site | Static HTML template (`.html` pages, `/assets/images/...`), no CMS. Developer credit "Blackcurrant Labs" (about 12 footer links to blackcurrantlabs.com). |
| Blog | WordPress (generator says 7.1.4), Cenote theme by ThemeGrill, plain `?p=` permalinks, comments on, at `thementalhealth.in/blog/`. |
| Hosts | Main site on `www.`, blog on apex. Mixed. |
| Booking | ClinicSpots external link; wa.me link; form handler unknown. |
| Analytics, consent | Not visible to the reader. Check in the local crawl. |
| Copyright | "© Copyright 2023 by Young Achievers"; "Billing Lable: Young Achievers" (typo). |
| Ownership | `[CONFIRM: domain registrar and DNS login, hosting, WordPress admin, who "admin" is, email (MX) provider]` |

The 2026 blog series (Sep-Oct 2026, every 2 days, keyword categories, identical structure) looks like a scheduled SEO programme. `[CONFIRM: who writes and publishes these; does Dr. Desai review them?]`

---

## 7. Current design

- Generic psychology-clinic template: hero slider repeating one line ("We're Helping You Start New Life"), decorative shapes (`/assets/images/shapes/`), stock-style feature photos, testimonial carousel with gender icons (women-ic.jpg, men-ic.jpg), team grid, awards strip, counters.
- Logo: "The Mental Health" (`them-mental-health-logo.png`, `footer-logo.png`, `logo-2.png`). No vector seen. Colours to be sampled from the logo once received.
- Blog has a different look (Cenote theme), so the two halves feel like two sites.

## 8. UX per page

| Page | Issues |
|---|---|
| Home | Hero says nothing about who, what, where. Counter shows "00". Four tabs of lorem ipsum. Testimonials. "Best" claims. Main CTA leaves the site to ClinicSpots. |
| About | Dr. Desai is not on her own About page team grid; her bio is missing (no degrees, registration, approach). Team name truncated. 20-year claim conflicts with the home page. |
| FAQ | Useful content; no title/meta; no schema; no helpline. |
| Make Appointment | Slots only to 3:30pm though hours say 7pm; no consent; advance Rs 500 with no method; no map; different WhatsApp number. |
| Privacy / Terms | Section 3.2 cut off; heading 2 unnumbered; no retention, dates, named contact or refund rule; operator "Young Achievers"; not DPDP-ready. |
| Blog | Author "admin"; broken Contact link; duplicate post; malformed links (`%2F`); meta descriptions promise counts the body does not deliver (9 vs 7, "7 core" vs 5); no images on the 2026 posts; no helplines on panic, self-harm and burnout posts. |
| Mobile | Viewport tag present. Screens not captured. `[CONFIRM: screenshots]` |

---

## 9. Issues

### 🔴 Live problems (fix in the rebuild, and ideally take down now)
1. Patient testimonials with names, "cured", "without medicine", and a "4.7 Average Rating" counter (Part 6.3: no testimonials, no ratings, no cure claims).
2. "recognised as one of the first best 10 mental health specialists in Mumbai"; "Meet Our Team Behind the Best Counseling"; Practo bio "Top 10" (Part 6.3: no "best", no rankings).
3. "Without Resorting to Harmful Medications" and "reduce dependence on psychiatric medications" (discourages prescribed treatment; risky for patients with severe illness).
4. No crisis information anywhere: add Tele-MANAS 14416 (also 1-800-891-4416) and "Medical emergency? Call 108 or 112" on every condition page and in the utility bar.
5. Lorem ipsum in four tabs; "00 Years of Experience".
6. Directories list her under the Maharashtra Medical Council; the new site must show her real registration (RCI) or none.
7. Privacy policy cut off mid-sentence; collects "session notes" with no retention or safeguards described.
8. Blog Contact link is a 404.

### Positioning
- One senior clinical psychologist with 30+ years, PhD, school and corporate work, and a team that includes a psychiatrist. That is a strong, factual story, and the old site hides it behind a generic template.
- Brand confusion (The Mental Health / Power of Mind / Young Achievers).
- Experience number is different on every source.

### Conversion
- Booking goes off-site; slot list ends at 3:30pm; three numbers; no clear "what happens at the first session"; no online-session explainer on the main site (only in the blog).

### Technical SEO
- Same `<title>` on every static page; first-person meta description on every page; no alt text on any image; non-standard meta names; duplicate home (`/` and `/index.html`); split hosts (www vs apex); `?p=` permalinks; duplicate posts (1/16, 103/104); thin category and tag archives; no schema seen; no author entity (posts by "admin").

### Local SEO
- NAP differs across website, Practo, Lybrate, Eka, myUpchar, MyMediland, Justdial. Fix order after launch: Google profile, Practo, Justdial, Lybrate, Eka, then smaller ones (mark Hill View closed if it is).

---

## 10. Media inventory

See `images-inventory.md` (about 60 files with URLs and rights notes). Summary: 1 portrait of Dr. Desai on the site, 5 team portraits, 3 logo files, about 8 stock-style feature images, 2 testimonial icons, 1 video, 4 blog images (2 Pexels stock), plus directory photos (Practo, Lybrate, ClinicSpots, Eka signage and interiors).

## 11. Data checklist

See `facts-found-vs-confirm.md` (all 59 intake items, each marked found, partly found, or needed from the client, with ★ launch blockers).

## 12. Image selection (first pass)

- Candidates to request at full size: Dr. Desai portrait (`dr-mithila-desai.jpg`), Eka clinic signage and interior photos, Practo clinic photos, logo source file.
- Reject for the new site: shapes, testimonial icons, Pexels stock, demo feature images, any image of a patient.
- Team portraits only with each person's written consent and confirmation they are still on the team.

---

## Appendix: blog posts

Titles, dates, headings and outlines for all 21 posts are in `raw-sources/02-thementalhealth-blog.md`. Verbatim bodies come from the local crawl (`wp-json/wp/v2/posts`). Recommendation for the content step:
- Keep and revise: 56 (first session), 16 (helping a depressed partner; merge 1 into it; remove the unsourced divorce statistics), 71 (panic attacks; add sources), 60 (online vs offline; add sources), and the 2026 series 89-103 (named author and reviewer, sources, helplines, remove fee ranges from 89's meta, soften "reduce or even stop" in 98, fix meta promises in 99 and 101).
- Drop: 104 (duplicate of 103) with a 301.
