import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ButtonLink } from '@/components/ui/ButtonLink';

export const metadata: Metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="Error 404"
        title={<>This page has<br /><em>wandered off.</em></>}
        actions={
          <>
            <ButtonLink href="/" variant="gold">Back to the homepage</ButtonLink>
            <ButtonLink href="/publications" variant="ghost">Browse publications</ButtonLink>
          </>
        }
      >
        The link may be old, or the page may have moved. Try the homepage, or use the menu to find what you were after.
      </PageHeader>
    </>
  );
}
