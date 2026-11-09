import type { Metadata } from 'next';
import Link from 'next/link';
import { publications, symbohResearchAreas } from '@/lib/data';
import { PhotoSlot } from '@/components/ui/SubaImage';

export const metadata: Metadata = {
  title: 'Symboh — Policy, Research & Innovation Lab',
  description: 'Symboh is SUBA\'s Policy, Research, Innovation, and R&D Lab — producing evidence-based analysis on urban development, governance, environment, and education in Meghalaya.',
};

const symbohPublications = publications.filter((p) => p.wing === 'Symboh');

const methodologyPrinciples = [
  { title: 'Primary data first', body: 'We collect our own data before citing secondary sources. Every number has a story.' },
  { title: 'Cited and traceable', body: 'All claims are footnoted. All datasets are documented. Nothing is asserted without evidence.' },
  { title: 'Community-validated', body: 'Findings are shared with the communities they describe before publication.' },
  { title: 'Open access', body: 'Our research is published free to read. Meghalaya\'s problems should not hide behind paywalls.' },
];

export default function SymbohPage() {
  return (
    <>
      {/* Hero */}
      <div
        className="pt-28 pb-20 relative overflow-hidden"
        style={{ backgroundColor: '#1A5C2E' }}
      >
        {/* Grid background */}
        <div className="absolute inset-0 opacity-8" aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sym-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sym-grid)" />
          </svg>
        </div>

        {/* Blue accent */}
        <div
          className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none"
          style={{ background: 'linear-gradient(135deg, transparent, #1F8EC8)' }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="px-3 py-1 rounded-sm text-white label-mono"
              style={{ backgroundColor: '#1F8EC8', fontSize: '0.6rem', letterSpacing: '0.15em' }}
            >
              A SUBA INITIATIVE
            </span>
          </div>
          <h1
            className="text-white mb-5"
            style={{
              fontFamily: 'var(--font-fraunces), Georgia, serif',
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 600,
              lineHeight: '1.05',
              letterSpacing: '-0.01em',
            }}
          >
            Symboh
          </h1>
          <p
            className="text-white/70 max-w-2xl mb-8"
            style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7' }}
          >
            SUBA's Policy, Research, Innovation, and R&D Lab. We produce evidence-based
            analysis on urban development, governance, environment, and education —
            grounded in Meghalayan reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-medium transition-colors"
              style={{ backgroundColor: '#1F8EC8', color: 'white', fontFamily: 'var(--font-inter)' }}
            >
              View Research Output
            </Link>
            <Link
              href="/get-involved#collaborate"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-medium transition-colors"
              style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'white', fontFamily: 'var(--font-inter)' }}
            >
              Collaborate with Symboh
            </Link>
          </div>
        </div>
      </div>

      {/* Mission */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#FAF0C8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6">
              <h2
                className="mb-5"
                style={{
                  fontFamily: 'var(--font-fraunces), Georgia, serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  color: '#1A5C2E',
                  fontWeight: 600,
                  lineHeight: '1.2',
                }}
              >
                Research that
                <br />
                <span style={{ fontStyle: 'italic', color: '#1F8EC8' }}>holds up in a room.</span>
              </h2>
              <p
                className="mb-5"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', lineHeight: '1.75', color: '#1A1A1A' }}
              >
                Symboh operates like a policy lab and think tank while remaining deeply
                embedded in SUBA's community work. Our research is not produced in a
                vacuum — it comes from fieldwork, community engagement, and direct
                observation of the challenges Meghalaya faces.
              </p>
              <p
                style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', lineHeight: '1.75', color: '#4A4A40' }}
              >
                We write policy briefs that can be placed on a government desk. We
                produce research papers that can withstand academic scrutiny. And we
                translate both into language that communities can actually use.
              </p>
            </div>
            <div className="lg:col-span-6">
              {/*
                PHOTO SLOT — replace with:
                <SubaImage src="/images/symboh/research-desk.jpg" alt="Symboh research team at work" width={700} height={500} className="rounded-sm mb-8" />
              */}
              <PhotoSlot
                label="Symboh research / fieldwork photo"
                sublabel="Researchers at work · data collection · classroom or field setting"
                aspectRatio="7/5"
                accentColor="#1F8EC8"
                className="mb-8 rounded-sm"
              />
              {/* Methodology */}
              <h3
                className="label-mono mb-6"
                style={{ color: '#259745', fontSize: '0.6rem', letterSpacing: '0.2em' }}
              >
                HOW WE WORK
              </h3>
              <div className="space-y-4">
                {methodologyPrinciples.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-sm bg-white"
                    style={{ border: '1px solid rgba(37,151,69,0.12)' }}
                  >
                    <div
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                      style={{ backgroundColor: '#1F8EC8', fontFamily: 'var(--font-jetbrains)', fontSize: '0.65rem' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <div
                        className="font-semibold mb-1"
                        style={{ fontFamily: 'var(--font-fraunces)', fontSize: '0.9375rem', color: '#1A5C2E' }}
                      >
                        {p.title}
                      </div>
                      <p
                        style={{ fontFamily: 'var(--font-inter)', fontSize: '0.8125rem', lineHeight: '1.6', color: '#4A4A40' }}
                      >
                        {p.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section id="research" className="py-16 lg:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-12"
            style={{
              fontFamily: 'var(--font-fraunces), Georgia, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: '#1A5C2E',
              fontWeight: 600,
            }}
          >
            Research areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: 'rgba(26,92,46,0.08)' }}>
            {symbohResearchAreas.map((area, i) => (
              <div
                key={i}
                className="bg-white p-8 group hover:bg-[#FAF8F0] transition-colors"
              >
                <div
                  className="label-mono text-[#1F8EC8] mb-3"
                  style={{ fontSize: '0.58rem', letterSpacing: '0.15em' }}
                >
                  AREA {String(i + 1).padStart(2, '0')}
                </div>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-fraunces), Georgia, serif',
                    fontSize: '1.0625rem',
                    color: '#1A5C2E',
                    fontWeight: 600,
                  }}
                >
                  {area.title}
                </h3>
                <p
                  style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', lineHeight: '1.65', color: '#4A4A40' }}
                >
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#FAF0C8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2
              style={{
                fontFamily: 'var(--font-fraunces), Georgia, serif',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: '#1A5C2E',
                fontWeight: 600,
              }}
            >
              Symboh publications
            </h2>
            <Link
              href="/publications"
              className="text-sm font-medium flex items-center gap-2 group"
              style={{ color: '#1A5C2E', fontFamily: 'var(--font-inter)' }}
            >
              All publications
              <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 5l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <div className="space-y-0 divide-y" style={{ borderColor: 'rgba(26,92,46,0.12)' }}>
            {symbohPublications.map((pub) => (
              <div key={pub.id} className="py-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span
                        className="px-2 py-0.5 text-white rounded-sm"
                        style={{
                          backgroundColor: '#1F8EC8',
                          fontFamily: 'var(--font-jetbrains)',
                          fontSize: '0.58rem',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {pub.category.toUpperCase()}
                      </span>
                      <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: '#4A4A40' }}>
                        {new Date(pub.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short' })}
                      </span>
                    </div>
                    <h3
                      className="mb-2"
                      style={{
                        fontFamily: 'var(--font-fraunces), Georgia, serif',
                        fontSize: '1rem',
                        color: '#1A5C2E',
                        fontWeight: 600,
                        lineHeight: '1.35',
                      }}
                    >
                      {pub.title}
                    </h3>
                    <p
                      className="line-clamp-2"
                      style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', lineHeight: '1.6', color: '#4A4A40' }}
                    >
                      {pub.summary}
                    </p>
                  </div>
                  {pub.downloadUrl && (
                    <a
                      href={pub.downloadUrl}
                      className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-medium transition-colors"
                      style={{ border: '1px solid rgba(26,92,46,0.25)', color: '#1A5C2E', fontFamily: 'var(--font-inter)', fontSize: '0.8rem' }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M7 2v7M4 6l3 3 3-3M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Download
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: '#1A5C2E' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-white mb-4"
            style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.75rem', fontWeight: 600 }}
          >
            Collaborate with Symboh
          </h2>
          <p
            className="text-white/70 mb-8 max-w-md mx-auto"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', lineHeight: '1.7' }}
          >
            Researchers, educators, policy practitioners, and data professionals — write to us.
          </p>
          <Link
            href="/get-involved#collaborate"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm text-sm font-semibold transition-colors hover:bg-[#F6A225]"
            style={{ backgroundColor: '#FEC110', color: '#1A5C2E', fontFamily: 'var(--font-inter)' }}
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
