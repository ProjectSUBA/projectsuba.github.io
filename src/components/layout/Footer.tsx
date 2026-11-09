import Link from 'next/link';
import { SubaLogo } from '@/components/icons/SubaLogo';

const footerLinks = {
  Organization: [
    { href: '/about', label: 'About SUBA' },
    { href: '/initiatives', label: 'Initiatives' },
    { href: '/our-work', label: 'Our Work' },
    { href: '/events', label: 'Events' },
    { href: '/get-involved', label: 'Get Involved' },
    { href: '/contact', label: 'Contact' },
  ],
  Wings: [
    { href: '/symboh', label: 'Symboh' },
    { href: '/symboh#research', label: 'Research Areas' },
    { href: '/comma', label: 'Comma' },
    { href: '/comma#programmes', label: 'Programmes' },
  ],
  Knowledge: [
    { href: '/publications', label: 'Publications' },
    { href: '/publications?category=Policy Brief', label: 'Policy Briefs' },
    { href: '/publications?category=Research Paper', label: 'Research Papers' },
    { href: '/publications?category=Newsletter', label: 'Newsletter' },
    { href: '/publications?category=Report', label: 'Reports' },
  ],
};

export function Footer() {
  return (
    <footer
      className="relative"
      style={{ backgroundColor: '#1A5C2E' }}
      role="contentinfo"
    >
      {/* Hills divider SVG */}
      <div className="absolute top-0 left-0 right-0" style={{ transform: 'translateY(-99%)' }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 60 Q180 20 360 40 Q540 58 720 30 Q900 4 1080 35 Q1260 58 1440 25 L1440 60 L0 60Z"
            fill="#1A5C2E"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <SubaLogo size={44} variant="white" />
              <div>
                <div
                  className="font-bold tracking-widest text-white"
                  style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.1rem', letterSpacing: '0.12em' }}
                >
                  SUBA
                </div>
                <div className="label-mono text-white/50" style={{ fontSize: '0.5rem' }}>
                  SUSTAINABLE · URBAN · BIOREGIONAL · ACTION
                </div>
              </div>
            </Link>

            <p
              className="text-white/75 leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', lineHeight: '1.7' }}
            >
              A youth-led environmental collective based in Shillong, Meghalaya —
              working across the cultural and ecological fabric of the Khasi Hills.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <span className="label-mono text-white/40" style={{ fontSize: '0.55rem' }}>FOLLOW</span>
              {[
                { label: 'Instagram', href: 'https://instagram.com/projectsuba', icon: 'IG' },
                { label: 'Twitter/X', href: 'https://twitter.com/projectsuba', icon: 'X' },
                { label: 'LinkedIn', href: 'https://linkedin.com/company/projectsuba', icon: 'LI' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 flex items-center justify-center rounded-sm border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors text-xs font-medium"
                  style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem' }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3
                  className="label-mono text-[#FEC110] mb-4"
                  style={{ fontSize: '0.6rem', letterSpacing: '0.15em' }}
                >
                  {category.toUpperCase()}
                </h3>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/65 hover:text-white transition-colors"
                        style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem' }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3
              className="label-mono text-[#FEC110] mb-4"
              style={{ fontSize: '0.6rem', letterSpacing: '0.15em' }}
            >
              THE SUBA FIELD LETTER
            </h3>
            <p
              className="text-white/65 mb-4"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', lineHeight: '1.6' }}
            >
              Field notes, research updates, and announcements — from Shillong.
            </p>
            <div className="flex flex-col gap-2">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/35 focus:outline-none focus:border-[#FEC110] focus:bg-white/15 transition-all text-sm"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem' }}
              />
              <button
                className="w-full px-3 py-2.5 text-sm font-medium text-[#1A5C2E] rounded-sm transition-colors hover:bg-[#F6A225]"
                style={{
                  backgroundColor: '#FEC110',
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.8125rem',
                }}
              >
                Subscribe
              </button>
            </div>
            <p
              className="text-white/35 mt-2"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem' }}
            >
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <span
              className="text-white/45"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem' }}
            >
              © 2025 Sustainable Urban and Bioregional Action Project. All rights reserved.
            </span>
            <span className="hidden sm:block text-white/25">·</span>
            <span
              className="text-white/40 italic"
              style={{ fontFamily: 'var(--font-fraunces)', fontSize: '0.75rem' }}
            >
              For the ones who show up.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="text-white/45 hover:text-white/70 transition-colors"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem' }}
            >
              support@projectsuba.in
            </Link>
            <Link
              href="/"
              className="label-mono text-white/30 hover:text-white/50 transition-colors"
              style={{ fontSize: '0.55rem' }}
            >
              PROJECTSUBA.IN
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
