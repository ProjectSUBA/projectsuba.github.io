import { focusAreas } from '@/lib/data';
import { Reveal } from '@/components/ui/Reveal';
import { Icon, type IconName } from '@/components/ui/Icons';

export function WhatWeDo() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'white' }}
      aria-labelledby="whatwedo-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal className="max-w-2xl mb-14">
          <span className="eyebrow mb-5" style={{ color: '#259745' }}>02 · What we do</span>
          <h2
            id="whatwedo-heading"
            className="text-balance"
            style={{
              fontFamily: 'var(--font-fraunces), Georgia, serif',
              fontSize: 'clamp(1.85rem, 4vw, 2.6rem)',
              color: '#1A5C2E',
              lineHeight: '1.15',
              fontWeight: 600,
              letterSpacing: '-0.01em',
            }}
          >
            Six areas.{' '}
            <span style={{ fontStyle: 'italic', color: '#259745' }}>One commitment.</span>
          </h2>
          <p
            className="mt-4"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', lineHeight: '1.7', color: '#4A4A40' }}
          >
            SUBA&apos;s work spans environment, civic action, research, education, circular
            economy, and policy — always grounded in Meghalaya.
          </p>
        </Reveal>

        {/* Focus area grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {focusAreas.map((area, i) => (
            <Reveal key={i} delay={(i % 3) * 90}>
              <div
                className="relative h-full p-7 rounded-lg bg-white card-lift overflow-hidden"
                style={{ border: '1px solid rgba(26,92,46,0.1)', boxShadow: 'var(--shadow-soft)' }}
              >
                {/* Corner accent wash */}
                <div
                  className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: area.color, filter: 'blur(40px)', opacity: 0.08 }}
                  aria-hidden="true"
                />
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: area.color + '18' }}
                  aria-hidden="true"
                >
                  <Icon name={area.icon as IconName} color={area.color} />
                </div>
                <div
                  className="w-8 h-1 rounded-full mb-4 transition-all duration-300"
                  style={{ backgroundColor: area.color }}
                  aria-hidden="true"
                />
                <h3
                  className="mb-3"
                  style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: '1.1875rem', color: '#1A5C2E', fontWeight: 600 }}
                >
                  {area.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', lineHeight: '1.65', color: '#4A4A40' }}>
                  {area.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
