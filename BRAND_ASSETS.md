# Brand Assets Guide

Every visual asset on the website: the logo, icons, the social-share image, and how to add real photographs.

For written content see **`CONTENT_GUIDE.md`**. For running or deploying the site see **`README.md`**.

---

## 1. The logo (`public/logos/`)

| File | Use |
|---|---|
| `suba-logo.svg` | The official mark. Scalable, used throughout the site. |
| `suba-logo.png` | Raster copy with a transparent background, for places that cannot take SVG (documents, email signatures). |

These are the only logo files in the project, on purpose: older drafts of the mark were removed so the wrong version cannot be picked up by mistake. If you need another variant (for example a one-colour version for print), add it here and list it in this table.

**How the site uses it.** The `<SubaLogo>` component (`src/components/icons/SubaLogo.tsx`) shows the SVG. On the dark green footer it renders a white version automatically, so one file serves both.

**Usage rules (brand book):**
- Minimum clear space equals the width of the yellow arch
- Minimum size 100px on screen, 2cm in print
- Never stretch, recolour individual elements, add shadows, or separate the bird from the composition

---

## 2. Favicons and app icons

| File | Purpose |
|---|---|
| `src/app/favicon.ico` and `public/favicon.ico` | Classic multi-size icon |
| `public/favicon.svg` | Modern browsers, scalable |
| `public/icon-192.png`, `public/icon-512.png` | Android and installed-app icons |
| `public/apple-touch-icon.png` | iPhone home-screen icon (180px, on white) |
| `public/site.webmanifest` | Installed-app manifest that points at the icons above |

All are wired up in `src/app/layout.tsx`. The icon links carry `?v=2`: browsers cache favicons very stubbornly, so if you ever change the logo again, bump that number (to `?v=3`) in `layout.tsx` so visitors fetch the new one.

**To regenerate them from a new logo**, resize `public/logos/suba-logo.png` to each size (trimming the empty margin first and centring it on a square canvas), keep the background transparent except for the Apple icon, and save the multi-size `.ico` with 16, 32 and 48px.

---

## 3. Social-share image

`public/images/og-image.png` (1200 x 630) appears when a link to the site is shared on WhatsApp, Instagram, X, LinkedIn, Facebook or iMessage. It is set in `layout.tsx`.

The current card shows the logo, the name and tagline, and a contour-line motif on dark green. To replace it with a photo-based card: design a 1200 x 630 image with the logo and a strong photograph, keep text large and high-contrast, export as PNG, and overwrite the file. Messaging apps cache these, so a new image can take a while to appear for links that were shared earlier.

---

## 4. Photographs

The site is designed to work without photographs today and to improve the moment real ones arrive. Where a photograph belongs, the site shows an honest empty frame with crop marks that says **"Photograph to be added"**. It never shows a fake or stock image.

### Adding a photo takes two steps

1. **Save the image** in `public/images/` (any subfolder). Aim for about 1600px on the long edge and under 300 KB: resize and export at roughly 80% JPEG quality. The site does not resize images for you, so a 5 MB phone photo would be served at 5 MB.
2. **Register it** in `src/lib/photos.ts`:

```ts
export const photos: Record<string, Photo> = {
  'project-ward16-cleanup': {
    src: '/images/our-work/ward16-drive-9.jpg',
    alt: 'Volunteers sorting waste into bins at the Ward 16 junction',
    credit: 'Photo: Name',
    width: 1600,
    height: 1067,
  },
};
```

No page needs editing. The empty frame is replaced by the photo, with its caption and credit, automatically.

Always write a real `alt` description (what is in the photo, for people who cannot see it) and credit the photographer. The brand book requires credits.

### The slots

| Key | Where it appears |
|---|---|
| `hero` | Beside the homepage headline (the hero becomes two columns when this is set) |
| `team` | A group photo on the About page, shown once team members are added |
| `project-ward16-cleanup` | The Ward 16 clean-ups project page |
| `project-mawkhar-plantation` | The Mawkhar plantation project page |
| `project-symboh-schools` | The environmental education project page |
| `project-shillong-mobility-study` | The mobility study project page |

Team members' own portraits are set per person in `src/lib/data/index.ts` (`team`, the `photo` field), not in `photos.ts`.

If you add a new project, a slot named `project-<project id>` appears on its page automatically.

### Consent

Get consent before publishing identifiable photographs. For photographs of children, ask the school and a parent or guardian first. See the Privacy page, which promises this, and keep a record of who agreed. If someone asks for a photo to be removed, delete its entry from `photos.ts`.

### What to photograph (brand book)

**Do photograph:**
- People in action: hands in soil, planting, cleaning, classrooms. Doing, not posing.
- The Meghalayan landscape: hills, forest, water, living root bridges. Real and unfiltered.
- Young people leading, as protagonists.
- Traditional and modern together: a Jainsem at a clean-up, a Khoh basket at a recycling station.
- Natural Meghalayan light: soft, diffused, golden, sometimes misty. No heavy filters.

**Do not photograph:**
- Generic stock imagery of people who are clearly not from Meghalaya
- Poverty or suffering framing
- Over-saturated or heavily filtered images
- Ceremonies or sacred sites without explicit consent
- Corporate or sterile settings

Imperfect photographs from real SUBA activities are worth more than polished ones. A tired crowd of volunteers after a drive is exactly what the site needs.
