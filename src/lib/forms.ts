import { FORM_ENDPOINT, mailto } from '@/lib/site';

export type SubmitOutcome = 'sent' | 'mailto';

/**
 * Send a form.
 *
 * - If FORM_ENDPOINT is set (see lib/site.ts), the fields are POSTed there as JSON
 *   and the visitor stays on the page ('sent').
 * - Otherwise the visitor's email app is opened with everything pre-filled and
 *   addressed to CONTACT_EMAIL ('mailto'). No account or cost needed.
 *
 * Throws if the endpoint rejects the submission.
 */
export async function submitForm(
  fields: Record<string, string>,
  emailSubject: string,
  emailBody: string
): Promise<SubmitOutcome> {
  if (FORM_ENDPOINT) {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...fields, _subject: emailSubject }),
    });
    if (!response.ok) throw new Error(`Form service responded with ${response.status}`);
    return 'sent';
  }
  window.location.href = mailto(emailSubject, emailBody);
  return 'mailto';
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}
