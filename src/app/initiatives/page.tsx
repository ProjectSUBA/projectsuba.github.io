import type { Metadata } from 'next';
import Link from 'next/link';
import { initiatives } from '@/lib/data';
import { PhotoSlot } from '@/components/ui/SubaImage';

export const metadata: Metadata = { title: 'Initiatives', description: 'Active initiatives and programmes from SUBA — Shillong, Meghalaya.' };

export default function InitiativesPage() {
  return (
    <>
      <div className="pt-28 pb-16" style={{backgroundColor:'#FAF0C8'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="label-mono block mb-4" style={{color:'#259745',fontSize:'0.6rem',letterSpacing:'0.2em'}}>INITIATIVES</span>
          <h1 style={{fontFamily:'var(--font-fraunces),Georgia,serif',fontSize:'clamp(2rem,5vw,3.5rem)',fontWeight:600,lineHeight:'1.1',color:'#1A5C2E'}}>What we&apos;re<br/><span style={{fontStyle:'italic',color:'#259745'}}>doing right now.</span></h1>
          <p className="mt-4 max-w-xl" style={{fontFamily:'var(--font-inter)',fontSize:'1rem',lineHeight:'1.7',color:'#4A4A40'}}>Ongoing programmes, active research, and community work — across Symboh and Comma.</p>
        </div>
      </div>
      <section className="py-16 lg:py-24" style={{backgroundColor:'white'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {initiatives.map(init=>(
              <div key={init.id} className="rounded-sm overflow-hidden" style={{border:'1px solid rgba(26,92,46,0.12)',backgroundColor:'#FAF8F0'}}>
                {/*
                  PHOTO SLOT — replace with:
                  <SubaImage src={`/images/initiatives/${init.id}.jpg`} alt={init.title} width={800} height={450} />
                */}
                <PhotoSlot
                  label={`${init.title} photo`}
                  sublabel="Hands in soil · candid · natural Meghalayan light"
                  aspectRatio="16/9"
                  accentColor={init.accentColor}
                />
                <div className="p-8">
                <div className="flex items-center justify-between mb-5">
                  <span className="px-2.5 py-0.5 rounded-sm text-white label-mono" style={{backgroundColor:init.status==='Active'?init.accentColor:'#4A4A40',fontSize:'0.55rem',letterSpacing:'0.15em'}}>{init.status.toUpperCase()}</span>
                  <span className="px-2.5 py-0.5 rounded-sm label-mono" style={{border:`1px solid ${init.accentColor}30`,color:init.accentColor,fontSize:'0.55rem',letterSpacing:'0.15em'}}>{init.wing.toUpperCase()}</span>
                </div>
                <h2 className="mb-2" style={{fontFamily:'var(--font-fraunces)',fontSize:'1.25rem',color:'#1A5C2E',fontWeight:600}}>{init.title}</h2>
                <p className="mb-4 text-sm font-medium" style={{fontFamily:'var(--font-inter)',color:init.accentColor}}>{init.tagline}</p>
                <p className="mb-5" style={{fontFamily:'var(--font-inter)',fontSize:'0.875rem',lineHeight:'1.65',color:'#4A4A40'}}>{init.description}</p>
                <Link href={init.href} className="inline-flex items-center gap-2 text-sm font-medium group" style={{color:init.accentColor,fontFamily:'var(--font-inter)'}}>
                  Learn more
                  <svg className="transition-transform group-hover:translate-x-1" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M8 4l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12" style={{backgroundColor:'#1A5C2E'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4" style={{fontFamily:'var(--font-fraunces)',fontSize:'1.5rem',fontWeight:600}}>Want to support an initiative?</h2>
          <Link href="/get-involved" className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold" style={{backgroundColor:'#FEC110',color:'#1A5C2E',fontFamily:'var(--font-inter)'}}>Get Involved</Link>
        </div>
      </section>
    </>
  );
}
