// Types for SUBA website

export interface Publication {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: 'Research Paper' | 'Policy Brief' | 'White Paper' | 'Newsletter' | 'Report' | 'Case Study';
  author: string;
  summary: string;
  wing?: 'SUBA' | 'Symboh' | 'Comma';
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
  status: 'Active' | 'Upcoming' | 'Completed';
  area: string;
  href: string;
  accentColor: string;
}

export interface NewsItem {
  id: string;
  title: string;
  type: 'News' | 'Event' | 'Announcement' | 'Update';
  date: string;
  description: string;
  location?: string;
  href?: string;
}

export interface Stat {
  value: string;
  label: string;
  context?: string;
  color?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  affiliation?: string;
  category: 'Government' | 'Donor / Partner' | 'Volunteer' | 'Community Member' | 'Educator' | 'Media';
  photoSlot?: boolean;
}

/** A single field-documented campaign — before/during/after, per the SUBA brand book Section 07 */
export interface GalleryEntry {
  id: string;
  title: string;
  date: string;
  location: string;
  wing: 'SUBA' | 'Symboh' | 'Comma';
  summary: string;
  stats: { label: string; value: string }[];
  before: { caption: string };
  during: { caption: string };
  after: { caption: string };
  reflection?: string;
  credits?: string[];
}
