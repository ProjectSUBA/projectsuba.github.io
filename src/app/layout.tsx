import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CONTACT_EMAIL, SITE_FULL_NAME, SITE_URL, SOCIAL_LINKS } from '@/lib/site';

// Self-hosted fonts: no request from the visitor's browser to Google, no layout
// shift. Inter and JetBrains Mono are variable fonts (one file covers every
// weight). Fraunces loads only the weights the design actually uses.
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const TITLE = 'SUBA: Sustainable Urban and Bioregional Action';
const DESCRIPTION =
  'A youth-led civic, environmental, research and community-action organisation based in Shillong, Meghalaya. Home to Symboh, the policy and research lab, and Comma, the circular economy initiative.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: '%s · SUBA' },
  description: DESCRIPTION,
  applicationName: 'SUBA',
  authors: [{ name: 'SUBA', url: SITE_URL }],
  creator: 'SUBA',
  publisher: SITE_FULL_NAME,
  // Relative canonical: every page points at its own URL.
  alternates: { canonical: './' },
  referrer: 'strict-origin-when-cross-origin',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    title: TITLE,
    description: 'Youth-led civic, environmental and research organisation based in Shillong, Meghalaya.',
    siteName: 'SUBA',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'SUBA, Sustainable Urban and Bioregional Action' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: 'Youth-led civic, environmental and research organisation. Shillong, Meghalaya.',
    images: ['/images/og-image.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    // ?v=2 busts the browser's stubborn favicon cache after the logo change.
    icon: [
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' },
      { url: '/icon-192.png?v=2', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png?v=2', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.svg?v=2',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#1A5C2E',
  width: 'device-width',
  initialScale: 1,
};

// Structured data so search engines understand who SUBA is.
const organisationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'SUBA',
  legalName: SITE_FULL_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logos/suba-logo.png`,
  email: CONTACT_EMAIL,
  description: DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Shillong',
    addressRegion: 'Meghalaya',
    addressCountry: 'IN',
  },
  sameAs: SOCIAL_LINKS.map((s) => s.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}>
      <head>
        {/* Without JavaScript the scroll-reveal sections would stay invisible, so show them. */}
        <noscript>
          <style>{'.reveal{opacity:1!important;transform:none!important}.hero-in{opacity:1!important;animation:none!important}'}</style>
        </noscript>
        <script
          type="application/ld+json"
          // Safe: the JSON is built from constants in this repo. "<" is escaped so it cannot close the tag.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
