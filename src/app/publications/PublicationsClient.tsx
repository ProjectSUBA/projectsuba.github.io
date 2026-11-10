'use client';

import { useSearchParams } from 'next/navigation';
import { PublicationsView, categories, wings } from './PublicationsView';

/** Reads the filters from the URL (?category=...&wing=...) and shows the matching publications. */
export function PublicationsClient() {
  const params = useSearchParams();
  const requestedCategory = params.get('category') ?? 'All';
  const requestedWing = params.get('wing') ?? 'All wings';
  // Ignore anything in the URL that is not a real option.
  const category = categories.includes(requestedCategory) ? requestedCategory : 'All';
  const wing = wings.includes(requestedWing) ? requestedWing : 'All wings';

  return <PublicationsView category={category} wing={wing} />;
}
