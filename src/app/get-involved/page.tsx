import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { NewsletterForm } from '@/components/forms/NewsletterForm';
import { mailto } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Get involved',
  description: 'Volunteer, collaborate or partner with SUBA in Shillong, Meghalaya.',
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
  'Researchers and academics working on Northeast India',
  'Policy practitioners with domain expertise',
  'Data scientists and civic technologists',
  'Educators developing environmental curricula',
  'Journalists covering Meghalayan ecology and governance',
  'Community leaders and traditional knowledge holders',
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader label="Get involved" title="Get involved">
        Three ways in. Pick the one that fits and email us. We reply by email.
      </PageHeader>

      <Section tone="white" id="volunteer" labelledBy="volunteer-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="label-mono border-t-2 border-ink pt-3">Volunteer</p>
            <h2 id="volunteer-heading" className="mt-6 font-display text-4xl font-bold">Come to a drive or a plantation</h2>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-[1.75]">
              Clean-ups, plantations, poster-making and awareness campaigns. If you can turn up, we have something for you to do. Bring gloves and water. We handle the rest.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-suba-muted">
              Write with your name, the part of Shillong you are in and when you are usually free, and we will tell you about the next event near you.
            </p>
            <div className="mt-7">
              <ButtonLink href={volunteerLink} arrow>Email to volunteer</ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <h3 className="label-mono border-t-2 border-ink pt-3">What to expect</h3>
            <ol className="mt-2">
              {expect.map((item, i) => (
                <li key={item} className="grid grid-cols-[2rem_1fr] gap-3 border-b border-ink/25 py-3 leading-relaxed">
                  <span className="font-display text-xl font-bold text-green-ink" aria-hidden="true">{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section id="collaborate" labelledBy="collaborate-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:order-2">
            <p className="label-mono border-t-2 border-blue-fill pt-3 text-blue-ink">Collaborate</p>
            <h2 id="collaborate-heading" className="mt-6 font-display text-4xl font-bold">Research, policy or field work</h2>
            <p className="mt-5 text-[1.0625rem] leading-[1.75]">
              If your expertise lines up with ours, whether that is research, policy, education, civic data or community design, write to us. We work with people and institutions who are serious and specific.
            </p>
            <div className="mt-7">
              <ButtonLink href={collaborateLink} arrow>Email about collaborating</ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-7 lg:order-1">
            <h3 className="label-mono border-t-2 border-ink pt-3">Who we work with</h3>
            <ul className="mt-2 grid sm:grid-cols-2 sm:gap-x-8">
              {collaborators.map((item) => (
                <li key={item} className="border-b border-ink/25 py-3 leading-snug">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="deep" id="partner" labelledBy="partner-heading">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="label-mono border-t-2 border-ink pt-3">Partner</p>
            <h2 id="partner-heading" className="mt-6 font-display text-4xl font-bold">Organisations and institutions</h2>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-[1.75]">
              We partner with organisations whose values line up with ours. That means no greenwashing, no extractive industries and no partners who benefit from environmental harm.
            </p>
            <div className="mt-7">
              <ButtonLink href={partnerLink} arrow>Email about a partnership</ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <h3 className="label-mono border-t-2 border-ink pt-3">How partners appear</h3>
            <p className="mt-3 leading-relaxed text-suba-muted">
              Partners are credited as “supported by” or “in partnership with”. The SUBA logo comes first, at equal or larger size, and partners may not use it on their own without written permission.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="green" id="subscribe" labelledBy="subscribe-heading">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <p className="label-mono border-t-2 border-white/80 pt-3">Stay informed</p>
            <h2 id="subscribe-heading" className="mt-6 font-display text-4xl font-bold text-white">The SUBA Field Letter</h2>
            <p className="mt-4 max-w-md leading-relaxed text-white/90">Field notes and research updates from Shillong, and the first word on new events.</p>
          </div>
          <div className="lg:col-span-6">
            <NewsletterForm layout="inline" />
          </div>
        </div>
      </Section>
    </>
  );
}
