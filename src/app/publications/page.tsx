import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { PublicationsClient } from './PublicationsClient';
import { PublicationsView } from './PublicationsView';

export const metadata: Metadata = {
  title: 'Publications',
  description: 'Policy briefs, research papers, reports and newsletters from SUBA, based on primary data from Shillong and the Khasi Hills.',
};

export default function PublicationsPage() {
  return (
    <>
      <PageHeader label="Publications" title="Publications">
        Policy briefs, research papers, reports and newsletters. Some are online in full and some as summaries of a longer document, and each says which.
      </PageHeader>
      {/* Reading the URL filters needs a Suspense boundary in a static export. The
          fallback is the full unfiltered list, so the HTML that search engines and
          no-JavaScript visitors receive already contains every publication. */}
      <Suspense fallback={<PublicationsView category="All" wing="All wings" />}>
        <PublicationsClient />
      </Suspense>
    </>
  );
}
