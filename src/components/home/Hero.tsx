import Link from 'next/link';
import { SubaLogo } from '@/components/icons/SubaLogo';

const heroStats = [
  { value: '847kg', label: 'waste recovered' },
  { value: '340', label: 'students reached' },
  { value: '312', label: 'trees planted' },
  { value: '6', label: 'policy briefs' },
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden grain"
      style={{
        background:
          'radial-gradient(120% 90% at 78% 8%, rgba(254,193,16,0.16) 0%, rgba(254,193,16,0) 42%), linear-gradient(168deg, #0C3319 0%, #124A26 46%, #1A5C2E 100%)',
      }}
      aria-label="SUBA hero"
    >
      {/* ── Atmospheric layered Khasi hills ───────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Warm sun glow, upper right */}
        <div
          className="absolute animate-float"
          style={{
            top: '6%',
            right: '10%',
            width: '340px',
            height: '340px',
            borderRadius: '9999px',
            background: 'radial-gradient(circle, rgba(254,193,16,0.35) 0%, rgba(246,162,37,0.12) 40%, rgba(246,162,37,0) 70%)',
            filter: 'blur(6px)',
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
          className="absolute animate-mist"
          style={{
            bottom: '30%', left: '-10%', width: '120%', height: '90px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)',
            filter: 'blur(24px)',
          }}
        />
        <div
          className="absolute animate-mist"
          style={{
            bottom: '18%', left: '-10%', width: '120%', height: '70px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.14), transparent)',
            filter: 'blur(18px)',
            animationDelay: '-8s',
          }}
        />

        {/* Receding ridge lines — far (misty) to near (deep forest) */}
        <svg className="absolute bottom-0 left-0 right-0 w-full" viewBox="0 0 1440 520" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
          {/* farthest, dissolves into mist */}
          <path d="M0 250 Q220 180 440 215 Q680 255 900 200 Q1150 145 1440 205 L1440 520 L0 520Z" fill="#8FD3A6" opacity="0.10" />
          <path d="M0 300 Q200 235 420 270 Q640 305 880 255 Q1120 205 1440 262 L1440 520 L0 520Z" fill="#4FB374" opacity="0.14" />
          <path d="M0 350 Q240 290 460 322 Q700 358 940 306 Q1180 256 1440 316 L1440 520 L0 520Z" fill="#2E8F4E" opacity="0.30" />
          <path d="M0 402 Q200 350 400 378 Q620 410 860 366 Q1120 318 1440 372 L1440 520 L0 520Z" fill="#155029" opacity="0.7" />
          <path d="M0 452 Q220 414 440 436 Q680 462 920 428 Q1160 396 1440 440 L1440 520 L0 520Z" fill="#0C3319" />
        </svg>

        {/* Fine diagonal monsoon rain (very subtle nod to the wettest place on earth) */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.05 }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="rain" x="0" y="0" width="34" height="56" patternUnits="userSpaceOnUse" patternTransform="rotate(8)">
              <line x1="12" y1="0" x2="9" y2="18" stroke="white" strokeWidth="0.6" />
              <line x1="26" y1="24" x2="23" y2="42" stroke="white" strokeWidth="0.6" />
              <line x1="4" y1="40" x2="1" y2="56" stroke="white" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#rain)" />
        </svg>
      </div>

      {/* ── Content ────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-28 pb-32">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8 hero-in" style={{ animationDelay: '0.05s' }}>
            <span className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)', backdropFilter: 'blur(6px)' }}>
              <SubaLogo size={18} variant="white" />
              <span className="label-mono text-white/70" style={{ fontSize: '0.58rem', letterSpacing: '0.2em' }}>SHILLONG · MEGHALAYA · INDIA</span>
            </span>
          </div>

          <h1 className="text-white mb-7 hero-in text-balance" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(2.75rem, 7.5vw, 6rem)', fontWeight: 600, lineHeight: '1.02', letterSpacing: '-0.02em', animationDelay: '0.15s' }}>
            The hills<br />
            <span style={{ fontStyle: 'italic', fontWeight: 500, background: 'linear-gradient(92deg, #FEC110, #F6A225)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>deserve better</span><br />
            than apathy.
          </h1>

          <p className="text-white/75 mb-10 max-w-xl hero-in text-pretty" style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(1rem, 2vw, 1.1875rem)', lineHeight: '1.75', animationDelay: '0.25s' }}>
            SUBA is a youth-led civic, environmental, research, and community-action
            organisation working across the cultural and ecological fabric of Meghalaya.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 hero-in" style={{ animationDelay: '0.35s' }}>
            <Link href="/get-involved" className="btn-primary btn-sheen inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-md" style={{ backgroundColor: '#FEC110', color: '#0F3D20', fontFamily: 'var(--font-inter)', fontSize: '0.9375rem' }}>
              Get Involved
              <svg width="15" height="15" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 4l4 3-4 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link href="/publications" className="inline-flex items-center justify-center gap-2 px-8 py-4 font-medium rounded-md transition-all duration-200 hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'white', fontFamily: 'var(--font-inter)', fontSize: '0.9375rem' }}>
              Read Our Research
            </Link>
          </div>

          {/* Stat bar */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-10 gap-y-6 mt-16 pt-9 border-t border-white/12 hero-in" style={{ animationDelay: '0.45s' }}>
            {heroStats.map((stat) => (
              <div key={stat.label} className="relative">
                <div className="font-semibold flex items-baseline gap-0.5" style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.75rem', color: '#FEC110', lineHeight: '1' }}>{stat.value}</div>
                <div className="text-white/50 mt-1.5 label-mono" style={{ fontSize: '0.6rem', letterSpacing: '0.12em' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 opacity-50" aria-hidden="true">
        <span className="label-mono text-white/80" style={{ fontSize: '0.5rem', letterSpacing: '0.25em' }}>SCROLL</span>
        <div className="w-px h-10 bg-white/25 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white/90 animate-scroll-cue" />
        </div>
      </div>
    </section>
  );
}
