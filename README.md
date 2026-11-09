# SUBA — Official Website

**Sustainable Urban and Bioregional Action Project**
Shillong · Meghalaya · India · [projectsuba.in](https://projectsuba.in)

---

## Start here

This project has three documentation files, depending on what you need:

| If you want to... | Read this |
|---|---|
| Edit text content — publications, testimonials, news, statistics, initiatives | **`CONTENT_GUIDE.md`** |
| Replace the logo, favicon, or any photo on the site | **`BRAND_ASSETS.md`** |
| Run the site locally, or deploy it to Cloudflare Pages | This file, below |

If you are not a developer, you will most likely only ever need `CONTENT_GUIDE.md` and `BRAND_ASSETS.md`. This README is for whoever sets the site up and deploys it.

---

## Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS v4 (CSS-based config, no `tailwind.config.js`)
- **Fonts:** Fraunces (display) · Inter (body) · JetBrains Mono (labels) — loaded via Google Fonts
- **Hosting target:** Cloudflare Pages

---

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

Any edit you save to a page or to `src/lib/data/index.ts` will appear automatically — no restart needed.

---

## Production Build

```bash
npm run build
# Output: /out directory (static HTML/CSS/JS — no server needed)
```

This project uses Next.js's static export mode (`output: 'export'` in `next.config.ts`), which means the entire site compiles down to plain HTML/CSS/JS files. There is no backend, no database, and no server to maintain — which also means it's cheap and simple to host, but also means there's no built-in way to accept form submissions or store data server-side. The contact form currently opens the user's email client directly (`mailto:`); if you later want a "submit and we'll email you" form, you'll need to add a form service like Formspree, or move off static export.

---

## Deploy to Cloudflare Pages

### Option 1 — Connect Git repository (recommended)

1. Push this repo to GitHub or GitLab
2. Log into [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Go to **Workers & Pages → Create → Pages → Connect to Git**
4. Select your repository
5. Set build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Environment variable:** `NODE_VERSION = 20`
6. Click **Save and Deploy**

Your site will be live at `your-project.pages.dev`. Every future push to your main branch will redeploy automatically.

### Option 2 — Direct upload (Wrangler CLI)

```bash
npm install -g wrangler
npm run build
wrangler pages deploy out --project-name=suba-website
```

### Custom domain

In Cloudflare Pages dashboard: your project → **Custom Domains** → add `projectsuba.in` and `www.projectsuba.in`. Cloudflare handles SSL automatically.

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx                  # Root layout — fonts, SEO metadata, header, footer
│   ├── page.tsx                    # Homepage — assembles all home sections
│   ├── globals.css                 # Tailwind + SUBA colour/type theme
│   ├── about/page.tsx
│   ├── symboh/page.tsx             # Policy & Research Lab
│   ├── comma/page.tsx              # Circular Economy Initiative
│   ├── initiatives/page.tsx        # Active programmes overview
│   ├── our-work/page.tsx           # Before/during/after photo documentation
│   ├── publications/
│   │   ├── page.tsx                # Filterable publications archive
│   │   ├── PublicationsClient.tsx
│   │   └── [slug]/page.tsx         # Individual publication detail pages (full text)
│   ├── events/page.tsx
│   ├── get-involved/page.tsx
│   ├── contact/page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx               # Transparent-on-hero, solid-on-scroll nav
│   │   └── Footer.tsx               # Full footer — newsletter, links, social
│   ├── home/
│   │   ├── Hero.tsx                 # Dark green hero, SVG Khasi hills landscape
│   │   ├── WhoWeAre.tsx
│   │   ├── WhatWeDo.tsx             # Six focus area cards
│   │   ├── InitiativesSection.tsx   # Symboh + Comma wing cards
│   │   ├── PublicationsSection.tsx  # Filterable preview, links to detail pages
│   │   ├── DataInsights.tsx         # Impact statistics
│   │   ├── Testimonials.tsx         # Quotes from partners/government/volunteers
│   │   ├── LatestUpdates.tsx
│   │   └── GetInvolvedSection.tsx
│   ├── ui/
│   │   └── SubaImage.tsx            # Real-photo wrapper + PhotoSlot placeholder
│   └── icons/
│       └── SubaLogo.tsx             # SUBA mark as inline SVG, used live in the UI
└── lib/
    ├── types.ts                     # TypeScript types for all content
    └── data/index.ts                # ALL editable content lives here — see CONTENT_GUIDE.md
```

---

## What's Real Content vs. Placeholder

Everything on this site is structured and functional, but the following are placeholder content that must be replaced before the site is treated as live and public-facing:

- **Logos** (`public/logos/`) — illustrative renderings of the SUBA mark based on the brand book description. Replace with the actual brand files. See `BRAND_ASSETS.md`.
- **Photos** — every photo slot across the site is a clearly labelled placeholder (dashed border, camera icon), not a real image. See `BRAND_ASSETS.md` for the full list and swap-in instructions.
- **Testimonials** (`src/lib/data/index.ts` → `testimonials`) — every entry currently says "Name Withheld — Update Before Publishing." These show the format only. Never publish a quote attributed to someone who didn't actually say it or agree to be named.
- **Statistics, publications, news, and gallery entries** — illustrative numbers and write-ups showing the structure and tone the real content should follow. Replace with real data once available.

None of this is hidden — `CONTENT_GUIDE.md` flags each of these explicitly with instructions for replacing them.

---

## SUBA Colour Reference

| Name | Hex | Use |
|------|-----|-----|
| Dark Green | `#1A5C2E` | Primary, backgrounds, depth |
| Sea Green | `#259745` | Headings, CTAs, accents |
| Mikado Yellow | `#FEC110` | Accent, CTAs, hope |
| Sunshade | `#F6A225` | Flag, energy, secondary accent |
| Blue Ivy | `#1F8EC8` | Peace, water, Symboh accent |
| Warm Cream | `#FAF0C8` | Backgrounds, warmth |
| Crimson | `#961416` | Heritage, bravery (use sparingly) |
| Text | `#1A1A1A` | Body text (never pure black) |

---

## Future Features (Architecture Ready)

The current architecture is designed to accommodate, without a redesign:

- [ ] GIS map integration (Leaflet.js)
- [ ] Open data portal
- [ ] Volunteer management forms (Airtable / Notion API, since this is a static site)
- [ ] Event registration (Luma or similar)
- [ ] Donation platform (Razorpay / Stripe)
- [ ] Public dashboards (Recharts — already used internally for some stat displays)
- [ ] Membership portal (would require moving off static export to a server-rendered setup)

---

*Published in Shillong, Meghalaya, India.*
*For the ones who show up.*
**VOL. I · 2025**
