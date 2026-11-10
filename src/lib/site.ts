/**
 * Single source of truth for site-wide settings.
 * Change a value here and the whole site follows.
 */

/**
 * The site's public address. When you get your own domain, change this ONE line
 * (for example 'https://projectsuba.in') and redeploy. The sitemap, robots file,
 * canonical links and social-share URLs all follow from here. Also add the domain
 * in the repo under Settings, Pages, Custom domain.
 */
export const SITE_URL = 'https://projectsuba.github.io';

export const SITE_NAME = 'SUBA';
export const SITE_FULL_NAME = 'Sustainable Urban and Bioregional Action Project';

/** The inbox every contact link and form falls back to. */
export const CONTACT_EMAIL = 'projectsuba2024@gmail.com';

/** Shown on the site as the place SUBA is based. */
export const LOCATION = 'Shillong, Meghalaya, India';

/**
 * SUBA's legal or organisational status, shown on the About page. Leave empty
 * until you have the exact wording. Examples: 'Registered society, reg. no. ...',
 * 'Unregistered youth collective', 'A project of ...'. State the real position.
 */
export const LEGAL_STATUS = '';

export const SOCIAL_LINKS = [
  { label: 'Instagram', short: 'IG', href: 'https://instagram.com/projectsuba' },
  { label: 'X (Twitter)', short: 'X', href: 'https://twitter.com/projectsuba' },
  { label: 'LinkedIn', short: 'LI', href: 'https://linkedin.com/company/projectsuba' },
] as const;

/**
 * Where the contact and newsletter forms send their data.
 *
 * Leave empty to use the built-in fallback: the form opens the visitor's email
 * app with everything pre-filled, addressed to CONTACT_EMAIL. That works with no
 * account and no cost, but only for people with an email app set up.
 *
 * For one-click submissions, create a free Formspree form (formspree.io) and paste
 * its URL here, for example 'https://formspree.io/f/abcdwxyz'. Submissions then
 * arrive in your inbox with no email app needed on the visitor's side.
 */
export const FORM_ENDPOINT = '';

/** The host part of SITE_URL, for display (for example "projectsuba.github.io"). */
export const SITE_HOST = new URL(SITE_URL).host;

/** Build a mailto: link with a safely encoded subject and optional body. */
export function mailto(subject: string, body?: string): string {
  const params = [`subject=${encodeURIComponent(subject)}`];
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${CONTACT_EMAIL}?${params.join('&')}`;
}
