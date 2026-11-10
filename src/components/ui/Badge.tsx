import type { ReactNode } from 'react';
import { toneClasses, type Tone } from '@/lib/ui';

/** Small uppercase pill. Colour pairs are all AA-contrast safe (see lib/ui.ts). */
export function Badge({
  tone = 'green',
  children,
  className = '',
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-1 font-mono text-[0.72rem] uppercase leading-none tracking-[0.1em] ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
