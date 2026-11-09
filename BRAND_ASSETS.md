# Brand Assets Guide

This document covers every visual asset shipped with the SUBA website: logos, favicons, OG images, and photo placeholders — what exists, where it lives, and how to replace placeholders with real photography.

For editing written content instead (publications, testimonials, news, statistics), see **`CONTENT_GUIDE.md`**. For running or deploying the site, see **`README.md`**.

---

## 1. Logos (`/public/logos/`)

| File | Format | Use |
|---|---|---|
| `suba-logo-full-colour.svg` | SVG | Full lockup (mark + wordmark) on light backgrounds — letterheads, print |
| `suba-logo-white.svg` | SVG | Full lockup, white — dark green / photo backgrounds |
| `suba-mark-colour.svg` | SVG | Icon only, full colour — favicons, app icons, small placements |
| `suba-mark-white.svg` | SVG | Icon only, white — dark backgrounds |
| `suba-mark-dark-green.svg` | SVG | Icon on dark green circle — social profile photo |
| `suba-mark-colour-{128,256,512}.png` | PNG, transparent | Raster fallback, full colour |
| `suba-mark-white-{128,256,512}.png` | PNG, transparent | Raster fallback, white |
| `suba-mark-on-green-{128,256,512}.png` | PNG, dark green bg | Social media profile photo, app icon |

All logos follow the brand book's anatomy: yellow arch (hope/sun), sun orb with monolith crown (Sun & Pansngiat Crown), blue Hill Myna wing, green S-curve sweep.

**Usage rules (from brand book, Section 04):**
- Minimum clear space = width of the yellow arch
- Minimum size: 100px digital, 2cm print
- Never stretch, recolour individual elements, add shadows, or separate the bird from the composition

**The in-app `<SubaLogo>` React component** (`src/components/icons/SubaLogo.tsx`) renders the mark live as inline SVG — used in the header, footer, and anywhere the logo appears in the UI. The static files above are for external use (email signatures, social profiles, print, partner decks).

---

## 2. Favicons & App Icons (`/public/` + `/src/app/favicon.ico`)

| File | Purpose |
|---|---|
| `src/app/favicon.ico` | Multi-resolution ICO (16/32/48/64/128/256px) — auto-served at `/favicon.ico` by Next.js |
| `public/favicon.svg` | Modern browsers, scalable |
| `public/icon-192.png`, `public/icon-512.png` | PWA / Android home screen icons |
| `public/apple-touch-icon.png` | iOS home screen icon (180×180) |
| `public/site.webmanifest` | PWA manifest referencing all icons above |

All wired into `src/app/layout.tsx` → `metadata.icons` and `metadata.manifest`. No further setup needed — these work out of the box on Cloudflare Pages.

---

## 3. Open Graph / Social Share Image

`public/images/og-image.png` (1200×630, PNG) — shown when the site is shared on WhatsApp, Twitter/X, LinkedIn, Facebook, iMessage, etc. Wired into `layout.tsx` → `metadata.openGraph.images` and `metadata.twitter.images`.

There's also an editable source SVG at `public/images/og-image.svg` if you want to regenerate it with different text or colours (open in any vector editor, then export to PNG at 1200×630).

**To replace with a photo-based OG image:** design a 1200×630 image with the SUBA logo + a strong photograph (e.g. a clean-up drive or hills landscape), keep text large and high-contrast, export as PNG, and replace `og-image.png`.

---

## 4. Photography — Placeholder System

No real photographs were available, so every photo slot uses a visible, labelled placeholder (dashed border, camera icon, instructions) rather than a generic grey box or broken image icon. This makes it obvious to anyone editing the site exactly what photo is needed and where.

### Where placeholders live

`/public/images/` mirrors the site structure:

```
images/
├── hero/           — homepage hero background (optional, currently illustrated SVG)
├── about/           — team photo, hills landscape, root bridge
├── initiatives/      — one photo per initiative card
├── events/           — news/update card thumbnails
├── our-work/         — before/during/after photos for each documented campaign
├── symboh/           — research/fieldwork photo
├── comma/            — Khoh basket / recycling station photo
└── team/             — individual profile photos
```

Each folder currently contains an SVG placeholder image (e.g. `hero-meghalaya.jpg.svg`) — a visual stand-in showing the exact dimensions and content direction needed.

### How to replace a placeholder with a real photo

1. **Drop the real photo** into the matching folder, e.g. `public/images/initiatives/ward16-cleanup.jpg`
2. **Find the `PhotoSlot` component** in the relevant page/component file — each one has a comment directly above it showing the exact `<SubaImage>` code to swap in
3. **Replace** `<PhotoSlot .../>` with the commented `<SubaImage src="..." alt="..." .../>` line
4. Rebuild (`npm run build`)

Example, from `src/components/home/WhoWeAre.tsx`:

```tsx
// Before (placeholder):
<PhotoSlot label="Team / founders photo" sublabel="..." aspectRatio="4/5" />

// After (real photo):
<SubaImage
  src="/images/about/founders.jpg"
  alt="SUBA founding team, Shillong"
  width={600}
  height={700}
  caption="Photo credit: Name · Shillong, 2024"
/>
```

### Photography direction (from the SUBA Brand Book, Section 09)

**Do photograph:**
- People in action — hands in soil, planting, cleaning, classrooms. Motion and doing, not posing.
- The Meghalayan landscape — hills, forest, water, living root bridges. Real and unfiltered.
- Youth at the centre — young people leading, as protagonists.
- Traditional and modern together — Jainsem at a clean-up, Khoh basket at a recycling station.
- Natural Meghalayan light — soft, diffused, golden, sometimes misty. No heavy filters.

**Do not photograph:**
- Generic stock imagery of people clearly not from Meghalaya
- Poverty or suffering framing
- Over-saturated or heavily filtered images
- Ceremonies or sacred sites without explicit consent
- Corporate or sterile environments

Every placeholder's sublabel text reflects this direction (e.g. "candid · natural light · no filters") so whoever sources the photography has the brief built in.

---

## 5. The `<SubaImage>` Component

`src/components/ui/SubaImage.tsx` wraps `next/image` with:
- Optional caption (use for photo credits — the brand book requires crediting photographers)
- `fill` mode for backgrounds/hero use
- Sensible defaults for static export (Cloudflare Pages compatible — `unoptimized: true` already set in `next.config.ts`)

The same file exports `<PhotoSlot>`, the placeholder component described above. Once a section's real photo is ready, swap `PhotoSlot` for `SubaImage` — no other changes needed.

---

## 6. Quick Reference: Where Every Placeholder Lives

| Page / Component | Placeholder count | What's needed |
|---|---|---|
| `components/home/WhoWeAre.tsx` | 1 | Team/founders photo |
| `components/home/LatestUpdates.tsx` | 4 | One photo per news card |
| `app/about/page.tsx` | 2 | Hills landscape, living root bridge |
| `app/initiatives/page.tsx` | 4 | One photo per initiative |
| `app/our-work/page.tsx` | 12 | Before/during/after × 4 documented campaigns |
| `app/symboh/page.tsx` | 1 | Research/fieldwork photo |
| `app/comma/page.tsx` | 1 | Khoh basket / recycling station |

Total: **25 photo slots** across the site, all clearly marked and documented inline.

There are also **6 avatar placeholders** inside the homepage Testimonials section — these don't use `PhotoSlot` (they're small circular icons), but follow the same idea: replace with real headshots once available, or leave as a generic icon if you'd rather not show photos of testimonial-givers.
