import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icons';
import { NewsletterForm } from '@/components/forms/NewsletterForm';
import { newsItems } from '@/lib/data';
import { formatDate, newsTone, todayISO } from '@/lib/ui';

export const metadata: Metadata = {
  title: 'Events and Updates',
  description: 'News, events and field updates from SUBA, Shillong, Meghalaya.',
};

export default function EventsPage() {
  // Split by date, not by label. The site rebuilds every day (see the deploy
  // workflow), so an event moves out of "upcoming" the day after it happens.
  const today = todayISO();
  const isUpcoming = (n: (typeof newsItems)[number]) => n.type === 'Event' && n.date >= today;
  const upcoming = newsItems.filter(isUpcoming).sort((a, b) => a.date.localeCompare(b.date));
  const earlier = newsItems.filter((n) => !isUpcoming(n)).sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHeader tone="cream" eyebrow="Events and updates" title={<>What is happening <em>in Shillong.</em></>} />

      <Section labelledBy="upcoming-heading">
        <h2 id="upcoming-heading" className="mb-8 font-display text-2xl font-semibold">Upcoming events</h2>
        {upcoming.length === 0 ? (
          <div className="on-dark grid items-center gap-8 rounded-2xl bg-dark-green p-8 lg:grid-cols-2 lg:p-10">
            <div>
              <h3 className="mb-2 font-display text-xl font-semibold text-white">Nothing is scheduled right now</h3>
              <p className="leading-relaxed text-white/80">
                New dates are announced in the Field Letter first. Join the list and you will hear about the next drive or plantation before anyone else.
              </p>
            </div>
            <NewsletterForm />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((item) => (
              <Reveal key={item.id}>
                <div className="card h-full bg-cream-light p-6">
                  <Badge tone={newsTone[item.type]} className="mb-4">{item.type}</Badge>
                  <h3 className="mb-2 font-display text-base font-semibold leading-snug">{item.title}</h3>
                  <p className="text-[0.85rem] leading-relaxed text-suba-muted">{item.description}</p>
                  {item.location && (
                    <p className="mt-3 flex items-center gap-1.5 text-xs text-suba-muted"><Icon name="pin" size={14} />{item.location}</p>
                  )}
                  <time dateTime={item.date} className="mt-2 block text-xs font-medium text-suba-text">{formatDate(item.date)}</time>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </Section>

      <Section tone="cream" labelledBy="earlier-heading">
        <h2 id="earlier-heading" className="mb-8 font-display text-2xl font-semibold">Recent updates and past events</h2>
        <ul className="divide-y divide-dark-green/12">
          {earlier.map((item) => (
            <li key={item.id} className="flex flex-col gap-4 py-6 sm:flex-row sm:items-start">
              <div className="flex-shrink-0 sm:w-36">
                <Badge tone={newsTone[item.type]} className="mb-2">{item.type}</Badge>
                <time dateTime={item.date} className="block text-xs text-suba-muted">{formatDate(item.date, 'short')}</time>
              </div>
              <div className="flex-1">
                <h3 className="mb-2 font-display text-base font-semibold leading-snug">{item.title}</h3>
                <p className="text-[0.9rem] leading-relaxed text-suba-muted">{item.description}</p>
                {item.location && (
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-suba-muted"><Icon name="pin" size={14} />{item.location}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
