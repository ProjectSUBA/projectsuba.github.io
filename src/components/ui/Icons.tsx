import type { ReactNode } from 'react';

// Minimal monoline icon set, so the site uses designed marks instead of emoji.
// Each icon draws on a 24x24 grid and inherits the given stroke colour.

export type IconName =
  | 'leaf'
  | 'community'
  | 'search'
  | 'book'
  | 'recycle'
  | 'document'
  | 'heart'
  | 'flask'
  | 'link'
  | 'mail'
  | 'pin'
  | 'cycle'
  | 'sprout'
  | 'chart'
  | 'arrow'
  | 'download';

const PATHS: Record<IconName, ReactNode> = {
  leaf: (
    <>
      <path d="M5 19C5 11 11 6 19 6c0 8-6 13-14 13Z" />
      <path d="M9.5 15c2-2.6 4.6-4.2 7.2-5.2" />
    </>
  ),
  community: (
    <>
      <circle cx="8" cy="9" r="2.3" />
      <circle cx="16" cy="9" r="2.3" />
      <path d="M3.5 18c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" />
      <path d="M11.5 18c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4.3-4.3" />
    </>
  ),
  book: (
    <>
      <path d="M12 7c-2-1.3-5-1.3-7.5 0V19c2.5-1.3 5.5-1.3 7.5 0 2-1.3 5-1.3 7.5 0V7C17 5.7 14 5.7 12 7Z" />
      <path d="M12 7v12" />
    </>
  ),
  recycle: (
    <>
      <path d="M8 8.2a6 6 0 0 1 9.6 1.3" />
      <path d="M18 6.3V10h-3.6" />
      <path d="M16 15.8a6 6 0 0 1-9.6-1.3" />
      <path d="M6 17.7V14h3.6" />
    </>
  ),
  document: (
    <>
      <path d="M7 4h7l4 4v12H7Z" />
      <path d="M14 4v4h4" />
      <path d="M10 13h5M10 16.5h5" />
    </>
  ),
  heart: <path d="M12 20s-7-4.5-7-9.6A3.6 3.6 0 0 1 12 8a3.6 3.6 0 0 1 7 2.4C19 15.5 12 20 12 20Z" />,
  flask: (
    <>
      <path d="M9.5 3h5" />
      <path d="M10.5 3v6l-5 8.4A1.6 1.6 0 0 0 6.9 20h10.2a1.6 1.6 0 0 0 1.4-2.6L13.5 9V3" />
      <path d="M7.7 14h8.6" />
    </>
  ),
  link: (
    <>
      <path d="M9 15l6-6" />
      <path d="M11.5 6.5l1-1a3.5 3.5 0 0 1 5 5l-1 1" />
      <path d="M12.5 17.5l-1 1a3.5 3.5 0 0 1-5-5l1-1" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M4 8l8 5 8-5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6-5.2 6-10a6 6 0 0 0-12 0c0 4.8 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),
  cycle: (
    <>
      <path d="M4 12a8 8 0 0 1 13.6-5.7L20 8.6" />
      <path d="M20 4.5v4.1h-4.1" />
      <path d="M20 12a8 8 0 0 1-13.6 5.7L4 15.4" />
      <path d="M4 19.5v-4.1h4.1" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 20v-8" />
      <path d="M12 12c0-3.5-2.5-5.5-6-5.5 0 3.5 2.5 5.5 6 5.5Z" />
      <path d="M12 14c0-3 2.2-5 6-5 0 3-2.2 5-6 5Z" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20h16" />
      <path d="M7 20v-6M12 20V6M17 20v-9" />
    </>
  ),
  arrow: <path d="M3 12h16M13 6l6 6-6 6" />,
  download: (
    <>
      <path d="M12 4v11M7.5 11l4.5 4.5 4.5-4.5" />
      <path d="M5 20h14" />
    </>
  ),
};

export function Icon({
  name,
  color = 'currentColor',
  size = 22,
  className,
}: {
  name: IconName;
  color?: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}
