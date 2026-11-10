import Link from 'next/link';
import { PhotoSlot } from '@/components/ui/SubaImage';
import { Reveal } from '@/components/ui/Reveal';

export function WhoWeAre() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: '#FDF8E7' }}
      aria-labelledby="who-heading"
    >
      <div className="absolute inset-0 root-texture opacity-60" aria-hidden="true" />
      <div className="glow-blob" style={{ top: '-6rem', left: '-6rem', width: '22rem', height: '22rem', background: 'rgba(37,151,69,0.12)' }} aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-7">
            <span className="eyebrow mb-5" style={{ color: '#259745' }}>01 · Who we are</span>
            <h2 id="who-heading" className="mb-6 text-balance" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(1.85rem, 4vw, 2.9rem)', color: '#1A5C2E', lineHeight: '1.12', fontWeight: 600, letterSpacing: '-0.01em' }}>
              A name is never trivial.<br />
              <span style={{ fontStyle: 'italic', color: '#259745' }}>It carries intent.</span>
            </h2>
            <p className="mb-5" style={{ fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', lineHeight: '1.75', color: '#1A1A1A' }}>
              SUBA, Sustainable Urban and Bioregional Action, began as a conversation
              among a small group of people in Shillong who believed the hills deserved
              better than apathy. The name was not rushed. In Khasi, <em>suba</em> speaks
              of what is clean and good, the quality people name in the phrase <em>khuid
              and suba</em>. It says in Khasi what the work says in English.
            </p>
            <p className="mb-5" style={{ fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', lineHeight: '1.75', color: '#1A1A1A' }}>
              We plant trees and publish policy briefs. We run clean-up drives and submit
              research to government bodies. We do both because Meghalaya needs both.
            </p>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: '1.0625rem', lineHeight: '1.75', color: '#4A4A40', fontStyle: 'italic' }}>
              SUBA sits comfortably in Khasi and English at once. Which is exactly where we operate.
            </p>
            <div className="mt-8">
              <Link href="/about" className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium card-lift" style={{ color: '#1A5C2E', fontFamily: 'var(--font-inter)', border: '1px solid rgba(26,92,46,0.25)', backgroundColor: 'white', boxShadow: 'var(--shadow-soft)' }}>
                Our full story
                <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 5l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={120}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(254,193,16,0.25), rgba(37,151,69,0.12))' }} aria-hidden="true" />
              <div className="relative">
                <PhotoSlot
                  label="Team / founders photo"
                  sublabel="Replace with real photography — candid, natural light, Meghalayan setting. Credit the photographer."
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
