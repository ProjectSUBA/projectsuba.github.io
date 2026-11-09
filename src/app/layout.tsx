import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SITE_URL } from '@/lib/site';

// Self-hosted fonts — no render-blocking request to Google from the visitor's
// browser (faster, no layout shift, privacy-friendly). CSS variables below are
// referenced throughout the components as var(--font-fraunces) etc.
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'SUBA — Sustainable Urban and Bioregional Action',
    template: '%s · SUBA',
  },
  description: 'A youth-led civic, environmental, research, and community-action organisation based in Shillong, Meghalaya. Home to Symboh (Policy & Research Lab) and Comma (Circular Economy Initiative).',
  keywords: ['SUBA', 'Sustainable Urban Bioregional Action', 'Shillong', 'Meghalaya', 'youth organisation', 'environmental research', 'Symboh', 'Comma', 'circular economy', 'policy lab', 'Khasi Hills'],
  authors: [{ name: 'SUBA', url: 'https://projectsuba.in' }],
  creator: 'SUBA',
  publisher: 'Sustainable Urban and Bioregional Action Project',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    title: 'SUBA — Sustainable Urban and Bioregional Action',
    description: 'Youth-led civic, environmental, and research organisation based in Shillong, Meghalaya.',
    siteName: 'SUBA',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'SUBA — Sustainable Urban and Bioregional Action' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SUBA — Sustainable Urban and Bioregional Action',
    description: 'Youth-led civic, environmental, and research organisation. Shillong, Meghalaya.',
    images: ['/images/og-image.png'],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#1A5C2E',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
