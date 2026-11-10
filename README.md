# SUBA Website

**Sustainable Urban and Bioregional Action Project**
Shillong, Meghalaya, India. Live at [projectsuba.github.io](https://projectsuba.github.io)

---

## Which file do I need?

| If you want to... | Read |
|---|---|
| Edit text: publications, news, events, figures, initiatives | `CONTENT_GUIDE.md` |
| Replace the logo, favicon, share image or any photo | `BRAND_ASSETS.md` |
| Change the contact email, social links, site address or legal status | `src/lib/site.ts` (see "Settings" below) |
| Run, check or deploy the site | This file |

If you are not a developer you will mostly need `CONTENT_GUIDE.md`. This README is for whoever looks after the site's setup.

---

## Stack

- **Framework:** Next.js 16 (App Router), exported as a fully static site
- **Styling:** Tailwind CSS v4 (theme tokens live in `src/app/globals.css`)
- **Fonts:** Fraunces, Inter and JetBrains Mono, self-hosted through `next/font` (visitors' browsers never contact Google)
- **Hosting:** GitHub Pages, deployed by GitHub Actions. Cloudflare Pages also works (see "Security headers").

There is no server and no database. That keeps hosting free and the attack surface tiny. The trade-off is that forms need either the visitor's email app or a free form service (see "Forms").

---

## Run it locally

```bash
npm install     # first time only
npm run dev     # http://localhost:3000
```

Edits appear within a second or two.

### Check your work

```bash
npm run check   # lint and type check
npm run build   # full production build into /out
```

The deploy workflow runs the same checks, so a change that fails them is never published.

---

## Settings in one place: `src/lib/site.ts`

| Setting | What it does |
|---|---|
| `SITE_URL` | The site's public address. Drives the sitemap, canonical links and social-share URLs. |
| `CONTACT_EMAIL` | The inbox used by every contact link and as the fallback for the forms. |
| `SOCIAL_LINKS` | Instagram, X and LinkedIn links in the footer and contact page. |
| `FORM_ENDPOINT` | Optional. Where the contact and newsletter forms send their data (see below). |
| `LEGAL_STATUS` | SUBA's registration or organisational status, shown on the About page when filled in. |

### Forms

The contact form and the newsletter signup work out of the box with no account:

- **Default (`FORM_ENDPOINT` empty):** the form opens the visitor's email app with their name, email and message already filled in, addressed to `CONTACT_EMAIL`. Free, but it only works for people who have an email app set up.
- **One-click mode:** create a free form at [formspree.io](https://formspree.io), copy its URL (it looks like `https://formspree.io/f/abcdwxyz`) into `FORM_ENDPOINT`, and push. Submissions then land in your inbox and visitors never leave the page.

### Getting your own domain

1. Buy the domain, then add it in the repo under **Settings, Pages, Custom domain**.
2. Change `SITE_URL` in `src/lib/site.ts` to match (for example `https://projectsuba.in`).
3. Push. The sitemap, canonical links and share URLs all follow.

Remember to set up the email address too if it should match the domain.

---

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which lints, type checks, builds and publishes to GitHub Pages. It also runs every night, so date-based content (such as which events count as "upcoming") stays correct without a push.

First-time setup only: in the repo go to **Settings, Pages, Build and deployment, Source** and choose **GitHub Actions**.

Pull requests get the same checks but are never published.

### Security headers

`public/_headers` defines strict security headers (CSP, clickjacking protection, HSTS). **GitHub Pages ignores this file.** The headers only apply if you host on Cloudflare Pages (free): connect the repo there with build command `npm run build` and output directory `out`, and they switch on with no code changes.

---

## File structure

```
src/
├── app/
│   ├── layout.tsx            Root layout: fonts, metadata, structured data, skip link
│   ├── template.tsx          Page-to-page fade
│   ├── page.tsx              Homepage
│   ├── globals.css           Design tokens and shared styles
│   ├── about/  symboh/  comma/  get-involved/  contact/  privacy/  updates/
│   ├── our-work/             Project index and [slug] project pages
│   ├── publications/         Catalogue (with URL filters) and [slug] detail pages
│   ├── not-found.tsx         Branded 404
│   └── sitemap.ts  robots.ts
├── components/
│   ├── layout/               Header, Footer
│   ├── home/                 Homepage sections
│   ├── forms/                ContactForm, NewsletterForm
│   ├── ui/                   PageHeader, Section, ButtonLink, Tag, FieldPhoto
│   └── icons/SubaLogo.tsx
└── lib/
    ├── site.ts               Site-wide settings (edit this)
    ├── photos.ts             Real photographs (edit this when you have photos)
    ├── data/index.ts         ALL editable content (see CONTENT_GUIDE.md)
    ├── nav.ts  forms.ts  ui.ts  types.ts
```

---

## Design language

The site is built like a field journal, not a template. Paper and ink, ruled lines instead of cards, square corners, no shadows or gradients, and one decorative device: a yellow highlighter strip (`<mark>`) used sparingly. Symboh and Comma each have their own look (research paper versus campaign poster) on purpose. When you add something, follow the same logic: rules and tables before boxes, plain headings, and every number saying what it counts and when.

---

## What is still placeholder

- **Photographs.** Every photo slot shows an empty frame marked "Photograph to be added". See `BRAND_ASSETS.md`: adding a photo is two steps and no page edits.
- **The team and legal status.** The About page shows neither until you fill in `team` (`src/lib/data/index.ts`) and `LEGAL_STATUS` (`src/lib/site.ts`).
- **Figures, publications and updates.** These are sample content. They have been made consistent with each other, but check every number and date against your real records before relying on them publicly.
- **Publication PDFs.** None are hosted yet. Three publications are online as summaries (visitors can request the full document by email), one in full, and two are marked "Full text coming soon".
- **Freshness.** The newest update is from 2025. A site that looks inactive loses trust, so add real updates when you have them.

Things the site does not have yet, because they need information only SUBA has: a donation route and Khasi-language content.

---

## Colour reference

| Name | Hex | Use |
|---|---|---|
| Ink | `#13281B` | Text and rules |
| Paper | `#FAF5E4` / `#F0E7C9` | Page backgrounds |
| Dark Green | `#1A5C2E` | Dark panels, footer |
| Forest | `#0F3D20` | Buttons, text on yellow |
| Mikado Yellow | `#FEC110` | The highlighter strip, active states, buttons on dark |
| Blue (`blue-ink` `#14688F`) | | Symboh's colour |
| Green (`green-ink` `#1A6B33`) | | Comma's colour |
| Crimson | `#961416` | Rubber-stamp labels, used rarely |

The bright brand colours (`#259745`, `#1F8EC8`, `#F6A225`) fail contrast for small text, so text uses the `-ink` versions defined in `globals.css`.

---

## Future ideas

- [ ] GIS map of drive sites (Leaflet)
- [ ] Open data portal
- [ ] Event registration (Luma or similar)
- [ ] Donation route (Razorpay or UPI link)
- [ ] A content editor for non-developers (for example Decap CMS), so volunteers need not edit code
- [ ] Privacy-friendly analytics (Cloudflare Web Analytics or GoatCounter), with an update to the privacy page

---

*Published in Shillong, Meghalaya, India. For the ones who show up.*
