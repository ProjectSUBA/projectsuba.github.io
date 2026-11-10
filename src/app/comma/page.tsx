import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { PhotoSlot } from '@/components/ui/SubaImage';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Icon, type IconName } from '@/components/ui/Icons';
import { commaProgrammes, publications } from '@/lib/data';
import { formatDate, hasFullText, inkFor } from '@/lib/ui';

export const metadata: Metadata = {
  title: 'Comma: Circular Economy and Sustainability',
  description:
    'Comma is SUBA’s circular economy initiative: plastic recovery, recycling, upcycling and community environmental action in Meghalaya.',
};

const commaPublications = publications.filter((p) => p.wing === 'Comma');

const commaStats = [
  { value: '847 kg', label: 'waste recovered' },
  { value: '420+ kg', label: 'plastic separated' },
  { value: '312', label: 'trees planted' },
  { value: '9', label: 'clean-up drives' },
];

const cycle: { icon: IconName; title: string; body: string }[] = [
  { icon: 'recycle', title: 'Recover', body: 'What enters the waste stream is tracked, collected and separated.' },
  { icon: 'cycle', title: 'Process', body: 'Material is directed to reuse, upcycling or recycling, not landfill.' },
  { icon: 'sprout', title: 'Return', body: 'Value goes back to the community through products, skills and cleaner spaces.' },
  { icon: 'chart', title: 'Report', body: 'Every drive produces public numbers, so the impact can be checked.' },
];

export default function CommaPage() {
  return (
    <>
      <PageHeader tone="cream" eyebrow="A SUBA initiative · Circular economy" title="Comma">
        SUBA’s Circular Economy and Sustainability Initiative. Plastic recovery, recycling, upcycling and community environmental action in Meghalaya.
      </PageHeader>

      <Section tone="cream-light" className="py-12! lg:py-16!">
        <dl className="mb-10 grid grid-cols-2 gap-6 border-y border-dark-green/15 py-6 sm:flex sm:flex-wrap sm:gap-10">
          {commaStats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="text-xs text-suba-muted">{s.label}</dt>
              <dd className="font-display text-[1.75rem] font-bold text-green-ink">{s.value}</dd>
            </div>
          ))}
        </dl>
        {/*
          PHOTO SLOT. Replace with:
          <SubaImage src="/images/comma/khoh-basket.jpg" alt="Khoh basket, traditional zero-waste living" width={900} height={400} className="rounded-md" />
        */}
        <PhotoSlot label="Comma hero photo" sublabel="Khoh basket, recycling station, traditional and modern together" aspectRatio="16/6" accentColor="#259745" />
      </Section>

      <Section labelledBy="cycle-heading">
        <SectionHeading eyebrow="The model" id="cycle-heading" title="How the cycle works" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cycle.map((step, i) => (
            <Reveal key={step.title} delay={i * 80}>
              <div className="card h-full p-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sea-green/10" aria-hidden="true">
                  <Icon name={step.icon} color="#1A6B33" size={24} />
                </div>
                <h3 className="mb-2 font-display text-base font-semibold">{step.title}</h3>
                <p className="text-[0.85rem] leading-relaxed text-suba-muted">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="programmes" tone="cream" labelledBy="programmes-heading">
        <SectionHeading eyebrow="Programmes" id="programmes-heading" title="What Comma runs" />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {commaProgrammes.map((prog, i) => (
            <Reveal key={prog.id} delay={(i % 2) * 90}>
              <div className="card h-full p-7">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <Badge tone={prog.status === 'Active' ? 'green' : 'orange'}>{prog.status}</Badge>
                  {prog.since && <span className="label-mono text-suba-muted">Since {prog.since}</span>}
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold">{prog.title}</h3>
                <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-display text-[1.75rem] font-bold" style={{ color: inkFor(prog.color) }}>{prog.metric}</span>
                  <span className="text-[0.8rem] text-suba-muted">{prog.context}</span>
                </div>
                <p className="text-sm leading-relaxed text-suba-muted">{prog.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {commaPublications.length > 0 && (
        <Section labelledBy="comma-research-heading">
          <h2 id="comma-research-heading" className="mb-8 font-display text-2xl font-semibold">Comma research</h2>
          <ul className="divide-y divide-dark-green/12">
            {commaPublications.map((pub) => (
              <li key={pub.id} className="py-6">
                <time dateTime={pub.date} className="mb-1 block text-xs text-suba-muted">{formatDate(pub.date, 'short')}</time>
                <h3 className="mb-2 font-display text-base font-semibold leading-snug">
                  {hasFullText(pub) ? (
                    <Link href={`/publications/${pub.slug}`} className="transition-colors hover:text-green-ink">{pub.title}</Link>
                  ) : (
                    pub.title
                  )}
                </h3>
                <p className="line-clamp-2 text-[0.85rem] leading-relaxed text-suba-muted">{pub.summary}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <section className="on-dark bg-green-ink py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:px-8">
          <div>
            <h2 className="mb-2 font-display text-[1.75rem] font-semibold text-white">Join a clean-up drive</h2>
            <p className="text-white/85">Bring gloves and water. We handle the rest.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/get-involved#volunteer" variant="gold">Volunteer with Comma</ButtonLink>
            <ButtonLink href="/events" variant="ghost">Events</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
