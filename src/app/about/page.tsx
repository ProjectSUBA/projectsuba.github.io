import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { FieldPhoto } from '@/components/ui/FieldPhoto';
import { photos } from '@/lib/photos';
import { team, values } from '@/lib/data';
import { CONTACT_EMAIL, LEGAL_STATUS, LOCATION } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About SUBA',
  description:
    'SUBA is a youth-led collective in Shillong, Meghalaya, working on environmental action, research and civic engagement.',
};

const facts = [
  { label: 'Founded', value: '2023' },
  { label: 'Based in', value: LOCATION },
  { label: 'Type', value: 'Youth-led collective' },
  { label: 'Wings', value: 'Comma and Symboh' },
  ...(LEGAL_STATUS ? [{ label: 'Status', value: LEGAL_STATUS }] : []),
];

export default function AboutPage() {
  return (
    <>
      <PageHeader label="About" title="About SUBA">
        A youth-led collective in Shillong working on environmental action, research and civic engagement.
      </PageHeader>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <h2 className="mb-5 font-display text-3xl font-bold">What the name means</h2>
            <div className="space-y-5 text-[1.0625rem] leading-[1.75]">
              <p>
                SUBA reads in English as Sustainable Urban and Bioregional Action. But <em>suba</em> is also a Khasi word, and that is what made the name feel right.
              </p>
              <p>
                In everyday Khasi, suba speaks of what is clean, pure and good. It sits beside <em>khuid</em>, clean, the way people say <em>khuid and suba</em> together. To call someone suba is to say they are good.
              </p>
              <p>
                The team weighed other names first, among them <em>Khuid</em>, the Khasi word for clean. SUBA held both the work and the value in a single word, so it stayed. In English it names the work. In Khasi it names the value underneath.
              </p>
            </div>

            <h2 className="mb-5 mt-14 font-display text-3xl font-bold">How we started</h2>
            <div className="space-y-5 text-[1.0625rem] leading-[1.75]">
              <p>
                SUBA began as a conversation among a small group of people in Shillong who thought the hills deserved better than apathy. The first clean-up drives had four people. Within a year they had grown to about forty. At the first plantation, many of the saplings went in the ground with people who had never planted a tree before.
              </p>
              <p>
                The work came first and the description came afterwards. Like the living root bridges of the Khasi Hills, SUBA was made together, and it is still growing.
              </p>
            </div>

            <h2 className="mb-5 mt-14 font-display text-3xl font-bold">Where we work</h2>
            <p className="text-[1.0625rem] leading-[1.75]">
              Most of our work so far is in Shillong: the Ward 16 clean-ups, the Mawkhar plantation, partner schools and a twelve-ward mobility survey. We write about the wider Khasi Hills, but we would rather show you what we have done than describe what we hope to do. Each project has its own page under <Link href="/our-work" className="font-semibold underline underline-offset-4 hover:bg-mikado">Our work</Link>.
            </p>

            <h2 className="mb-5 mt-14 font-display text-3xl font-bold">What we try to hold to</h2>
            <dl className="border-t border-ink/30">
              {values.map((item) => (
                <div key={item.trait} className="grid gap-1 border-b border-ink/30 py-4 sm:grid-cols-12 sm:gap-6">
                  <dt className="font-display text-lg font-bold sm:col-span-4">{item.trait}</dt>
                  <dd className="text-suba-muted sm:col-span-8">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <h2 className="label-mono border-t-2 border-ink pt-3">At a glance</h2>
              <dl>
                {facts.map((item) => (
                  <div key={item.label} className="border-b border-ink/25 py-3">
                    <dt className="label-mono text-suba-muted">{item.label}</dt>
                    <dd className="mt-0.5 font-medium">{item.value}</dd>
                  </div>
                ))}
                <div className="border-b border-ink/25 py-3">
                  <dt className="label-mono text-suba-muted">Contact</dt>
                  <dd className="mt-0.5 break-all font-medium">
                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4 hover:bg-mikado">{CONTACT_EMAIL}</a>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Section>

      {team.length > 0 && (
        <Section tone="white" labelledBy="team-heading">
          <h2 id="team-heading" className="mb-8 border-t-2 border-ink pt-3 font-display text-3xl font-bold">The people behind SUBA</h2>
          {photos['team'] && <FieldPhoto id="team" caption="The SUBA team" aspect="16/9" className="mb-10" />}
          <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <li key={member.name}>
                {member.photo && (
                  <div className="relative mb-4 aspect-[4/5] overflow-hidden bg-paper-deep">
                    <Image src={member.photo} alt={member.name} fill sizes="(min-width: 1024px) 33vw, 100vw" style={{ objectFit: 'cover' }} />
                  </div>
                )}
                <h3 className="font-display text-xl font-bold">{member.name}</h3>
                <p className="label-mono mt-1 text-suba-muted">{member.role}</p>
                {member.bio && <p className="mt-2 text-[0.95rem] leading-relaxed text-suba-muted">{member.bio}</p>}
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section tone="green">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <h2 className="font-display text-3xl font-bold text-white">Want to take part?</h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/get-involved" variant="gold" arrow>Get involved</ButtonLink>
            <ButtonLink href="/our-work" variant="ghost">See our work</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
