import { stats } from '@/lib/data';
import { Reveal } from '@/components/ui/Reveal';

export function DataInsights() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden grain"
      style={{ background: 'linear-gradient(165deg, #1A5C2E 0%, #0F3D20 100%)' }}
      aria-labelledby="data-heading"
    >
      {/* Warm glow */}
      <div className="glow-blob" style={{ top: '-4rem', right: '6%', width: '20rem', height: '20rem', background: 'rgba(254,193,16,0.14)' }} aria-hidden="true" />

      {/* Hill silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 opacity-10" aria-hidden="true">
        <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 180 Q240 80 480 120 Q720 160 960 90 Q1200 20 1440 80 L1440 180Z" fill="white" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <span className="eyebrow mb-5 justify-center text-white/50" style={{ display: 'inline-flex' }}>05 · Data &amp; impact</span>
          <h2
            id="data-heading"
            className="text-white mb-4 text-balance"
            style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(1.85rem, 4vw, 2.6rem)', fontWeight: 600, lineHeight: '1.15', letterSpacing: '-0.01em' }}
          >
            Specific.{' '}
            <span style={{ color: '#FEC110', fontStyle: 'italic' }}>Not vague.</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', lineHeight: '1.7' }}>
            &ldquo;We help the environment&rdquo; says nothing. &ldquo;We planted 312 trees in
            Upper Shillong with 94% survival&rdquo; says everything.
          </p>
        </Reveal>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-12">
          {stats.map((stat, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <div
                className="relative p-8 text-center rounded-xl h-full transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div
                  className="mb-2"
                  style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(2.1rem, 5vw, 3.1rem)', fontWeight: 700, color: stat.color || '#FEC110', lineHeight: '1' }}
                >
                  {stat.value}
                </div>
                <div className="text-white font-medium mb-1" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem' }}>
                  {stat.label}
                </div>
                {stat.context && (
                  <div className="text-white/45" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', lineHeight: '1.4' }}>
                    {stat.context}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Methodology note */}
        <Reveal>
          <div className="flex items-start gap-4 p-6 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="flex-shrink-0 w-1 h-12 rounded-full self-center" style={{ background: 'linear-gradient(#FEC110, #F6A225)' }} aria-hidden="true" />
            <div>
              <h3 className="text-white font-medium mb-1" style={{ fontFamily: 'var(--font-fraunces)', fontSize: '0.9375rem' }}>
                Our data commitment
              </h3>
              <p className="text-white/60" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', lineHeight: '1.65' }}>
                All statistics on this site are sourced from primary data collected by SUBA
                researchers and field teams, or from cited secondary sources. We do not publish
                estimates without labelling them clearly. Every number has a methodology note
                available in our publications archive.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
