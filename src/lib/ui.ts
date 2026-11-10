import type { NewsItem, Publication } from '@/lib/types';

/**
 * Badge colours. Every pair meets WCAG AA contrast (4.5:1 or better):
 * white text on the deeper fills, dark green text on the yellow and orange ones.
 */
export type Tone = 'green' | 'blue' | 'amber' | 'orange' | 'crimson' | 'slate' | 'forest';

export const toneClasses: Record<Tone, string> = {
  green: 'bg-green-ink text-white',
  blue: 'bg-blue-fill text-white',
  amber: 'bg-mikado text-forest',
  orange: 'bg-sunshade text-forest',
  crimson: 'bg-crimson text-white',
  slate: 'bg-suba-muted text-white',
  forest: 'bg-forest text-white',
};

export const categoryTone: Record<Publication['category'], Tone> = {
  'Policy Brief': 'blue',
  'Research Paper': 'forest',
  Report: 'orange',
  Newsletter: 'green',
  'White Paper': 'crimson',
  'Case Study': 'amber',
};

export const newsTone: Record<NewsItem['type'], Tone> = {
  News: 'blue',
  Event: 'orange',
  Announcement: 'forest',
  Update: 'green',
};

export const wingTone = { SUBA: 'forest', Symboh: 'blue', Comma: 'green' } as const;

/** Text-safe (AA contrast) version of a brand accent colour, for small text and numbers on light backgrounds. */
const inkMap: Record<string, string> = {
  '#259745': '#1A6B33',
  '#1F8EC8': '#14688F',
  '#F6A225': '#8A5200',
  '#FEC110': '#8A5200',
  '#1A5C2E': '#1A5C2E',
  '#961416': '#961416',
};
export function inkFor(color: string): string {
  return inkMap[color.toUpperCase()] ?? '#1A5C2E';
}

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

/** True when the publication has full text published on its own page. */
export function hasFullText(pub: Publication): boolean {
  return Boolean(pub.body && pub.body.length > 0);
}

/** True when a download link points to a real file (not a placeholder). */
export function hasDownload(pub: Publication): boolean {
  return Boolean(pub.downloadUrl && pub.downloadUrl !== '#');
}

/** Today's date as YYYY-MM-DD in UTC. Used at build time to split upcoming from past events. */
export function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}
