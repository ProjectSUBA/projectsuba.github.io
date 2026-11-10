# Brand Assets Guide

Every visual asset on the website: the logo, icons, the social-share image, and the photo placeholders, plus how to replace the placeholders with real photography.

For written content see **`CONTENT_GUIDE.md`**. For running or deploying the site see **`README.md`**.

---

## 1. The logo (`public/logos/`)

| File | Use |
|---|---|
| `suba-logo.svg` | The official mark. Scalable, used throughout the site. |
| `suba-logo.png` | Raster copy with a transparent background, for places that cannot take SVG (documents, email signatures). |

These are the only logo files in the project, on purpose: older drafts of the mark were removed so the wrong version cannot be picked up by mistake. If you need another variant (for example a one-colour version for print), add it here and list it in this table.

**How the site uses it.** The `<SubaLogo>` component (`src/components/icons/SubaLogo.tsx`) shows the SVG. On dark green backgrounds it renders a white version automatically, so one file serves both.

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

The current card shows the logo, the name and tagline, and the hills motif on dark green. To replace it with a photo-based card: design a 1200 x 630 image with the logo and a strong photograph, keep text large and high-contrast, export as PNG, and overwrite the file. Messaging apps cache these, so a new image can take a while to appear for links that were shared earlier.

---

## 4. Photography

No real photographs exist yet, so every photo slot shows a labelled illustrated landscape (`<PhotoSlot>`). Each is easy to spot and each carries its brief, so whoever sources the photos knows what is needed.

### Where photos go

The `public/images/` folders mirror the site:

```
images/
├── hero/          optional homepage hero photo
├── about/         team photo, hills landscape, root bridge
├── initiatives/   one photo per initiative
├── events/        news and update thumbnails
├── our-work/      before, during and after photos for each campaign
├── symboh/        research or fieldwork photo
├── comma/         Khoh basket or recycling station
└── team/          individual profile photos
```

### How to swap a placeholder for a real photo

1. Save the photo in the matching folder, for example `public/images/about/founders.jpg`.
2. Find the `PhotoSlot` in the page or component. A comment directly above it shows the exact `SubaImage` code to use.
3. Replace `<PhotoSlot ... />` with that `<SubaImage ... />`.
4. Run `npm run build` to check.

Example, from `src/components/home/WhoWeAre.tsx`:

```tsx
// Before (placeholder):
<PhotoSlot label="Team / founders photo" aspectRatio="4/5" accentColor="#FEC110" />

// After (real photo):
<SubaImage
  src="/images/about/founders.jpg"
  alt="SUBA founding team, Shillong"
  width={600}
  height={700}
  caption="Photo credit: Name, Shillong, 2024"
/>
```

Always write a real `alt` description, and credit the photographer in `caption` (the brand book requires it).

**Keep photos light.** Aim for under 300 KB each: resize to about 1600px on the long edge and export at roughly 80% JPEG quality. The site does not resize images for you, so a 5 MB phone photo would be served at 5 MB.

### Photography direction (brand book)

**Do photograph:**
- People in action: hands in soil, planting, cleaning, classrooms. Doing, not posing.
- The Meghalayan landscape: hills, forest, water, living root bridges. Real and unfiltered.
- Young people leading, as protagonists.
- Traditional and modern together: a Jainsem at a clean-up, a Khoh basket at a recycling station.
- Natural light: soft, diffused, golden, sometimes misty. No heavy filters.

**Do not photograph:**
- Generic stock imagery of people who are clearly not from Meghalaya
- Poverty or suffering framing
- Over-saturated or heavily filtered images
- Ceremonies or sacred sites without explicit consent
- Corporate or sterile settings

---

## 5. The `<SubaImage>` component

`src/components/ui/SubaImage.tsx` wraps `next/image` with an optional caption (for credits) and a `fill` mode for backgrounds. It works with the static export: `unoptimized: true` is already set in `next.config.ts`. The same file exports `<PhotoSlot>`, the placeholder.

---

## 6. Where every placeholder lives

| Page or component | Slots | What is needed |
|---|---|---|
| `components/home/WhoWeAre.tsx` | 1 | Team or founders photo |
| `components/home/LatestUpdates.tsx` | 4 | One photo per news card |
| `app/about/page.tsx` | 2 | Hills landscape, living root bridge |
| `app/initiatives/page.tsx` | 4 | One photo per initiative |
| `app/our-work/page.tsx` | 12 | Before, during and after for each of 4 campaigns |
| `app/symboh/page.tsx` | 1 | Research or fieldwork photo |
| `app/comma/page.tsx` | 1 | Khoh basket or recycling station |

**25 slots in total**, each with its replacement code in a comment beside it.
