import type { ReactNode } from 'react';

/**
 * The title band at the top of every interior page, so they all share one look.
 * Put the italic accent phrase inside <em> in the title, for example:
 *   title={<>What we are<br /><em>doing right now.</em></>}
 */
export function PageHeader({
  eyebrow,
  title,
  children,
  tone = 'green',
  actions,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  tone?: 'green' | 'cream';
  actions?: ReactNode;
}) {
  const dark = tone === 'green';
  return (
    <header
      className={`relative overflow-hidden pt-32 pb-14 lg:pt-40 lg:pb-20 ${dark ? 'grain on-dark' : 'root-texture'}`}
      style={{
        background: dark
          ? 'linear-gradient(165deg, #1A5C2E 0%, #0F3D20 100%)'
          : 'linear-gradient(180deg, #FDF8E7 0%, #FAF0C8 100%)',
      }}
    >
      {dark && (
        <div
          className="glow-blob"
          style={{ top: '-5rem', right: '4%', width: '22rem', height: '22rem', background: 'rgba(254,193,16,0.13)' }}
          aria-hidden="true"
        />
      )}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className={`eyebrow mb-5 ${dark ? 'text-white/75' : 'text-green-ink'}`}>{eyebrow}</span>
        <h1
          className={`max-w-4xl font-display text-balance font-semibold leading-[1.08] tracking-[-0.015em] ${
            dark ? 'text-white [&_em]:text-mikado' : 'text-dark-green [&_em]:text-sea-green'
          } [&_em]:font-medium [&_em]:italic`}
          style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4rem)' }}
        >
          {title}
        </h1>
        {children && (
          <p className={`mt-5 max-w-2xl text-pretty text-base leading-relaxed lg:text-lg ${dark ? 'text-white/80' : 'text-suba-muted'}`}>
            {children}
          </p>
        )}
        {actions && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>}
      </div>
    </header>
  );
}
