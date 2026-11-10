import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { publications } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icons';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { categoryTone, formatDate, hasDownload, hasFullText } from '@/lib/ui';

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

  const related = publications
    .filter((p) => p.slug !== pub.slug && hasFullText(p) && (p.wing === pub.wing || p.category === pub.category))
    .slice(0, 3);

  return (
    <>
      <header className="grain on-dark relative overflow-hidden pb-12 pt-32 lg:pt-36" style={{ background: 'linear-gradient(165deg, #1A5C2E 0%, #0F3D20 100%)' }}>
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/publications" className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white">
            <Icon name="arrow" size={14} className="rotate-180" />
            All publications
          </Link>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <Badge tone={categoryTone[pub.category]}>{pub.category}</Badge>
            {pub.wing && <span className="label-mono text-white/75">{pub.wing}</span>}
          </div>
          <h1 className="mb-4 font-display font-semibold leading-tight text-white text-balance" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
            {pub.title}
          </h1>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.85rem] text-white/80">
            <span>{pub.author}</span>
            <time dateTime={pub.date}>{formatDate(pub.date)}</time>
            {pub.readTime && <span>{pub.readTime} read</span>}
          </p>
        </div>
      </header>

      <article className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="mb-10 rounded-lg bg-cream-light p-5 text-[0.9375rem] italic leading-relaxed">{pub.summary}</p>

          <div className="space-y-10">
            {pub.body?.map((section, i) => (
              <section key={i}>
                {section.heading && <h2 className="mb-4 font-display text-[1.375rem] font-semibold">{section.heading}</h2>}
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, j) => (
                    <p key={j} className="text-base leading-[1.8]">{paragraph}</p>
                  ))}
                </div>
                {section.quote && (
                  <blockquote className="mt-6 border-l-4 border-mikado pl-5">
                    <p className="font-display text-[1.0625rem] italic leading-relaxed text-dark-green">&ldquo;{section.quote.text}&rdquo;</p>
                    {section.quote.attribution && (
                      <cite className="label-mono mt-2 block not-italic text-suba-muted">{section.quote.attribution}</cite>
                    )}
                  </blockquote>
                )}
              </section>
            ))}
          </div>

          {pub.tags && (
            <ul className="mt-10 flex flex-wrap gap-2 border-t border-dark-green/10 pt-8">
              {pub.tags.map((tag) => (
                <li key={tag} className="rounded-full bg-cream px-3 py-1 text-xs text-suba-muted">{tag}</li>
              ))}
            </ul>
          )}

          {hasDownload(pub) && (
            <div className="mt-8">
              <ButtonLink href={pub.downloadUrl!} variant="outline">
                <Icon name="download" size={16} /> Download full PDF
              </ButtonLink>
            </div>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-cream py-16" aria-labelledby="related-heading">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 id="related-heading" className="mb-6 font-display text-lg font-semibold">Related publications</h2>
            <div className="space-y-4">
              {related.map((r) => (
                <Link key={r.id} href={`/publications/${r.slug}`} className="card block p-4 transition-shadow hover:shadow-[var(--shadow-card)]">
                  <Badge tone={categoryTone[r.category]} className="mb-2">{r.category}</Badge>
                  <h3 className="font-display text-[0.9375rem] font-semibold leading-snug">{r.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
