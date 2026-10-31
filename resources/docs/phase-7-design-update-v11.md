Update the site to match preview v11. Open resources/reference/the-mental-health-preview.html in a browser (hash pages: #home, #doctor, #services, #team, #anxiety, #visit) and match it closely at 390 and 1440. This prompt replaces the v8 and v9 prompts and includes everything in them.

## 0. Images
Copy resources/images/team/*, resources/images/clinic/*, resources/images/scenes/* and resources/images/dr-mithila-desai/* into public/images/team/, public/images/clinic/, public/images/scenes/ and public/images/dr-mithila-desai/, then run the image script. Keep the existing hero portrait, ELLE 2026 and 2023 award photos. Consent is confirmed for all five team members, so set `photoConsent: true` for each in lib/team.ts. Never use any other AI portrait of Dr. Desai.

Service images are ready in resources/images/scenes/ (svc-child-teen, svc-couples, svc-family, svc-assessment): copy them to public/images/scenes/. Treatment hero images 05 to 12 are still to come (see resources/docs/image-prompts.md): until they arrive, render the `ArtPanel` placeholder (warm clay gradient, tree watermark, large thin line icon). Swap in the photo when the file exists in public/images/scenes/.

## 1. New shared components (add to /styleguide)
- `InnerHero`: two columns (1.08fr text | .92fr media). Text: breadcrumb, `TagPill` (icon in a round clay chip plus label), H1 with one serif italic accent word, lead, BookButton plus text link, `TrustRow` (3 to 4 icon plus label items). Media: arch photo (999px 999px 32px 32px, 4:5) with 1 or 2 floating glass cards that bob gently (6s). Tree watermark top left. Stacks on mobile.
- `GlancePanel`: white 5-cell panel, each cell an IconTile, uppercase label and one line. Overlaps the hero by 30px. 3 columns at 1080px, 2 at 640px.
- `OnThisPage`: sticky chip nav under the header (top 78px), blurred paper background. Smooth scrolls to sections and highlights the current one.
- `SectionHead`: eyebrow with number, H2 with CharReveal, lead on the right.
- `SignsBento`: 3 columns: a tall card (mind, with a photo at the bottom), body card, behaviour card, and a wide espresso card spanning 2 columns. Tick markers in clay circles.
- `PanicWave`: espresso rounded band. Left: copy. Right: an SVG wave that draws itself on reveal (rises, peaks with a glowing dot, eases) with labels "It starts / It peaks, within about 10 minutes / It eases", then a red-tinted note card with the medical warning.
- `TherapyPath`: sticky photo on the left (radius 28 28 28 120), vertical line on the right that fills with a honey to walnut gradient as you scroll. Each step has an IconTile that turns walnut when reached, a serif number, title and line. Reused for Training and roles (Dr. Desai) and What happens at the first session (Plan your visit).
- `TryToday`: a tall espresso card with a breathing circle (scales .55 to 1 over 4s, back over 6s, label switches "Breathe in" / "Breathe out slowly") plus 4 white tool cards with icon and serif number.
- `FaqSplit`: left heading plus a sticky photo card with CTA, right accordion, reviewer strip (clay, avatar), sources line with icon.
- `RelatedCards` (4 icon cards) and `EndBand` (espresso, text left, photo right with a fade, Book plus ghost button, crisis line).
- `ServiceWayCard` (photo or ArtPanel left, body right, number, icon, link), `ConcernGrid` (4 columns of icon cards with a round arrow, plus a wide espresso "Online therapy for Indians abroad" feature with dr-online.jpg), `TriCards` (Assessments, For organisations, What we do not offer).
- `TeamMosaic` (3 by 2 portraits, middle column offset), `RoleCards`, `CareFlow4` (4 round icons on a dashed line), `PrivacyBand` (espresso, statement plus 3 point cards), `PhotoDuo`.

## 2. Pages
- Treatment pages (all concern and therapy pages use this template; Anxiety is the model): InnerHero, GlancePanel, OnThisPage, Signs, Panic or the condition's key explainer (use PanicWave for anxiety; for other pages a dark explainer band with an icon diagram), How therapy helps (TherapyPath), Try today, Questions (FaqSplit), Related, EndBand. Copy comes from new-website-content.md for each page; split the signs list into mind, body and behaviour without adding new signs.
- Dr. Desai (/dr-mithila-desai/): hero arch with dr-armchair.jpg and an ELLE 2026 glass card, facts grid; About (dr-desk.jpg with an overlapping espresso quote card, "Therapy first, with care joined up" card); How she works (6 icon cards); Beyond the therapy room (dr-talk-2026.jpg card "Resilient Living Conference · 2026" plus Schools, Workplaces, Teaching cards); Training and roles (TherapyPath); Recognition (2 award cards); Areas of care chips; FaqSplit with dr-door.jpg; EndBand.
- Services (/services/): InnerHero with clinic-room.jpg; Ways we work (4 ServiceWayCards: Individual uses dr-armchair.jpg, the other 3 use svc-child-teen.jpg, svc-couples.jpg and svc-family.jpg); ConcernGrid; TriCards (Assessments uses svc-assessment.jpg, Organisations uses dr-talk-2026.jpg); EndBand with dr-door.jpg.
- Our team (/our-team/): InnerHero with TeamMosaic; TeamSection (below); Who does what (RoleCards: Psychologists, Consultant psychiatrist, Care coordinator, with avatar stacks); How care is shared (CareFlow4); Privacy band; Where you'll meet us (PhotoDuo: clinic-room, clinic-waiting); FAQs; EndBand.
- Plan your visit (/plan-your-visit/): split hero with dr-door.jpg in an arch and the caption chip "She'll be the one you meet first"; Finding us (4 photo steps: clinic-entrance, clinic-waiting, clinic-room, clinic-nook, copy exactly as preview); What happens at the first session as TherapyPath; Online sessions block with dr-online.jpg (16:10, caption "Online, from wherever you are"); keep the rest.

## 3. Home changes (from v8 and v9)
- TeamSection on Home and Our team, all six people: lead card (dr-desk.jpg left 420px, role, name, "Stays with you from the first session to the last, and decides with you who else should be involved." with RCI CONFIRM chip, 3-step flow "You meet her first / The right colleague joins / One shared plan", Book and View profile), divider "Working alongside Dr. Desai", 5 member cards (3:4.3, every second card 28px lower, frosted icon chip, role and name, details expand on hover or focus; swipe row on mobile). Do not repeat 35 yrs / PhD / Borivali stats here.
- "Inside the practice" before "07 · Visit us": H2 "A room made for *calm*.", 4 photos (clinic-room, clinic-nook, clinic-waiting, clinic-entrance) in 1.25fr 1fr 1fr 1fr with staggered tops, captions with icon chips, gentle parallax, swipe row under 900px.
- Visit landmark: "Inside Dr. Navalkar's Orthocare & Multi-speciality Clinic building, room C-2. Opposite Banana Leaf Restaurant."
- Author avatars (reviewer box, Book page signature) use dr-desk.jpg.
- In `.list li`, a CONFIRM chip after the text sits in column 2.

## 4. Rules
Exact copy from the preview, no dashes, no new claims, no country lists for overseas clients (say "Indians living abroad"), CONFIRM chips stay. Alt text on every image. Reduced motion turns off the bobbing cards, breathing circle, wave drawing and path fill. No horizontal overflow at 390, 768, 1024 and 1440. Phone number stays CONFIRM until the client confirms which one is public.

## 5. Location (confirmed)
Set `mapsUrl: "https://maps.app.goo.gl/Eem6wa6ysR3Swfs27"` in lib/site-config.ts. Use it for every "Get directions" button (opens in a new tab, rel noopener), for a tap on the map illustration ("Tap to open in Google Maps"), and for an "Open in Google Maps" link under step 01 of Finding us. The embedded live map still loads only after consent.

## 6. Areas of care (Dr. Desai page, section 06), preview v12
Replace the plain chip cards with `AreasOfCareBento`, a 4-column bento:
- Feelings and mood: 2 columns by 2 rows, clay gradient, IconTile (heart), serif number 01, title, line "When emotions feel too strong, too flat, or won't settle.", chips, and clinic-nook.jpg at the bottom (radius 22px, max 340px tall).
- Thoughts and habits: 2 columns, icon on the left, line "Patterns that feel hard to stop or change.", chips.
- Relationships and Children and teenagers: 1 column each, a 130px photo band on top (svc-couples.jpg, svc-child-teen.jpg) with the IconTile overlapping it, then number, title, chips.
- Assessments ("Clear answers, in plain words.") and Organisations ("Schools and workplaces."): 1 column each, icon, number, title, line, chips.
- "Not sure where to start?": 2 columns, espresso with tree watermark, H3 "You don't need the right word for it.", line "Tell Dr. Desai what's been happening. She'll help you make sense of it in the first session.", BookButton and ghost "How the first session works" (to /plan-your-visit/).
Every chip is a link to its concern page (Anxiety and Panic to /anxiety-and-panic/, the rest to the matching concern or service page). On hover or focus the chip fills walnut, text turns white and a small arrow slides in. Cards lift 4px on hover and the IconTile rotates and fills walnut. 2 columns at 1080px, 1 column at 640px. Lead next to the heading: "Tap a topic to read more about it."
