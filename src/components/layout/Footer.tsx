import Link from 'next/link';
import { SubaLogo } from '@/components/icons/SubaLogo';
import { NewsletterForm } from '@/components/forms/NewsletterForm';
import { CONTACT_EMAIL, SITE_HOST, SOCIAL_LINKS } from '@/lib/site';
import { navLinks } from '@/lib/nav';

const knowledgeLinks = [
  { href: '/publications', label: 'All publications' },
  { href: '/publications?category=Policy%20Brief', label: 'Policy briefs' },
  { href: '/publications?category=Research%20Paper', label: 'Research papers' },
  { href: '/publications?category=Report', label: 'Reports' },
  { href: '/publications?category=Newsletter', label: 'Newsletter' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark border-t-[6px] border-mikado bg-forest text-white">
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="mb-5 inline-flex items-center gap-3" aria-label="SUBA home">
              <SubaLogo size={46} variant="white" alt="" />
              <div>
                <div className="font-display text-[1.1rem] font-bold tracking-[0.12em]">SUBA</div>
                <div className="label-mono text-white/75">Sustainable · Urban · Bioregional · Action</div>
              </div>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/85">
              A youth-led collective in Shillong working on environmental action, research and civic engagement.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="underline decoration-white/40 underline-offset-4 hover:decoration-white">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-5">
            <div>
              <h3 className="label-mono mb-4 text-mikado">Site</h3>
              <ul className="space-y-2.5 text-[0.9rem]">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/85 hover:text-white hover:underline">{link.label}</Link>
                  </li>
                ))}
                <li><Link href="/contact" className="text-white/85 hover:text-white hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="label-mono mb-4 text-mikado">Research</h3>
              <ul className="space-y-2.5 text-[0.9rem]">
                {knowledgeLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white/85 hover:text-white hover:underline">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="label-mono mb-4 text-mikado">The SUBA Field Letter</h3>
            <p className="mb-4 text-sm leading-relaxed text-white/85">Field notes and research updates from Shillong.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/30 pt-6 text-xs text-white/80 sm:flex-row sm:items-center">
          <span>© {year} Sustainable Urban and Bioregional Action Project</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-white hover:underline">Privacy</Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white hover:underline">{CONTACT_EMAIL}</a>
            <span className="label-mono text-white/65">{SITE_HOST}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
