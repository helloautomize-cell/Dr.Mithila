# Site plan · The Mental Health, Dr. Mithila Desai, Borivali West

Version 1 · 29 October 2026 · Prepared by Automize Media Labs for review by Dr. Mithila Desai
Step 2 of the rebuild. Builds on `01-research/` (audit, facts-found-vs-confirm, images inventory).
Anything only the practice can confirm is marked `[CONFIRM: ...]`. It shows as a yellow chip in development, is hidden in production, and blocks launch.

Decisions already made by Automize Media (29 Oct 2026):
- Public brand: **The Mental Health**
- Social link: Instagram https://www.instagram.com/dr.mithiladesai
- RCI registration number, confirmed qualifications and hours: to come later, written as `[CONFIRM]`

---

## 1. Positioning in one line

The Mental Health is the psychology practice of Dr. Mithila Desai, a clinical psychologist (PhD) in Borivali West, Mumbai, who offers talk therapy and psychological assessment for adults, teenagers, children, couples and families, in person and online.

What makes it different (facts only, no comparisons):
- One senior clinical psychologist who sees clients herself, with more than `[CONFIRM: years, from start year; old site says practice began in 1989]` years of practice.
- Work with people across the whole life span: children, teenagers, adults, couples, families, older adults.
- Psychological assessment and therapy under one roof.
- Long experience with schools, students and workplaces (employee assistance and wellness programmes).
- Online sessions for clients who cannot come to Borivali, including Indians living abroad.

### Entity statement

Used word for word in About, `llms.txt`, `entity-facts.md` and the Google profile description.

> The Mental Health is a psychology practice at 17, Shraddha SBI Staff Gulmohar CHS, Gulmohar Road, Shimpoli, Borivali West, Mumbai 400092, led by Dr. Mithila Desai, PhD, a clinical psychologist registered with the Rehabilitation Council of India `[CONFIRM: RCI CRR number]`. The practice offers individual therapy, child and teen therapy, couples and family counselling, psychological assessment, online therapy, and wellbeing programmes for schools and workplaces. Dr. Desai's care is talking therapy and psychological assessment. When medicine may help, she suggests a psychiatrist and works alongside them with the client's consent.

### What the site must never say about her
- "Doctor" in the medical sense, "MD", "physician", "Maharashtra Medical Council" or any medical registration.
- That she prescribes, reduces or stops medicines. Psychologists do not.
- "Best", "top 10", "leading", "No. 1", rankings, ratings, testimonials, "cured", "without medicine", "permanent", "guaranteed".
- Anything that discourages prescribed medicine. Replacement line: "Talk therapy helps many people on its own. When medicine may also help, we will tell you, and we can work alongside your psychiatrist."

"Dr." is used because she holds a PhD. The first mention on every page that names her reads "Dr. Mithila Desai, clinical psychologist" so no reader takes her for a medical doctor.

---

## 2. Page list and URLs (41 pages + Health Library)

`trailingSlash: true`. Lowercase, hyphenated, no dates. Canonical host `[CONFIRM: www.thementalhealth.in or thementalhealth.in]`.

### Core (12, including Our team, numbered 41)

| # | Page | URL | H1 (italic accent word in *stars*) | Main search intent |
|---|---|---|---|---|
| 1 | Home | `/` | Talk therapy and psychological care in *Borivali* | psychologist Borivali, therapist Borivali West, counselling Mumbai |
| 2 | About The Mental Health | `/about/` | About The Mental *Health* | The Mental Health Borivali |
| 3 | Dr. Mithila Desai | `/dr-mithila-desai/` | Dr. Mithila Desai, clinical *psychologist* | Dr Mithila Desai, clinical psychologist Borivali |
| 4 | All services | `/services/` | How we can *help* | therapy services, counselling services Mumbai |
| 5 | Plan your visit | `/plan-your-visit/` | Plan your first *session* | first therapy session, what to expect |
| 6 | Contact and book | `/contact/` (form `#book`) | Book a session or *contact* us | The Mental Health phone number, book psychologist |
| 7 | FAQs | `/faqs/` | Questions people often *ask* | psychologist vs psychiatrist, is therapy confidential |
| 8 | Get help now | `/get-help-now/` | If you need help *now* | mental health helpline India, suicide helpline |
| 9 | Health Library | `/health-library/` | Health *Library* | |
| 10 | Thank you (noindex) | `/thank-you/` | Thank you, we have your *request* | |
| 11 | 404 | | We could not find that *page* | |
| 41 | Our team | `/our-team/` | The people behind The Mental *Health* | The Mental Health team, psychiatrist Borivali |

### Ways we work (6)

| # | Page | URL | Badge | Primary query |
|---|---|---|---|---|
| 12 | Individual therapy for adults | `/individual-therapy/` | individual | therapist for adults Borivali, counselling for adults |
| 13 | Child and teen therapy | `/child-and-teen-therapy/` | child-teen | child psychologist Borivali, teen counselling Mumbai |
| 14 | Couples and marriage counselling | `/couples-counselling/` | couples | marriage counselling Borivali, couples therapist Mumbai |
| 15 | Family counselling and parenting support | `/family-counselling/` | family | family therapy Mumbai, parenting counselling |
| 16 | Online therapy | `/online-therapy/` | online | online therapy India, online psychologist Mumbai |
| 17 | Online therapy for Indians abroad | `/online-therapy/indians-abroad/` | abroad | online therapy for NRI, Indian therapist abroad |

### Concerns we help with (11)

| # | Page | URL | Badge | Primary query |
|---|---|---|---|---|
| 18 | Anxiety and panic | `/anxiety/` | anxiety | anxiety therapist Borivali, panic attack help Mumbai |
| 19 | Depression and low mood | `/depression/` | depression | depression counselling Mumbai, psychologist for depression |
| 20 | OCD | `/ocd/` | ocd | OCD psychologist Borivali, ERP therapy Mumbai |
| 21 | Stress, anger and burnout | `/stress-and-burnout/` | stress | stress counselling, burnout therapy, anger management Mumbai |
| 22 | Trauma and difficult experiences | `/trauma/` | trauma | trauma therapist Mumbai, PTSD counselling |
| 23 | Self-esteem and body image | `/self-esteem-and-body-image/` | self-esteem | low self-esteem counselling, body image therapy |
| 24 | Grief and loss | `/grief-and-loss/` | grief | grief counselling Mumbai |
| 25 | Habits, addiction and dependence | `/addiction-and-habits/` | habits | addiction counselling Borivali, de-addiction counselling |
| 26 | Self-harm and suicidal thoughts | `/self-harm-and-suicidal-thoughts/` | support | self-harm help, suicidal thoughts help India |
| 27 | Sleep problems | `/sleep-problems/` | sleep | insomnia therapy, CBT for insomnia Mumbai |
| 28 | LGBTQIA+ affirmative counselling | `/lgbtqia-affirmative-counselling/` | affirm | LGBTQ friendly therapist Mumbai, queer affirmative counselling |

Pages 24, 25, 27 and 28 stay because the old website listed them (grief under individual therapy, sleep and addiction in the services list, LGBTQ on the booking form). Decision D6, 29 Oct 2026.

### Assessments (3)

| # | Page | URL | Badge | Primary query |
|---|---|---|---|---|
| 29 | Psychological assessment | `/psychological-assessment/` | assessment | psychological assessment Mumbai, psychometric test Borivali |
| 30 | ADHD, learning and neurodiversity assessment | `/psychological-assessment/adhd-learning-neurodiversity/` | neurodiversity | ADHD assessment Mumbai, learning disability test child |
| 31 | Career guidance and aptitude testing | `/career-guidance/` | career | career counselling Borivali, aptitude test after 10th |

### For organisations (2)

| # | Page | URL | Badge | Primary query |
|---|---|---|---|---|
| 32 | Workplace wellbeing and EAP | `/workplace-wellbeing/` | workplace | corporate wellness Mumbai, EAP counselling India |
| 33 | Schools and colleges | `/schools-and-colleges/` | schools | school counsellor workshop Mumbai, teacher training mental health |

### Legal and trust (7)

| # | Page | URL |
|---|---|---|
| 34 | Privacy Policy | `/privacy-policy/` |
| 35 | Terms of Use | `/terms-of-use/` |
| 36 | Disclaimer | `/disclaimer/` |
| 37 | Editorial and Clinical Review Policy | `/editorial-policy/` |
| 38 | Client Rights and Responsibilities | `/client-rights/` |
| 39 | Appointments, Cancellation and Refund | `/appointments-cancellation-refund/` |
| 40 | Accessibility Statement | `/accessibility/` |

### Health Library (existing posts, revised)

The old blog had 21 posts. Two duplicate pairs are merged (`?p=1` into `?p=16`, `?p=104` into `?p=103`), so 19 posts move to the Health Library with new slugs, a named author, an "In brief" box, sources and the crisis note. Full map and revision notes are in Part 7 of `new-website-content.md`. The old bodies are needed from the local crawl (`01-research/raw-sources/crawl-thementalhealth.mjs`) before the revisions are written in full, because the cloud workspace could only read outlines.

### Not included, on purpose
- **Andheri (Lokhandwala) clinic.** Not active (confirmed 29 Oct 2026). Not on the site; mark it closed on every listing (decision D4).
- **Separate "Power of Mind" page, and any mention of Young Achievers.** One brand; Power of Mind appears as one line on About and as a schema alternate name only (decision D1).
- **Fees page.** No fees on the site (default). Fee questions are answered on the phone.

---

## 3. Navigation

### Utility bar (desktop)
Left: Plan your first session · Health Library
Right: clock icon "`[CONFIRM: session days and hours]`" · phone "+91 87796 51309" · **"Need help now? Tele-MANAS 14416 · Emergency 112"** (links to `/get-help-now/`, shown in the alert colour) · A / A+

### Header
Logo (The Mental Health) · Therapy ▾ · Concerns ▾ · Assessments ▾ · For organisations ▾ · Dr. Mithila Desai · Book a session (two-part button)

### Mega menu panels

**Therapy** (2 columns + doctor card)
- Who it is for: Adults · Children and teenagers · Couples · Families and parents
- How: In person in Borivali · Online therapy · Online therapy for Indians abroad · Plan your first session
- Card: Dr. Mithila Desai · Clinical psychologist, PhD · View profile

**Concerns** (3 columns)
- Feelings: Anxiety and panic · Depression and low mood · Stress, anger and burnout · Grief and loss
- Patterns: OCD · Habits, addiction and dependence · Sleep problems · Self-esteem and body image
- Experiences: Trauma · Self-harm and suicidal thoughts · LGBTQIA+ affirmative counselling
- Footer link in panel: "Need help now?" → `/get-help-now/`

**Assessments** (1 column + card)
- Psychological assessment · ADHD, learning and neurodiversity · Career guidance and aptitude testing

**For organisations** (1 column)
- Workplace wellbeing and EAP · Schools and colleges

### Mobile menu (accordion, all closed)
Therapy · Concerns · Assessments · For organisations · Dr. Mithila Desai · Our team · About · Plan your first session · Health Library · FAQs · Contact · **Get help now** (always visible, not in an accordion)
Fixed footer of the menu: Book · Call · one line "`[CONFIRM: today's hours]`"

### Mobile action bar
Book Now · Call Now (sheet: +91 87796 51309 `[CONFIRM: second number, if any]`) · WhatsApp (`[CONFIRM: WhatsApp number; old site used +91 91677 66941]`)

WhatsApp pre-fill pattern: "Hello, I would like to book a session about [page title]. My name is "
On `/get-help-now/` and `/self-harm-and-suicidal-thoughts/` the bar shows **Call 14416** in place of Book Now.

### Footer
- Logo + one line: "Talk therapy and psychological assessment in Borivali West and online, led by clinical psychologist Dr. Mithila Desai."
- Address: 17, Shraddha SBI Staff Gulmohar CHS / Gulmohar Road, Shimpoli / Borivali West, Mumbai 400092 / Opposite Banana Leaf Restaurant · Get directions
- Hours: `[CONFIRM]` (rows: In-person sessions · Online sessions · Phone answering)
- Call +91 87796 51309 · WhatsApp `[CONFIRM]` · email (obfuscated) `[CONFIRM: one email]`
- "See us on Google Maps" link
- Columns: Therapy · Concerns · Assessments · For organisations · Client information (Our team, Plan your first session, FAQs, Health Library, Contact, Get help now) · Legal (7) + Cookie settings
- Crisis line (always): "Need urgent help? Call 112 or Tele-MANAS 14416 (free, 24 hours)."
- Social: Instagram only
- Bottom: "© [year] The Mental Health, Borivali West, Mumbai. This website is run by `[CONFIRM: legal entity, records only]` for the practice of Dr. Mithila Desai, clinical psychologist, RCI CRR No. `[CONFIRM]`. The information here is for general education. For advice about your own situation, book a session."

---

## 4. Global copy blocks (reuse exactly)

**Utility bar alert:** Need help now? Tele-MANAS 14416 · Emergency 112

**Crisis callout (every concern page, Home, Contact, Plan your visit, every Health Library post):**
> **If you are in danger right now.** If you have hurt yourself, are thinking of ending your life, or feel you may act on thoughts of harming yourself or someone else, please do not wait for an appointment. Call **112**, go to the nearest hospital emergency department, or call **Tele-MANAS on 14416** or 1-800-891-4416. Tele-MANAS is the Government of India's free mental health helpline, open 24 hours, in many Indian languages. Messages to The Mental Health are answered during clinic hours.

**Short crisis line (footer, forms, thank-you page):**
> Need urgent help? Call 112 or Tele-MANAS 14416 (free, 24 hours).

**Reviewer box (psychologist version):**
> Clinically reviewed by **Dr. Mithila Desai**, PhD, clinical psychologist · Rehabilitation Council of India CRR No. `[CONFIRM]` · Last reviewed [date set at sign-off]
> This page gives general information about psychological care at The Mental Health. For advice about your own situation, book a session with Dr. Desai. Read our [editorial policy](/editorial-policy/).

**Medicine line (used wherever medicine comes up):**
> Talk therapy helps many people on its own. When medicine may also help, Dr. Desai will tell you and suggest a psychiatrist, and with your consent she can work alongside them. Please do not stop or change any prescribed medicine without speaking to the doctor who prescribed it.

**Approach line (generic and true; replaces any protocol detail):**
> Dr. Desai decides how to work with you after she has understood your concerns, your history and your goals. She draws on established talking therapies such as `[CONFIRM: approaches she uses, in plain words; sources mention CBT, REBT, mindfulness and acceptance-based work]`, and explains each step as you go.

**Assessment line:**
> Dr. Desai chooses standardised assessments based on the question you need answered, and explains the results in plain words. Her reports help families, schools and individuals plan support, and can support applications to government medical boards for certificates.

**Confidentiality line:**
> What you say in a session stays private. The only exceptions are when someone's life or safety is at serious risk, when a child may be at risk of harm, or when the law requires disclosure. Dr. Desai will explain this at the first session.

**CTA band:**
> Ready to talk to *someone*?
> Book a session, call +91 87796 51309 or message us on WhatsApp. We reply to booking requests within `[CONFIRM: reply time, e.g. the same working day]`.
> [Book a session] [Call] [WhatsApp]
> Small line: Need urgent help? Call 112 or Tele-MANAS 14416.

**Form consent line (checkbox, unticked):**
> I agree that The Mental Health may use these details to contact me about my appointment, as explained in the [Privacy Policy](/privacy-policy/).

**Under the form:**
> Please do not share details of your concerns here. You can talk about them with Dr. Desai in your session. If you are in danger, call 112 or Tele-MANAS 14416.

**Under-18 consent line (shown when "under 18" is ticked):**
> I am the parent or legal guardian of this young person and I agree to The Mental Health using these details to arrange their appointment.

---

## 5. Writing rules applied in every page

- Plain, warm English for a worried parent, a 20-year-old student and a 65-year-old at once. Short sentences. "We" and "you".
- Explain each term the first time (e.g. "CBT, cognitive behavioural therapy, which looks at how thoughts, feelings and actions affect each other").
- Answer-first: every page opens with 2 to 3 sentences that say what it is, who it is for and what happens at The Mental Health.
- "At a glance" box near the top of every service page (short, quotable facts).
- Sentence case headings. One question-style H2 only where it matches a real search.
- FAQs 4 to 7 per service page, answers of 40 to 80 words, each complete on its own.
- No em or en dashes. Ranges use "to".
- Never: best, leading, top, No. 1, world-class, guaranteed, cure, cured, permanent, 100%, miracle, holistic, comprehensive, tailored, seamless, empower, journey (as a metaphor), peace of mind, rest assured.
- No testimonials, client stories presented as real, ratings, client numbers, fees, drug names, or names of companies she has worked for.
- No diagnosis on the page ("you have depression"). Use "signs that can mean", "many people notice".
- Stigma-free words: "a person living with OCD", "died by suicide" (never "committed suicide"), "mental health condition" (never "mental illness" as a booking option or label).
- Never describe self-harm or suicide methods. Every page that mentions suicide or self-harm carries the crisis callout and Tele-MANAS.
- No images of people in despair, pills, hospital beds or heads in hands.

---

## 6. Internal linking

- Every concern page links to the matching way of working (individual, child and teen, couples) and to Online therapy, plus 1 or 2 Health Library posts.
- Every "ways we work" page links to 4 to 6 concern pages.
- Every page ends with the CTA band. The Book button carries the page as the booking reason (`lib/booking-context.ts`).
- Dr. Desai's profile links to every hub; every reviewer box links to the profile.
- "Get help now" is linked from the utility bar, footer, mobile menu, every concern page and every Health Library post.

Booking form options:
- **Who is the session for?** Myself · My child (under 12) · My teenager (12 to 17) · My partner and me · My family · An older family member
- **What would you like help with?** (optional) Anxiety or panic · Low mood · OCD · Stress or burnout · Relationship · Child or teen concern · Assessment · Career guidance · Something else · Not sure yet
- **How would you like to meet?** In person in Borivali · Online · No preference
- "Mental Illness" is removed from the old list (too broad and stigmatising). "LGBTQ" is no longer a "programme"; the affirmative page links to the form with "Something else" pre-selected.

---

## 7. Schema plan (one `@graph` per page)

| Page | Types |
|---|---|
| All | `WebSite` (#website, inLanguage en-IN), `MedicalClinic` (#practice), `Person` (#dr-mithila-desai), `BreadcrumbList` |
| Home | + `MedicalWebPage`, `FAQPage` |
| Dr. Mithila Desai | + `ProfilePage`, mainEntity #dr-mithila-desai |
| Therapy and concern pages | + `MedicalWebPage` (about = `MedicalCondition` or `MedicalTherapy`, `reviewedBy` #dr-mithila-desai, `lastReviewed`), `FAQPage` |
| Assessment pages | about = `MedicalTest` (psychological assessment), `reviewedBy` |
| Organisation pages | + `Service` (provider #practice, audience `BusinessAudience` or `EducationalAudience`) |
| Get help now | + `WebPage` with `about` = Tele-MANAS as a `GovernmentService` |
| Posts | `BlogPosting` (author + reviewedBy #dr-mithila-desai, datePublished from the old blog, dateModified), `FAQPage` |
| Contact | `ContactPage` |
| Our team | + `AboutPage`; each confirmed psychologist as `Person` (jobTitle, RCI credential); a team psychiatrist as `Physician` only with a confirmed Maharashtra Medical Council number |

`MedicalClinic` (#practice):
- name "The Mental Health"; alternateName "Dr Mithila Desai's Power Of Mind Clinic" (so old listings join up; decision D1)
- address: 17, Shraddha SBI Staff Gulmohar CHS, Gulmohar Road, Shimpoli, Borivali West, Mumbai, Maharashtra 400092, IN; geo from the Maps pin `[CONFIRM: share the pin]`
- telephone +91-8779651309; email `[CONFIRM]`
- `openingHoursSpecification` `[CONFIRM]`
- foundingDate `[CONFIRM]`; founder #dr-mithila-desai
- `knowsAbout` (text): psychotherapy, cognitive behavioural therapy, anxiety, depression, OCD, couples counselling, child psychology, psychological assessment
- `availableService`: `MedicalTherapy` items (individual, child and teen, couples, family, online) and `MedicalTest` (psychological assessment)
- `areaServed`: Borivali, Kandivali, Dahisar, Malad, Goregaon, Mira Road, Mumbai `[CONFIRM: catchment]`; plus "Online, across India and abroad" (general wording, no country list)
- `sameAs`: Google Maps URL, Instagram
- no `medicalSpecialty` "Psychiatric" (it suggests psychiatry); no `AggregateRating`, no `Review`

`Person` (#dr-mithila-desai), deliberately **not** `Physician`:
- name "Mithila Desai", honorificPrefix "Dr.", honorificSuffix "PhD"
- jobTitle "Clinical Psychologist"; `hasOccupation` { Occupation, name "Clinical psychologist", occupationLocation Mumbai }
- `hasCredential`: each confirmed qualification (`EducationalOccupationalCredential`), and RCI registration (credentialCategory "Professional registration", recognizedBy "Rehabilitation Council of India", identifier `[CONFIRM]`)
- `alumniOf`: `[CONFIRM: University of Mumbai and any other]`
- `award`: only confirmed awards, plain titles with year `[CONFIRM]`
- `knowsLanguage`: en, hi `[CONFIRM: mr, gu]`
- `worksFor` #practice; `sameAs`: Instagram, `[CONFIRM: LinkedIn]`

---

## 8. Home page section map

Full copy in `new-website-content.md`, Page 1. Order:
Hero (one portrait card, no fan, one practitioner) · Find help by concern · 01 Why The Mental Health · 02 About the practice · 03 How we can help (tabs) · 04 Your first session, step by step · Visit band · 05 Meet Dr. Mithila Desai · 06 Watch (hidden at launch) · 07 Concerns we help with (marquee) · 08 From our Health Library · 09 Quick answers · Contact block with crisis line · CTA band.

No testimonials, rating counters, award trophies as proof, "years" counters that animate, or client numbers.

---

## 9. GEO and AEO notes

- `llms.txt`: entity statement + page list with one-line summaries; `llms-full.txt`: all page text.
- Every service page's first paragraph names The Mental Health, Borivali West and Dr. Mithila Desai, clinical psychologist, in one natural sentence.
- "At a glance" boxes are plain HTML lists.
- FAQ text in the initial HTML.
- Same NAP and hours on every page, in schema, in `entity-facts.md`, on the Google profile, Practo, Justdial, Lybrate and Eka. Clean-up order after launch: Google profile, Practo (also remove the wrong services on the clinic page and the "Maharashtra Medical Council" line), Justdial, Lybrate, Eka, myUpchar, ClinicSpots, MyMediland. Mark the Andheri (Lokhandwala) listings closed, and Hill View closed if it is.

---

## 10. Old URLs to new (301 map)

| Old URL | New URL |
|---|---|
| `/`, `/index.html` | `/` |
| `/about.html` | `/about/` |
| `/faq.html` | `/faqs/` |
| `/make-appointment.html` | `/contact/` |
| `/contact.html` (broken) | `/contact/` |
| `/privacy-policy.html` | `/privacy-policy/` |
| `/terms-conditions.html` | `/terms-of-use/` |
| `/blog/`, `/blog/?paged=*`, `/blog/?cat=*`, `/blog/tag/*`, `/blog/?m=*` | `/health-library/` |
| `/blog/author/admin` | `/dr-mithila-desai/` |
| `/blog/?p=ID` (19 posts) | `/health-library/[new-slug]/` (map in content Part 7) |
| `/blog/?p=1` | slug of `?p=16` (duplicate) |
| `/blog/?p=104` | slug of `?p=103` (duplicate) |
| `/assets/images/company-video.mp4` | 410 unless re-hosted |

Query-string posts need `has: [{ type: "query", key: "p", value: "56" }]` style redirects.

---

## 11. Health Library topic list (year one, 24 topics)

Plan: 2 posts a month, each written or reviewed by Dr. Desai and signed by her.

Everyday mental health: Psychologist, psychiatrist, counsellor: who does what in India · How to tell a friend you are struggling · Sleep and mood: why they rise and fall together · Screen time and mood in teenagers · Loneliness in a big city · Caring for an ageing parent without burning out

Anxiety and mood: Exam stress: helping your child through boards and entrance exams · Health anxiety and searching symptoms online · Low mood after childbirth: when to ask for help · Seasonal changes in mood during the monsoon · What a panic attack is, and what to do in one

Children and families: Signs a child may need a learning assessment · Bullying, including online bullying: what parents can do · Talking to children about a death in the family · Joint families, boundaries and couples

Work and study: Returning to work after a mental health break · Working night shifts and mental health · Choosing a stream after Class 10: how aptitude testing helps

Therapy questions: What CBT is, in plain words · How to know therapy is working · Online therapy privacy: setting up a safe space at home · What a psychological assessment report contains

Crisis and safety: How to help someone who talks about suicide · Tele-MANAS 14416: what happens when you call

---

## 12. Decisions

Answered by Automize Media on 29 Oct 2026:

| # | Decision | Answer | What changed |
|---|---|---|---|
| D1 | Earlier names | Power of Mind only | One line on About and a schema alternate name. Young Achievers is not mentioned anywhere. |
| D2 | Team page | Yes | New page 41, Our team (`/our-team/`). Each person shows only after they confirm their role and registration and give written photo consent. |
| D3 | Clients living outside India | Yes, with general wording | Page 17 goes live. Pages say "Indians living abroad" and do not list countries. |
| D4 | Andheri sessions | Not active | Not on the site. Andheri listings (Lybrate, MyMediland, Practo bio) to be marked closed or removed after launch. |
| D5 | Call and WhatsApp numbers | Still open | Calls on +91 87796 51309; WhatsApp `[CONFIRM]`. |
| D6 | Grief, addiction, sleep and LGBTQIA+ pages | Keep, as on the old website | All four stay. |
| D7 | Old blog posts | Default kept | 19 posts move to the Health Library with 301s once she has reviewed each. |
| D8 | Domain | Agency adds a redirect to the main domain | Canonical stays `www.thementalhealth.in` `[CONFIRM: if the main domain is the version without www]`. |
