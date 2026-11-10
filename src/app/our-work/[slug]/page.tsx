import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { FieldPhoto } from '@/components/ui/FieldPhoto';
import { fieldEntries, newsItems, projects, publications } from '@/lib/data';
import { formatDate, hasFullText } from '@/lib/ui';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

// In a static export, any slug not listed above is a 404.
export const dynamicParams = false;

// Next 16 passes `params` as a Promise, so it must be awaited.
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return { title: 'Not found' };
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();

  const entries = fieldEntries.filter((e) => e.project === project.id).sort((a, b) => a.date.localeCompare(b.date));
  const updates = newsItems.filter((n) => n.project === project.id).sort((a, b) => b.date.localeCompare(a.date));
  const related = (project.publicationSlugs ?? [])
    .map((s) => publications.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <PageHeader
        label={`${project.wing} · ${project.status}`}
        title={project.title}
        meta={`${project.place} · since ${project.since}`}
      >
        {project.summary}
      </PageHeader>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="space-y-5 text-[1.0625rem] leading-[1.75]">
              {project.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <FieldPhoto id={`project-${project.id}`} caption={project.place} aspect="21/9" className="mt-10" />

            {entries.length > 0 && (
              <div className="mt-14">
                <h2 className="mb-2 border-t-2 border-ink pt-3 font-display text-3xl font-bold">Field log</h2>
                <p className="mb-8 text-suba-muted">Dated records from the site, oldest first.</p>
                <div className="space-y-12">
                  {entries.map((entry) => (
                    <article key={entry.id} aria-labelledby={`entry-${entry.id}`}>
                      <p className="label-mono text-suba-muted">
                        <time dateTime={entry.date}>{formatDate(entry.date)}</time> · {entry.location}
                      </p>
                      <h3 id={`entry-${entry.id}`} className="mt-2 font-display text-2xl font-bold">{entry.title}</h3>
                      <p className="mt-2 max-w-2xl leading-relaxed text-suba-muted">{entry.summary}</p>

                      <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-y border-ink/30 py-4">
                        {entry.stats.map((s) => (
                          <div key={s.label} className="flex flex-col">
                            <dt className="label-mono order-2 text-suba-muted">{s.label}</dt>
                            <dd className="order-1 font-display text-2xl font-bold leading-tight">{s.value}</dd>
                          </div>
                        ))}
                      </dl>

                      <dl className="mt-5 space-y-3 text-[0.95rem] leading-relaxed">
                        {(
                          [
                            ['Before', entry.before],
                            ['During', entry.during],
                            ['After', entry.after],
                          ] as const
                        ).map(([term, text]) => (
                          <div key={term} className="grid gap-1 sm:grid-cols-12 sm:gap-4">
                            <dt className="label-mono pt-1 text-suba-muted sm:col-span-2">{term}</dt>
                            <dd className="sm:col-span-10">{text}</dd>
                          </div>
                        ))}
                      </dl>

                      {entry.reflection && (
                        <p className="mt-5 max-w-2xl border-l-4 border-mikado pl-4 font-display text-[1.05rem] italic leading-relaxed">{entry.reflection}</p>
                      )}
                      {entry.credits && <p className="label-mono mt-4 text-suba-muted">{entry.credits.join(' · ')}</p>}
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="label-mono border-t-2 border-ink pt-3">What we counted</h2>
              <dl>
                {project.facts.map((fact) => (
                  <div key={fact.label} className="flex flex-col border-b border-ink/25 py-4">
                    <dt className="label-mono order-2 mt-2 text-suba-muted">{fact.label}</dt>
                    <dd className="order-1 font-display text-4xl font-bold leading-none tracking-[-0.02em]">{fact.value}</dd>
                    <dd className="order-3 mt-1 text-[0.9rem] leading-snug text-suba-muted">{fact.note}</dd>
                  </div>
                ))}
              </dl>

              {related.length > 0 && (
                <div className="mt-8">
                  <h2 className="label-mono border-t-2 border-ink pt-3">Read more</h2>
                  <ul>
                    {related.map((pub) => (
                      <li key={pub.id} className="border-b border-ink/25 py-3">
                        {hasFullText(pub) ? (
                          <Link href={`/publications/${pub.slug}`} className="font-display font-semibold leading-snug hover:underline">{pub.title}</Link>
                        ) : (
                          <span className="font-display font-semibold leading-snug">{pub.title}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {updates.length > 0 && (
                <div className="mt-8">
                  <h2 className="label-mono border-t-2 border-ink pt-3">Updates</h2>
                  <ul>
                    {updates.map((u) => (
                      <li key={u.id} className="border-b border-ink/25 py-3 text-[0.925rem]">
                        <span className="label-mono block text-suba-muted">{formatDate(u.date, 'short')}</span>
                        {u.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="deep">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Tag tone={project.wing === 'Symboh' ? 'blue' : 'green'}>{project.wing}</Tag>
            <h2 className="font-display text-2xl font-bold">Want to help with this?</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={project.wing === 'Comma' ? '/get-involved#volunteer' : '/get-involved#collaborate'} arrow>
              {project.wing === 'Comma' ? 'Volunteer' : 'Collaborate'}
            </ButtonLink>
            <ButtonLink href="/our-work" variant="outline">All projects</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
