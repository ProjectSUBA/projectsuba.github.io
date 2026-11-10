import { stats } from '@/lib/data';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/Section';

// Accent colours chosen to read on the dark green background.
const accents = ['#FEC110', '#8FE3A8', '#7FC8EE', '#FEC110', '#F6A225', '#8FE3A8'];

export function DataInsights() {
  return (
    <section
      className="grain on-dark relative overflow-hidden py-20 lg:py-28"
      style={{ background: 'linear-gradient(165deg, #1A5C2E 0%, #0F3D20 100%)' }}
      aria-labelledby="data-heading"
    >
      <div className="glow-blob" style={{ top: '-4rem', right: '6%', width: '20rem', height: '20rem', background: 'rgba(254,193,16,0.14)' }} aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Data & impact" id="data-heading" align="center" dark title={<>What the work <em>adds up to.</em></>}>
          A few figures from our field records and surveys. We would rather give you one number we can stand behind than a dozen we cannot.
        </SectionHeading>

        <div className="mb-12 grid grid-cols-2 gap-3 md:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={(i % 3) * 80}>
              <div className="h-full rounded-xl border border-white/15 bg-white/5 p-6 text-center transition-transform duration-300 hover:-translate-y-1 sm:p-8">
                <div
                  className="mb-2 font-display font-bold leading-none"
                  style={{ fontSize: 'clamp(2.1rem, 5vw, 3.1rem)', color: accents[i % accents.length] }}
                >
                  {stat.value}
                </div>
                <div className="mb-1 text-sm font-medium text-white">{stat.label}</div>
                {stat.context && <div className="text-xs leading-snug text-white/75">{stat.context}</div>}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="flex items-start gap-4 rounded-xl border border-white/15 bg-white/[0.07] p-6">
            <div className="h-12 w-1 flex-shrink-0 self-center rounded-full" style={{ background: 'linear-gradient(#FEC110, #F6A225)' }} aria-hidden="true" />
            <div>
              <h3 className="mb-1 font-display text-[0.9375rem] font-medium text-white">How we count</h3>
              <p className="text-[0.8125rem] leading-relaxed text-white/80">
                These figures come from SUBA’s own field records and surveys. Where a number comes from a publication, that publication explains how it was collected, and we are adding methodology notes to each one as the full texts go online.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
