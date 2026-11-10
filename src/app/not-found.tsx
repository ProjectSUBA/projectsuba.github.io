import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ButtonLink } from '@/components/ui/ButtonLink';

export const metadata: Metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <PageHeader
      variant="green"
      label="Error 404"
      title="Page not found"
      actions={
        <>
          <ButtonLink href="/" variant="gold" arrow>Back to the homepage</ButtonLink>
          <ButtonLink href="/our-work" variant="ghost">See our work</ButtonLink>
        </>
      }
    >
      The link may be old, or the page may have moved. Try the homepage, or use the menu to find what you were after.
    </PageHeader>
  );
}
