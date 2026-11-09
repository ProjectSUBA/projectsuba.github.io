'use client';
import { useState } from 'react';
import Link from 'next/link';
import { publications } from '@/lib/data';

const categories = ['All', 'Policy Brief', 'Research Paper', 'Report', 'Newsletter', 'White Paper'];
const wings = ['All Wings', 'SUBA', 'Symboh', 'Comma'];
const catColors: Record<string,string> = { 'Policy Brief':'#1F8EC8','Research Paper':'#1A5C2E','Report':'#F6A225','Newsletter':'#259745','White Paper':'#961416' };

export function PublicationsClient() {
  const [cat, setCat] = useState('All');
  const [wing, setWing] = useState('All Wings');
  const filtered = publications.filter(p => (cat==='All'||p.category===cat) && (wing==='All Wings'||p.wing===wing));
  return (
    <>
      <div className="pt-28 pb-16" style={{backgroundColor:'#1A5C2E'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="label-mono text-white/40 block mb-4" style={{fontSize:'0.6rem',letterSpacing:'0.2em'}}>PUBLICATIONS</span>
          <h1 className="text-white mb-4" style={{fontFamily:'var(--font-fraunces),Georgia,serif',fontSize:'clamp(2rem,5vw,3.5rem)',fontWeight:600,lineHeight:'1.1'}}>Research &amp;<br/><span style={{color:'#FEC110',fontStyle:'italic'}}>Publications.</span></h1>
          <p className="text-white/70 max-w-xl" style={{fontFamily:'var(--font-inter)',fontSize:'1rem',lineHeight:'1.7'}}>Policy briefs, research papers, field reports, and newsletters — grounded in primary data from Meghalaya.</p>
        </div>
      </div>
      <div className="py-10" style={{backgroundColor:'#FAF0C8'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-6 flex-wrap">
          <div>
            <p className="label-mono mb-2" style={{color:'#259745',fontSize:'0.58rem',letterSpacing:'0.15em'}}>TYPE</p>
            <div className="flex flex-wrap gap-2">{categories.map(c=><button key={c} onClick={()=>setCat(c)} className="px-3 py-1.5 rounded-sm transition-colors" style={{fontFamily:'var(--font-inter)',fontSize:'0.8rem',backgroundColor:cat===c?'#1A5C2E':'white',color:cat===c?'white':'#1A1A1A',border:'1px solid rgba(26,92,46,0.2)'}}>{c}</button>)}</div>
          </div>
          <div>
            <p className="label-mono mb-2" style={{color:'#259745',fontSize:'0.58rem',letterSpacing:'0.15em'}}>WING</p>
            <div className="flex flex-wrap gap-2">{wings.map(w=><button key={w} onClick={()=>setWing(w)} className="px-3 py-1.5 rounded-sm transition-colors" style={{fontFamily:'var(--font-inter)',fontSize:'0.8rem',backgroundColor:wing===w?'#259745':'white',color:wing===w?'white':'#1A1A1A',border:'1px solid rgba(37,151,69,0.2)'}}>{w}</button>)}</div>
          </div>
        </div>
      </div>
      <section className="py-12 min-h-[50vh]" style={{backgroundColor:'white'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="label-mono mb-6" style={{color:'#4A4A40',fontSize:'0.6rem',letterSpacing:'0.15em'}}>{filtered.length} PUBLICATION{filtered.length!==1?'S':''}</p>
          <div className="divide-y" style={{borderColor:'rgba(26,92,46,0.1)'}}>
            {filtered.map(pub=>(
              <article key={pub.id} className="py-8 group">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-0.5 text-white rounded-sm" style={{backgroundColor:catColors[pub.category]||'#259745',fontFamily:'var(--font-jetbrains)',fontSize:'0.58rem'}}>{pub.category.toUpperCase()}</span>
                      {pub.wing&&<span className="label-mono" style={{color:'#4A4A40',fontSize:'0.58rem'}}>{pub.wing}</span>}
                      <span style={{fontFamily:'var(--font-inter)',fontSize:'0.75rem',color:'#4A4A40'}}>{new Date(pub.date).toLocaleDateString('en-IN',{year:'numeric',month:'long',day:'numeric'})}</span>
                      {pub.readTime&&<span className="label-mono" style={{color:'#4A4A40',fontSize:'0.58rem'}}>{pub.readTime} read</span>}
                    </div>
                    <Link href={`/publications/${pub.slug}`}>
                      <h2 className="mb-2 group-hover:text-[#259745] transition-colors" style={{fontFamily:'var(--font-fraunces),Georgia,serif',fontSize:'1.125rem',color:'#1A5C2E',fontWeight:600,lineHeight:'1.35'}}>{pub.title}</h2>
                    </Link>
                    <p className="mb-3" style={{fontFamily:'var(--font-inter)',fontSize:'0.875rem',lineHeight:'1.65',color:'#4A4A40'}}>{pub.summary}</p>
                    <p style={{fontFamily:'var(--font-inter)',fontSize:'0.78rem',color:'#4A4A40'}}>By {pub.author}</p>
                    {pub.tags&&<div className="flex flex-wrap gap-1.5 mt-3">{pub.tags.map(tag=><span key={tag} className="px-2 py-0.5 rounded-sm" style={{backgroundColor:'#FAF0C8',fontFamily:'var(--font-inter)',fontSize:'0.7rem',color:'#4A4A40'}}>{tag}</span>)}</div>}
                  </div>
                  {pub.downloadUrl&&<a href={pub.downloadUrl} className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-sm transition-all hover:-translate-y-px" style={{border:'1px solid rgba(26,92,46,0.25)',color:'#1A5C2E',fontFamily:'var(--font-inter)',fontSize:'0.8rem',fontWeight:500}}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 2v7M4 6l3 3 3-3M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Download PDF</a>}
                </div>
              </article>
            ))}
          </div>
          {filtered.length===0&&<div className="text-center py-20"><p style={{fontFamily:'var(--font-inter)',color:'#4A4A40',fontSize:'1rem'}}>No publications match this filter.</p></div>}
        </div>
      </section>
    </>
  );
}
