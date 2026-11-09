// SUBA Mark: Hill Myna · Sun · Arches · Crown · S-Curve
// Full colour and white-reversed variants

interface SubaLogoProps {
  size?: number;
  variant?: 'full' | 'white' | 'icon-only';
  className?: string;
}

export function SubaLogo({ size = 48, variant = 'full', className = '' }: SubaLogoProps) {
  const isWhite = variant === 'white';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SUBA — Sustainable Urban and Bioregional Action"
      className={className}
    >
      {/* Outer circle boundary */}
      <circle cx="50" cy="50" r="47" fill={isWhite ? "white" : "none"} opacity={isWhite ? 0.08 : 0} />

      {/* Yellow arc — sun / hope / top arch */}
      <path
        d="M 18 42 Q 30 10 52 14 Q 70 18 78 34"
        stroke={isWhite ? "white" : "#FEC110"}
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />

      {/* Sun orb above the myna */}
      <circle
        cx="62"
        cy="27"
        r="6"
        fill={isWhite ? "white" : "#F6A225"}
      />
      {/* Monolith crown on sun */}
      <rect x="59" y="20" width="2" height="5" rx="1" fill={isWhite ? "#ccc" : "#1A5C2E"} />
      <rect x="63" y="18" width="2" height="7" rx="1" fill={isWhite ? "#ccc" : "#1A5C2E"} />
      <rect x="67" y="21" width="2" height="4" rx="1" fill={isWhite ? "#ccc" : "#1A5C2E"} />

      {/* Blue wing / body of Hill Myna */}
      <path
        d="M 20 58 Q 28 40 52 38 Q 70 38 78 55 Q 68 62 52 58 Q 36 56 20 58 Z"
        fill={isWhite ? "white" : "#1F8EC8"}
        opacity="0.92"
      />

      {/* Green lower sweep — S curve / hills */}
      <path
        d="M 15 62 Q 25 50 45 56 Q 60 62 75 54 Q 82 68 70 76 Q 52 84 32 76 Q 18 70 15 62 Z"
        fill={isWhite ? "white" : "#259745"}
        opacity={isWhite ? 0.85 : 1}
      />

      {/* Dark green outer arc — ground / depth */}
      <path
        d="M 12 55 Q 14 82 50 88 Q 82 82 88 55"
        stroke={isWhite ? "white" : "#1A5C2E"}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />

      {/* Myna head / beak detail */}
      <ellipse
        cx="80"
        cy="44"
        rx="6"
        ry="4"
        fill={isWhite ? "white" : "#1F8EC8"}
        transform="rotate(-20 80 44)"
      />
      <path
        d="M 83 40 L 90 36 L 88 42 Z"
        fill={isWhite ? "white" : "#FEC110"}
      />
    </svg>
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
