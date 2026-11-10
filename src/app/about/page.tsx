import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section, SectionHeading } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { PhotoSlot } from '@/components/ui/SubaImage';
import { Reveal } from '@/components/ui/Reveal';
import { values } from '@/lib/data';
import { CONTACT_EMAIL, LOCATION } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About SUBA',
  description:
    'SUBA is a youth-led civic, environmental, research and community-action organisation based in Shillong, Meghalaya, working across the Khasi Hills.',
};

const facts = [
  { label: 'Founded', value: '2023', note: 'Shillong, Meghalaya' },
  { label: 'Type', value: 'Youth-led collective', note: 'Civic, environmental and research work' },
  { label: 'Wings', value: 'Symboh and Comma', note: 'Policy lab and circular economy initiative' },
  { label: 'Based in', value: LOCATION, note: 'Working across the Khasi Hills' },
];

const valueColors = ['#1A5C2E', '#259745', '#F6A225', '#1F8EC8', '#259745'];

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About SUBA" title={<>A youth-led collective, <em>rooted in the hills.</em></>}>
        SUBA plants trees, publishes research and shows up in Shillong’s wards, again and again. This page explains what the name means, how we began and what we hold ourselves to.
      </PageHeader>

      <Section tone="cream-light">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <h2 className="mb-6 font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold">What SUBA means</h2>
            <div className="space-y-5 text-base leading-[1.75]">
              <p>
                <strong>SUBA</strong> reads in English as Sustainable Urban and Bioregional Action. But <em>suba</em> is also a Khasi word, and that is what made the name feel right.
              </p>
              <p>
                In everyday Khasi, suba speaks of what is clean, pure and good. It sits beside <em>khuid</em>, clean, the way people say <em>khuid and suba</em> together. To call someone suba is to say they are good.
              </p>
              <p>
                The team weighed other names first, among them <em>Khuid</em>, the Khasi word for clean. SUBA held both the work and the value in a single word, so it stayed.
              </p>
              <p>
                So the name carries its meaning in two languages at once. In English it names the work. In Khasi it names the value underneath, clean and good. That is exactly where SUBA operates.
              </p>
            </div>

            <h2 className="mb-6 mt-14 font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold">How we began</h2>
            <div className="space-y-5 text-base leading-[1.75]">
              <p>
                SUBA exists because a small group of people in Shillong decided the hills deserved better than apathy, and that the way to prove it was to show up, again and again, with gloves and saplings, in the rain if necessary, crediting everyone who came along.
              </p>
              <p>
                The identity you see on this site grew out of that work. It was practised first and described afterwards. Like the living root bridges of the Khasi Hills, it was made together, and it will keep growing.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={100}>
            <dl className="card p-2 sm:p-4">
              {facts.map((item) => (
                <div key={item.label} className="flex items-start gap-4 border-b border-dark-green/10 px-3 py-4 last:border-b-0">
                  <dt className="label-mono w-20 flex-shrink-0 pt-0.5 text-green-ink">{item.label}</dt>
                  <dd>
                    <div className="text-[0.95rem] font-medium">{item.value}</div>
                    <div className="text-[0.8rem] text-suba-muted">{item.note}</div>
                  </dd>
                </div>
              ))}
              <div className="flex items-start gap-4 px-3 py-4">
                <dt className="label-mono w-20 flex-shrink-0 pt-0.5 text-green-ink">Contact</dt>
                <dd>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="break-all text-[0.95rem] font-medium text-dark-green underline decoration-dark-green/30 underline-offset-2 hover:decoration-dark-green">
                    {CONTACT_EMAIL}
                  </a>
                  <div className="text-[0.8rem] text-suba-muted">Open to correspondence</div>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/*
            PHOTO SLOTS. Replace with:
            <SubaImage src="/images/about/shillong-hills.jpg" alt="Khasi Hills landscape, Shillong" width={700} height={500} className="rounded-md" />
            <SubaImage src="/images/about/root-bridge.jpg" alt="Living root bridge, Meghalaya" width={700} height={500} className="rounded-md" />
          */}
          <PhotoSlot label="Khasi Hills landscape" sublabel="Real and unfiltered, soft diffused light" aspectRatio="4/3" accentColor="#259745" />
          <PhotoSlot label="Living root bridge" sublabel="Cultural motif. Consent is required for sacred sites." aspectRatio="4/3" accentColor="#1A5C2E" />
        </div>
      </Section>

      <Section tone="cream-light" labelledBy="values-heading">
        <SectionHeading eyebrow="Values" id="values-heading" title={<>What we hold <em>ourselves to.</em></>}>
          Five qualities we check our work against.
        </SectionHeading>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((item, i) => (
            <Reveal key={item.trait} delay={(i % 5) * 70}>
              <div className="card h-full p-6">
                <div className="mb-4 h-1 w-8 rounded-full" style={{ backgroundColor: valueColors[i] }} aria-hidden="true" />
                <h3 className="mb-2 font-display text-lg font-semibold">{item.trait}</h3>
                <p className="text-[0.85rem] leading-relaxed text-suba-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="green">
        <div className="text-center">
          <h2 className="mb-6 font-display text-2xl font-semibold text-white">Ready to show up?</h2>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/get-involved" variant="gold">Get involved</ButtonLink>
            <ButtonLink href="/publications" variant="ghost">Read our research</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
