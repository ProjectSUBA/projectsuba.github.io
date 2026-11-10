import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/Section';
import { Icon } from '@/components/ui/Icons';
import { Badge } from '@/components/ui/Badge';

const symbohTags = ['Public Policy', 'Urban Research', 'Civic Data', 'Education', 'Governance'];
const commaTags = ['Recycling', 'Upcycling', 'Plastic Recovery', 'Circular Economy', 'Community Action'];

export function InitiativesSection() {
  return (
    <section className="relative overflow-hidden bg-cream-light py-20 lg:py-28" aria-labelledby="initiatives-heading">
      <div className="root-texture absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our wings" id="initiatives-heading" title="The tree and its branches.">
          Branches do not contradict the roots, they grow from them. Each wing shares SUBA’s values while owning its own focus.
        </SectionHeading>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Symboh */}
          <Reveal>
            <Link href="/symboh" className="group block h-full">
              <div
                className="card-lift on-dark relative h-full min-h-[380px] overflow-hidden rounded-xl"
                style={{ background: 'linear-gradient(160deg, #1A5C2E 0%, #114020 100%)', boxShadow: 'var(--shadow-card)' }}
              >
                <div className="absolute inset-0 opacity-10" aria-hidden="true">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid-sym" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-sym)" />
                  </svg>
                </div>
                <div className="absolute right-0 top-0 h-52 w-52 opacity-20 transition-transform duration-500 group-hover:scale-110" aria-hidden="true">
                  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="160" cy="0" r="120" stroke="#1F8EC8" strokeWidth="30" fill="none" />
                  </svg>
                </div>

                <div className="relative flex h-full flex-col p-8">
                  <div className="mb-6"><Badge tone="blue">A SUBA initiative</Badge></div>
                  <h3 className="mb-3 font-display font-semibold leading-[1.05] text-white" style={{ fontSize: 'clamp(1.85rem, 4vw, 2.6rem)' }}>Symboh</h3>
                  <p className="mb-6 text-[0.9375rem] leading-relaxed text-white/80">
                    SUBA’s Policy, Research, Innovation and R&amp;D Lab. Evidence-based research and policy analysis for Meghalaya on urban development, governance, environment, education, waste and mobility.
                  </p>
                  <div className="mb-8 flex flex-wrap gap-2">
                    {symbohTags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/25 px-2.5 py-1 text-xs text-white/85">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center gap-2 text-sm font-medium text-white">
                    Explore Symboh
                    <Icon name="arrow" size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Comma */}
          <Reveal delay={120}>
            <Link href="/comma" className="group block h-full">
              <div className="card card-lift relative h-full min-h-[380px] overflow-hidden rounded-xl border-sea-green/20 shadow-[var(--shadow-card)]">
                <div className="absolute right-0 top-0 h-52 w-52 opacity-10 transition-transform duration-500 group-hover:scale-110" aria-hidden="true">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M200 0 Q100 80 200 160" stroke="#259745" strokeWidth="40" fill="none" />
                  </svg>
                </div>

                <div className="relative flex h-full flex-col p-8">
                  <div className="mb-6"><Badge tone="green">A SUBA initiative</Badge></div>
                  <h3 className="mb-3 font-display font-semibold leading-[1.05] text-dark-green" style={{ fontSize: 'clamp(1.85rem, 4vw, 2.6rem)' }}>Comma</h3>
                  <p className="mb-6 text-[0.9375rem] leading-relaxed text-suba-muted">
                    SUBA’s Circular Economy and Sustainability Initiative. Plastic recovery, recycling, upcycling and the community infrastructure a working circular economy needs in Meghalaya.
                  </p>
                  <div className="mb-8 flex flex-wrap gap-2">
                    {commaTags.map((tag) => (
                      <span key={tag} className="rounded-full border border-sea-green/25 bg-sea-green/5 px-2.5 py-1 text-xs text-green-ink">{tag}</span>
                    ))}
                  </div>
                  <div className="mb-6 rounded-lg p-4" style={{ background: 'linear-gradient(135deg, #FAF0C8, #FDF8E7)' }}>
                    <div className="font-display text-[1.6rem] font-bold text-dark-green">847 kg</div>
                    <div className="text-[0.8rem] text-suba-muted">waste recovered across 9 clean-up drives in Shillong</div>
                  </div>
                  <div className="mt-auto flex items-center gap-2 text-sm font-medium text-dark-green">
                    Explore Comma
                    <Icon name="arrow" size={16} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
