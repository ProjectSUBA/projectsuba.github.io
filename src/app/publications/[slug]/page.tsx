import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { publications } from '@/lib/data';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Tag } from '@/components/ui/Tag';
import { formatDate, hasDownload, hasFullText, readingMinutes } from '@/lib/ui';
import { mailto } from '@/lib/site';

type PageProps = { params: Promise<{ slug: string }> };

// Only publications with full text get their own page.
export function generateStaticParams() {
  return publications.filter(hasFullText).map((p) => ({ slug: p.slug }));
}

// In a static export, any slug not listed above is a 404.
export const dynamicParams = false;

// Next 16 passes `params` as a Promise, so it must be awaited.
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pub = publications.find((p) => p.slug === slug);
  if (!pub) return { title: 'Not found' };
  return {
    title: pub.title,
    description: pub.summary,
    openGraph: { type: 'article', title: pub.title, description: pub.summary, publishedTime: pub.date },
  };
}

export default async function PublicationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pub = publications.find((p) => p.slug === slug);
  if (!pub || !hasFullText(pub)) notFound();

  const minutes = readingMinutes(pub);
  const isSummary = pub.kind === 'summary';
  const related = publications
    .filter((p) => p.slug !== pub.slug && hasFullText(p) && (p.wing === pub.wing || p.category === pub.category))
    .slice(0, 3);

  const glance = [
    { label: 'Type', value: pub.category },
    { label: 'Published', value: formatDate(pub.date) },
    { label: 'By', value: pub.author },
    ...(pub.wing ? [{ label: 'Wing', value: pub.wing }] : []),
    ...(minutes ? [{ label: 'Reading time', value: `${minutes} min` }] : []),
    { label: 'This page', value: isSummary ? 'A summary of the full document' : 'The full text' },
  ];

  return (
    <>
      <PageHeader compact label={`Publication · ${pub.category}`} title={pub.title} meta={`${pub.author} · ${formatDate(pub.date)}`} />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <article className="lg:col-span-8">
            <p className="border-l-4 border-mikado pl-4 font-display text-xl italic leading-relaxed">{pub.summary}</p>

            <div className="mt-10 space-y-10">
              {pub.body?.map((section, i) => (
                <section key={i}>
                  {section.heading && <h2 className="mb-4 font-display text-2xl font-bold">{section.heading}</h2>}
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph, j) => (
                      <p key={j} className="max-w-prose text-[1.0625rem] leading-[1.8]">{paragraph}</p>
                    ))}
                  </div>
                  {section.quote && (
                    <blockquote className="mt-6 max-w-prose border-l-4 border-ink pl-5">
                      <p className="font-display text-lg italic leading-relaxed">&ldquo;{section.quote.text}&rdquo;</p>
                      {section.quote.attribution && <cite className="label-mono mt-2 block not-italic text-suba-muted">{section.quote.attribution}</cite>}
                    </blockquote>
                  )}
                </section>
              ))}
            </div>

            {pub.tags && (
              <ul className="mt-12 flex flex-wrap gap-2 border-t border-ink/30 pt-6">
                {pub.tags.map((tag) => (
                  <li key={tag}><Tag>{tag}</Tag></li>
                ))}
              </ul>
            )}
          </article>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="label-mono border-t-2 border-ink pt-3">At a glance</h2>
              <dl>
                {glance.map((item) => (
                  <div key={item.label} className="border-b border-ink/25 py-3">
                    <dt className="label-mono text-suba-muted">{item.label}</dt>
                    <dd className="mt-0.5 font-medium">{item.value}</dd>
                  </div>
                ))}
              </dl>

              {hasDownload(pub) ? (
                <div className="mt-6">
                  <ButtonLink href={pub.downloadUrl!} variant="primary">Download the PDF</ButtonLink>
                </div>
              ) : (
                isSummary && (
                  <div className="mt-6 border-2 border-ink p-4">
                    <p className="text-[0.925rem] leading-relaxed">
                      This page summarises a longer document that is not online yet. You can ask us for it.
                    </p>
                    <div className="mt-4">
                      <ButtonLink
                        href={mailto(
                          `Request: ${pub.title}`,
                          `Hello SUBA,\n\nCould you send me the full document for "${pub.title}"?\n\nName and organisation:\nWhat I would use it for:\n`
                        )}
                        variant="outline"
                      >
                        Request the full document
                      </ButtonLink>
                    </div>
                  </div>
                )
              )}
            </div>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="deep" labelledBy="related-heading">
          <h2 id="related-heading" className="mb-4 border-t-2 border-ink pt-3 font-display text-2xl font-bold">Related publications</h2>
          <ul className="border-t border-ink/30">
            {related.map((r) => (
              <li key={r.id} className="border-b border-ink/30 py-4">
                <span className="label-mono block text-suba-muted">{r.category} · {formatDate(r.date, 'short')}</span>
                <Link href={`/publications/${r.slug}`} className="font-display text-xl font-bold leading-snug hover:underline">{r.title}</Link>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
}
