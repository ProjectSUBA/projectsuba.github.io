/**
 * Real photographs, in one place.
 *
 * Until a photo is added here, its slot on the site shows an honest empty frame
 * that says "Photograph to be added". To add one:
 *   1. Save the image in public/images/ (about 1600px wide, under 300 KB).
 *   2. Add an entry below with the slot's key.
 * Nothing else needs editing: the page picks the photo up automatically.
 *
 * Slot keys:
 *   hero                              The homepage hero (optional, shown beside the headline)
 *   team                              A group photo on the About page
 *   project-ward16-cleanup            Ward 16 clean-ups project page
 *   project-mawkhar-plantation        Mawkhar plantation project page
 *   project-symboh-schools            Environmental education project page
 *   project-shillong-mobility-study   Mobility study project page
 *
 * Example:
 *   'project-ward16-cleanup': {
 *     src: '/images/our-work/ward16-drive-9.jpg',
 *     alt: 'Volunteers sorting waste into bins at the Ward 16 junction',
 *     credit: 'Photo: Name',
 *     width: 1600,
 *     height: 1067,
 *   },
 */
export interface Photo {
  src: string;
  /** Describe what is in the photo, for people who cannot see it. */
  alt: string;
  /** The photographer, for example "Photo: Name". The brand book asks for credits. */
  credit: string;
  width: number;
  height: number;
}

export const photos: Record<string, Photo> = {};
