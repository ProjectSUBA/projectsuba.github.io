'use client';

import { useId, useState, type FormEvent } from 'react';
import { isValidEmail, submitForm } from '@/lib/forms';
import { CONTACT_EMAIL, FORM_ENDPOINT } from '@/lib/site';

type Status = 'idle' | 'sending' | 'sent' | 'mailto' | 'invalid' | 'error';

/** Email signup for the SUBA Field Letter. Meant for dark green backgrounds. */
export function NewsletterForm({ layout = 'stacked' }: { layout?: 'stacked' | 'inline' }) {
  const [status, setStatus] = useState<Status>('idle');
  const id = useId();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget; // React clears currentTarget after an await
    const form = new FormData(formElement);
    if (String(form.get('_gotcha') ?? '').trim() !== '') {
      setStatus('sent');
      return;
    }
    const email = String(form.get('email') ?? '').trim();
    if (!isValidEmail(email)) {
      setStatus('invalid');
      return;
    }
    setStatus('sending');
    try {
      const outcome = await submitForm(
        { email, list: 'SUBA Field Letter' },
        'Subscribe me to the SUBA Field Letter',
        `Please add this address to the SUBA Field Letter:\n\n${email}`
      );
      setStatus(outcome);
      if (outcome === 'sent') formElement.reset();
    } catch {
      setStatus('error');
    }
  }

  const row = layout === 'inline' ? 'sm:flex-row' : '';

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className={`flex flex-col gap-2 ${row}`}>
        <label htmlFor={`${id}-email`} className="sr-only">Email address</label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="field field-dark flex-1"
        />
        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor={`${id}-gotcha`}>Leave this empty</label>
          <input id={`${id}-gotcha`} name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-lg bg-mikado px-5 py-3 text-sm font-semibold text-forest transition-colors hover:bg-sunshade disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Subscribe'}
        </button>
      </div>
      <p className="mt-3 text-[0.8rem] leading-snug text-white/80" role="status" aria-live="polite">
        {status === 'idle' &&
          (FORM_ENDPOINT
            ? 'We only use your email to send the Field Letter.'
            : 'This opens your email app with a subscribe request ready to send.')}
        {status === 'invalid' && 'Please enter a valid email address.'}
        {status === 'sent' && 'Thank you. You are on the list.'}
        {status === 'mailto' && `Your email app should open with the request ready. If nothing opened, write to ${CONTACT_EMAIL}.`}
        {status === 'error' && `That did not go through. Please try again, or write to ${CONTACT_EMAIL}.`}
      </p>
    </form>
  );
}
