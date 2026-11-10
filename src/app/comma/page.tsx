import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section, SectionHead } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Tag } from '@/components/ui/Tag';
import { commaProgrammes, publications } from '@/lib/data';
import { formatDate, hasFullText } from '@/lib/ui';

export const metadata: Metadata = {
  title: 'Comma: circular economy',
  description:
    'Comma is SUBA’s circular economy initiative: clean-up drives, plantations and plastic recovery in Shillong, Meghalaya.',
};

const commaPublications = publications.filter((p) => p.wing === 'Comma');

const tally = [
  { value: '847 kg', label: 'of waste collected', note: 'Across 9 Ward 16 drives, January 2024 to May 2025.' },
  { value: '312', label: 'saplings planted', note: 'At Mawkhar, across four plantation days.' },
  { value: '9', label: 'clean-up drives', note: 'At the Ward 16 junction, roughly one every two months.' },
];

const cycle = [
  { title: 'Recover', body: 'What enters the waste stream is tracked, collected and sorted.' },
  { title: 'Process', body: 'Material goes to reuse, upcycling or recycling, not landfill.' },
  { title: 'Return', body: 'Value goes back to the community as products, skills and cleaner spaces.' },
  { title: 'Report', body: 'Every drive is written up with numbers, so the impact can be checked.' },
];

export default function CommaPage() {
  return (
    <>
      <PageHeader variant="comma" label="Comma · SUBA’s circular economy initiative" title={<mark>Comma</mark>}>
        Clean-ups, plantations and plastic recovery in Shillong, with every drive counted and written up afterwards.
      </PageHeader>

      <section className="bg-mikado text-forest" aria-label="Comma in numbers">
        <dl className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8 lg:py-14">
          {tally.map((item) => (
            <div key={item.label} className="flex flex-col">
              <dt className="order-2 mt-2 text-lg font-semibold">{item.label}</dt>
              <dd className="order-1 font-display font-bold leading-none tracking-[-0.04em] text-forest" style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}>{item.value}</dd>
              <dd className="order-3 mt-1 text-sm text-forest/85">{item.note}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Section tone="white" labelledBy="cycle-heading">
        <SectionHead label="The model" title="How the cycle works" id="cycle-heading" />
        <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {cycle.map((step, i) => (
            <li key={step.title} className="border-t-4 border-green-ink pt-4">
              <span className="font-display text-7xl font-bold leading-none text-green-ink" aria-hidden="true">{i + 1}</span>
              <h3 className="mt-3 font-display text-2xl font-bold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-suba-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="programmes" labelledBy="programmes-heading">
        <SectionHead label="Programmes" title="What Comma runs" id="programmes-heading" />
        <ul className="border-t border-ink/30">
          {commaProgrammes.map((prog) => (
            <li key={prog.id} className="grid gap-3 border-b border-ink/30 py-7 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-5">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <Tag tone={prog.status === 'Active' ? 'green' : 'stamp'}>{prog.status}</Tag>
                  {prog.since && <span className="label-mono text-suba-muted">Since {prog.since}</span>}
                </div>
                <h3 className="font-display text-2xl font-bold leading-snug">
                  {prog.projectId ? <Link href={`/our-work/${prog.projectId}`} className="hover:underline hover:decoration-2 hover:underline-offset-4">{prog.title}</Link> : prog.title}
                </h3>
              </div>
              <div className="md:col-span-3">
                <p className="font-display text-3xl font-bold leading-none text-green-ink">{prog.metric}</p>
                <p className="mt-1 text-[0.85rem] leading-snug text-suba-muted">{prog.context}</p>
              </div>
              <p className="leading-relaxed text-suba-muted md:col-span-4">{prog.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      {commaPublications.length > 0 && (
        <Section tone="deep" labelledBy="comma-research-heading">
          <SectionHead label="Research" title="Comma research" id="comma-research-heading" />
          <ul className="border-t border-ink/30">
            {commaPublications.map((pub) => (
              <li key={pub.id} className="grid gap-1 border-b border-ink/30 py-5 sm:grid-cols-12 sm:gap-6">
                <time dateTime={pub.date} className="label-mono pt-1 text-suba-muted sm:col-span-2">{formatDate(pub.date, 'short')}</time>
                <div className="sm:col-span-10">
                  <h3 className="font-display text-xl font-bold leading-snug">
                    {hasFullText(pub) ? <Link href={`/publications/${pub.slug}`} className="hover:underline">{pub.title}</Link> : pub.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[0.95rem] leading-relaxed text-suba-muted">{pub.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <section className="on-dark bg-green-ink text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="font-display text-3xl font-bold text-white">Join a clean-up drive</h2>
            <p className="mt-2 text-white/90">Bring gloves and water. We handle the rest.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/get-involved#volunteer" variant="gold" arrow>Volunteer with Comma</ButtonLink>
            <ButtonLink href="/updates" variant="ghost">Updates</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
