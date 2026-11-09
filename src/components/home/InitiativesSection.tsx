import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';

export function InitiativesSection() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: '#FDF8E7' }}
      aria-labelledby="initiatives-heading"
    >
      {/* Background texture */}
      <div className="absolute inset-0 root-texture opacity-40" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-14">
          <span className="eyebrow mb-5" style={{ color: '#259745' }}>03 · Our wings</span>
          <h2
            id="initiatives-heading"
            className="text-balance"
            style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(1.85rem, 4vw, 2.6rem)', color: '#1A5C2E', lineHeight: '1.15', fontWeight: 600, letterSpacing: '-0.01em' }}
          >
            The tree and its branches.
          </h2>
          <p
            className="mt-4 max-w-xl"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', lineHeight: '1.7', color: '#4A4A40' }}
          >
            Branches don&apos;t contradict the roots — they grow from them. Each wing shares
            SUBA&apos;s five traits while owning its specific focus.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Symboh */}
          <Reveal>
            <Link href="/symboh" className="group block h-full">
              <div
                className="relative overflow-hidden rounded-xl h-full card-lift"
                style={{ background: 'linear-gradient(160deg, #1A5C2E 0%, #114020 100%)', minHeight: '380px', boxShadow: 'var(--shadow-card)' }}
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
                <div className="absolute top-0 right-0 w-52 h-52 opacity-20 transition-transform duration-500 group-hover:scale-110" aria-hidden="true">
                  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="160" cy="0" r="120" stroke="#1F8EC8" strokeWidth="30" fill="none" />
                  </svg>
                </div>

                <div className="relative p-8 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="px-2.5 py-1 rounded-full" style={{ backgroundColor: '#1F8EC8' }}>
                      <span className="label-mono text-white" style={{ fontSize: '0.55rem', letterSpacing: '0.15em' }}>A SUBA INITIATIVE</span>
                    </div>
                  </div>
                  <h3 className="text-white mb-3" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(1.85rem, 4vw, 2.6rem)', fontWeight: 600, lineHeight: '1.05' }}>
                    Symboh
                  </h3>
                  <p className="text-white/70 mb-6" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', lineHeight: '1.65' }}>
                    SUBA&apos;s Policy, Research, Innovation, and R&amp;D Lab. Producing evidence-based
                    research and policy analysis for Meghalaya — on urban development, governance,
                    environment, education, waste, and mobility.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Public Policy', 'Urban Research', 'Civic Data', 'Education', 'Governance'].map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full text-white/75" style={{ border: '1px solid rgba(255,255,255,0.18)', fontFamily: 'var(--font-inter)', fontSize: '0.72rem' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center gap-2">
                    <span className="text-white font-medium" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem' }}>Explore Symboh</span>
                    <svg className="transition-transform duration-300 group-hover:translate-x-1.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 5l4 3-4 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Comma */}
          <Reveal delay={120}>
            <Link href="/comma" className="group block h-full">
              <div
                className="relative overflow-hidden rounded-xl h-full card-lift bg-white"
                style={{ border: '1px solid rgba(37,151,69,0.2)', minHeight: '380px', boxShadow: 'var(--shadow-card)' }}
              >
                <div className="absolute top-0 right-0 w-52 h-52 transition-transform duration-500 group-hover:scale-110" style={{ opacity: 0.1 }} aria-hidden="true">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M200 0 Q100 80 200 160" stroke="#259745" strokeWidth="40" fill="none" />
                  </svg>
                </div>

                <div className="relative p-8 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="px-2.5 py-1 rounded-full" style={{ backgroundColor: '#259745' }}>
                      <span className="label-mono text-white" style={{ fontSize: '0.55rem', letterSpacing: '0.15em' }}>A SUBA INITIATIVE</span>
                    </div>
                  </div>
                  <h3 className="mb-3" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(1.85rem, 4vw, 2.6rem)', color: '#1A5C2E', fontWeight: 600, lineHeight: '1.05' }}>
                    Comma
                  </h3>
                  <p className="mb-6" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9375rem', lineHeight: '1.65', color: '#4A4A40' }}>
                    SUBA&apos;s Circular Economy and Sustainability Initiative. Plastic recovery,
                    recycling, upcycling, and building the community infrastructure needed
                    for a functioning circular economy in Meghalaya.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {['Recycling', 'Upcycling', 'Plastic Recovery', 'Circular Economy', 'Community Action'].map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full" style={{ border: '1px solid rgba(37,151,69,0.2)', fontFamily: 'var(--font-inter)', fontSize: '0.72rem', color: '#259745', backgroundColor: 'rgba(37,151,69,0.06)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="p-4 rounded-lg mb-6" style={{ background: 'linear-gradient(135deg, #FAF0C8, #FDF8E7)' }}>
                    <div className="font-bold mb-0.5" style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.6rem', color: '#1A5C2E' }}>847 kg</div>
                    <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.78rem', color: '#4A4A40' }}>waste recovered across 9 clean-up drives in Shillong</div>
                  </div>
                  <div className="mt-auto flex items-center gap-2">
                    <span className="font-medium" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: '#1A5C2E' }}>Explore Comma</span>
                    <svg className="transition-transform duration-300 group-hover:translate-x-1.5" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 5l4 3-4 3" stroke="#1A5C2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
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
