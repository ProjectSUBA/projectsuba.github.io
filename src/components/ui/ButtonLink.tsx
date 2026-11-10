import Link from 'next/link';
import type { ReactNode } from 'react';
import { Icon } from '@/components/ui/Icons';

type Variant = 'primary' | 'blue' | 'gold' | 'outline' | 'ghost';

const variants: Record<Variant, string> = {
  // Solid dark green. For light backgrounds.
  primary: 'bg-dark-green text-white hover:bg-forest',
  // Solid blue, used for research and collaboration actions.
  blue: 'bg-blue-fill text-white hover:bg-[#125c85]',
  // Yellow with dark text. For dark backgrounds and key actions.
  gold: 'btn-primary btn-sheen bg-mikado text-forest',
  // Hairline border. For light backgrounds.
  outline: 'border border-dark-green/35 text-dark-green hover:bg-white',
  // Hairline white border. For dark backgrounds.
  ghost: 'border border-white/40 text-white hover:bg-white/10',
};

/** A link styled as a button. Internal paths use next/link; mailto and http links use a plain anchor. */
export function ButtonLink({
  href,
  variant = 'primary',
  children,
  arrow = false,
  className = '',
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  arrow?: boolean;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <Icon name="arrow" size={16} />}
    </>
  );
  const external = /^(https?:|mailto:|tel:)/.test(href);

  if (external) {
    const isWeb = href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        {...(isWeb ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
