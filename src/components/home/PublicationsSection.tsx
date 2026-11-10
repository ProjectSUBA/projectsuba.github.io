'use client';

import { useState } from 'react';
import Link from 'next/link';
import { publications } from '@/lib/data';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icons';
import { categoryTone, formatDate, hasFullText } from '@/lib/ui';
import type { Publication } from '@/lib/types';

const categories = ['All', 'Policy Brief', 'Research Paper', 'Report', 'Newsletter', 'White Paper'];

function PublicationCard({ pub }: { pub: Publication }) {
  const readable = hasFullText(pub);
  return (
    <article className="card group mb-3 p-6 transition-transform duration-300 hover:-translate-y-0.5">
      <div className="mb-3 flex flex-wrap items-center gap-2.5">
        <Badge tone={categoryTone[pub.category]}>{pub.category}</Badge>
        {pub.wing && pub.wing !== 'SUBA' && <span className="label-mono text-suba-muted">{pub.wing}</span>}
        <span className="text-xs text-suba-muted">{formatDate(pub.date, 'short')}</span>
        {pub.readTime && <span className="label-mono text-suba-muted">{pub.readTime} read</span>}
      </div>

      <h3 className="mb-2 font-display text-[1.0625rem] font-semibold leading-snug">
        {readable ? (
          <Link href={`/publications/${pub.slug}`} className="transition-colors group-hover:text-green-ink">
            {pub.title}
          </Link>
        ) : (
          pub.title
        )}
      </h3>

      <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-suba-muted">{pub.summary}</p>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-[0.8rem] text-suba-muted">{pub.author}</span>
        {readable ? (
          <Link href={`/publications/${pub.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-green-ink">
            Read <Icon name="arrow" size={14} />
          </Link>
        ) : (
          <span className="label-mono text-suba-muted">Full text coming soon</span>
        )}
      </div>
    </article>
  );
}

export function PublicationsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? publications : publications.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="publications-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left: heading and filter */}
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow mb-5 text-green-ink">Research &amp; publications</span>
              <h2
                id="publications-heading"
                className="mb-4 text-balance font-display font-semibold leading-[1.15] tracking-[-0.01em] text-dark-green"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.35rem)' }}
              >
                What we <em className="font-medium text-sea-green">research.</em>
              </h2>
              <p className="mb-8 text-[0.9375rem] leading-relaxed text-suba-muted">
                Policy briefs, research papers, field reports and newsletters, all grounded in primary data from Meghalaya.
              </p>

              <div className="flex flex-col gap-1" role="group" aria-label="Filter publications by type">
                {categories.map((cat) => {
                  const active = activeCategory === cat;
                  const count = cat === 'All' ? publications.length : publications.filter((p) => p.category === cat).length;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      aria-pressed={active}
                      className={`rounded-lg border-l-[3px] px-3 py-2 text-left text-[0.8125rem] transition-colors ${
                        active ? 'border-sea-green bg-cream-light font-semibold text-dark-green' : 'border-transparent text-suba-muted hover:bg-cream-light'
                      }`}
                    >
                      {cat} <span className="ml-1 text-xs">({count})</span>
                    </button>
                  );
                })}
              </div>

              <Link href="/publications" className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-dark-green">
                View all publications
                <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          {/* Right: list */}
          <div className="lg:col-span-8">
            {filtered.length === 0 ? (
              <p className="text-sm text-suba-muted">No publications in this category yet.</p>
            ) : (
              filtered.slice(0, 5).map((pub) => <PublicationCard key={pub.id} pub={pub} />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
