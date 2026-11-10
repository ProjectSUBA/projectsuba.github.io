import type { ReactNode } from 'react';
import { Reveal } from '@/components/ui/Reveal';

type SectionTone = 'white' | 'cream' | 'cream-light' | 'green';

const toneBg: Record<SectionTone, string> = {
  white: 'bg-white',
  cream: 'bg-cream',
  'cream-light': 'bg-cream-light',
  green: 'bg-dark-green on-dark',
};

/** A full-width page section with the standard vertical rhythm and content width. */
export function Section({
  tone = 'white',
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
    <section id={id} aria-labelledby={labelledBy} className={`relative py-16 lg:py-24 ${toneBg[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

/** Eyebrow, heading and optional intro for a section. Wrap the accent phrase in <em>. */
export function SectionHeading({
  eyebrow,
  title,
  id,
  children,
  align = 'left',
  dark = false,
  className = '',
}: {
  eyebrow?: string;
  title: ReactNode;
  id?: string;
  children?: ReactNode;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}) {
  const center = align === 'center';
  return (
    <Reveal className={`mb-10 lg:mb-14 ${center ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      {eyebrow && (
        <span className={`eyebrow mb-4 ${dark ? 'text-white/75' : 'text-green-ink'}`}>{eyebrow}</span>
      )}
      <h2
        id={id}
        className={`font-display text-balance font-semibold leading-[1.15] tracking-[-0.01em] ${
          dark ? 'text-white [&_em]:text-mikado' : 'text-dark-green [&_em]:text-sea-green'
        } [&_em]:font-medium [&_em]:italic`}
        style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.5rem)' }}
      >
        {title}
      </h2>
      {children && (
        <p className={`mt-4 text-pretty text-base leading-relaxed ${dark ? 'text-white/80' : 'text-suba-muted'}`}>{children}</p>
      )}
    </Reveal>
  );
}
