import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';
import { projects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Our work',
  description: 'SUBA’s four projects in Shillong: the Ward 16 clean-ups, the Mawkhar plantation, an environmental education pilot and a mobility study.',
};

export default function OurWorkPage() {
  return (
    <>
      <PageHeader label="Our work" title="Our work">
        Four projects, all in Shillong so far. Each has its own record: what we did, what we counted and what we found.
      </PageHeader>

      <Section tone="white">
        <ul>
          {projects.map((project, i) => (
            <li key={project.id} className={`grid gap-6 py-10 lg:grid-cols-12 lg:gap-10 ${i > 0 ? 'border-t border-ink/30' : ''}`}>
              <div className="lg:col-span-3">
                <Tag tone={project.wing === 'Symboh' ? 'blue' : 'green'}>{project.wing}</Tag>
                <p className="label-mono mt-4 text-suba-muted">{project.place}</p>
                <p className="label-mono mt-1 text-suba-muted">Since {project.since}</p>
              </div>
              <div className="lg:col-span-6">
                <h2 className="font-display text-3xl font-bold leading-tight">
                  <Link href={`/our-work/${project.id}`} className="hover:underline hover:decoration-2 hover:underline-offset-4">
                    {project.title}
                  </Link>
                </h2>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-suba-muted">{project.description[0]}</p>
                <p className="mt-5">
                  <Link href={`/our-work/${project.id}`} className="font-semibold underline decoration-2 underline-offset-4 hover:bg-mikado">
                    Read the record →
                  </Link>
                </p>
              </div>
              <dl className="lg:col-span-3">
                {project.facts.slice(0, 2).map((fact) => (
                  <div key={fact.label} className="mb-4 flex flex-col">
                    <dt className="label-mono order-2 mt-1 text-suba-muted">{fact.label}</dt>
                    <dd className="order-1 font-display text-3xl font-bold leading-none">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="deep">
        <div className="grid gap-6 lg:grid-cols-12">
          <h2 className="border-t-2 border-ink pt-3 font-display text-2xl font-bold lg:col-span-3">How we count</h2>
          <p className="max-w-2xl text-[1.0625rem] leading-relaxed lg:col-span-9">
            The figures come from SUBA’s own field records and surveys. Each project page says what a number counts and the dates it covers, so a figure for one drive or one group of saplings is never presented as a total for everything.
          </p>
        </div>
      </Section>
    </>
  );
}
