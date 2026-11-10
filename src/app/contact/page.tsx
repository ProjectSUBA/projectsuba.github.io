import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/forms/ContactForm';
import { CONTACT_EMAIL, LOCATION, SITE_HOST, SOCIAL_LINKS } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with SUBA by email or through the contact form. Shillong, Meghalaya.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader label="Contact" title="Write to us">
        One email for anything: volunteering, research, press or a question. We reply by email.
      </PageHeader>

      <Section tone="white">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="label-mono border-t-2 border-ink pt-3">Details</h2>
            <dl>
              <div className="border-b border-ink/25 py-4">
                <dt className="label-mono text-suba-muted">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="break-all font-display text-xl font-bold underline decoration-2 underline-offset-4 hover:bg-mikado">
                    {CONTACT_EMAIL}
                  </a>
                  <p className="mt-1 text-[0.85rem] text-suba-muted">We aim to reply within a few days.</p>
                </dd>
              </div>
              <div className="border-b border-ink/25 py-4">
                <dt className="label-mono text-suba-muted">Based in</dt>
                <dd className="mt-1 font-medium">{LOCATION}</dd>
              </div>
              <div className="border-b border-ink/25 py-4">
                <dt className="label-mono text-suba-muted">Website</dt>
                <dd className="mt-1 font-medium">{SITE_HOST}</dd>
              </div>
              <div className="py-4">
                <dt className="label-mono text-suba-muted">Social</dt>
                <dd className="mt-1">
                  <ul className="flex flex-wrap gap-x-5 gap-y-1">
                    {SOCIAL_LINKS.map((s) => (
                      <li key={s.label}>
                        <a href={s.href} target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4 hover:bg-mikado">{s.label}</a>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-1 text-[0.85rem] text-suba-muted">@projectsuba</p>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <h2 className="label-mono border-t-2 border-ink pt-3">Send a message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
