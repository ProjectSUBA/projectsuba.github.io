import Link from 'next/link';
import { Section, SectionHead } from '@/components/ui/Section';
import { newsItems } from '@/lib/data';
import { formatDate } from '@/lib/ui';

/** The three newest entries from the updates log. */
export function FieldLog() {
  const latest = [...newsItems].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <Section tone="paper" labelledBy="log-heading">
      <SectionHead
        label="Updates"
        aside={<Link href="/updates" className="underline underline-offset-4 hover:bg-mikado">All updates →</Link>}
        title="Recent updates"
        id="log-heading"
      />
      <ol className="border-t border-ink/30">
        {latest.map((item) => (
          <li key={item.id} className="grid gap-1 border-b border-ink/30 py-5 sm:grid-cols-12 sm:gap-6">
            <time dateTime={item.date} className="label-mono pt-1 text-suba-muted sm:col-span-3">
              {formatDate(item.date)}
            </time>
            <div className="sm:col-span-9">
              <h3 className="font-display text-xl font-bold leading-snug">{item.title}</h3>
              <p className="mt-1 max-w-2xl text-[0.975rem] leading-relaxed text-suba-muted">{item.description}</p>
              {item.location && <p className="label-mono mt-2 text-suba-muted">{item.location}</p>}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
