import type { ReactNode } from 'react';

type TagTone = 'ink' | 'blue' | 'green' | 'stamp';

const tones: Record<TagTone, string> = {
  ink: 'border-ink/50 text-ink',
  blue: 'border-blue-ink/60 text-blue-ink',
  green: 'border-green-ink/60 text-green-ink',
  // A rubber-stamp look, used rarely (for example "Archive")
  stamp: 'border-crimson/70 text-crimson -rotate-2',
};

/** A small outlined mono label. Square corners, no fill: it reads as a stamp, not a pill. */
export function Tag({ tone = 'ink', children, className = '' }: { tone?: TagTone; children: ReactNode; className?: string }) {
  return (
    <span className={`label-mono inline-block border px-2 py-0.5 leading-snug ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}
