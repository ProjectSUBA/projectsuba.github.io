import Link from 'next/link';
import { newsItems } from '@/lib/data';
import { PhotoSlot } from '@/components/ui/SubaImage';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icons';
import { formatDate, newsTone } from '@/lib/ui';

const photoSlots = [
  { label: 'Event photo', sublabel: 'Candid, natural light, no filters', color: '#259745' },
  { label: 'Field update photo', sublabel: 'Before and after, hands, location', color: '#1F8EC8' },
  { label: 'Team photo', sublabel: 'Volunteers and community, doing', color: '#1A5C2E' },
  { label: 'Landscape photo', sublabel: 'Meghalayan setting, unfiltered', color: '#259745' },
];

export function LatestUpdates() {
  // Newest first, so the homepage never leads with an older item.
  const featured = [...newsItems].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);

  return (
    <section className="bg-cream-light py-20 lg:py-28" aria-labelledby="updates-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow mb-4 text-green-ink">Latest from SUBA</span>
            <h2
              id="updates-heading"
              className="text-balance font-display font-semibold leading-[1.15] tracking-[-0.01em] text-dark-green"
              style={{ fontSize: 'clamp(1.75rem, 3.6vw, 2.5rem)' }}
            >
              News, events and <em className="font-medium text-sea-green">field updates.</em>
            </h2>
          </div>
          <Link
            href="/events"
            className="card-lift group inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-dark-green/25 bg-white px-5 py-2.5 text-sm font-medium text-dark-green shadow-[var(--shadow-soft)]"
          >
            All updates
            <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item, i) => {
            const slot = photoSlots[i % photoSlots.length];
            return (
              <Reveal key={item.id} delay={(i % 4) * 80}>
                <article className="card card-lift group flex h-full flex-col overflow-hidden">
                  <PhotoSlot label={slot.label} sublabel={slot.sublabel} aspectRatio="5/3" accentColor={slot.color} />
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <Badge tone={newsTone[item.type]}>{item.type}</Badge>
                      <time dateTime={item.date} className="text-xs text-suba-muted">{formatDate(item.date, 'short')}</time>
                    </div>
                    <h3 className="mb-2 flex-1 font-display text-[0.9375rem] font-semibold leading-snug transition-colors group-hover:text-green-ink">{item.title}</h3>
                    <p className="text-[0.8125rem] leading-relaxed text-suba-muted">{item.description}</p>
                    {item.location && (
                      <div className="mt-3 flex items-center gap-1.5 text-xs text-suba-muted">
                        <Icon name="pin" size={14} />
                        {item.location}
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
