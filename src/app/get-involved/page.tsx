import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Reveal } from '@/components/ui/Reveal';
import { NewsletterForm } from '@/components/forms/NewsletterForm';
import { mailto } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Get Involved',
  description: 'Volunteer, collaborate or partner with SUBA, Shillong, Meghalaya.',
};

const volunteerLink = mailto(
  'Volunteer application',
  'Hello SUBA,\n\nI would like to volunteer.\n\nName:\nPart of Shillong I am in:\nWhen I am usually free:\nAnything we should know:\n'
);
const collaborateLink = mailto(
  'Collaboration enquiry',
  'Hello Symboh team,\n\nName and organisation:\nArea of expertise:\nWhat I have in mind:\n'
);
const partnerLink = mailto(
  'Partnership enquiry',
  'Hello SUBA,\n\nOrganisation:\nWhat we do:\nWhat we would like to explore together:\n'
);

const expect = [
  'A reply from us by email.',
  'A clear brief before every event: what, when, where and what to bring.',
  'Your name in the credits after the event, if you would like it there.',
  'A follow-up showing what the event achieved.',
];

const collaborators = [
  'Researchers and academics working on Northeast India.',
  'Policy practitioners with domain expertise.',
  'Data scientists and civic technologists.',
  'Educators developing environmental curricula.',
  'Journalists covering Meghalayan ecology and governance.',
  'Community leaders and traditional knowledge holders.',
];

function Dot({ className }: { className: string }) {
  return <span className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${className}`} aria-hidden="true" />;
}

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader eyebrow="Get involved" title={<>Show up. <em>Be part of what comes next.</em></>}>
        SUBA was built together: the name, the logo, the work. Here is how you can join in.
      </PageHeader>

      <Section id="volunteer" tone="cream" labelledBy="volunteer-heading">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow mb-4 text-green-ink">Volunteer</span>
            <h2 id="volunteer-heading" className="mb-4 font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold">Join a drive or plantation</h2>
            <p className="mb-5 text-base leading-[1.75]">
              Clean-up drives, tree plantations, poster-making sessions and awareness campaigns. If you can show up, we have a place for you. Bring gloves and water. We handle the rest.
            </p>
            <p className="mb-6 text-[0.9rem] leading-relaxed text-suba-muted">
              Write to us with your name, the part of Shillong you are in and when you are usually free, and we will tell you about the next event near you.
            </p>
            <ButtonLink href={volunteerLink}>Apply by email</ButtonLink>
          </Reveal>
          <Reveal delay={100}>
            <div className="card p-8">
              <h3 className="mb-5 font-display text-base font-semibold">What to expect</h3>
              <ul className="space-y-4">
                {expect.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Dot className="bg-sea-green" />
                    <span className="text-sm leading-relaxed text-suba-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="collaborate" labelledBy="collaborate-heading">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="card bg-blue-ivy/[0.04] p-8" style={{ borderColor: 'rgba(31,142,200,0.25)' }}>
              <h3 className="mb-5 font-display text-base font-semibold">Who we collaborate with</h3>
              <ul className="space-y-3">
                {collaborators.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Dot className="bg-blue-ivy" />
                    <span className="text-sm leading-relaxed text-suba-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2" delay={100}>
            <span className="eyebrow mb-4 text-blue-ink">Collaborate</span>
            <h2 id="collaborate-heading" className="mb-4 font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold">Research, policy or field work</h2>
            <p className="mb-6 text-base leading-[1.75]">
              If your expertise lines up with ours, whether that is research, policy, education, civic data or community design, write to us. We work with individuals and institutions who are serious and specific.
            </p>
            <ButtonLink href={collaborateLink} variant="blue">Start a conversation</ButtonLink>
          </Reveal>
        </div>
      </Section>

      <Section id="partner" tone="cream" labelledBy="partner-heading">
        <Reveal className="max-w-3xl">
          <span className="eyebrow mb-4 text-green-ink">Partner</span>
          <h2 id="partner-heading" className="mb-4 font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold">Organisations and institutions</h2>
          <p className="mb-5 text-base leading-[1.75]">
            We partner with organisations whose values line up with ours. That means no greenwashing, no extractive industries and no partners who benefit from environmental harm.
          </p>
          <p className="card mb-6 p-5 text-sm leading-relaxed text-suba-muted">
            Partners appear as “supported by” or “in partnership with”. The SUBA logo always comes first, at equal or larger size, and partners may not use it on their own without written permission.
          </p>
          <ButtonLink href={partnerLink}>Partnership enquiry</ButtonLink>
        </Reveal>
      </Section>

      <Section id="subscribe" tone="green" labelledBy="subscribe-heading">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow mb-4 justify-center text-white/75" style={{ display: 'inline-flex' }}>Stay informed</span>
          <h2 id="subscribe-heading" className="mb-3 font-display text-[1.75rem] font-semibold text-white">The SUBA Field Letter</h2>
          <p className="mb-8 leading-relaxed text-white/80">Field notes, research updates and announcements from Shillong.</p>
          <NewsletterForm layout="inline" />
        </div>
      </Section>
    </>
  );
}
