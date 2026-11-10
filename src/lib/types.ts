// Types for the SUBA website

export type Wing = 'SUBA' | 'Symboh' | 'Comma';

export interface Publication {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: 'Research Paper' | 'Policy Brief' | 'White Paper' | 'Newsletter' | 'Report' | 'Case Study';
  author: string;
  summary: string;
  wing?: Wing;
  /** Link to a real, hosted PDF, for example '/documents/report.pdf'. Leave out if there is no PDF yet. */
  downloadUrl?: string;
  readTime?: string;
  tags?: string[];
  /** Full long-form content, as an array of section blocks. Renders on /publications/[slug]. */
  body?: PublicationSection[];
}

export interface PublicationSection {
  heading?: string;
  paragraphs: string[];
  /** Optional pull quote shown after the paragraphs in this section */
  quote?: { text: string; attribution?: string };
}

export interface Initiative {
  id: string;
  title: string;
  tagline: string;
  description: string;
  wing: 'Symboh' | 'Comma';
  status: 'Active' | 'Planned' | 'Completed';
  area: string;
  href: string;
  accentColor: string;
}

export interface Programme {
  id: string;
  title: string;
  status: 'Active' | 'Planned' | 'Completed';
  since?: string;
  metric: string;
  context: string;
  description: string;
  color: string;
}

export interface NewsItem {
  id: string;
  title: string;
  type: 'News' | 'Event' | 'Announcement' | 'Update';
  /** ISO date, for example '2025-08-15' */
  date: string;
  description: string;
  location?: string;
  href?: string;
}

export interface Stat {
  value: string;
  label: string;
  context?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  affiliation?: string;
  category: 'Government' | 'Donor / Partner' | 'Volunteer' | 'Community Member' | 'Educator' | 'Media';
}

/** A single field-documented campaign: before, during and after, per the SUBA brand book */
export interface GalleryEntry {
  id: string;
  title: string;
  date: string;
  location: string;
  wing: Wing;
  summary: string;
  stats: { label: string; value: string }[];
  before: { caption: string };
  during: { caption: string };
  after: { caption: string };
  reflection?: string;
  credits?: string[];
}

export interface ValueItem {
  trait: string;
  description: string;
}
