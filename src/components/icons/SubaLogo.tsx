import Image from 'next/image';

// Official SUBA mark — flying bird formed from yellow/blue/green sweeps with an
// orange sun over the Khasi monoliths. Full colour on light backgrounds; a clean
// white knockout (via CSS filter) on dark backgrounds so it always reads.
// Source files: public/logos/suba-logo-new.svg (+ .png).

interface SubaLogoProps {
  size?: number;
  variant?: 'full' | 'white' | 'icon-only';
  className?: string;
}

// The artwork's viewBox is 373.5 × 367.5 (very nearly square).
const RATIO = 367.5 / 373.5;

export function SubaLogo({ size = 48, variant = 'full', className = '' }: SubaLogoProps) {
  const isWhite = variant === 'white';
  return (
    <Image
      src="/logos/suba-logo-new.svg"
      alt="SUBA — Sustainable Urban and Bioregional Action"
      width={size}
      height={Math.round(size * RATIO)}
      className={className}
      style={isWhite ? { filter: 'brightness(0) invert(1)' } : undefined}
      priority={false}
    />
  );
}

export function SubaWordmark({ className = '', dark = false }: { className?: string; dark?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <SubaLogo size={40} variant={dark ? 'full' : 'white'} />
      <div>
        <div
          className="font-display font-bold tracking-wide leading-none"
          style={{
            fontFamily: 'var(--font-fraunces), Georgia, serif',
            fontSize: '1.25rem',
            color: dark ? '#1A5C2E' : 'white',
            letterSpacing: '0.08em',
          }}
        >
          SUBA
        </div>
        <div
          className="label-mono leading-tight"
          style={{
            color: dark ? '#4A4A40' : 'rgba(255,255,255,0.7)',
            fontSize: '0.5rem',
            letterSpacing: '0.12em',
          }}
        >
          SHILLONG · MEGHALAYA
        </div>
      </div>
    </div>
  );
}
