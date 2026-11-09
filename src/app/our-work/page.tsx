import type { Metadata } from 'next';
import Link from 'next/link';
import { galleryEntries } from '@/lib/data';
import { PhotoSlot } from '@/components/ui/SubaImage';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Photo documentation of SUBA campaigns and field work — before, during, and after. Shillong, Meghalaya.',
};

const wingColors: Record<string, string> = { SUBA: '#1A5C2E', Symboh: '#1F8EC8', Comma: '#259745' };

export default function OurWorkPage() {
  return (
    <>
      <div className="pt-28 pb-16" style={{ backgroundColor: '#1A5C2E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="label-mono text-white/40 block mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}>OUR WORK</span>
          <h1 className="text-white mb-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 600, lineHeight: '1.1' }}>
            Before. During.<br /><span style={{ color: '#FEC110', fontStyle: 'italic' }}>After.</span>
          </h1>
          <p className="text-white/70 max-w-xl" style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', lineHeight: '1.7' }}>
            The before-and-after is part of every SUBA campaign, not optional — it closes the loop.
            Here is the documented record of our field work, drive by drive.
          </p>
        </div>
      </div>

      <section className="py-16 lg:py-20" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {galleryEntries.map((entry, idx) => (
            <article key={entry.id} className={idx > 0 ? 'pt-16 border-t' : ''} style={{ borderColor: 'rgba(26,92,46,0.1)' }}>
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="px-2.5 py-0.5 rounded-sm text-white label-mono"
                      style={{ backgroundColor: wingColors[entry.wing], fontSize: '0.55rem', letterSpacing: '0.15em' }}
                    >
                      {entry.wing.toUpperCase()}
                    </span>
                    <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.78rem', color: '#4A4A40' }}>
                      {new Date(entry.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: '1.5rem', color: '#1A5C2E', fontWeight: 600 }}>
                    {entry.title}
                  </h2>
                  <p className="mt-1" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: '#4A4A40' }}>
                    📍 {entry.location}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex gap-6 flex-shrink-0">
                  {entry.stats.map((s) => (
                    <div key={s.label}>
                      <div style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.5rem', color: wingColors[entry.wing], fontWeight: 700 }}>{s.value}</div>
                      <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.68rem', color: '#4A4A40' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mb-8 max-w-2xl" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', lineHeight: '1.7', color: '#1A1A1A' }}>
                {entry.summary}
              </p>

              {/* Before / During / After triptych */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div>
                  <span className="label-mono block mb-2" style={{ color: '#4A4A40', fontSize: '0.58rem', letterSpacing: '0.15em' }}>BEFORE</span>
                  {/*
                    PHOTO SLOT — replace with:
                    <SubaImage src={`/images/our-work/${entry.id}-before.jpg`} alt={entry.before.caption} width={500} height={375} className="rounded-sm" />
                  */}
                  <PhotoSlot label="Before photo" sublabel={entry.before.caption} aspectRatio="4/3" accentColor="#961416" className="rounded-sm" />
                </div>
                <div>
                  <span className="label-mono block mb-2" style={{ color: '#4A4A40', fontSize: '0.58rem', letterSpacing: '0.15em' }}>DURING</span>
                  <PhotoSlot label="During photo" sublabel={entry.during.caption} aspectRatio="4/3" accentColor="#F6A225" className="rounded-sm" />
                </div>
                <div>
                  <span className="label-mono block mb-2" style={{ color: '#4A4A40', fontSize: '0.58rem', letterSpacing: '0.15em' }}>AFTER</span>
                  <PhotoSlot label="After photo" sublabel={entry.after.caption} aspectRatio="4/3" accentColor="#259745" className="rounded-sm" />
                </div>
              </div>

              {/* Reflection */}
              {entry.reflection && (
                <div className="p-5 rounded-sm mb-4" style={{ backgroundColor: '#FAF0C8' }}>
                  <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '0.9375rem', fontStyle: 'italic', color: '#1A5C2E', lineHeight: '1.6' }}>
                    "{entry.reflection}"
                  </p>
                </div>
              )}

              {/* Credits */}
              {entry.credits && (
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: '#4A4A40' }}>
                  {entry.credits.join(' · ')}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: '#FAF0C8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4" style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.5rem', color: '#1A5C2E', fontWeight: 600 }}>
            Want to be part of the next one?
          </h2>
          <Link
            href="/get-involved#volunteer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold text-white transition-colors hover:bg-[#259745]"
            style={{ backgroundColor: '#1A5C2E', fontFamily: 'var(--font-inter)' }}
          >
            Volunteer with SUBA
          </Link>
        </div>
      </section>
    </>
  );
}
