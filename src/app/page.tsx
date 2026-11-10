import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { Intro } from '@/components/home/Intro';
import { ProjectsIndex } from '@/components/home/ProjectsIndex';
import { Ledger } from '@/components/home/Ledger';
import { Wings } from '@/components/home/Wings';
import { FieldLog } from '@/components/home/FieldLog';
import { TakePart } from '@/components/home/TakePart';

export const metadata: Metadata = {
  title: 'SUBA: Sustainable Urban and Bioregional Action',
  description:
    'A youth-led collective in Shillong, Meghalaya, working on clean-ups, plantations and research. Home to Comma, the circular economy initiative, and Symboh, the policy and research lab.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ProjectsIndex />
      <Ledger />
      <Wings />
      <FieldLog />
      <TakePart />
    </>
  );
}
