import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section, SectionHead } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Tag } from '@/components/ui/Tag';
import { publications, symbohMethods, symbohResearchAreas } from '@/lib/data';
import { formatDate, hasFullText } from '@/lib/ui';

export const metadata: Metadata = {
  title: 'Symboh: policy and research',
  description:
    'Symboh is SUBA’s policy and research lab, producing evidence-based analysis on urban development, governance, environment and education in Meghalaya.',
};

const symbohPublications = publications.filter((p) => p.wing === 'Symboh').sort((a, b) => b.date.localeCompare(a.date));

export default function SymbohPage() {
  return (
    <>
      <PageHeader
        variant="symboh"
        label="Symboh · SUBA’s policy and research lab"
        title="Symboh"
        actions={
          <>
            <ButtonLink href="/publications?wing=Symboh" arrow>Read our research</ButtonLink>
            <ButtonLink href="/get-involved#collaborate" variant="outline">Collaborate with us</ButtonLink>
          </>
        }
      >
        We produce evidence-based analysis on urban development, governance, environment and education in Meghalaya.
      </PageHeader>

      <Section>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <p className="label-mono border-t-2 border-blue-fill pt-3 text-blue-ink lg:col-span-3">What Symboh does</p>
          <div className="space-y-5 text-[1.0625rem] leading-[1.75] lg:col-span-7">
            <p className="font-display text-[clamp(1.4rem,2.6vw,1.9rem)] leading-[1.35]">
              Symboh works like a policy lab while staying close to SUBA’s community work. Our research comes from fieldwork, conversations with residents and direct observation, not from a desk.
            </p>
            <p className="text-suba-muted">
              We write policy briefs meant for a government desk, and research papers meant to stand up to academic scrutiny. Then we translate both into language communities can use.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white" labelledBy="areas-heading">
        <SectionHead label="Focus" title="What we study" id="areas-heading" />
        <dl className="border-t border-ink/30">
          {symbohResearchAreas.map((area) => (
            <div key={area.title} className="grid gap-1 border-b border-ink/30 py-5 sm:grid-cols-12 sm:gap-6">
              <dt className="font-display text-xl font-bold sm:col-span-5">{area.title}</dt>
              <dd className="text-suba-muted sm:col-span-7">{area.description}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section labelledBy="commit-heading">
        <SectionHead label="Method" title="What we commit to" id="commit-heading">
          Standards we hold ourselves to. Some of our earlier publications are still online as summaries, and we are bringing them up to this standard.
        </SectionHead>
        <ol className="grid gap-x-10 gap-y-8 md:grid-cols-2">
          {symbohMethods.map((method, i) => (
            <li key={method.title} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-ink/30 pt-4">
              <span className="font-display text-5xl font-bold leading-none text-blue-ink" aria-hidden="true">{i + 1}</span>
              <div>
                <h3 className="font-display text-xl font-bold">{method.title}</h3>
                <p className="mt-1 leading-relaxed text-suba-muted">{method.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="deep" labelledBy="symboh-pubs-heading">
        <SectionHead
          label="Publications"
          aside={<Link href="/publications?wing=Symboh" className="underline underline-offset-4 hover:bg-mikado">All Symboh publications →</Link>}
          title="Symboh publications"
          id="symboh-pubs-heading"
        />
        <ul className="border-t border-ink/30">
          {symbohPublications.map((pub) => (
            <li key={pub.id} className="grid gap-1 border-b border-ink/30 py-5 sm:grid-cols-12 sm:gap-6">
              <time dateTime={pub.date} className="label-mono pt-1 text-suba-muted sm:col-span-2">{formatDate(pub.date, 'short')}</time>
              <div className="sm:col-span-8">
                <h3 className="font-display text-xl font-bold leading-snug">
                  {hasFullText(pub) ? <Link href={`/publications/${pub.slug}`} className="hover:underline">{pub.title}</Link> : pub.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-[0.95rem] leading-relaxed text-suba-muted">{pub.summary}</p>
              </div>
              <div className="sm:col-span-2 sm:text-right">
                <Tag tone="blue">{pub.category}</Tag>
                {!hasFullText(pub) && <p className="label-mono mt-2 text-suba-muted">Coming soon</p>}
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="green">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-white">Work with Symboh</h2>
            <p className="mt-2 max-w-md text-white/90">Researchers, educators, policy practitioners and data people, write to us.</p>
          </div>
          <ButtonLink href="/get-involved#collaborate" variant="gold" arrow>Start a conversation</ButtonLink>
        </div>
      </Section>
    </>
  );
}
