import type { ReactNode } from 'react';

type Variant = 'paper' | 'green' | 'symboh' | 'comma';

/**
 * The opening band of an interior page. Each variant has its own personality:
 *   paper   plain, for most pages
 *   green   flat dark green, for the weightier pages
 *   symboh  white and ruled, like a research paper's title block
 *   comma   a solid green block with a big yellow highlight, energetic
 * Wrap the words to highlight in <mark> inside the title.
 */
export function PageHeader({
  label,
  title,
  children,
  variant = 'paper',
  actions,
  meta,
  compact = false,
}: {
  label: string;
  title: ReactNode;
  children?: ReactNode;
  variant?: Variant;
  actions?: ReactNode;
  /** A line of small print under the title, such as place and date. */
  meta?: ReactNode;
  /** A smaller title, for long headings such as publication titles. */
  compact?: boolean;
}) {
  const style = {
    paper: { wrap: 'bg-paper border-b-2 border-ink', label: 'text-suba-muted', text: 'text-ink', intro: 'text-suba-muted' },
    green: { wrap: 'bg-dark-green on-dark', label: 'text-white/80', text: 'text-white', intro: 'text-white/85' },
    symboh: { wrap: 'bg-white border-t-[10px] border-blue-fill border-b-2 border-b-ink', label: 'text-blue-ink', text: 'text-ink', intro: 'text-suba-muted' },
    comma: { wrap: 'bg-green-ink on-dark', label: 'text-white/85', text: 'text-white', intro: 'text-white/90' },
  }[variant];

  return (
    <header className={`${style.wrap} pt-28 pb-12 lg:pt-36 lg:pb-16`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className={`label-mono mb-5 ${style.label}`}>{label}</p>
        <h1
          className={`max-w-4xl font-display font-bold leading-[1.02] tracking-[-0.03em] ${style.text}`}
          style={{ fontSize: compact ? 'clamp(1.9rem, 4.4vw, 3.3rem)' : 'clamp(2.5rem, 7vw, 5rem)' }}
        >
          {title}
        </h1>
        {meta && <p className={`label-mono mt-5 ${style.label}`}>{meta}</p>}
        {children && <p className={`mt-6 max-w-2xl text-pretty text-lg leading-relaxed ${style.intro}`}>{children}</p>}
        {actions && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>}
      </div>
    </header>
  );
}
