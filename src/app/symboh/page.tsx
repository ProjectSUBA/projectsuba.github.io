import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { PhotoSlot } from '@/components/ui/SubaImage';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icons';
import { publications, symbohMethods, symbohResearchAreas } from '@/lib/data';
import { categoryTone, formatDate, hasFullText } from '@/lib/ui';

export const metadata: Metadata = {
  title: 'Symboh: Policy, Research and Innovation Lab',
  description:
    'Symboh is SUBA’s Policy, Research, Innovation and R&D Lab, producing evidence-based analysis on urban development, governance, environment and education in Meghalaya.',
};

const symbohPublications = publications.filter((p) => p.wing === 'Symboh');

export default function SymbohPage() {
  return (
    <>
      <PageHeader
        eyebrow="A SUBA initiative · Policy and research lab"
        title="Symboh"
        actions={
          <>
            <ButtonLink href="/publications?wing=Symboh" variant="gold">View research output</ButtonLink>
            <ButtonLink href="/get-involved#collaborate" variant="ghost">Collaborate with Symboh</ButtonLink>
          </>
        }
      >
        SUBA’s Policy, Research, Innovation and R&amp;D Lab. We produce evidence-based analysis on urban development, governance, environment and education, grounded in Meghalayan reality.
      </PageHeader>

      <Section tone="cream-light">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <h2 className="mb-5 font-display text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight">
              Research that <em className="font-medium text-blue-ink">holds up in a room.</em>
            </h2>
            <p className="mb-5 text-base leading-[1.75]">
              Symboh works like a policy lab and think tank while staying embedded in SUBA’s community work. Our research is not produced in a vacuum. It comes from fieldwork, community engagement and direct observation of the challenges Meghalaya faces.
            </p>
            <p className="text-base leading-[1.75] text-suba-muted">
              We write policy briefs that can be placed on a government desk. We produce research papers that can withstand academic scrutiny. And we translate both into language that communities can actually use.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={100}>
            {/*
              PHOTO SLOT. Replace with:
              <SubaImage src="/images/symboh/research-desk.jpg" alt="Symboh research team at work" width={700} height={500} className="mb-8 rounded-md" />
            */}
            <PhotoSlot
              label="Symboh research and fieldwork photo"
              sublabel="Researchers at work, data collection, classroom or field setting"
              aspectRatio="7/5"
              accentColor="#1F8EC8"
              className="mb-8"
            />
            <h3 className="label-mono mb-5 text-green-ink">How we work</h3>
            <ol className="space-y-3">
              {symbohMethods.map((method, i) => (
                <li key={method.title} className="card flex items-start gap-4 p-4">
                  <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-fill font-mono text-xs font-medium text-white" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <div className="mb-1 font-display text-[0.9375rem] font-semibold">{method.title}</div>
                    <p className="text-[0.8125rem] leading-relaxed text-suba-muted">{method.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      <Section id="research" labelledBy="research-heading">
        <SectionHeading eyebrow="Focus" id="research-heading" title="Research areas" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {symbohResearchAreas.map((area, i) => (
            <Reveal key={area.title} delay={(i % 3) * 80}>
              <div className="card card-lift h-full p-7">
                <div className="mb-4 h-1 w-8 rounded-full bg-blue-ivy" aria-hidden="true" />
                <h3 className="mb-3 font-display text-[1.0625rem] font-semibold">{area.title}</h3>
                <p className="text-[0.85rem] leading-relaxed text-suba-muted">{area.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="cream" labelledBy="symboh-pubs-heading">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 id="symboh-pubs-heading" className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold">Symboh publications</h2>
          <Link href="/publications?wing=Symboh" className="group flex items-center gap-2 text-sm font-medium text-dark-green">
            All publications
            <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <ul className="divide-y divide-dark-green/12">
          {symbohPublications.map((pub) => (
            <li key={pub.id} className="py-6">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <Badge tone={categoryTone[pub.category]}>{pub.category}</Badge>
                <time dateTime={pub.date} className="text-xs text-suba-muted">{formatDate(pub.date, 'short')}</time>
              </div>
              <h3 className="mb-2 font-display text-base font-semibold leading-snug">
                {hasFullText(pub) ? (
                  <Link href={`/publications/${pub.slug}`} className="transition-colors hover:text-green-ink">{pub.title}</Link>
                ) : (
                  pub.title
                )}
              </h3>
              <p className="line-clamp-2 text-[0.85rem] leading-relaxed text-suba-muted">{pub.summary}</p>
              {!hasFullText(pub) && <p className="label-mono mt-2 text-suba-muted">Full text coming soon</p>}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="green">
        <div className="text-center">
          <h2 className="mb-4 font-display text-[1.75rem] font-semibold text-white">Collaborate with Symboh</h2>
          <p className="mx-auto mb-8 max-w-md leading-relaxed text-white/80">
            Researchers, educators, policy practitioners and data professionals, write to us.
          </p>
          <ButtonLink href="/get-involved#collaborate" variant="gold">Start a conversation</ButtonLink>
        </div>
      </Section>
    </>
  );
}
