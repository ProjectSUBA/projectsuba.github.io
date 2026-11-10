import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/forms/ContactForm';
import { Reveal } from '@/components/ui/Reveal';
import { CONTACT_EMAIL, LOCATION, SITE_HOST, SOCIAL_LINKS } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with SUBA by email or through the contact form. Shillong, Meghalaya.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader tone="cream" eyebrow="Contact" title={<>Write to us. <em>We reply.</em></>} />

      <Section>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="mb-6 font-display text-2xl font-semibold">Contact details</h2>
            <dl className="space-y-6">
              <div className="border-b border-dark-green/10 pb-5">
                <dt className="label-mono mb-1 text-green-ink">General</dt>
                <dd>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="break-all font-display text-base font-medium text-dark-green underline decoration-dark-green/30 underline-offset-4 hover:decoration-dark-green">
                    {CONTACT_EMAIL}
                  </a>
                  <p className="mt-1 text-[0.8rem] text-suba-muted">For all queries. We aim to reply within a few days.</p>
                </dd>
              </div>
              <div className="border-b border-dark-green/10 pb-5">
                <dt className="label-mono mb-1 text-green-ink">Location</dt>
                <dd>
                  <p className="font-display text-base font-medium text-dark-green">{LOCATION}</p>
                  <p className="mt-1 text-[0.8rem] text-suba-muted">Published from the Khasi Hills.</p>
                </dd>
              </div>
              <div className="border-b border-dark-green/10 pb-5">
                <dt className="label-mono mb-1 text-green-ink">Website</dt>
                <dd>
                  <p className="font-display text-base font-medium text-dark-green">{SITE_HOST}</p>
                </dd>
              </div>
              <div>
                <dt className="label-mono mb-2 text-green-ink">Social</dt>
                <dd>
                  <ul className="flex flex-wrap gap-x-5 gap-y-2">
                    {SOCIAL_LINKS.map((s) => (
                      <li key={s.label}>
                        <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-dark-green underline decoration-dark-green/30 underline-offset-4 hover:decoration-dark-green">
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 text-[0.8rem] text-suba-muted">@projectsuba</p>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={100}>
            <h2 className="mb-6 font-display text-2xl font-semibold">Send a message</h2>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
