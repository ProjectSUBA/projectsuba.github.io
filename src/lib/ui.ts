import type { Publication } from '@/lib/types';

/**
 * Format an ISO date (YYYY-MM-DD). Pinned to UTC so the server build and the
 * visitor's browser always print the same day.
 */
export function formatDate(iso: string, style: 'long' | 'short' = 'long'): string {
  return new Date(iso).toLocaleDateString('en-IN', {
    timeZone: 'UTC',
    year: 'numeric',
    month: style === 'long' ? 'long' : 'short',
    day: 'numeric',
  });
}

/** "May 2025" */
export function monthYear(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', { timeZone: 'UTC', year: 'numeric', month: 'long' });
}

/** True when the publication has full text published on its own page. */
export function hasFullText(pub: Publication): boolean {
  return Boolean(pub.body && pub.body.length > 0);
}

/** True when a download link points to a real file (not a placeholder). */
export function hasDownload(pub: Publication): boolean {
  return Boolean(pub.downloadUrl && pub.downloadUrl !== '#');
}

/**
 * Reading time worked out from the words actually on the page, so it can never
 * promise more than is there. Returns null when there is no page text.
 */
export function readingMinutes(pub: Publication): number | null {
  if (!pub.body) return null;
  const words = pub.body
    .flatMap((s) => [s.heading ?? '', ...s.paragraphs, s.quote?.text ?? ''])
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** Today's date as YYYY-MM-DD in UTC. Used at build time to split upcoming from past events. */
export function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Text colour for each wing, all AA-contrast safe on paper. */
export const wingText = {
  SUBA: 'text-ink',
  Symboh: 'text-blue-ink',
  Comma: 'text-green-ink',
} as const;
