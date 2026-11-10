import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/Section';
import { Icon, type IconName } from '@/components/ui/Icons';

const ways: { title: string; description: string; cta: string; href: string; color: string; ink: string; icon: IconName }[] = [
  {
    title: 'Volunteer',
    description: 'Join a clean-up drive, tree plantation or community outreach. Show up.',
    cta: 'Apply as volunteer',
    href: '/get-involved#volunteer',
    color: '#259745',
    ink: '#1A6B33',
    icon: 'heart',
  },
  {
    title: 'Collaborate',
    description: 'Research, policy or field work. If your expertise lines up with ours, let’s build together.',
    cta: 'Start a conversation',
    href: '/get-involved#collaborate',
    color: '#1F8EC8',
    ink: '#14688F',
    icon: 'flask',
  },
  {
    title: 'Partner',
    description: 'Organisations and institutions working in line with our values.',
    cta: 'Partnership enquiry',
    href: '/get-involved#partner',
    color: '#FEC110',
    ink: '#8A5200',
    icon: 'link',
  },
  {
    title: 'Stay informed',
    description: 'Follow our work, read our research and share it with people who need to see it.',
    cta: 'Subscribe to updates',
    href: '/get-involved#subscribe',
    color: '#F6A225',
    ink: '#8A5200',
    icon: 'mail',
  },
];

export function GetInvolvedSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28" aria-labelledby="getinvolved-heading">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3" style={{ background: 'linear-gradient(180deg, transparent, #FDF8E7)' }} aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Get involved" id="getinvolved-heading" align="center" title={<>Be part of something <em>real.</em></>}>
          SUBA is not a top-down organisation. It was built together, and it keeps growing that way. Here is how to be part of it.
        </SectionHeading>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map((way, i) => (
            <Reveal key={way.title} delay={(i % 4) * 80}>
              <div className="card card-lift relative flex h-full flex-col overflow-hidden p-6">
                <div className="absolute left-0 right-0 top-0 h-1" style={{ background: way.color }} aria-hidden="true" />
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: way.color + '1F' }} aria-hidden="true">
                  <Icon name={way.icon} color={way.ink} size={24} />
                </div>
                <h3 className="mb-2 font-display text-[1.0625rem] font-semibold">{way.title}</h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-suba-muted">{way.description}</p>
                <Link href={way.href} className="group inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold" style={{ color: way.ink }}>
                  {way.cta}
                  <Icon name="arrow" size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
