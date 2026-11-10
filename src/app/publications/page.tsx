import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { PublicationsClient } from './PublicationsClient';
import { PublicationsView } from './PublicationsView';

export const metadata: Metadata = {
  title: 'Publications',
  description: 'Policy briefs, research papers, reports and newsletters from SUBA, grounded in primary data from Meghalaya.',
};

export default function PublicationsPage() {
  return (
    <>
      <PageHeader eyebrow="Publications" title={<>Research and <em>publications.</em></>}>
        Policy briefs, research papers, field reports and newsletters, grounded in primary data from Meghalaya.
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
