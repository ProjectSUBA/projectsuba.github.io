import type { ReactNode } from 'react';
import Link from 'next/link';
import { publications } from '@/lib/data';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icons';
import { categoryTone, formatDate, hasDownload, hasFullText } from '@/lib/ui';

export const categories = ['All', 'Policy Brief', 'Research Paper', 'Report', 'Newsletter', 'White Paper'];
export const wings = ['All wings', 'SUBA', 'Symboh', 'Comma'];

/** Build the URL for a filter choice, so every filter state is a shareable link. */
function filterHref(category: string, wing: string): string {
  const params = new URLSearchParams();
  if (category !== 'All') params.set('category', category);
  if (wing !== 'All wings') params.set('wing', wing);
  const query = params.toString();
  return query ? `/publications?${query}` : '/publications';
}

function Chip({ href, active, children, tone }: { href: string; active: boolean; children: ReactNode; tone: 'dark' | 'green' }) {
  const activeClass = tone === 'dark' ? 'bg-dark-green text-white' : 'bg-green-ink text-white';
  return (
    <Link
      href={href}
      replace
      scroll={false}
      aria-current={active ? 'true' : undefined}
      className={`rounded-md border border-dark-green/25 px-3 py-1.5 text-[0.8rem] transition-colors ${
        active ? activeClass : 'bg-white text-suba-text hover:bg-cream-light'
      }`}
    >
      {children}
    </Link>
  );
}

/**
 * The filter bar and publication list. It is a plain component (no hooks), so the
 * page can render it on the server: the full list is then in the static HTML for
 * search engines and for visitors without JavaScript. PublicationsClient re-renders
 * it with the filters from the URL once the page loads.
 */
export function PublicationsView({ category, wing }: { category: string; wing: string }) {
  const filtered = publications
    .filter((p) => (category === 'All' || p.category === category) && (wing === 'All wings' || p.wing === wing))
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <div className="bg-cream py-10">
        <div className="mx-auto flex max-w-7xl flex-col flex-wrap gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div>
            <p className="label-mono mb-2 text-green-ink">Type</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <Chip key={c} href={filterHref(c, wing)} active={category === c} tone="dark">{c}</Chip>
              ))}
            </div>
          </div>
          <div>
            <p className="label-mono mb-2 text-green-ink">Wing</p>
            <div className="flex flex-wrap gap-2">
              {wings.map((w) => (
                <Chip key={w} href={filterHref(category, w)} active={wing === w} tone="green">{w}</Chip>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="min-h-[50vh] bg-white py-12" aria-label="Publication list">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="label-mono mb-6 text-suba-muted" role="status" aria-live="polite">
            {filtered.length} publication{filtered.length !== 1 ? 's' : ''}
          </p>
          <div className="divide-y divide-dark-green/10">
            {filtered.map((pub) => {
              const readable = hasFullText(pub);
              return (
                <article key={pub.id} className="group py-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="flex-1">
                      <div className="mb-3 flex flex-wrap items-center gap-2.5">
                        <Badge tone={categoryTone[pub.category]}>{pub.category}</Badge>
                        {pub.wing && <span className="label-mono text-suba-muted">{pub.wing}</span>}
                        <time dateTime={pub.date} className="text-xs text-suba-muted">{formatDate(pub.date)}</time>
                        {pub.readTime && <span className="label-mono text-suba-muted">{pub.readTime} read</span>}
                      </div>
                      <h2 className="mb-2 font-display text-lg font-semibold leading-snug">
                        {readable ? (
                          <Link href={`/publications/${pub.slug}`} className="transition-colors group-hover:text-green-ink">{pub.title}</Link>
                        ) : (
                          pub.title
                        )}
                      </h2>
                      <p className="mb-3 text-sm leading-relaxed text-suba-muted">{pub.summary}</p>
                      <p className="text-[0.8rem] text-suba-muted">By {pub.author}</p>
                      {pub.tags && (
                        <ul className="mt-3 flex flex-wrap gap-1.5">
                          {pub.tags.map((tag) => (
                            <li key={tag} className="rounded-full bg-cream px-2.5 py-0.5 text-xs text-suba-muted">{tag}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="flex flex-shrink-0 flex-col items-start gap-2 sm:items-end">
                      {readable ? (
                        <Link href={`/publications/${pub.slug}`} className="inline-flex items-center gap-2 rounded-lg border border-dark-green/30 px-4 py-2.5 text-[0.8rem] font-medium text-dark-green transition-colors hover:bg-cream-light">
                          Read online <Icon name="arrow" size={14} />
                        </Link>
                      ) : (
                        <span className="label-mono text-suba-muted">Full text coming soon</span>
                      )}
                      {hasDownload(pub) && (
                        <a href={pub.downloadUrl} className="inline-flex items-center gap-2 rounded-lg border border-dark-green/30 px-4 py-2.5 text-[0.8rem] font-medium text-dark-green transition-colors hover:bg-cream-light">
                          <Icon name="download" size={14} /> Download PDF
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="mb-3 text-base text-suba-muted">No publications match this filter.</p>
              <Link href="/publications" className="text-sm font-medium text-green-ink underline">Clear filters</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
