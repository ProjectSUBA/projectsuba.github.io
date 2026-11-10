import { SubaLogo } from '@/components/icons/SubaLogo';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { heroStats } from '@/lib/data';

export function Hero() {
  return (
    <section
      className="grain on-dark relative flex min-h-[100svh] flex-col overflow-hidden"
      style={{
        background:
          'radial-gradient(120% 90% at 78% 8%, rgba(254,193,16,0.16) 0%, rgba(254,193,16,0) 42%), linear-gradient(168deg, #0C3319 0%, #124A26 46%, #1A5C2E 100%)',
      }}
      aria-label="SUBA hero"
    >
      {/* Layered Khasi hills. Decorative. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Warm sun glow, upper right. Gradients only (no blur filter), so it stays cheap to animate. */}
        <div
          className="animate-float absolute"
          style={{
            top: '6%',
            right: '10%',
            width: '340px',
            height: '340px',
            borderRadius: '9999px',
            background: 'radial-gradient(circle, rgba(254,193,16,0.35) 0%, rgba(246,162,37,0.12) 40%, rgba(246,162,37,0) 70%)',
          }}
        />
        <div
          className="absolute"
          style={{
            top: '11%',
            right: '15%',
            width: '120px',
            height: '120px',
            borderRadius: '9999px',
            background: 'radial-gradient(circle, rgba(255,240,200,0.85) 0%, rgba(254,193,16,0.35) 45%, rgba(254,193,16,0) 72%)',
          }}
        />

        {/* Drifting mist bands */}
        <div
          className="animate-mist absolute"
          style={{
            bottom: '30%',
            left: '-10%',
            width: '120%',
            height: '150px',
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0) 68%)',
          }}
        />
        <div
          className="animate-mist absolute"
          style={{
            bottom: '18%',
            left: '-10%',
            width: '120%',
            height: '130px',
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0) 68%)',
            animationDelay: '-8s',
          }}
        />

        {/* Receding ridge lines, far (misty) to near (deep forest) */}
        <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 520" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
          <path d="M0 250 Q220 180 440 215 Q680 255 900 200 Q1150 145 1440 205 L1440 520 L0 520Z" fill="#8FD3A6" opacity="0.10" />
          <path d="M0 300 Q200 235 420 270 Q640 305 880 255 Q1120 205 1440 262 L1440 520 L0 520Z" fill="#4FB374" opacity="0.14" />
          <path d="M0 350 Q240 290 460 322 Q700 358 940 306 Q1180 256 1440 316 L1440 520 L0 520Z" fill="#2E8F4E" opacity="0.30" />
          <path d="M0 402 Q200 350 400 378 Q620 410 860 366 Q1120 318 1440 372 L1440 520 L0 520Z" fill="#155029" opacity="0.7" />
          <path d="M0 452 Q220 414 440 436 Q680 462 920 428 Q1160 396 1440 440 L1440 520 L0 520Z" fill="#0C3319" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-28 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="hero-in mb-8" style={{ animationDelay: '0.05s' }}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
              <SubaLogo size={18} variant="white" alt="" />
              <span className="label-mono text-white/85">Shillong · Meghalaya · India</span>
            </span>
          </div>

          <h1
            className="hero-in mb-7 text-balance font-display font-semibold leading-[1.02] tracking-[-0.02em] text-white"
            style={{ fontSize: 'clamp(2.75rem, 7.5vw, 6rem)', animationDelay: '0.15s' }}
          >
            The hills<br />
            <span
              className="font-medium italic"
              style={{ background: 'linear-gradient(92deg, #FEC110, #F6A225)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}
            >
              deserve better
            </span>
            <br />
            than apathy.
          </h1>

          <p
            className="hero-in mb-10 max-w-xl text-pretty text-white/85"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.1875rem)', lineHeight: 1.75, animationDelay: '0.25s' }}
          >
            SUBA is a youth-led civic, environmental, research and community-action organisation working across the cultural and ecological fabric of Meghalaya.
          </p>

          <div className="hero-in flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '0.35s' }}>
            <ButtonLink href="/get-involved" variant="gold" arrow className="px-8 py-4 text-[0.9375rem]">
              Get Involved
            </ButtonLink>
            <ButtonLink href="/publications" variant="ghost" className="px-8 py-4 text-[0.9375rem]">
              Read Our Research
            </ButtonLink>
          </div>

          <dl className="hero-in mt-16 grid grid-cols-2 gap-x-10 gap-y-6 border-t border-white/15 pt-9 sm:flex sm:flex-wrap" style={{ animationDelay: '0.45s' }}>
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="label-mono mt-2 text-white/75">{stat.label}</dt>
                <dd className="font-display text-[1.75rem] font-semibold leading-none text-mikado">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
