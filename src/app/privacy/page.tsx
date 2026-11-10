import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { CONTACT_EMAIL, FORM_ENDPOINT } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How this website handles your information. Short version: we collect only what you choose to send us.',
};

// This wording follows how the forms actually work. If you connect a form service
// in src/lib/site.ts (FORM_ENDPOINT), the text below changes with it.
const howMessagesArrive = FORM_ENDPOINT
  ? 'The contact form and the Field Letter signup send your message through a third-party form service, which passes it to our inbox. We receive what you wrote and the address to reply to, and the form service handles it under its own privacy policy.'
  : `The contact form and the Field Letter signup do not send anything from this website. They open your own email app with the message already written, addressed to ${CONTACT_EMAIL}, and you send it from there. Nothing leaves your device until you press send.`;

const sections = [
  {
    title: 'What we collect',
    body: [
      'This website does not use cookies, advertising trackers or analytics. We do not know who visits or which pages they read.',
      'We receive personal information only when you send it to us: your name, email address and message when you contact us, or your email address when you join the Field Letter.',
    ],
  },
  { title: 'How your message reaches us', body: [howMessagesArrive] },
  {
    title: 'How we use it',
    body: [
      'To reply to you, to send the Field Letter if you signed up, and to coordinate volunteers who ask to take part. We do not sell your details and we do not share them with other organisations.',
    ],
  },
  {
    title: 'Photographs',
    body: [
      'We ask for consent before publishing photographs in which people can be identified. For photographs of children we ask the school and a parent or guardian first.',
      'If you appear in a photograph on this site and would like it removed, write to us and we will take it down.',
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
    title: 'Your choices',
    body: [`You can ask us to delete anything you have sent us, or to remove you from the Field Letter, at any time by writing to ${CONTACT_EMAIL}.`],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader label="Privacy" title="Privacy">
        The short version: we collect only what you choose to send us, and we use it only to talk to you.
      </PageHeader>
      <Section tone="white">
        <div className="max-w-2xl space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-3 border-t-2 border-ink pt-3 font-display text-2xl font-bold">{section.title}</h2>
              <div className="space-y-3 leading-relaxed text-suba-muted">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
          <p className="label-mono text-suba-muted">Last updated 11 November 2026</p>
        </div>
      </Section>
    </>
  );
}
