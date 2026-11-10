import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How this website handles your information. Short version: we collect only what you choose to send us.',
};

const sections = [
  {
    title: 'What we collect',
    body: [
      'This website does not use cookies, advertising trackers or analytics. We do not know who visits or which pages they read.',
      'We receive personal information only when you send it to us: your name, email address and message when you use the contact form, or your email address when you join the Field Letter.',
    ],
  },
  {
    title: 'How your message reaches us',
    body: [
      'The contact form and the Field Letter signup deliver your message to SUBA either by opening your own email app with the message ready to send, or through a form service that passes it to our inbox. Either way, we receive what you wrote and the address to reply to.',
    ],
  },
  {
    title: 'How we use it',
    body: [
      'To reply to you, to send the Field Letter if you signed up, and to coordinate volunteers who ask to take part. We do not sell your details and we do not share them with other organisations.',
    ],
  },
  {
    title: 'Fonts, hosting and links',
    body: [
      'The fonts on this site are served from the site itself, so your browser does not contact Google to load them.',
      'The site is hosted on GitHub Pages, which keeps standard server logs (such as IP addresses) under GitHub’s own privacy statement. Links to Instagram, X and LinkedIn take you to those services, which have their own policies.',
    ],
  },
  {
    title: 'Photos and credits',
    body: [
      'If you appear in a photograph on this site and would like it removed, write to us and we will take it down.',
    ],
  },
  {
    title: 'Your choices',
    body: [
      `You can ask us to delete anything you have sent us, or to remove you from the Field Letter, at any time by writing to ${CONTACT_EMAIL}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Privacy" title={<>What we do with <em>your information.</em></>} tone="cream">
        The short version: we collect only what you choose to send us, and we use it only to talk to you.
      </PageHeader>
      <Section>
        <div className="mx-auto max-w-2xl space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-3 font-display text-xl font-semibold">{section.title}</h2>
              <div className="space-y-3 leading-relaxed text-suba-muted">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
          <p className="border-t border-dark-green/10 pt-6 text-sm text-suba-muted">Last updated 10 November 2026.</p>
        </div>
      </Section>
    </>
  );
}
