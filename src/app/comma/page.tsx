import type { Metadata } from 'next';
import Link from 'next/link';
import { publications } from '@/lib/data';
import { PhotoSlot } from '@/components/ui/SubaImage';

export const metadata: Metadata = {
  title: "Comma — Circular Economy & Sustainability",
  description: "Comma is SUBA's Circular Economy initiative — plastic recovery, recycling, upcycling, and community environmental action in Meghalaya.",
};

const commaPublications = publications.filter((p) => p.wing === 'Comma');

const programmes = [
  { id: 'ward16', title: 'Ward 16 Restoration Series', status: 'Active', since: 'Jan 2024', metric: '847 kg', context: 'waste recovered', description: 'Monthly clean-up drives at Ward 16, Shillong — with before/after documentation and volunteer recognition.', color: '#259745' },
  { id: 'plastic', title: 'Plastic Recovery Programme', status: 'Active', since: 'Mar 2024', metric: '420+ kg', context: 'plastic separated', description: 'Structured plastic collection working with informal waste pickers and recovery facilities in Shillong.', color: '#1F8EC8' },
  { id: 'plantation', title: 'Mawkhar Native Tree Plantation', status: 'Active', since: 'Sep 2023', metric: '312 saplings', context: '94% survival at 6 months', description: 'Reforestation using indigenous Khasi Hills species with community stewardship.', color: '#1A5C2E' },
  { id: 'upcycle', title: 'Upcycling Workshops', status: 'Upcoming', since: 'Q3 2025', metric: 'Coming soon', context: 'community skill-building', description: 'Hands-on workshops turning recovered materials into usable products.', color: '#F6A225' },
];

export default function CommaPage() {
  return (
    <>
      <div className="pt-28 pb-20 relative overflow-hidden" style={{ backgroundColor: '#FAF0C8' }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-sm text-white label-mono" style={{ backgroundColor: '#259745', fontSize: '0.6rem', letterSpacing: '0.15em' }}>A SUBA INITIATIVE</span>
          </div>
          <h1 className="mb-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 600, lineHeight: '1.05', color: '#1A5C2E' }}>Comma</h1>
          <p className="max-w-2xl mb-8" style={{ fontFamily: 'var(--font-inter)', fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: '1.7', color: '#4A4A40' }}>
            SUBA's Circular Economy and Sustainability Initiative. Plastic recovery, recycling, upcycling, and community environmental action in Meghalaya.
          </p>
          <div className="flex flex-wrap gap-8 py-6 border-t border-b" style={{ borderColor: 'rgba(26,92,46,0.15)' }}>
            {[{ value: '847 kg', label: 'waste recovered' }, { value: '420 kg', label: 'plastic separated' }, { value: '312', label: 'trees planted' }, { value: '9', label: 'clean-up drives' }].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.75rem', color: '#259745', fontWeight: 700 }}>{s.value}</div>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', color: '#4A4A40' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/*
            PHOTO SLOT — replace with:
            <SubaImage src="/images/comma/khoh-basket.jpg" alt="Khoh basket, traditional zero-waste living" width={900} height={400} className="mt-8 rounded-sm" />
          */}
          <div className="mt-8">
            <PhotoSlot
              label="Comma hero photo"
              sublabel="Khoh basket · recycling station · traditional + modern together"
              aspectRatio="16/6"
              accentColor="#259745"
              className="rounded-sm"
            />
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24" style={{ backgroundColor: 'white' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10" style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.75rem', color: '#1A5C2E', fontWeight: 600 }}>How the cycle works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ icon: '♻️', title: 'Recover', body: 'What enters the waste stream is tracked, collected, and separated.' }, { icon: '🔄', title: 'Process', body: 'Material is directed to reuse, upcycling, or recycling — not landfill.' }, { icon: '🌱', title: 'Return', body: 'Value returns to the community — through products, skills, and cleaner spaces.' }, { icon: '📊', title: 'Report', body: 'Every drive produces public numbers. No invisible impact.' }].map((p, i) => (
              <div key={i} className="p-7 rounded-sm text-center" style={{ backgroundColor: '#FAF0C8', border: '1px solid rgba(37,151,69,0.12)' }}>
                <div className="text-3xl mb-4" aria-hidden="true">{p.icon}</div>
                <h3 className="mb-3" style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1rem', color: '#1A5C2E', fontWeight: 600 }}>{p.title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', lineHeight: '1.65', color: '#4A4A40' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programmes" className="py-16 lg:py-24" style={{ backgroundColor: '#FAF0C8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10" style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.75rem', color: '#1A5C2E', fontWeight: 600 }}>Active programmes</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {programmes.map((prog) => (
              <div key={prog.id} className="bg-white rounded-sm p-7" style={{ border: '1px solid rgba(26,92,46,0.1)' }}>
                <div className="flex items-start justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-sm text-white label-mono" style={{ backgroundColor: prog.status === 'Active' ? prog.color : '#4A4A40', fontSize: '0.55rem', letterSpacing: '0.15em' }}>{prog.status.toUpperCase()}</span>
                  <span className="label-mono" style={{ color: '#4A4A40', fontSize: '0.58rem' }}>SINCE {prog.since}</span>
                </div>
                <h3 className="mb-2" style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.125rem', color: '#1A5C2E', fontWeight: 600 }}>{prog.title}</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.75rem', color: prog.color, fontWeight: 700 }}>{prog.metric}</span>
                  <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.78rem', color: '#4A4A40' }}>{prog.context}</span>
                </div>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', lineHeight: '1.65', color: '#4A4A40' }}>{prog.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {commaPublications.length > 0 && (
        <section className="py-16" style={{ backgroundColor: 'white' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8" style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.5rem', color: '#1A5C2E', fontWeight: 600 }}>Comma research</h2>
            <div className="space-y-0 divide-y" style={{ borderColor: 'rgba(26,92,46,0.12)' }}>
              {commaPublications.map((pub) => (
                <div key={pub.id} className="py-6">
                  <h3 className="mb-2" style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1rem', color: '#1A5C2E', fontWeight: 600 }}>{pub.title}</h3>
                  <p className="line-clamp-2" style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', lineHeight: '1.6', color: '#4A4A40' }}>{pub.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16" style={{ backgroundColor: '#259745' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-white mb-2" style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1.75rem', fontWeight: 600 }}>Join a clean-up drive</h2>
            <p className="text-white/75" style={{ fontFamily: 'var(--font-inter)', fontSize: '1rem' }}>Bring gloves and water. We'll handle the rest.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/get-involved#volunteer" className="inline-flex items-center justify-center px-6 py-3 rounded-sm text-sm font-semibold" style={{ backgroundColor: '#FEC110', color: '#1A5C2E', fontFamily: 'var(--font-inter)' }}>Volunteer with Comma</Link>
            <Link href="/events" className="inline-flex items-center justify-center px-6 py-3 rounded-sm text-sm font-medium" style={{ border: '1px solid rgba(255,255,255,0.4)', color: 'white', fontFamily: 'var(--font-inter)' }}>Upcoming Events</Link>
          </div>
        </div>
      </section>
    </>
  );
}
