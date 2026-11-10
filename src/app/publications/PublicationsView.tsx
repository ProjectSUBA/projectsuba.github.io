import type { ReactNode } from 'react';
import Link from 'next/link';
import { publications } from '@/lib/data';
import { Tag } from '@/components/ui/Tag';
import { formatDate, hasDownload, hasFullText, readingMinutes } from '@/lib/ui';
import type { Publication } from '@/lib/types';

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

function FilterLink({ href, active, children }: { href: string; active: boolean; children: ReactNode }) {
  return (
    <Link
      href={href}
      replace
      scroll={false}
      aria-current={active ? 'true' : undefined}
      className={`px-2.5 py-1 text-[0.85rem] transition-colors ${
        active ? 'bg-mikado font-semibold text-forest' : 'underline decoration-ink/30 underline-offset-4 hover:bg-paper-deep'
      }`}
    >
      {children}
    </Link>
  );
}

function statusOf(pub: Publication): string {
  if (!hasFullText(pub)) return 'Full text coming soon';
  return pub.kind === 'summary' ? 'Summary online' : 'Full text online';
}

/**
 * The filter bar and the publication catalogue. A plain component (no hooks), so
 * the page can render it on the server: the full list is then in the static HTML
 * for search engines and for visitors without JavaScript. PublicationsClient
 * re-renders it with the filters from the URL once the page loads.
 */
export function PublicationsView({ category, wing }: { category: string; wing: string }) {
  const filtered = publications
    .filter((p) => (category === 'All' || p.category === category) && (wing === 'All wings' || p.wing === wing))
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <div className="border-b border-ink/30 bg-paper-deep">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:gap-12 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
            <span className="label-mono mr-2 text-suba-muted">Type</span>
            {categories.map((c) => (
              <FilterLink key={c} href={filterHref(c, wing)} active={category === c}>{c}</FilterLink>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
            <span className="label-mono mr-2 text-suba-muted">Wing</span>
            {wings.map((w) => (
              <FilterLink key={w} href={filterHref(category, w)} active={wing === w}>{w}</FilterLink>
            ))}
          </div>
        </div>
      </div>

      <section className="min-h-[50vh] bg-white" aria-label="Publication list">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="label-mono mb-4 text-suba-muted" role="status" aria-live="polite">
            {filtered.length} publication{filtered.length !== 1 ? 's' : ''}
          </p>
          <ul className="border-t-2 border-ink">
            {filtered.map((pub) => {
              const readable = hasFullText(pub);
              const minutes = readingMinutes(pub);
              return (
                <li key={pub.id} className="grid gap-2 border-b border-ink/30 py-7 sm:grid-cols-12 sm:gap-6">
                  <time dateTime={pub.date} className="label-mono pt-1.5 text-suba-muted sm:col-span-2">{formatDate(pub.date)}</time>
                  <div className="sm:col-span-7">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <Tag>{pub.category}</Tag>
                      {pub.wing && <span className="label-mono text-suba-muted">{pub.wing}</span>}
                    </div>
                    <h2 className="font-display text-2xl font-bold leading-snug">
                      {readable ? (
                        <Link href={`/publications/${pub.slug}`} className="hover:underline hover:decoration-2 hover:underline-offset-4">{pub.title}</Link>
                      ) : (
                        pub.title
                      )}
                    </h2>
                    <p className="mt-2 leading-relaxed text-suba-muted">{pub.summary}</p>
                    <p className="mt-2 text-[0.85rem] text-suba-muted">By {pub.author}</p>
                  </div>
                  <div className="sm:col-span-3 sm:text-right">
                    <p className="label-mono text-suba-muted">{statusOf(pub)}</p>
                    {readable && minutes && <p className="label-mono mt-1 text-suba-muted">{minutes} min read</p>}
                    {readable && (
                      <p className="mt-3">
                        <Link href={`/publications/${pub.slug}`} className="text-sm font-semibold underline decoration-2 underline-offset-4 hover:bg-mikado">
                          {pub.kind === 'summary' ? 'Read the summary →' : 'Read →'}
                        </Link>
                      </p>
                    )}
                    {hasDownload(pub) && (
                      <p className="mt-2">
                        <a href={pub.downloadUrl} className="text-sm font-semibold underline underline-offset-4 hover:bg-mikado">Download PDF</a>
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="mb-3 text-suba-muted">No publications match this filter.</p>
              <Link href="/publications" className="text-sm font-semibold underline underline-offset-4">Clear filters</Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
