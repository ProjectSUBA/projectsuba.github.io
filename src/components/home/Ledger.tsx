import Link from 'next/link';
import { Section, SectionHead } from '@/components/ui/Section';
import { ledger } from '@/lib/data';

/**
 * The headline numbers, laid out like a ledger. Each one states what it counts
 * and the dates it covers, and links to the project record behind it.
 */
export function Ledger() {
  return (
    <Section tone="deep" labelledBy="ledger-heading">
      <SectionHead label="Our numbers" title="What we have counted so far" id="ledger-heading">
        Every figure says what it counts and when it was counted. Each links to the project it comes from.
      </SectionHead>
      <dl className="grid gap-y-10 border-t-2 border-ink md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-ink/30">
        {ledger.map((item) => (
          <div key={item.label} className="flex flex-col pt-6 lg:px-6 lg:first:pl-0 lg:last:pr-0">
            {/* The label comes first in the markup (as a definition list requires) but is shown under the number. */}
            <dt className="order-2 mt-3 text-lg font-semibold">{item.label}</dt>
            <dd
              className="order-1 font-display font-bold leading-none tracking-[-0.03em] text-ink"
              style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}
            >
              {item.value}
            </dd>
            <dd className="order-3 mt-2 text-[0.925rem] leading-relaxed text-suba-muted">{item.note}</dd>
            <dd className="order-4 mt-3">
              <Link href={item.href} className="text-sm font-semibold underline underline-offset-4 hover:bg-mikado">
                The record →
              </Link>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
