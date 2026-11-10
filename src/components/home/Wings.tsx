import Link from 'next/link';
import { publications } from '@/lib/data';
import { formatDate, hasFullText } from '@/lib/ui';

/**
 * Symboh and Comma side by side. They are deliberately not twins: Symboh is
 * white, ruled and text-led like a research paper; Comma is a solid colour block
 * with big tallies, like a campaign poster.
 */
export function Wings() {
  const recent = publications
    .filter((p) => p.wing === 'Symboh' || p.wing === 'Comma')
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <section className="grid lg:grid-cols-2" aria-label="Our two wings">
      {/* Symboh */}
      <div className="border-t-[10px] border-blue-fill bg-white px-4 py-14 sm:px-8 lg:px-14 lg:py-20">
        <p className="label-mono text-blue-ink">Symboh · policy and research</p>
        <h2 className="mt-5 font-display text-5xl font-bold tracking-[-0.03em]">Symboh</h2>
        <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-suba-muted">
          Our research side. We collect data in the field, write it up as policy briefs and papers, and share it with the people who make decisions.
        </p>
        <h3 className="label-mono mb-3 mt-10 border-b border-ink pb-2 font-mono text-[0.72rem] font-normal tracking-[0.12em]">Recent publications</h3>
        <ul>
          {recent.map((pub) => (
            <li key={pub.id} className="border-b border-ink/20 py-3">
              <span className="label-mono block text-suba-muted">{formatDate(pub.date, 'short')}</span>
              {hasFullText(pub) ? (
                <Link href={`/publications/${pub.slug}`} className="font-display text-[1.05rem] font-semibold leading-snug hover:underline">
                  {pub.title}
                </Link>
              ) : (
                <span className="font-display text-[1.05rem] font-semibold leading-snug">{pub.title}</span>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link href="/symboh" className="font-semibold underline decoration-2 underline-offset-4 hover:bg-mikado">About Symboh →</Link>
        </p>
      </div>

      {/* Comma */}
      <div className="on-dark border-t-[10px] border-green-ink bg-green-ink px-4 py-14 text-white sm:px-8 lg:px-14 lg:py-20">
        <p className="label-mono text-white/85">Comma · circular economy</p>
        <h2 className="mt-5 font-display text-5xl font-bold tracking-[-0.03em] text-white">
          <mark>Comma</mark>
        </h2>
        <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-white/90">
          Our hands-on side. Clean-ups, plantations and plastic recovery, with every drive counted and written up afterwards.
        </p>
        <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-white/50 pt-6">
          <div className="flex flex-col-reverse">
            <dt className="mt-2 text-sm text-white/90">of waste collected in 9 Ward 16 drives</dt>
            <dd className="font-display text-5xl font-bold leading-none tracking-[-0.03em] text-mikado">847 kg</dd>
          </div>
          <div className="flex flex-col-reverse">
            <dt className="mt-2 text-sm text-white/90">saplings planted at Mawkhar</dt>
            <dd className="font-display text-5xl font-bold leading-none tracking-[-0.03em] text-mikado">312</dd>
          </div>
        </dl>
        <p className="mt-10">
          <Link href="/comma" className="font-semibold text-white underline decoration-2 underline-offset-4 hover:bg-mikado hover:text-forest">About Comma →</Link>
        </p>
      </div>
    </section>
  );
}
