import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { WhoWeAre } from '@/components/home/WhoWeAre';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { InitiativesSection } from '@/components/home/InitiativesSection';
import { PublicationsSection } from '@/components/home/PublicationsSection';
import { DataInsights } from '@/components/home/DataInsights';
import { Testimonials } from '@/components/home/Testimonials';
import { LatestUpdates } from '@/components/home/LatestUpdates';
import { GetInvolvedSection } from '@/components/home/GetInvolvedSection';

export const metadata: Metadata = {
  title: 'SUBA: Sustainable Urban and Bioregional Action',
  description:
    'A youth-led civic, environmental, research and community-action organisation based in Shillong, Meghalaya. Home to Symboh, the policy and research lab, and Comma, the circular economy initiative.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <InitiativesSection />
      <PublicationsSection />
      <DataInsights />
      {/* Hides itself until real testimonials are added in src/lib/data */}
      <Testimonials />
      <LatestUpdates />
      <GetInvolvedSection />
    </>
  );
}
