# Content Guide — How to Edit This Website

This is written for whoever is updating SUBA's content, even if you've never written code before. It explains, in plain language, exactly which file to open and exactly what to type for every common task.

If you get stuck or break something, the worst case is a typo causing the site to fail to build — it won't delete anything or break the live site, since you'll catch the error before it goes live (see "Previewing your changes" at the bottom).

---

## The one file that matters most

Almost everything you'll want to edit — publications, testimonials, news, statistics, initiatives, the photo documentation gallery — lives in **one single file**:

```
src/lib/data/index.ts
```

Open it in any text editor (VS Code is free and works well: code.visualstudio.com). Everything below refers to sections inside this file unless stated otherwise.

A quick orientation on how this file is structured: it's a series of lists. Each list holds one type of content — `publications`, `testimonials`, `newsItems`, and so on. Each item in a list is wrapped in `{ }` (curly braces) and separated from the next item by a comma. **The commas matter** — if you copy an example below and forget a comma, the site will fail to build. The safest approach is always to copy an entire existing entry, paste it as a new one, and then just change the text inside.

---

## 1. Adding a new publication (research paper, policy brief, report, etc.)

Find the `publications` list near the top of the file. Each entry looks like this:

```ts
{
  id: 'pub-007',
  slug: 'your-publication-url-name',
  title: 'The Full Title of Your Publication',
  date: '2025-07-01',
  category: 'Policy Brief',
  author: 'Symboh Research Team',
  summary: 'A two-to-three sentence summary that appears on the publication cards and list.',
  wing: 'Symboh',
  readTime: '10 min',
  tags: ['Tag One', 'Tag Two'],
  downloadUrl: '#',
},
```

**What to change:**
- `id`: any unique short code, e.g. `pub-007` (just increase the number from the last one in the list)
- `slug`: this becomes the page URL — use lowercase words separated by hyphens, no spaces or punctuation (e.g. `slug: 'shillong-water-access-report'` becomes `projectsuba.in/publications/shillong-water-access-report`)
- `category`: must be exactly one of: `'Research Paper'`, `'Policy Brief'`, `'White Paper'`, `'Newsletter'`, `'Report'`, `'Case Study'` (including the quote marks, matching capitalisation)
- `wing`: must be exactly `'SUBA'`, `'Symboh'`, or `'Comma'` — or you can delete this line entirely if it's not tied to a specific wing
- `downloadUrl`: if you have an actual PDF to link to, see "Adding a downloadable PDF" below. Otherwise leave as `'#'`

**Paste your new entry** inside the square brackets `[ ]` that hold the whole `publications` list — anywhere between the existing entries, each one separated by a comma.

### Adding the full written content (not just a summary)

If you want people to be able to click through and read the whole piece (like a blog post), add a `body` field. This is what powers the `/publications/[slug]` detail pages.

```ts
body: [
  {
    heading: 'Why this matters',
    paragraphs: [
      'Your first paragraph goes here.',
      'A second paragraph, if you want one, goes here.',
    ],
  },
  {
    heading: 'What we found',
    paragraphs: [
      'Another paragraph under a second heading.',
    ],
    quote: {
      text: 'An optional pull-quote can go here, highlighted on the page.',
      attribution: 'Who said it',
    },
  },
],
```

You can have as many of these heading-plus-paragraphs blocks as you want. The `quote` part is optional — delete the whole `quote: { ... }` block if you don't need one for that section.

### Adding a downloadable PDF

1. Put the PDF file in `public/documents/` (create that folder if it doesn't exist)
2. Set `downloadUrl: '/documents/your-file-name.pdf'`

---

## 2. Adding a testimonial

Find the `testimonials` list. Each entry looks like:

```ts
{
  id: 't7',
  quote: 'The actual words the person said, written exactly as they said it or approved it.',
  name: 'Their Full Name',
  role: 'Their job title or role',
  affiliation: 'Their organisation (optional — delete this line if not needed)',
  category: 'Government',
},
```

`category` must be exactly one of: `'Government'`, `'Donor / Partner'`, `'Volunteer'`, `'Community Member'`, `'Educator'`, `'Media'`.

**Important:** every testimonial currently in the file says "Name Withheld — Update Before Publishing." These are placeholders showing the format only. Before the site goes live, replace every single one with a real quote from a real person who has explicitly agreed to be quoted — or delete the placeholder entries entirely if you don't have enough real ones yet. Do not publish a quote attributed to someone who didn't actually say it or didn't agree to be named.

---

## 3. Adding a news item or upcoming event

Find the `newsItems` list. Each entry:

```ts
{
  id: 'n7',
  title: 'A Short, Clear Headline',
  type: 'Event',
  date: '2025-08-15',
  description: 'One or two sentences describing what this is.',
  location: 'Where it is happening (optional)',
},
```

`type` must be exactly one of: `'News'`, `'Event'`, `'Announcement'`, `'Update'`. Items with `type: 'Event'` show up in the "Upcoming Events" section on the Events page; everything else shows in "Recent Updates."

---

## 4. Adding or editing a photo-documented campaign (the "Our Work" page)

Find the `galleryEntries` list. This powers the before/during/after photo documentation page at `/our-work`. Each entry:

```ts
{
  id: 'your-event-id',
  title: 'Name of the Drive or Event',
  date: '2025-07-20',
  location: 'Where it happened',
  wing: 'Comma',
  summary: 'A short paragraph describing what happened and why.',
  stats: [
    { label: 'Waste recovered', value: '60 kg' },
    { label: 'Volunteers', value: '20' },
  ],
  before: { caption: 'A short caption describing the before photo.' },
  during: { caption: 'A short caption describing the during photo.' },
  after: { caption: 'A short caption describing the after photo.' },
  reflection: 'An optional quote or reflection about the event (delete this line if you don\'t need it).',
  credits: ['Photography: Name', 'Documentation: Name'],
},
```

You can have as many `stats` entries as you want, or as few as one.

**Then add the actual photos** — see `BRAND_ASSETS.md` for full instructions, but in short: put your three photos in `public/images/our-work/` named `your-event-id-before.jpg`, `your-event-id-during.jpg`, and `your-event-id-after.jpg`, then open `src/app/our-work/page.tsx` and follow the commented instructions next to each `PhotoSlot` to swap in the real image.

---

## 5. Updating the homepage statistics

Find the `stats` list (used in the "Data & Impact" section on the homepage). Each entry:

```ts
{ value: '900 kg', label: 'Waste recovered', context: 'Across 10 clean-up drives', color: '#259745' },
```

Just edit the text inside the quotes. `color` should stay one of SUBA's official hex codes (see the colour table in `BRAND_ASSETS.md`) — don't introduce a new colour without checking it fits the brand palette.

---

## 6. Adding a new initiative or programme

Find the `initiatives` list (shown on the homepage and the `/initiatives` page):

```ts
{
  id: 'your-initiative-id',
  title: 'Name of the Initiative',
  tagline: 'A short one-line description',
  description: 'A longer description, one to two sentences.',
  wing: 'Comma',
  status: 'Active',
  area: 'What category this falls under',
  href: '/our-work',
  accentColor: '#259745',
},
```

`status` must be `'Active'`, `'Upcoming'`, or `'Completed'`. `wing` must be `'Symboh'` or `'Comma'`.

---

## 7. Editing page text that isn't a list (About, Contact, Get Involved, etc.)

Some text isn't stored in the central data file — things like the paragraph of "Our Story" on the About page, or the description text on the Contact page. This text lives directly inside each page's file:

| Page | File |
|---|---|
| Homepage | `src/app/page.tsx` and files inside `src/components/home/` |
| About | `src/app/about/page.tsx` |
| Symboh | `src/app/symboh/page.tsx` |
| Comma | `src/app/comma/page.tsx` |
| Get Involved | `src/app/get-involved/page.tsx` |
| Contact | `src/app/contact/page.tsx` |

Open the relevant file, find the sentence you want to change (use your editor's "Find" feature — usually `Ctrl+F` or `Cmd+F` — and search for a few words from the sentence), and edit the text between the `>` and `<` symbols, or inside quote marks. Don't touch anything that looks like `className="..."` or `style={{...}}` — that's formatting code, not text.

---

## 8. Replacing photos and logos

Covered in full detail in **`BRAND_ASSETS.md`** — short version: drop your photo into the matching folder inside `public/images/`, then find the `PhotoSlot` placeholder in the relevant file (every one has a comment directly above it showing exactly what code to paste in instead) and swap it out.

---

## Previewing your changes before they go live

You don't need to guess whether your edit worked. Run this in a terminal, inside the project folder:

```bash
npm install        # only needed the very first time
npm run dev
```

Then open `http://localhost:3000` in your browser. Any edit you save will show up there within a second or two. If you made a typo that breaks something, the terminal will show a red error message telling you which file and which line — fix that, save again, and it'll recover automatically.

When you're happy with your changes and ready to publish them to the real website, see `README.md` for deployment steps.

---

## Common mistakes to avoid

- **Missing or extra commas.** Every entry in a list needs a comma after it (except sometimes the very last one, which is also fine either way). If the site won't build, this is the first thing to check.
- **Mismatched quote marks.** If your text itself contains an apostrophe (like "volunteer's"), and your text is wrapped in single quotes `'...'`, you need to write `\'` instead of `'` inside the text — or switch that line to use double quotes `"..."` instead. Easiest fix: use double quotes for any sentence containing an apostrophe.
- **Changing field names.** Don't rename things like `title:` or `category:` — the website code looks for these exact words. Only change the text *after* the colon.
- **Wrong category/status spelling.** Fields like `category`, `status`, and `wing` only accept specific exact words (listed above for each). A typo here will cause a build error.

If you're ever unsure, copy an existing entry that already works, paste it as a new one, and only change the parts you need to. That's the safest way to add anything on this site.
