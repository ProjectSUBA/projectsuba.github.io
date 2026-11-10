import Image from 'next/image';

// Official SUBA mark: a flying bird formed from yellow, blue and green sweeps,
// with an orange sun over the Khasi monoliths. Full colour on light backgrounds;
// a white knockout (via CSS filter) on dark ones so it always reads.
// Source files: public/logos/suba-logo.svg and suba-logo.png.

interface SubaLogoProps {
  size?: number;
  variant?: 'full' | 'white';
  className?: string;
  /** Use an empty string when the logo sits next to the organisation name as decoration. */
  alt?: string;
}

// The artwork's viewBox is 373.5 x 367.5, very nearly square.
const RATIO = 367.5 / 373.5;

export function SubaLogo({ size = 48, variant = 'full', className = '', alt = 'SUBA' }: SubaLogoProps) {
  return (
    <Image
      src="/logos/suba-logo.svg"
      alt={alt}
      width={size}
      height={Math.round(size * RATIO)}
      className={className}
      style={variant === 'white' ? { filter: 'brightness(0) invert(1)' } : undefined}
    />
  );
}
