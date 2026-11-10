import type { Metadata } from 'next';
import Link from 'next/link';
import { PhotoSlot } from '@/components/ui/SubaImage';

export const metadata: Metadata = {
  title: 'About SUBA',
  description: 'SUBA is a youth-led civic, environmental, research, and community-action organisation based in Shillong, Meghalaya — working across the Khasi Hills.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <div
        className="pt-28 pb-16 relative overflow-hidden"
        style={{ backgroundColor: '#1A5C2E' }}
      >
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage: 'radial-gradient(circle at 70% 50%, #FEC110 0%, transparent 60%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span
            className="label-mono text-white/40 block mb-4"
            style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}
          >
            ABOUT SUBA
          </span>
          <h1
            className="text-white mb-4"
            style={{
              fontFamily: 'var(--font-fraunces), Georgia, serif',
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: 600,
              lineHeight: '1.1',
            }}
          >
            A book about a name,
            <br />
            <span style={{ color: '#FEC110', fontStyle: 'italic' }}>and everything that came after.</span>
          </h1>
          <p
            className="text-white/70 max-w-xl"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', lineHeight: '1.7' }}
          >
            Before the logo, before the colour, before anyone wrote any of this down —
            there was a conversation about what to call it.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#FAF0C8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <h2
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-fraunces), Georgia, serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  color: '#1A5C2E',
                  fontWeight: 600,
                }}
              >
                What SUBA means
              </h2>
              <div
                className="prose-suba space-y-5"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem', lineHeight: '1.75', color: '#1A1A1A' }}
              >
                <p>
                  <strong>SUBA</strong> reads in English as Sustainable Urban and Bioregional
                  Action. But <em>suba</em> is also a Khasi word, and that is what made the name
                  feel right.
                </p>
                <p>
                  In everyday Khasi, suba speaks of what is clean, pure, and good. It sits
                  beside <em>khuid</em>, clean, the way people say <em>khuid and suba</em>
                  together. To call someone suba is to say they are good.
                </p>
                <p>
                  The team weighed other names first, among them <em>Khuid</em>, the Khasi word
                  for clean. SUBA held both the work and the value in a single word, so it stayed.
                </p>
                <p>
                  So the name carries its meaning in two languages at once. In English it names
                  the work. In Khasi it names the value underneath, clean and good. That is
                  exactly where SUBA operates.
                </p>
                <p>
                  SUBA exists because a small group of people in Shillong decided the hills
                  deserved better than apathy, and that the way to prove it was to show up,
                  again and again, with gloves and saplings, in the rain if necessary, crediting
                  everyone who came along.
                </p>
                <p>
                  The brand you'll see on this site grew out of that. It wasn't designed first
                  and then put into practice. It was practised first, then described. Like the
                  living root bridges of the Khasi Hills, this identity was made together, and
                  it will keep growing.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              {/* Key details */}
              <div className="space-y-5">
                {[
                  { label: 'Founded', value: '2023', note: 'Shillong, Meghalaya' },
                  { label: 'Type', value: 'Youth-Led Collective', note: 'Civic · Environmental · Research' },
                  { label: 'Wings', value: '2 Active', note: 'Symboh · Comma' },
                  { label: 'Contact', value: 'support@projectsuba.in', note: 'Open to correspondence' },
                  { label: 'Website', value: 'projectsuba.in', note: 'Published in Shillong' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 py-4 border-b"
                    style={{ borderColor: 'rgba(26,92,46,0.12)' }}
                  >
                    <span
                      className="label-mono text-[#259745] flex-shrink-0 pt-0.5"
                      style={{ fontSize: '0.6rem', letterSpacing: '0.15em', minWidth: '80px' }}
                    >
                      {item.label.toUpperCase()}
                    </span>
                    <div>
                      <div
                        className="font-medium"
                        style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: '#1A1A1A' }}
                      >
                        {item.value}
                      </div>
                      <div
                        style={{ fontFamily: 'var(--font-inter)', fontSize: '0.78rem', color: '#4A4A40' }}
                      >
                        {item.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo break — landscape */}
      <section className="py-16" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/*
              PHOTO SLOTS — replace with:
              <SubaImage src="/images/about/shillong-hills.jpg" alt="Khasi Hills landscape, Shillong" width={700} height={500} className="rounded-sm" />
              <SubaImage src="/images/about/root-bridge.jpg" alt="Living root bridge, Meghalaya" width={700} height={500} className="rounded-sm" />
            */}
            <PhotoSlot
              label="Khasi Hills landscape"
              sublabel="Real and unfiltered · soft diffused light"
              aspectRatio="4/3"
              accentColor="#259745"
              className="rounded-sm"
            />
            <PhotoSlot
              label="Living root bridge"
              sublabel="Cultural motif · consent required for sacred sites"
              aspectRatio="4/3"
              accentColor="#1A5C2E"
              className="rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* Five Traits */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="mb-12 text-center"
            style={{
              fontFamily: 'var(--font-fraunces), Georgia, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: '#1A5C2E',
              fontWeight: 600,
            }}
          >
            The five-trait test
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { trait: 'Rooted', description: 'In the land, language, and people of Meghalaya.', color: '#1A5C2E' },
              { trait: 'Purposeful', description: 'Deliberate. Not rushed, not generic, not borrowed.', color: '#259745' },
              { trait: 'Hopeful', description: 'Action in the face of real problems. Never apocalyptic.', color: '#F6A225' },
              { trait: 'Community-First', description: 'We credit. We include. We decide together.', color: '#1F8EC8' },
              { trait: 'Action-Oriented', description: 'Real work over mission-speak. Always.', color: '#259745' },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-sm"
                style={{ backgroundColor: '#FAF0C8', border: '1px solid rgba(26,92,46,0.1)' }}
              >
                <div
                  className="w-8 h-1 mx-auto mb-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                  aria-hidden="true"
                />
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-fraunces), Georgia, serif',
                    fontSize: '1rem',
                    color: item.color,
                    fontWeight: 600,
                  }}
                >
                  {item.trait}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.82rem',
                    lineHeight: '1.6',
                    color: '#4A4A40',
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-16" style={{ backgroundColor: '#FAF0C8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="mb-6"
            style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.5rem', color: '#1A5C2E', fontWeight: 600 }}
          >
            Ready to show up?
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm text-sm font-medium text-white transition-colors hover:bg-[#259745]"
              style={{ backgroundColor: '#1A5C2E', fontFamily: 'var(--font-inter)' }}
            >
              Get Involved
            </Link>
            <Link
              href="/publications"
              className="inline-flex items-center justify-center px-6 py-3 rounded-sm text-sm font-medium transition-colors hover:bg-white"
              style={{ border: '1px solid rgba(26,92,46,0.3)', color: '#1A5C2E', fontFamily: 'var(--font-inter)' }}
            >
              Read Our Research
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
// Note: photo slots are in WhoWeAre and About — see PhotoSlot usage in components
