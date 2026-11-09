import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Get Involved', description: 'Volunteer, collaborate, or partner with SUBA — Shillong, Meghalaya.' };

export default function GetInvolvedPage() {
  return (
    <>
      <div className="pt-28 pb-16" style={{backgroundColor:'#1A5C2E'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="label-mono text-white/40 block mb-4" style={{fontSize:'0.6rem',letterSpacing:'0.2em'}}>GET INVOLVED</span>
          <h1 className="text-white mb-4" style={{fontFamily:'var(--font-fraunces),Georgia,serif',fontSize:'clamp(2rem,5vw,3.5rem)',fontWeight:600,lineHeight:'1.1'}}>Show up.<br/><span style={{color:'#FEC110',fontStyle:'italic'}}>Be part of it.</span></h1>
          <p className="text-white/70 max-w-xl" style={{fontFamily:'var(--font-inter)',fontSize:'1rem',lineHeight:'1.7'}}>SUBA was built together. The name, the logo, the work — all of it. Here is how you can be part of what comes next.</p>
        </div>
      </div>

      <section id="volunteer" className="py-16 lg:py-24" style={{backgroundColor:'#FAF0C8'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="label-mono block mb-4" style={{color:'#259745',fontSize:'0.6rem',letterSpacing:'0.2em'}}>01 · VOLUNTEER</span>
              <h2 className="mb-4" style={{fontFamily:'var(--font-fraunces)',fontSize:'clamp(1.5rem,3vw,2rem)',color:'#1A5C2E',fontWeight:600}}>Join a drive or plantation</h2>
              <p className="mb-5" style={{fontFamily:'var(--font-inter)',fontSize:'1rem',lineHeight:'1.75',color:'#1A1A1A'}}>Clean-up drives, tree plantations, poster-making sessions, awareness campaigns. If you can show up, we have a place for you. Bring gloves and water. We handle the rest.</p>
              <p className="mb-6" style={{fontFamily:'var(--font-inter)',fontSize:'0.9rem',lineHeight:'1.7',color:'#4A4A40'}}>Maximum five fields, minimum commitment: showing up. Contact details collected — we'll loop you in on the next event in your area.</p>
              <a href="mailto:support@projectsuba.in?subject=Volunteer Application" className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold text-white transition-colors hover:bg-[#259745]" style={{backgroundColor:'#1A5C2E',fontFamily:'var(--font-inter)'}}>Apply as Volunteer</a>
            </div>
            <div className="bg-white rounded-sm p-8" style={{border:'1px solid rgba(26,92,46,0.12)'}}>
              <h3 className="mb-5" style={{fontFamily:'var(--font-fraunces)',fontSize:'1rem',color:'#1A5C2E',fontWeight:600}}>What to expect</h3>
              <ul className="space-y-4">
                {['A confirmation email within 24 hours of signing up.','WhatsApp group invite for your area or initiative.','A clear brief before every event — what, when, where, what to bring.','Your name in the credits after the event.','A follow-up showing what was accomplished.'].map((item,i)=>(
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{backgroundColor:'#259745'}} aria-hidden="true"/>
                    <span style={{fontFamily:'var(--font-inter)',fontSize:'0.875rem',lineHeight:'1.6',color:'#4A4A40'}}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="collaborate" className="py-16 lg:py-24" style={{backgroundColor:'white'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-sm p-8" style={{border:'1px solid rgba(31,142,200,0.2)',backgroundColor:'rgba(31,142,200,0.03)'}}>
              <h3 className="mb-5" style={{fontFamily:'var(--font-fraunces)',fontSize:'1rem',color:'#1A5C2E',fontWeight:600}}>Who we collaborate with</h3>
              <ul className="space-y-3">
                {['Researchers and academics working on Northeast India.','Policy practitioners with domain expertise.','Data scientists and civic technologists.','Educators developing environmental curricula.','Journalists covering Meghalayan ecology and governance.','Community leaders and traditional knowledge holders.'].map((item,i)=>(
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{backgroundColor:'#1F8EC8'}} aria-hidden="true"/>
                    <span style={{fontFamily:'var(--font-inter)',fontSize:'0.875rem',lineHeight:'1.6',color:'#4A4A40'}}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="label-mono block mb-4" style={{color:'#1F8EC8',fontSize:'0.6rem',letterSpacing:'0.2em'}}>02 · COLLABORATE</span>
              <h2 className="mb-4" style={{fontFamily:'var(--font-fraunces)',fontSize:'clamp(1.5rem,3vw,2rem)',color:'#1A5C2E',fontWeight:600}}>Research, policy, or field work</h2>
              <p className="mb-5" style={{fontFamily:'var(--font-inter)',fontSize:'1rem',lineHeight:'1.75',color:'#1A1A1A'}}>If your expertise aligns with our work — research, policy, education, civic data, or community design — write to us. We work with individuals and institutions who are serious and specific.</p>
              <a href="mailto:support@projectsuba.in?subject=Collaboration Enquiry" className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold text-white transition-colors" style={{backgroundColor:'#1F8EC8',fontFamily:'var(--font-inter)'}}>Start a Conversation</a>
            </div>
          </div>
        </div>
      </section>

      <section id="partner" className="py-16 lg:py-24" style={{backgroundColor:'#FAF0C8'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <span className="label-mono block mb-4" style={{color:'#259745',fontSize:'0.6rem',letterSpacing:'0.2em'}}>03 · PARTNER</span>
          <h2 className="mb-4" style={{fontFamily:'var(--font-fraunces)',fontSize:'clamp(1.5rem,3vw,2rem)',color:'#1A5C2E',fontWeight:600}}>Organisations and institutions</h2>
          <p className="mb-5" style={{fontFamily:'var(--font-inter)',fontSize:'1rem',lineHeight:'1.75',color:'#1A1A1A'}}>We partner with organisations whose values align with ours. No greenwashing. No extractive industries. No partners who benefit from environmental harm. Our core check: does this partnership pass all five traits?</p>
          <div className="p-5 rounded-sm mb-6" style={{backgroundColor:'white',border:'1px solid rgba(26,92,46,0.12)'}}>
            <p style={{fontFamily:'var(--font-inter)',fontSize:'0.875rem',lineHeight:'1.65',color:'#4A4A40',fontStyle:'italic'}}>Partners appear as "supported by" or "in partnership with." The SUBA logo is always first and equal or larger. Partners may not use SUBA's logo independently without written permission.</p>
          </div>
          <a href="mailto:support@projectsuba.in?subject=Partnership Enquiry" className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-sm font-semibold text-white transition-colors hover:bg-[#259745]" style={{backgroundColor:'#1A5C2E',fontFamily:'var(--font-inter)'}}>Partnership Enquiry</a>
        </div>
      </section>

      <section id="subscribe" className="py-16" style={{backgroundColor:'#1A5C2E'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="label-mono text-white/40 block mb-4" style={{fontSize:'0.6rem',letterSpacing:'0.2em'}}>04 · STAY INFORMED</span>
          <h2 className="text-white mb-3" style={{fontFamily:'var(--font-fraunces)',fontSize:'1.75rem',fontWeight:600}}>The SUBA Field Letter</h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto" style={{fontFamily:'var(--font-inter)',fontSize:'1rem',lineHeight:'1.7'}}>Field notes, research updates, and announcements — from Shillong. No spam. Unsubscribe anytime.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-sm bg-white/10 border border-white/20 text-white placeholder-white/35 focus:outline-none focus:border-[#FEC110]" style={{fontFamily:'var(--font-inter)',fontSize:'0.875rem'}} />
            <button className="px-6 py-3 rounded-sm text-sm font-semibold" style={{backgroundColor:'#FEC110',color:'#1A5C2E',fontFamily:'var(--font-inter)'}}>Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
}
