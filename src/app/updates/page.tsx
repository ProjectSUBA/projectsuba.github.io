import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';
import { NewsletterForm } from '@/components/forms/NewsletterForm';
import { newsItems, projects } from '@/lib/data';
import { formatDate, todayISO } from '@/lib/ui';

export const metadata: Metadata = {
  title: 'Updates',
  description: 'A dated record of what SUBA has done, newest first: field updates, events and announcements from Shillong.',
};

export default function UpdatesPage() {
  // Split by date, not by label. The site rebuilds every day (see the deploy
  // workflow), so an event moves out of "upcoming" the day after it happens.
  const today = todayISO();
  const upcoming = newsItems.filter((n) => n.type === 'Event' && n.date >= today).sort((a, b) => a.date.localeCompare(b.date));
  const log = newsItems.filter((n) => !(n.type === 'Event' && n.date >= today)).sort((a, b) => b.date.localeCompare(a.date));

  const years = Array.from(new Set(log.map((n) => n.date.slice(0, 4)))).sort((a, b) => b.localeCompare(a));
  const projectTitle = (id?: string) => projects.find((p) => p.id === id)?.title;

  return (
    <>
      <PageHeader label="Updates" title="Updates">
        A dated record of what SUBA has done, newest first.
      </PageHeader>

      <Section tone="white" labelledBy="upcoming-heading">
        <h2 id="upcoming-heading" className="mb-6 border-t-2 border-ink pt-3 font-display text-2xl font-bold">Coming up</h2>
        {upcoming.length === 0 ? (
          <div className="grid gap-6 border-2 border-ink p-6 lg:grid-cols-2 lg:items-center lg:p-8">
            <div>
              <p className="font-display text-xl font-bold">No events are scheduled right now.</p>
              <p className="mt-2 leading-relaxed text-suba-muted">New dates go out in the Field Letter first, so join the list if you want to hear about the next drive or plantation.</p>
            </div>
            <NewsletterForm tone="light" />
          </div>
        ) : (
          <ul className="border-t border-ink/30">
            {upcoming.map((item) => (
              <li key={item.id} className="grid gap-1 border-b border-ink/30 py-5 sm:grid-cols-12 sm:gap-6">
                <time dateTime={item.date} className="label-mono pt-1 text-suba-muted sm:col-span-3">{formatDate(item.date)}</time>
                <div className="sm:col-span-9">
                  <h3 className="font-display text-xl font-bold">{item.title}</h3>
                  <p className="mt-1 leading-relaxed text-suba-muted">{item.description}</p>
                  {item.location && <p className="label-mono mt-2 text-suba-muted">{item.location}</p>}
                </div>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section>
        <h2 className="sr-only">Past updates</h2>
        {years.map((year) => (
          <div key={year} className="mb-12 last:mb-0">
            <h3 className="border-t-2 border-ink pt-3 font-display text-4xl font-bold">{year}</h3>
            <ul>
              {log
                .filter((n) => n.date.startsWith(year))
                .map((item) => (
                  <li key={item.id} className="grid gap-2 border-b border-ink/30 py-6 sm:grid-cols-12 sm:gap-6">
                    <div className="sm:col-span-3">
                      <time dateTime={item.date} className="label-mono block text-suba-muted">{formatDate(item.date)}</time>
                      <Tag className="mt-2">{item.type}</Tag>
                    </div>
                    <div className="sm:col-span-9">
                      <h4 className="font-display text-xl font-bold leading-snug">{item.title}</h4>
                      <p className="mt-1 max-w-2xl leading-relaxed text-suba-muted">{item.description}</p>
                      <p className="label-mono mt-3 flex flex-wrap gap-x-4 gap-y-1 text-suba-muted">
                        {item.location && <span>{item.location}</span>}
                        {item.project && (
                          <Link href={`/our-work/${item.project}`} className="underline underline-offset-4 hover:bg-mikado">
                            Project record: {projectTitle(item.project)}
                          </Link>
                        )}
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </Section>
    </>
  );
}
