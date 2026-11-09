import Link from 'next/link';
import { newsItems } from '@/lib/data';
import { PhotoSlot } from '@/components/ui/SubaImage';
import { Reveal } from '@/components/ui/Reveal';

const typeColors: Record<string,string> = { News:'#1F8EC8', Event:'#F6A225', Announcement:'#1A5C2E', Update:'#259745' };
const photoSlots = [
  { label: 'Event photo', sublabel: 'Candid · natural light · no filters', color: '#259745' },
  { label: 'Field update photo', sublabel: 'Before/after · hands · location', color: '#1F8EC8' },
  { label: 'Team photo', sublabel: 'Volunteers · community · doing', color: '#1A5C2E' },
  { label: 'Landscape / site photo', sublabel: 'Meghalayan setting · unfiltered', color: '#259745' },
];

export function LatestUpdates() {
  const featured = newsItems.slice(0, 4);
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#FDF8E7' }} aria-labelledby="updates-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="eyebrow mb-4" style={{ color: '#259745' }}>06 · Latest from SUBA</span>
            <h2 id="updates-heading" className="text-balance" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(1.85rem, 4vw, 2.6rem)', color: '#1A5C2E', fontWeight: 600, lineHeight: '1.15', letterSpacing: '-0.01em' }}>
              News, events &amp;<br /><span style={{ fontStyle: 'italic', color: '#259745' }}>field updates.</span>
            </h2>
          </div>
          <Link href="/events" className="inline-flex items-center gap-2 text-sm font-medium group flex-shrink-0 px-5 py-2.5 rounded-full card-lift" style={{ color: '#1A5C2E', fontFamily: 'var(--font-inter)', border: '1px solid rgba(26,92,46,0.25)', backgroundColor: 'white', boxShadow: 'var(--shadow-soft)' }}>
            All updates
            <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 5l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featured.map((item, i) => {
            const formatted = new Date(item.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' });
            const slot = photoSlots[i];
            return (
              <Reveal key={item.id} delay={(i % 4) * 80}>
                <article className="group bg-white rounded-xl flex flex-col overflow-hidden h-full card-lift" style={{ border: '1px solid rgba(26,92,46,0.1)', boxShadow: 'var(--shadow-soft)' }}>
                  <PhotoSlot
                    label={slot.label}
                    sublabel={slot.sublabel}
                    aspectRatio="5/3"
                    accentColor={slot.color}
                  />
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: typeColors[item.type] || '#259745', fontFamily: 'var(--font-jetbrains)', fontSize: '0.55rem', letterSpacing: '0.08em' }}>{item.type.toUpperCase()}</span>
                      <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', color: '#4A4A40' }}>{formatted}</span>
                    </div>
                    <h3 className="mb-2 flex-1 group-hover:text-[#259745] transition-colors" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: '0.9375rem', color: '#1A5C2E', fontWeight: 600, lineHeight: '1.35' }}>{item.title}</h3>
                    <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', lineHeight: '1.6', color: '#4A4A40' }}>{item.description}</p>
                    {item.location && (
                      <div className="flex items-center gap-1.5 mt-3">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M6 1C4.067 1 2.5 2.567 2.5 4.5c0 2.5 3.5 6.5 3.5 6.5s3.5-4 3.5-6.5C9.5 2.567 7.933 1 6 1zm0 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="#4A4A40" opacity="0.5" />
                        </svg>
                        <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', color: '#4A4A40' }}>{item.location}</span>
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
