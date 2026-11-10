import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import { Icon, type IconName } from '@/components/ui/Icons';

export function GetInvolvedSection() {
  const ways = [
    {
      title: 'Volunteer',
      description: 'Join a clean-up drive, tree plantation, or community outreach. Show up.',
      cta: 'Apply as Volunteer',
      href: '/get-involved#volunteer',
      color: '#259745',
      icon: 'heart',
    },
    {
      title: 'Collaborate',
      description: 'Research, policy, or field work — if your expertise aligns, let\'s build together.',
      cta: 'Start a Conversation',
      href: '/get-involved#collaborate',
      color: '#1F8EC8',
      icon: 'flask',
    },
    {
      title: 'Partner',
      description: 'Organisations and institutions working in alignment with our values. No greenwashing.',
      cta: 'Partnership Enquiry',
      href: '/get-involved#partner',
      color: '#FEC110',
      icon: 'link',
    },
    {
      title: 'Stay Informed',
      description: 'Follow our work, read our research, and share it with people who need to see it.',
      cta: 'Subscribe to Updates',
      href: '/get-involved#subscribe',
      color: '#F6A225',
      icon: 'mail',
    },
  ];

  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: 'white' }}
      aria-labelledby="getinvolved-heading"
    >
      <div className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent, #FDF8E7)' }} aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <span className="eyebrow mb-5 justify-center" style={{ color: '#259745', display: 'inline-flex' }}>07 · Get involved</span>
          <h2
            id="getinvolved-heading"
            className="mb-4 text-balance"
            style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(1.85rem, 4vw, 2.6rem)', color: '#1A5C2E', fontWeight: 600, lineHeight: '1.15', letterSpacing: '-0.01em' }}
          >
            Be part of something
            <br />
            <span style={{ fontStyle: 'italic', color: '#259745' }}>real.</span>
          </h2>
          <p className="max-w-lg mx-auto" style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', lineHeight: '1.7', color: '#4A4A40' }}>
            SUBA is not a top-down organisation. It was built together, and it keeps
            growing that way. Here&apos;s how to be part of it.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {ways.map((way, i) => (
            <Reveal key={way.title} delay={(i % 4) * 80}>
              <div
                className="relative p-6 rounded-xl flex flex-col h-full card-lift overflow-hidden bg-white"
                style={{ border: '1px solid rgba(26,92,46,0.1)', boxShadow: 'var(--shadow-soft)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: way.color }} aria-hidden="true" />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: way.color + '18' }}
                  aria-hidden="true"
                >
                  <Icon name={way.icon as IconName} color={way.color} size={24} />
                </div>
                <h3 className="mb-2" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: '1.0625rem', color: '#1A5C2E', fontWeight: 600 }}>
                  {way.title}
                </h3>
                <p className="mb-5 flex-1" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', lineHeight: '1.65', color: '#4A4A40' }}>
                  {way.description}
                </p>
                <Link
                  href={way.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold group"
                  style={{ color: way.color, fontFamily: 'var(--font-inter)', fontSize: '0.8125rem' }}
                >
                  {way.cta}
                  <svg className="transition-transform group-hover:translate-x-1" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 4l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Pull quote */}
        <Reveal>
          <div className="relative text-center py-12 px-6 rounded-2xl overflow-hidden grain" style={{ background: 'linear-gradient(150deg, #1A5C2E, #0F3D20)' }}>
            <div className="glow-blob" style={{ top: '-3rem', left: '50%', transform: 'translateX(-50%)', width: '16rem', height: '16rem', background: 'rgba(254,193,16,0.12)' }} aria-hidden="true" />
            <blockquote className="relative">
              <p className="text-white mb-3" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(1.3rem, 3vw, 1.85rem)', fontStyle: 'italic', lineHeight: '1.4' }}>
                &ldquo;Like the living root bridges — built together.&rdquo;
              </p>
              <cite className="label-mono text-white/40 not-italic" style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}>
                SUBA BRAND BOOK, VOL. I · 2025
              </cite>
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
