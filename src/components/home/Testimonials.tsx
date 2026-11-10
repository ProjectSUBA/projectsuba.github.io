'use client';

import { useState } from 'react';
import { testimonials } from '@/lib/data';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/Section';

const categoryInk: Record<string, string> = {
  Government: '#1A5C2E',
  'Donor / Partner': '#8A5200',
  Volunteer: '#1A6B33',
  'Community Member': '#14688F',
  Educator: '#961416',
  Media: '#8A5200',
};

/**
 * Shows real testimonials from src/lib/data. While that list is empty the whole
 * section hides itself, so no placeholder quote is ever published.
 */
export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];
  if (!t) return null;

  const ink = categoryInk[t.category] ?? '#1A6B33';

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="What people say" id="testimonials-heading" title={<>From the people <em>we work with.</em></>} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <figure
              className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-dark-green/10 p-8 lg:p-12"
              style={{ background: 'linear-gradient(150deg, #FDF8E7 0%, #FAF0C8 100%)', boxShadow: 'var(--shadow-card)' }}
            >
              <blockquote className="flex-1">
                <p
                  key={active}
                  className="font-display italic leading-[1.5] text-dark-green"
                  style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-8 flex flex-wrap items-center gap-4 border-t border-dark-green/15 pt-6">
                <div>
                  <div className="text-sm font-semibold text-suba-text">{t.name}</div>
                  <div className="text-[0.8rem] text-suba-muted">
                    {t.role}
                    {t.affiliation ? `, ${t.affiliation}` : ''}
                  </div>
                </div>
                <span className="label-mono ml-auto rounded-full px-2.5 py-1" style={{ color: ink, backgroundColor: ink + '1A' }}>
                  {t.category}
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="flex flex-col gap-2 lg:col-span-4" delay={100}>
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`rounded-xl border-l-[3px] p-4 text-left transition-colors ${
                  active === i ? 'bg-cream-light shadow-[var(--shadow-soft)]' : 'border-transparent hover:bg-cream-light/60'
                }`}
                style={active === i ? { borderLeftColor: categoryInk[item.category] ?? '#1A6B33' } : undefined}
              >
                <p className="line-clamp-2 mb-1.5 text-[0.8rem] leading-normal text-suba-muted">&ldquo;{item.quote}&rdquo;</p>
                <span className="text-xs font-medium" style={{ color: categoryInk[item.category] ?? '#1A6B33' }}>{item.role}</span>
              </button>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
