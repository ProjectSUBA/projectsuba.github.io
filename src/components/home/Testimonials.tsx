'use client';

import { useState } from 'react';
import { testimonials } from '@/lib/data';
import { Reveal } from '@/components/ui/Reveal';

const categoryColors: Record<string, string> = {
  Government: '#1A5C2E',
  'Donor / Partner': '#F6A225',
  Volunteer: '#259745',
  'Community Member': '#1F8EC8',
  Educator: '#961416',
  Media: '#FEC110',
};

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: 'white' }}
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-12">
          <span className="eyebrow mb-5" style={{ color: '#259745' }}>What people say</span>
          <h2
            id="testimonials-heading"
            className="text-balance"
            style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(1.85rem, 4vw, 2.6rem)', color: '#1A5C2E', lineHeight: '1.15', fontWeight: 600, letterSpacing: '-0.01em' }}
          >
            From the people
            <br />
            <span style={{ fontStyle: 'italic', color: '#259745' }}>we work with.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Large featured quote */}
          <Reveal className="lg:col-span-8">
            <div
              className="relative p-8 lg:p-12 rounded-2xl h-full flex flex-col overflow-hidden"
              style={{ background: 'linear-gradient(150deg, #FDF8E7 0%, #FAF0C8 100%)', border: '1px solid rgba(26,92,46,0.1)', boxShadow: 'var(--shadow-card)' }}
            >
              <div
                className="absolute -top-6 -right-4 w-40 h-40 rounded-full"
                style={{ background: categoryColors[t.category], opacity: 0.06, filter: 'blur(30px)' }}
                aria-hidden="true"
              />
              <svg width="40" height="30" viewBox="0 0 32 24" fill="none" className="mb-6 relative" aria-hidden="true">
                <path d="M0 24V14.4C0 6.4 4.8 1.6 12.8 0L14.4 3.2C9.6 4.8 7.2 7.2 7.2 11.2H12.8V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.6 30.4 0L32 3.2C27.2 4.8 24.8 7.2 24.8 11.2H30.4V24H17.6Z" fill="#259745" opacity="0.35" />
              </svg>

              <blockquote className="flex-1 relative">
                <p
                  key={active}
                  className="reveal is-visible"
                  style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', color: '#1A5C2E', lineHeight: '1.5', fontStyle: 'italic' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t relative" style={{ borderColor: 'rgba(26,92,46,0.12)' }}>
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: categoryColors[t.category] + '20', border: `1.5px dashed ${categoryColors[t.category]}60` }}
                  aria-hidden="true"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="7" r="3.5" stroke={categoryColors[t.category]} strokeWidth="1.3" opacity="0.6" />
                    <path d="M3 17c0-3.5 3-6 7-6s7 2.5 7 6" stroke={categoryColors[t.category]} strokeWidth="1.3" opacity="0.6" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#1A1A1A' }}>{t.name}</div>
                  <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.78rem', color: '#4A4A40' }}>
                    {t.role}{t.affiliation ? ` · ${t.affiliation}` : ''}
                  </div>
                </div>
                <span
                  className="ml-auto px-2.5 py-1 rounded-full label-mono"
                  style={{ backgroundColor: categoryColors[t.category] + '15', color: categoryColors[t.category], fontSize: '0.58rem', letterSpacing: '0.1em' }}
                >
                  {t.category.toUpperCase()}
                </span>
              </div>
            </div>
          </Reveal>

          {/* List of other testimonials to switch between */}
          <Reveal className="lg:col-span-4 flex flex-col gap-2" delay={100}>
            {testimonials.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className="text-left p-4 rounded-xl transition-all duration-200"
                style={{
                  backgroundColor: active === i ? '#FDF8E7' : 'transparent',
                  border: `1px solid ${active === i ? 'rgba(26,92,46,0.15)' : 'transparent'}`,
                  borderLeft: `3px solid ${active === i ? categoryColors[item.category] : 'transparent'}`,
                  boxShadow: active === i ? 'var(--shadow-soft)' : 'none',
                }}
                aria-pressed={active === i}
              >
                <p
                  className="line-clamp-2 mb-1.5"
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8rem', lineHeight: '1.5', color: active === i ? '#1A1A1A' : '#4A4A40' }}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
                <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', color: categoryColors[item.category] }}>
                  {item.role}
                </span>
              </button>
            ))}
          </Reveal>
        </div>

        {/* Disclosure note — important for credibility, these are placeholders */}
        <div
          className="mt-10 p-4 rounded-xl flex items-start gap-3"
          style={{ backgroundColor: 'rgba(150,20,22,0.04)', border: '1px solid rgba(150,20,22,0.15)' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
            <circle cx="8" cy="8" r="7" stroke="#961416" strokeWidth="1.2" opacity="0.6" />
            <path d="M8 5v4M8 11h.01" stroke="#961416" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          </svg>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.78rem', lineHeight: '1.6', color: '#4A4A40' }}>
            These testimonials are placeholder content showing the format and layout. Replace names, roles, and
            quotes with real testimonials before publishing — see <code style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.72rem' }}>CONTENT_GUIDE.md</code> for instructions.
            Never publish a quote attributed to a real person without their explicit permission.
          </p>
        </div>
      </div>
    </section>
  );
}
