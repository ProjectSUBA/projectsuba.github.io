import Image from 'next/image';

interface SubaImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  objectFit?: 'cover' | 'contain';
  caption?: string;
}

/**
 * SubaImage — wrapper around next/image with:
 * - Automatic placeholder color (#FAF0C8 warm cream)
 * - Caption support (Khasi photography credits go here)
 * - Fill mode for hero / card backgrounds
 *
 * PHOTOGRAPHY DIRECTION (from SUBA Brand Book):
 * ✓ People in action — hands in soil, planting, cleaning
 * ✓ Meghalayan landscape — hills, forest, water, living root bridges
 * ✓ Youth at the centre — young people leading, protagonists
 * ✓ Traditional and modern together — Jainsem at a clean-up, Khoh basket
 * ✓ Natural light — soft, diffused, golden, sometimes misty. No filters.
 * ✗ Generic stock imagery
 * ✗ Poverty or suffering framing
 * ✗ Over-saturated or filtered images
 * ✗ Ceremonies or sacred sites without explicit consent
 */
export function SubaImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  objectFit = 'cover',
  caption,
}: SubaImageProps) {
  if (fill) {
    return (
      <figure className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit }}
          priority={priority}
          placeholder="empty"
        />
        {caption && (
          <figcaption
            className="absolute bottom-2 right-3 label-mono text-white/60"
            style={{ fontSize: '0.55rem', letterSpacing: '0.1em', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
          >
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className={className}>
      <Image
        src={src}
        alt={alt}
        width={width || 800}
        height={height || 600}
        style={{ objectFit, width: '100%', height: 'auto' }}
        priority={priority}
        placeholder="empty"
      />
      {caption && (
        <figcaption
          className="mt-1.5 label-mono"
          style={{ fontSize: '0.58rem', letterSpacing: '0.08em', color: '#4A4A40' }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** Tiny deterministic hash so repeated slots vary but stay stable across renders. */
function seed(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) & 0xffff;
  return h;
}

/** Three ridge silhouettes; picked by seed so adjacent slots don't look identical. */
const RIDGES = [
  'M0 150 Q120 96 250 120 Q380 144 500 108 L500 300 L0 300Z',
  'M0 132 Q90 168 210 138 Q330 108 500 150 L500 300 L0 300Z',
  'M0 168 Q140 120 260 150 Q400 186 500 126 L500 300 L0 300Z',
];
const RIDGES_BACK = [
  'M0 176 Q160 132 300 158 Q420 180 500 150 L500 300 L0 300Z',
  'M0 158 Q120 190 250 164 Q380 138 500 176 L500 300 L0 300Z',
  'M0 190 Q120 150 280 176 Q400 196 500 158 L500 300 L0 300Z',
];

/**
 * PhotoSlot — an elegant illustrated landscape placeholder that looks
 * intentional (a misty Khasi-hills scene) rather than a "TODO" box. Drop in a
 * real <SubaImage> when photography is ready — see BRAND_ASSETS.md.
 */
export function PhotoSlot({
  label,
  sublabel,
  aspectRatio = '4/3',
  className = '',
  accentColor = '#259745',
}: {
  label: string;
  sublabel?: string;
  aspectRatio?: string;
  className?: string;
  accentColor?: string;
}) {
  const s = seed(label + accentColor);
  const ridge = RIDGES[s % RIDGES.length];
  const ridgeBack = RIDGES_BACK[(s >> 2) % RIDGES_BACK.length];
  const sunX = 78 + (s % 12); // 78–90%
  const uid = `ps-${s}`;

  return (
    <div
      className={`relative overflow-hidden rounded-md group ${className}`}
      style={{ aspectRatio, boxShadow: 'var(--shadow-card)' }}
      role="img"
      aria-label={`Photo placeholder — ${label}`}
    >
      {/* Illustrated misty-hills scene */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 500 300"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`${uid}-sky`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0F3D20" />
            <stop offset="55%" stopColor="#1A5C2E" />
            <stop offset="100%" stopColor={accentColor} stopOpacity="0.55" />
          </linearGradient>
          <radialGradient id={`${uid}-sun`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FEC110" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#F6A225" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#F6A225" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="500" height="300" fill={`url(#${uid}-sky)`} />
        <circle cx={`${sunX}%`} cy="30%" r="70" fill={`url(#${uid}-sun)`} />
        <circle cx={`${sunX}%`} cy="30%" r="20" fill="#FFF3C8" opacity="0.85" />

        {/* mist band */}
        <rect x="-20" y="150" width="540" height="34" fill="#ffffff" opacity="0.08" />

        {/* ridges */}
        <path d={ridgeBack} fill="#0C3319" opacity="0.35" />
        <path d={ridge} fill="#0C3319" opacity="0.9" />
      </svg>

      {/* Frosted corner tag — reads as a figure label, not a warning box */}
      <div className="absolute left-3 bottom-3 right-3 flex items-end justify-between gap-2">
        <span
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full"
          style={{ background: 'rgba(12,51,25,0.55)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.14)' }}
        >
          <svg width="12" height="12" viewBox="0 0 36 36" fill="none" aria-hidden="true" style={{ opacity: 0.85 }}>
            <rect x="1" y="8" width="34" height="24" rx="4" stroke="white" strokeWidth="2" />
            <circle cx="18" cy="20" r="7" stroke="white" strokeWidth="2" />
            <rect x="10" y="4" width="8" height="6" rx="2" stroke="white" strokeWidth="2" />
          </svg>
          <span className="label-mono text-white/85" style={{ fontSize: '0.52rem', letterSpacing: '0.12em' }}>
            {label.toUpperCase()}
          </span>
        </span>
      </div>

      {/* Sublabel only surfaces on hover, so it doesn't clutter the scene */}
      {sublabel && (
        <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(12,51,25,0.6)', backdropFilter: 'blur(2px)' }}>
          <p className="text-center label-mono text-white/80" style={{ fontSize: '0.6rem', letterSpacing: '0.08em', lineHeight: '1.6' }}>
            {sublabel}
          </p>
        </div>
      )}
    </div>
  );
}
