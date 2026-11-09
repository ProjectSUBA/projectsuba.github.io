import type { Metadata } from 'next';
import { PublicationsClient } from './PublicationsClient';

export const metadata: Metadata = {
  title: 'Research & Publications',
  description: 'Policy briefs, research papers, reports, and newsletters from SUBA and its wings — Symboh and Comma.',
};

export default function PublicationsPage() {
  return <PublicationsClient />;
}
