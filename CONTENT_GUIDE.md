# Content Guide: How to Edit This Website

This guide is for whoever updates SUBA's content, including people who have never written code. It says exactly which file to open and what to type for each common task.

If you break something, the worst case is a typo that stops the site from building. That cannot take the live site down: a failed build is never published, and GitHub shows you the error.

---

## The file that matters most

Almost all content lives in **one file**:

```
src/lib/data/index.ts
```

Open it in any text editor (VS Code is free: code.visualstudio.com). It is a series of lists. Each list holds one kind of content (`publications`, `newsItems`, `stats` and so on), and each item in a list is wrapped in `{ }` and followed by a comma.

**The commas matter.** The safest way to add something is to copy a whole existing entry, paste it below, and change only the text inside.

Site-wide settings (contact email, social links, site address) are in a separate small file: `src/lib/site.ts`.

---

## A note on quotation marks

Text sits inside quote marks, so an apostrophe in your text can end the text early. Two easy fixes:

- Use the curly apostrophe `’` instead of the straight one `'` (type it as `’`). This is also better typography, and it is what the existing entries use.
- Or wrap the whole text in double quotes `"..."`.

---

## 1. Adding a publication

Find the `publications` list. An entry looks like this:

```ts
{
  id: 'pub-007',
  slug: 'your-publication-url-name',
  title: 'The Full Title of Your Publication',
  date: '2025-07-01',
  category: 'Policy Brief',
  author: 'Symboh Research Team',
  summary: 'Two or three sentences shown on the cards and the list.',
  wing: 'Symboh',
  readTime: '10 min',
  tags: ['Tag One', 'Tag Two'],
  body: [ /* see below */ ],
},
```

- `id`: any unique code. Count up from the last one.
- `slug`: becomes the page address. Lowercase words separated by hyphens, no spaces.
- `category` must be exactly one of `'Research Paper'`, `'Policy Brief'`, `'White Paper'`, `'Newsletter'`, `'Report'`, `'Case Study'`.
- `wing` must be exactly `'SUBA'`, `'Symboh'` or `'Comma'`, or you can delete the line.

### Full text on its own page

Add a `body` to give the publication its own readable page:

```ts
body: [
  {
    heading: 'Why this matters',
    paragraphs: [
      'Your first paragraph.',
      'A second paragraph, if you want one.',
    ],
  },
  {
    heading: 'What we found',
    paragraphs: ['Another paragraph.'],
    quote: { text: 'An optional pull quote.', attribution: 'Who said it' },
  },
],
```

**A publication without a `body` has no page of its own.** It still appears in the lists, marked "Full text coming soon". Once you add a `body`, the page is created automatically and the "coming soon" note disappears.

### A downloadable PDF

1. Put the PDF in `public/documents/` (create the folder if needed).
2. Add `downloadUrl: '/documents/your-file.pdf',` to the entry.

**If there is no PDF, leave `downloadUrl` out entirely.** The Download button only appears when the line is there. Never set it to `'#'`: the button would then go nowhere.

---

## 2. Adding a testimonial

The `testimonials` list is **empty on purpose**, and the homepage section hides itself while it is empty. When you have a real quote from someone who has agreed to be named, add it:

```ts
{
  id: 't1',
  quote: 'The words they said or approved.',
  name: 'Their full name',
  role: 'Their role',
  affiliation: 'Their organisation (optional, delete the line if not needed)',
  category: 'Volunteer',
},
```

`category` must be one of `'Government'`, `'Donor / Partner'`, `'Volunteer'`, `'Community Member'`, `'Educator'`, `'Media'`.

Never publish a quote attributed to someone who did not say it or did not agree to be named.

---

## 3. Adding news or an event

Find the `newsItems` list:

```ts
{
  id: 'n7',
  title: 'A Short, Clear Headline',
  type: 'Event',
  date: '2025-08-15',
  description: 'One or two sentences.',
  location: 'Where it is happening (optional)',
},
```

`type` must be `'News'`, `'Event'`, `'Announcement'` or `'Update'`.

**Upcoming versus past is decided by the date, automatically.** An `Event` dated today or later appears under "Upcoming events". Once its date passes, it moves to "Recent updates and past events". The site rebuilds every night, so this happens by itself. When no event is upcoming, the page shows an invitation to join the Field Letter instead.

The homepage shows the four newest items.

---

## 4. Adding a photo-documented campaign (Our Work)

Find `galleryEntries`:

```ts
{
  id: 'your-event-id',
  title: 'Name of the Drive or Event',
  date: '2025-07-20',
  location: 'Where it happened',
  wing: 'Comma',
  summary: 'A short paragraph on what happened and why.',
  stats: [
    { label: 'Waste recovered', value: '60 kg' },
    { label: 'Volunteers', value: '20' },
  ],
  before: { caption: 'Caption for the before photo.' },
  during: { caption: 'Caption for the during photo.' },
  after: { caption: 'Caption for the after photo.' },
  reflection: 'An optional reflection (delete the line if unused).',
  credits: ['Photography: Name'],
},
```

Then add the real photos. See `BRAND_ASSETS.md`.

---

## 5. Figures and statistics

Find the `stats` list (the homepage "What the work adds up to" section) and `heroStats` (the bar at the top of the homepage):

```ts
{ value: '847 kg', label: 'Waste recovered', context: 'Across 9 clean-up drives' },
```

Edit the text inside the quotes. **Check every figure against your real records.** The same number can appear in several places (the Comma page, initiative descriptions, news, the gallery), so after changing one, search the data file for the old value and update the rest. The publication count is calculated automatically, so it never needs editing.

---

## 6. Initiatives and Comma programmes

`initiatives` (the Initiatives page):

```ts
{
  id: 'your-initiative-id',
  title: 'Name of the Initiative',
  tagline: 'A short one-line description',
  description: 'One or two sentences.',
  wing: 'Comma',
  status: 'Active',
  area: 'Category',
  href: '/our-work',
  accentColor: '#259745',
},
```

`status` is `'Active'`, `'Planned'` or `'Completed'`. `wing` is `'Symboh'` or `'Comma'`. Use one of the brand colours for `accentColor` (see the table in `README.md`).

`commaProgrammes` (the programme cards on the Comma page) uses `title`, `status`, `since` (optional), `metric`, `context`, `description` and `color`.

---

## 7. Page text that is not in a list

Some text sits inside each page's own file:

| Page | File |
|---|---|
| Homepage | `src/app/page.tsx` and the files in `src/components/home/` |
| About | `src/app/about/page.tsx` |
| Symboh | `src/app/symboh/page.tsx` |
| Comma | `src/app/comma/page.tsx` |
| Get Involved | `src/app/get-involved/page.tsx` |
| Contact | `src/app/contact/page.tsx` |
| Privacy | `src/app/privacy/page.tsx` |

Open the file, use Find (`Ctrl+F`) to locate a few words of the sentence, and edit the text between `>` and `<`. Leave anything that looks like `className="..."` alone: that is formatting.

The Symboh research areas, methods, the About page values and the focus areas are in the data file (`symbohResearchAreas`, `symbohMethods`, `values`, `focusAreas`).

---

## 8. Photos and logos

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
- **Wrong spelling in fixed-choice fields.** `category`, `status`, `type` and `wing` accept only the exact words listed above.
- **Setting `downloadUrl: '#'`.** Leave the line out instead.

When unsure, copy an entry that already works, paste it as a new one, and change only what you need.
