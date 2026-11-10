import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'gold' | 'outline' | 'ghost';

const variants: Record<Variant, string> = {
  // Solid dark green. For paper backgrounds.
  primary: 'border-2 border-forest bg-forest text-white hover:bg-ink hover:border-ink',
  // Yellow with dark text. For dark backgrounds.
  gold: 'border-2 border-mikado bg-mikado text-forest hover:bg-white hover:border-white',
  // Heavy outline. For paper backgrounds.
  outline: 'border-2 border-ink text-ink hover:bg-ink hover:text-paper',
  // Heavy white outline. For dark backgrounds.
  ghost: 'border-2 border-white/80 text-white hover:bg-white hover:text-forest',
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
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold transition-colors ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </>
  );
  const external = /^(https?:|mailto:|tel:)/.test(href);

  if (external) {
    const isWeb = href.startsWith('http');
    return (
      <a href={href} className={classes} {...(isWeb ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
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
