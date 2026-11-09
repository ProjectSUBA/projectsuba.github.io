'use client';

import { useState } from 'react';
import Link from 'next/link';
import { publications } from '@/lib/data';
import type { Publication } from '@/lib/types';
import { Reveal } from '@/components/ui/Reveal';

const categories = ['All', 'Policy Brief', 'Research Paper', 'Report', 'Newsletter', 'White Paper'];

const categoryColors: Record<string, string> = {
  'Policy Brief': '#1F8EC8',
  'Research Paper': '#1A5C2E',
  'Report': '#F6A225',
  'Newsletter': '#259745',
  'White Paper': '#961416',
  'Case Study': '#FEC110',
};

function PublicationCard({ pub }: { pub: Publication }) {
  const dateObj = new Date(pub.date);
  const formatted = dateObj.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <article
      className="group rounded-xl p-6 mb-3 transition-all duration-300 hover:-translate-y-0.5"
      style={{ border: '1px solid rgba(26,92,46,0.1)', backgroundColor: 'white', boxShadow: 'var(--shadow-soft)' }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className="flex-1 min-w-0">
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span
              className="px-2 py-0.5 text-white rounded-full"
              style={{ backgroundColor: categoryColors[pub.category] || '#259745', fontFamily: 'var(--font-jetbrains)', fontSize: '0.6rem', letterSpacing: '0.08em' }}
            >
              {pub.category.toUpperCase()}
            </span>
            {pub.wing && pub.wing !== 'SUBA' && (
              <span className="label-mono" style={{ color: '#4A4A40', fontSize: '0.6rem' }}>{pub.wing}</span>
            )}
            <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: '#4A4A40' }}>{formatted}</span>
            {pub.readTime && (
              <span className="label-mono" style={{ color: '#4A4A40', fontSize: '0.6rem' }}>{pub.readTime} read</span>
            )}
          </div>

          <Link href={`/publications/${pub.slug}`}>
            <h3
              className="mb-2 group-hover:text-[#259745] transition-colors"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: '1.0625rem', color: '#1A5C2E', fontWeight: 600, lineHeight: '1.35' }}
            >
              {pub.title}
            </h3>
          </Link>

          <p className="mb-3 line-clamp-2" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', lineHeight: '1.6', color: '#4A4A40' }}>
            {pub.summary}
          </p>

          <div className="flex items-center gap-2">
            <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.78rem', color: '#4A4A40' }}>{pub.author}</span>
          </div>
        </div>

        {/* Download CTA */}
        {pub.downloadUrl && (
          <div className="flex-shrink-0">
            <a
              href={pub.downloadUrl}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 hover:-translate-y-px"
              style={{ border: '1px solid rgba(26,92,46,0.25)', color: '#1A5C2E', fontFamily: 'var(--font-inter)', fontSize: '0.8rem', fontWeight: 500 }}
              aria-label={`Download ${pub.title}`}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 2v7M4 6l3 3 3-3M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="pub-arrow inline-block transition-transform">Download</span>
            </a>
          </div>
        )}
      </div>

      {/* Tags */}
      {pub.tags && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {pub.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full"
              style={{ backgroundColor: '#FAF0C8', fontFamily: 'var(--font-inter)', fontSize: '0.7rem', color: '#4A4A40' }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export function PublicationsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? publications
    : publications.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: 'white' }} aria-labelledby="publications-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left: Header */}
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <span className="eyebrow mb-5" style={{ color: '#259745' }}>04 · Research &amp; publications</span>
              <h2
                id="publications-heading"
                className="mb-4 text-balance"
                style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(1.6rem, 3vw, 2.35rem)', color: '#1A5C2E', lineHeight: '1.15', fontWeight: 600, letterSpacing: '-0.01em' }}
              >
                What we
                <br />
                <span style={{ fontStyle: 'italic', color: '#259745' }}>research.</span>
              </h2>
              <p className="mb-8" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', lineHeight: '1.7', color: '#4A4A40' }}>
                Policy briefs, research papers, field reports, and newsletters —
                all grounded in primary data from Meghalaya.
              </p>

              {/* Filter */}
              <div className="flex flex-col gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="text-left px-3 py-2 rounded-lg text-sm transition-all duration-200"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '0.8125rem',
                      fontWeight: activeCategory === cat ? 600 : 400,
                      color: activeCategory === cat ? '#1A5C2E' : '#4A4A40',
                      backgroundColor: activeCategory === cat ? '#FDF8E7' : 'transparent',
                      borderLeft: activeCategory === cat ? '3px solid #259745' : '3px solid transparent',
                    }}
                  >
                    {cat}
                    <span className="ml-2 text-xs text-[#4A4A40]">
                      ({cat === 'All' ? publications.length : publications.filter((p) => p.category === cat).length})
                    </span>
                  </button>
                ))}
              </div>

              <Link
                href="/publications"
                className="inline-flex items-center gap-2 mt-8 text-sm font-medium group"
                style={{ color: '#1A5C2E', fontFamily: 'var(--font-inter)' }}
              >
                View all publications
                <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 5l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Reveal>

          {/* Right: Publication list */}
          <div className="lg:col-span-8">
            {filtered.length === 0 ? (
              <p style={{ fontFamily: 'var(--font-inter)', color: '#4A4A40', fontSize: '0.9rem' }}>
                No publications in this category yet.
              </p>
            ) : (
              <div>
                {filtered.slice(0, 5).map((pub) => (
                  <PublicationCard key={pub.id} pub={pub} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
