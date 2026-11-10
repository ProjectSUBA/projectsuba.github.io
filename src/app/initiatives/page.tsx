import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { PhotoSlot } from '@/components/ui/SubaImage';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icons';
import { initiatives } from '@/lib/data';
import { wingTone } from '@/lib/ui';

export const metadata: Metadata = {
  title: 'Initiatives',
  description: 'Active initiatives and programmes from SUBA, across Symboh and Comma, in Shillong, Meghalaya.',
};

export default function InitiativesPage() {
  return (
    <>
      <PageHeader tone="cream" eyebrow="Initiatives" title={<>What we are <em>doing right now.</em></>}>
        Ongoing programmes, active research and community work across Symboh and Comma.
      </PageHeader>

      <Section>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {initiatives.map((init, i) => (
            <Reveal key={init.id} delay={(i % 2) * 100}>
              <article className="card card-lift flex h-full flex-col overflow-hidden">
                {/*
                  PHOTO SLOT. Replace with:
                  <SubaImage src={`/images/initiatives/${init.id}.jpg`} alt={init.title} width={800} height={450} />
                */}
                <PhotoSlot
                  label={`${init.title} photo`}
                  sublabel="Hands in soil, candid, natural Meghalayan light"
                  aspectRatio="16/9"
                  accentColor={init.accentColor}
                />
                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <Badge tone={init.status === 'Active' ? 'green' : 'slate'}>{init.status}</Badge>
                    <Badge tone={wingTone[init.wing]}>{init.wing}</Badge>
                  </div>
                  <h2 className="mb-2 font-display text-xl font-semibold">{init.title}</h2>
                  <p className="mb-3 text-sm font-medium text-green-ink">{init.tagline}</p>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-suba-muted">{init.description}</p>
                  <Link href={init.href} className="group inline-flex items-center gap-2 text-sm font-semibold text-dark-green">
                    Learn more
                    <Icon name="arrow" size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="green">
        <div className="text-center">
          <h2 className="mb-5 font-display text-2xl font-semibold text-white">Want to support an initiative?</h2>
          <ButtonLink href="/get-involved" variant="gold">Get involved</ButtonLink>
        </div>
      </Section>
    </>
  );
}
