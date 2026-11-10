# Content Guide: How to Edit This Website

This guide is for whoever updates SUBA's content, including people who have never written code. It says exactly which file to open and what to type for each common task.

If you break something, the worst case is a typo that stops the site from building. That cannot take the live site down: a failed build is never published, and GitHub shows you the error.

---

## The file that matters most

Almost all content lives in **one file**:

```
src/lib/data/index.ts
```

Open it in any text editor (VS Code is free: code.visualstudio.com). It is a series of lists. Each list holds one kind of content (`publications`, `projects`, `newsItems` and so on), and each item in a list is wrapped in `{ }` and followed by a comma.

**The commas matter.** The safest way to add something is to copy a whole existing entry, paste it below, and change only the text inside.

Two other small files hold settings and photos:

- `src/lib/site.ts`: contact email, social links, site address, legal status, form service
- `src/lib/photos.ts`: real photographs (see `BRAND_ASSETS.md`)

---

## A note on quotation marks

Text sits inside quote marks, so an apostrophe in your text can end the text early. Two easy fixes:

- Use the curly apostrophe `’` instead of the straight one `'`. This is also better typography, and it is what the existing entries use.
- Or wrap the whole text in double quotes `"..."`.

---

## How the site is organised

- **Projects** (`projects`) are the heart of the site. Each one gets its own page at `/our-work/<id>`, with its description, the numbers it counted, a dated field log, related publications and updates.
- **Updates** (`newsItems`) are the dated log shown on the Updates page and the homepage.
- **Publications** (`publications`) are the research and newsletters.
- **Field entries** (`fieldEntries`) are the dated records (a drive, a plantation day) shown on a project's page.

Keep them linked: a field entry or update names its project with `project: 'ward16-cleanup'`, and the project page shows it automatically.

---

## 1. Adding a project

Find the `projects` list:

```ts
{
  id: 'your-project-id',
  title: 'Name of the project',
  wing: 'Comma',
  place: 'Where it happens',
  since: 'January 2026',
  status: 'Active',
  summary: 'One sentence, shown in lists.',
  description: [
    'First paragraph for the project page.',
    'A second paragraph, if you want one.',
  ],
  facts: [
    { label: 'Waste collected', value: '120 kg', note: 'Total across 3 drives, January to March 2026.' },
  ],
  publicationSlugs: ['a-publication-slug'],
},
```

- `id` becomes the page address, so use lowercase words separated by hyphens.
- `wing` is `'Comma'` or `'Symboh'`. `status` is `'Active'`, `'Planned'` or `'Completed'`.
- **Every fact needs a `note` saying what it counts and which dates it covers.** This is how the site avoids vague claims: a number for one drive is never presented as a total.
- `publicationSlugs` is optional. It links to publications.

---

## 2. Adding a dated field entry

Find `fieldEntries`. Each is one drive, plantation day or session:

```ts
{
  id: 'ward16-drive-10',
  project: 'ward16-cleanup',
  title: 'Drive 10',
  date: '2025-07-20',
  location: 'Ward 16 junction, Shillong',
  summary: 'A short paragraph on what happened.',
  stats: [{ label: 'Waste', value: '60 kg' }, { label: 'Volunteers', value: '20' }],
  before: 'What the site looked like before.',
  during: 'What happened.',
  after: 'What it looked like after.',
  reflection: 'An optional reflection (delete the line if unused).',
  credits: ['Photography: Name'],
},
```

---

## 3. Adding an update or event

Find `newsItems`:

```ts
{
  id: 'n7',
  title: 'A short, clear headline',
  type: 'Event',
  date: '2026-12-15',
  description: 'One or two sentences.',
  location: 'Where it is happening (optional)',
  project: 'ward16-cleanup',
},
```

`type` must be `'News'`, `'Event'`, `'Announcement'` or `'Update'`. `project` is optional.

**Upcoming versus past is decided by the date, automatically.** An `Event` dated today or later appears under "Coming up" on the Updates page. Once its date passes it moves into the dated log. The site rebuilds every night, so this happens by itself.

**Write descriptions in a way that stays true.** An entry for a past event should describe what it was, not invite people to join it.

The homepage shows the three newest updates. **A site whose newest update is a year old looks inactive**, so even a short, honest update every few months helps.

---

## 4. Adding a publication

Find the `publications` list:

```ts
{
  id: 'pub-007',
  slug: 'your-publication-url-name',
  title: 'The Full Title',
  date: '2026-07-01',
  category: 'Policy Brief',
  author: 'Symboh Research Team',
  kind: 'summary',
  summary: 'Two or three sentences shown in the list.',
  wing: 'Symboh',
  tags: ['Tag One', 'Tag Two'],
  body: [ /* see below */ ],
},
```

- `category` must be exactly one of `'Research Paper'`, `'Policy Brief'`, `'White Paper'`, `'Newsletter'`, `'Report'`, `'Case Study'`.
- `wing` is `'SUBA'`, `'Symboh'` or `'Comma'`, or delete the line.
- `kind` says what the page on this site is: `'summary'` if it summarises a longer document, `'full'` if the page is the whole piece. A summary page offers visitors a way to request the full document.
- Reading time is worked out automatically from the text, so there is nothing to type.

### Full text on its own page

Add a `body` to give the publication its own page:

```ts
body: [
  {
    heading: 'Why this matters',
    paragraphs: ['Your first paragraph.', 'A second paragraph.'],
  },
  {
    heading: 'What we found',
    paragraphs: ['Another paragraph.'],
    quote: { text: 'An optional pull quote.', attribution: 'Who said it' },
  },
],
```

**A publication without a `body` has no page of its own.** It still appears in the list, marked "Full text coming soon".

### Making a research publication complete

A serious research publication should have, somewhere on its page or in its PDF: a summary, the research question, the method, the sample size and how it was chosen, the data sources, the findings, recommendations, limitations and references. Where the research involved people, say how consent and confidentiality were handled. Three complete publications are worth more than six summaries.

### A downloadable PDF

1. Put the PDF in `public/documents/` (create the folder if needed).
2. Add `downloadUrl: '/documents/your-file.pdf',` to the entry.

**If there is no PDF, leave `downloadUrl` out entirely.** Never set it to `'#'`.

---

## 5. The numbers on the homepage

Find `ledger` (the four numbers on the homepage) and the `F` block at the top of the file, which holds the headline figures once so they cannot disagree with themselves:

```ts
const F = { wasteKg: '847 kg', drives: '9', saplings: '312', ... };
```

Change a figure in `F` and every page that uses it follows. **Check every figure against your real records**, and keep its note (what it counts and the dates) up to date.

---

## 6. The people behind SUBA

Find `team`, which is empty until you add real entries. The About page shows a "The people behind SUBA" section as soon as there is at least one:

```ts
{
  name: 'Full Name',
  role: 'Co-founder and coordinator',
  bio: 'One or two sentences about what they do at SUBA.',
  photo: '/images/team/full-name.jpg',
},
```

The photo is optional. Only add people who have agreed to be listed.

**Legal status.** In `src/lib/site.ts`, fill in `LEGAL_STATUS` with SUBA's real position (for example a registered society and its number, an unregistered collective, or a project of another organisation). It then appears on the About page. Visitors should not have to guess.

---

## 7. Comma programmes and Symboh pages

- `commaProgrammes`: the programme list on the Comma page. A programme with `projectId` links to that project's page.
- `symbohResearchAreas`, `symbohMethods`: the lists on the Symboh page.
- `values`: the five values on the About page.

---

## 8. Page text that is not in a list

| Page | File |
|---|---|
| Homepage | `src/app/page.tsx` and the files in `src/components/home/` |
| About | `src/app/about/page.tsx` |
| Symboh | `src/app/symboh/page.tsx` |
| Comma | `src/app/comma/page.tsx` |
| Get involved | `src/app/get-involved/page.tsx` |
| Contact | `src/app/contact/page.tsx` |
| Privacy | `src/app/privacy/page.tsx` |

Open the file, use Find (`Ctrl+F`) to locate a few words of the sentence, and edit the text between `>` and `<`. Leave anything that looks like `className="..."` alone: that is formatting.

**On voice.** Write the way a person at SUBA would explain it to someone new: direct, specific and concrete. A heading can just say what the section is ("Our work", "Updates"). Keep a memorable line where it earns its place, but not in every section.

---

## 9. Photos and logos

See **`BRAND_ASSETS.md`**.

---

## Previewing your changes

```bash
npm install     # first time only
npm run dev     # then open http://localhost:3000
```

Run `npm run check` before you push. It catches typos and type mistakes and prints the file and line. When you push to GitHub, the same checks run again, and the site only updates if they pass.

---

## Common mistakes

- **Missing commas.** Every entry needs a comma after it. If the build fails, check this first.
- **Mismatched quotes.** See "A note on quotation marks" above.
- **Renaming fields.** Do not change words like `title:` or `category:`. Only change the text after the colon.
- **Wrong spelling in fixed-choice fields.** `category`, `status`, `type`, `kind` and `wing` accept only the exact words listed above.
- **A project, entry or update pointing at a project that does not exist.** The `project` and `projectId` values must match a project's `id` exactly.
- **Setting `downloadUrl: '#'`.** Leave the line out instead.

When unsure, copy an entry that already works, paste it as a new one, and change only what you need.
