import Link from 'next/link';
import { PhotoSlot } from '@/components/ui/SubaImage';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icons';

export function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-cream-light py-20 lg:py-28" aria-labelledby="who-heading">
      <div className="root-texture absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="glow-blob" style={{ top: '-6rem', left: '-6rem', width: '22rem', height: '22rem', background: 'rgba(37,151,69,0.12)' }} aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow mb-5 text-green-ink">Who we are</span>
            <h2
              id="who-heading"
              className="mb-6 text-balance font-display font-semibold leading-[1.12] tracking-[-0.01em] text-dark-green"
              style={{ fontSize: 'clamp(1.85rem, 4vw, 2.9rem)' }}
            >
              A name is never trivial.
              <br />
              <em className="font-medium text-sea-green">It carries intent.</em>
            </h2>
            <p className="mb-5 text-[1.0625rem] leading-[1.75] text-suba-text">
              SUBA, Sustainable Urban and Bioregional Action, began as a conversation among a small group of people in Shillong who believed the hills deserved better than apathy. The name was not rushed. In Khasi, <em>suba</em> speaks of what is clean and good, the quality people name in the phrase <em>khuid and suba</em>. It says in Khasi what the work says in English.
            </p>
            <p className="mb-5 text-[1.0625rem] leading-[1.75] text-suba-text">
              We plant trees and publish policy briefs. We run clean-up drives and share research with government bodies. We do both because Meghalaya needs both.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="card-lift group inline-flex items-center gap-2 rounded-full border border-dark-green/25 bg-white px-5 py-2.5 text-sm font-medium text-dark-green shadow-[var(--shadow-soft)]"
              >
                Our full story
                <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={120}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(254,193,16,0.25), rgba(37,151,69,0.12))' }} aria-hidden="true" />
              <div className="relative">
                {/*
                  PHOTO SLOT. Replace PhotoSlot with:
                  <SubaImage src="/images/about/founders.jpg" alt="SUBA founding team, Shillong" width={600} height={700} caption="Photo credit: Name, Shillong, 2024" />
                  Photography direction: candid, natural Meghalayan light, people in action. No posed studio shots or stock imagery.
                */}
                <PhotoSlot
                  label="Team / founders photo"
                  sublabel="Candid, natural light, Meghalayan setting. Credit the photographer."
                  aspectRatio="4/5"
                  accentColor="#FEC110"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
