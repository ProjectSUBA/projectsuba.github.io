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
  /**
   * What the page on this site contains. 'summary' means the page summarises a longer
   * document (visitors are offered a way to request it); 'full' means the page is the
   * whole piece. Leave out if there is no page yet.
   */
  kind?: 'summary' | 'full';
  /** Link to a real, hosted PDF, for example '/documents/report.pdf'. Leave out if there is no PDF yet. */
  downloadUrl?: string;
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

/** One number with an honest definition: what it counts and the dates it covers. */
export interface ProjectFact {
  label: string;
  value: string;
  note: string;
}

export interface Project {
  /** Becomes the page address: /our-work/<id> */
  id: string;
  title: string;
  wing: 'Symboh' | 'Comma';
  place: string;
  since: string;
  status: 'Active' | 'Planned' | 'Completed';
  /** One sentence, shown in lists. */
  summary: string;
  /** Paragraphs for the project page. */
  description: string[];
  facts: ProjectFact[];
  /** Slugs of related publications. */
  publicationSlugs?: string[];
}

export interface Programme {
  id: string;
  title: string;
  status: 'Active' | 'Planned' | 'Completed';
  since?: string;
  metric: string;
  context: string;
  description: string;
  /** If the programme has its own project page. */
  projectId?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  type: 'News' | 'Event' | 'Announcement' | 'Update';
  /** ISO date, for example '2025-08-15' */
  date: string;
  description: string;
  location?: string;
  /** Project id, if this update belongs to one. */
  project?: string;
}

/** A dated record from the field: before, during and after, per the SUBA brand book. */
export interface FieldEntry {
  id: string;
  /** Project id this entry belongs to. */
  project: string;
  title: string;
  date: string;
  location: string;
  summary: string;
  stats: { label: string; value: string }[];
  before: string;
  during: string;
  after: string;
  reflection?: string;
  credits?: string[];
}

export interface ValueItem {
  trait: string;
  description: string;
}

export interface LedgerItem {
  value: string;
  label: string;
  /** What the number counts, and the dates it covers. */
  note: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  /** One or two sentences. */
  bio?: string;
  /** Path to a photo, for example '/images/team/name.jpg'. */
  photo?: string;
}
