import Link from 'next/link';
import { SubaLogo } from '@/components/icons/SubaLogo';
import { NewsletterForm } from '@/components/forms/NewsletterForm';
import { CONTACT_EMAIL, SITE_HOST, SOCIAL_LINKS } from '@/lib/site';

const footerLinks = {
  Organisation: [
    { href: '/about', label: 'About SUBA' },
    { href: '/initiatives', label: 'Initiatives' },
    { href: '/our-work', label: 'Our Work' },
    { href: '/events', label: 'Events' },
    { href: '/get-involved', label: 'Get Involved' },
    { href: '/contact', label: 'Contact' },
  ],
  Wings: [
    { href: '/symboh', label: 'Symboh' },
    { href: '/symboh#research', label: 'Research areas' },
    { href: '/comma', label: 'Comma' },
    { href: '/comma#programmes', label: 'Programmes' },
  ],
  Knowledge: [
    { href: '/publications', label: 'All publications' },
    { href: '/publications?category=Policy%20Brief', label: 'Policy briefs' },
    { href: '/publications?category=Research%20Paper', label: 'Research papers' },
    { href: '/publications?category=Report', label: 'Reports' },
    { href: '/publications?category=Newsletter', label: 'Newsletter' },
  ],
};

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  'X (Twitter)': <path d="M5 5l14 14M19 5L5 19" />,
  LinkedIn: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M8 10.5V16M8 7.8v.01M12 16v-5.5M12 13c0-1.6 1-2.6 2.5-2.6S17 11.4 17 13v3" />
    </>
  ),
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark relative bg-dark-green">
      {/* Hills divider */}
      <div className="absolute left-0 right-0 top-0" style={{ transform: 'translateY(-99%)' }} aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block h-10 w-full sm:h-14">
          <path d="M0 60 Q180 20 360 40 Q540 58 720 30 Q900 4 1080 35 Q1260 58 1440 25 L1440 60 L0 60Z" fill="#1A5C2E" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="mb-5 inline-flex items-center gap-3" aria-label="SUBA home">
              <SubaLogo size={46} variant="white" alt="" />
              <div>
                <div className="font-display text-[1.1rem] font-bold tracking-[0.12em] text-white">SUBA</div>
                <div className="label-mono text-white/75" style={{ letterSpacing: '0.1em' }}>
                  Sustainable · Urban · Bioregional · Action
                </div>
              </div>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/80">
              A youth-led environmental collective based in Shillong, Meghalaya, working across the cultural and ecological fabric of the Khasi Hills.
            </p>
            <div className="flex items-center gap-3">
              <span className="label-mono text-white/70">Follow</span>
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`SUBA on ${social.label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/30 text-white/80 transition-colors hover:border-white hover:text-white"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {socialIcons[social.label]}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="label-mono mb-4 text-mikado">{category}</h3>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-[0.8125rem] text-white/80 transition-colors hover:text-white">
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
            <h3 className="label-mono mb-4 text-mikado">The SUBA Field Letter</h3>
            <p className="mb-4 text-[0.8125rem] leading-relaxed text-white/80">
              Field notes, research updates and announcements from Shillong.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mb-6 border-t border-white/15" />

        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <span className="text-xs text-white/75">© {year} {`Sustainable Urban and Bioregional Action Project`}</span>
            <span className="font-display text-xs italic text-white/70">For the ones who show up.</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <Link href="/privacy" className="text-white/75 transition-colors hover:text-white">Privacy</Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-white/75 transition-colors hover:text-white">{CONTACT_EMAIL}</a>
            <span className="label-mono text-white/60">{SITE_HOST}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
