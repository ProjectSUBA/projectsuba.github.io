'use client';

import { useState, type FormEvent } from 'react';
import { submitForm } from '@/lib/forms';
import { CONTACT_EMAIL, FORM_ENDPOINT } from '@/lib/site';

const SUBJECTS = [
  'General enquiry',
  'Volunteer application',
  'Research collaboration',
  'Partnership',
  'Media or press',
  'Logo or brand assets',
  'Other',
];

type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget; // React clears currentTarget after an await
    const form = new FormData(formElement);

    // Honeypot: real visitors never see or fill this field.
    if (String(form.get('_gotcha') ?? '').trim() !== '') {
      setStatus('sent');
      return;
    }

    const name = String(form.get('name') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const subject = String(form.get('subject') ?? SUBJECTS[0]);
    const message = String(form.get('message') ?? '').trim();

    setStatus('sending');
    try {
      const outcome = await submitForm(
        { name, email, subject, message },
        `${subject} (from ${name})`,
        `${message}\n\n---\nName: ${name}\nReply to: ${email}`
      );
      setStatus(outcome);
      if (outcome === 'sent') formElement.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="field-label">Name</label>
          <input id="contact-name" name="name" type="text" required autoComplete="name" className="field" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="contact-email" className="field-label">Email</label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" className="field" placeholder="you@example.com" />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="field-label">What is this about?</label>
        <select id="contact-subject" name="subject" className="field" defaultValue={SUBJECTS[0]}>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="field-label">Message</label>
        <textarea id="contact-message" name="message" required rows={6} className="field resize-y" placeholder="What would you like to talk about?" />
      </div>

      {/* Honeypot field for spam bots. Hidden from people and assistive tech. */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-gotcha">Leave this empty</label>
        <input id="contact-gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center rounded-lg bg-dark-green px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-forest disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : FORM_ENDPOINT ? 'Send message' : 'Open in my email app'}
        </button>
        <p className="text-sm text-suba-muted" role="status" aria-live="polite">
          {status === 'sent' && 'Thank you. Your message is on its way and we will reply soon.'}
          {status === 'mailto' && (
            <>Your email app should open with the message ready to send. If nothing opened, write to <a className="font-medium text-green-ink underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</>
          )}
          {status === 'error' && (
            <>That did not go through. Please try again, or write to <a className="font-medium text-green-ink underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</>
          )}
        </p>
      </div>
    </form>
  );
}
