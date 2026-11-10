import type { ReactNode } from 'react';

type SectionTone = 'paper' | 'deep' | 'white' | 'green' | 'yellow';

const toneBg: Record<SectionTone, string> = {
  paper: 'bg-paper',
  deep: 'bg-paper-deep',
  white: 'bg-white',
  green: 'bg-dark-green text-white on-dark',
  yellow: 'bg-mikado text-forest',
};

/** A full-width section with the standard vertical rhythm and content width. */
export function Section({
  tone = 'paper',
  id,
  className = '',
  children,
  labelledBy,
}: {
  tone?: SectionTone;
  id?: string;
  className?: string;
  children: ReactNode;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${toneBg[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">{children}</div>
    </section>
  );
}

/**
 * The top of a section: a heavy rule, a small label on the left and an optional
 * note or link on the right, like a newspaper section head. The heading goes below.
 */
export function SectionHead({
  label,
  aside,
  title,
  id,
  dark = false,
  children,
}: {
  label: string;
  aside?: ReactNode;
  title?: ReactNode;
  id?: string;
  dark?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="mb-10">
      <div className={`flex items-baseline justify-between gap-4 border-t-2 pt-3 ${dark ? 'border-white/80' : 'border-ink'}`}>
        <span className="label-mono">{label}</span>
        {aside && <span className="text-sm">{aside}</span>}
      </div>
      {title && (
        <h2
          id={id}
          className={`mt-6 max-w-3xl font-display font-bold leading-[1.08] ${dark ? 'text-white' : 'text-ink'}`}
          style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)' }}
        >
          {title}
        </h2>
      )}
      {children && <p className={`mt-4 max-w-2xl text-pretty text-[1.0625rem] leading-relaxed ${dark ? 'text-white/85' : 'text-suba-muted'}`}>{children}</p>}
    </div>
  );
}
