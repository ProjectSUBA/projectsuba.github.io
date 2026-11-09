import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { publications } from '@/lib/data';

const catColors: Record<string,string> = { 'Policy Brief':'#1F8EC8','Research Paper':'#1A5C2E','Report':'#F6A225','Newsletter':'#259745','White Paper':'#961416','Case Study':'#FEC110' };

export function generateStaticParams() {
  return publications.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const pub = publications.find((p) => p.slug === params.slug);
  if (!pub) return { title: 'Not Found' };
  return {
    title: pub.title,
    description: pub.summary,
  };
}

export default function PublicationDetailPage({ params }: { params: { slug: string } }) {
  const pub = publications.find((p) => p.slug === params.slug);
  if (!pub) notFound();

  const formatted = new Date(pub.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  const related = publications.filter((p) => p.slug !== pub.slug && (p.wing === pub.wing || p.category === pub.category)).slice(0, 3);

  return (
    <>
      <div className="pt-28 pb-12" style={{ backgroundColor: '#1A5C2E' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/publications" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-6 text-sm transition-colors" style={{ fontFamily: 'var(--font-inter)' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M12 7H2M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            All publications
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-2.5 py-1 text-white rounded-sm label-mono" style={{ backgroundColor: catColors[pub.category] || '#259745', fontSize: '0.6rem', letterSpacing: '0.1em' }}>
              {pub.category.toUpperCase()}
            </span>
            {pub.wing && <span className="label-mono text-white/50" style={{ fontSize: '0.6rem' }}>{pub.wing.toUpperCase()}</span>}
          </div>
          <h1 className="text-white mb-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 600, lineHeight: '1.25' }}>
            {pub.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/60" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem' }}>
            <span>{pub.author}</span>
            <span>·</span>
            <span>{formatted}</span>
            {pub.readTime && <><span>·</span><span>{pub.readTime} read</span></>}
          </div>
        </div>
      </div>

      <article className="py-16" style={{ backgroundColor: 'white' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Summary / abstract */}
          <p className="mb-10 p-5 rounded-sm" style={{ backgroundColor: '#FAF0C8', fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', lineHeight: '1.7', color: '#1A1A1A', fontStyle: 'italic' }}>
            {pub.summary}
          </p>

          {pub.body && pub.body.length > 0 ? (
            <div className="space-y-10">
              {pub.body.map((section, i) => (
                <div key={i}>
                  {section.heading && (
                    <h2 className="mb-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: '1.375rem', color: '#1A5C2E', fontWeight: 600 }}>
                      {section.heading}
                    </h2>
                  )}
                  <div className="space-y-4">
                    {section.paragraphs.map((p, j) => (
                      <p key={j} style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', lineHeight: '1.8', color: '#1A1A1A' }}>
                        {p}
                      </p>
                    ))}
                  </div>
                  {section.quote && (
                    <blockquote className="mt-6 pl-5 border-l-4" style={{ borderColor: '#FEC110' }}>
                      <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.0625rem', fontStyle: 'italic', color: '#1A5C2E', lineHeight: '1.6' }}>
                        "{section.quote.text}"
                      </p>
                      {section.quote.attribution && (
                        <cite className="block mt-2 label-mono not-italic" style={{ color: '#4A4A40', fontSize: '0.65rem', letterSpacing: '0.08em' }}>
                          — {section.quote.attribution.toUpperCase()}
                        </cite>
                      )}
                    </blockquote>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 rounded-sm text-center" style={{ backgroundColor: '#FAF0C8', border: '1px dashed rgba(26,92,46,0.25)' }}>
              <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#4A4A40' }}>
                Full text for this publication has not been added yet. See <code style={{ fontFamily: 'var(--font-jetbrains)' }}>CONTENT_GUIDE.md</code> for how to add the complete write-up, or use the download link below if a PDF is available.
              </p>
            </div>
          )}

          {/* Tags */}
          {pub.tags && (
            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t" style={{ borderColor: 'rgba(26,92,46,0.1)' }}>
              {pub.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-sm" style={{ backgroundColor: '#FAF0C8', fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: '#4A4A40' }}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Download */}
          {pub.downloadUrl && (
            <div className="mt-8">
              <a
                href={pub.downloadUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-medium transition-colors"
                style={{ border: '1px solid rgba(26,92,46,0.25)', color: '#1A5C2E', fontFamily: 'var(--font-inter)' }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 2v7M4 6l3 3 3-3M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Download full PDF
              </a>
            </div>
          )}
        </div>
      </article>

      {/* Related publications */}
      {related.length > 0 && (
        <section className="py-16" style={{ backgroundColor: '#FAF0C8' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6" style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.125rem', color: '#1A5C2E', fontWeight: 600 }}>
              Related publications
            </h2>
            <div className="space-y-4">
              {related.map((r) => (
                <Link key={r.id} href={`/publications/${r.slug}`} className="block p-4 rounded-sm bg-white hover:shadow-sm transition-shadow" style={{ border: '1px solid rgba(26,92,46,0.1)' }}>
                  <span className="px-2 py-0.5 text-white rounded-sm inline-block mb-2" style={{ backgroundColor: catColors[r.category] || '#259745', fontFamily: 'var(--font-jetbrains)', fontSize: '0.55rem' }}>
                    {r.category.toUpperCase()}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-fraunces)', fontSize: '0.9375rem', color: '#1A5C2E', fontWeight: 600, lineHeight: '1.4' }}>
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
