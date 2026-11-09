import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { WhoWeAre } from '@/components/home/WhoWeAre';
import { WhatWeDo } from '@/components/home/WhatWeDo';
import { InitiativesSection } from '@/components/home/InitiativesSection';
import { PublicationsSection } from '@/components/home/PublicationsSection';
import { DataInsights } from '@/components/home/DataInsights';
// Testimonials are hidden until real, consented quotes replace the placeholders.
// To bring the section back: uncomment this import and the <Testimonials /> below,
// after updating the quotes in src/lib/data/index.ts.
// import { Testimonials } from '@/components/home/Testimonials';
import { LatestUpdates } from '@/components/home/LatestUpdates';
import { GetInvolvedSection } from '@/components/home/GetInvolvedSection';

export const metadata: Metadata = {
  title: 'SUBA — Sustainable Urban and Bioregional Action',
  description: 'A youth-led civic, environmental, research, and community-action organisation based in Shillong, Meghalaya. Home to Symboh (Policy & Research Lab) and Comma (Circular Economy Initiative).',
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
      {/* <Testimonials /> — hidden until real testimonials are ready */}
      <LatestUpdates />
      <GetInvolvedSection />
    </>
  );
}
