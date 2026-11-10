import { ButtonLink } from '@/components/ui/ButtonLink';
import { FieldPhoto } from '@/components/ui/FieldPhoto';
import { photos } from '@/lib/photos';

/**
 * Thin topographic lines, drawn from a formula so there is nothing to download.
 * They suggest the Shillong plateau without pretending to be a real map.
 */
function Contours() {
  const lines = Array.from({ length: 15 }, (_, i) => {
    const y = 300 + i * 40;
    const a = 26 + i * 7;
    return `M-40 ${y} C 240 ${y - a}, 430 ${y + a * 1.3}, 740 ${y - a * 0.5} S 1190 ${y - a * 1.15}, 1480 ${y + a * 0.3}`;
  });
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" fill="none" aria-hidden="true">
      {lines.map((d) => (
        <path key={d} d={d} stroke="#ffffff" strokeOpacity="0.13" strokeWidth="1" />
      ))}
    </svg>
  );
}

export function Hero() {
  const hasPhoto = Boolean(photos['hero']);
  return (
    <section className="on-dark relative overflow-hidden bg-dark-green text-white" aria-label="Introduction">
      <Contours />
      <div className="relative mx-auto max-w-7xl px-4 pt-32 sm:px-6 lg:px-8 lg:pt-40">
        <div className={hasPhoto ? 'grid items-end gap-10 lg:grid-cols-12' : ''}>
          <div className={hasPhoto ? 'lg:col-span-7' : 'max-w-4xl'}>
            <h1
              className="font-display font-bold leading-[0.98] tracking-[-0.035em] text-white"
              style={{ fontSize: 'clamp(2.8rem, 8.4vw, 6.6rem)' }}
            >
              The hills
              <br />
              <mark>deserve better</mark>
              <br />
              than apathy.
            </h1>
            <p className="mt-8 max-w-xl text-pretty text-[1.125rem] leading-relaxed text-white/90">
              SUBA is a youth-led collective in Shillong. We run clean-ups and plantations, and we research the problems behind them: waste, transport, schools. Our work so far is in Ward 16, Mawkhar and partner schools across the city.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/our-work" variant="gold" arrow>See our work</ButtonLink>
              <ButtonLink href="/get-involved" variant="ghost">Get involved</ButtonLink>
            </div>
          </div>
          {hasPhoto && (
            <div className="lg:col-span-5">
              <FieldPhoto id="hero" caption="SUBA volunteers in Shillong" aspect="4/5" priority />
            </div>
          )}
        </div>

        <p className="label-mono mt-16 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-white/40 py-5 text-white/80">
          <span>Shillong, Meghalaya</span>
          <span>25.58° N, 91.89° E</span>
          <span>Working since 2023</span>
        </p>
      </div>
    </section>
  );
}
