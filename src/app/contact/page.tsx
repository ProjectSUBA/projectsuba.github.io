import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Contact', description: 'Get in touch with SUBA — support@projectsuba.in · Shillong, Meghalaya.' };

export default function ContactPage() {
  return (
    <>
      <div className="pt-28 pb-16" style={{backgroundColor:'#FAF0C8'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="label-mono block mb-4" style={{color:'#259745',fontSize:'0.6rem',letterSpacing:'0.2em'}}>CONTACT</span>
          <h1 style={{fontFamily:'var(--font-fraunces),Georgia,serif',fontSize:'clamp(2rem,5vw,3.5rem)',fontWeight:600,lineHeight:'1.1',color:'#1A5C2E'}}>Write to us.<br/><span style={{fontStyle:'italic',color:'#259745'}}>We reply.</span></h1>
        </div>
      </div>
      <section className="py-16 lg:py-24" style={{backgroundColor:'white'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <h2 className="mb-6" style={{fontFamily:'var(--font-fraunces)',fontSize:'1.5rem',color:'#1A5C2E',fontWeight:600}}>Contact details</h2>
              <div className="space-y-6">
                {[
                  { label:'General', value:'support@projectsuba.in', note:'All queries — we aim to reply within 48 hours.' },
                  { label:'Website', value:'projectsuba.in', note:'This site.' },
                  { label:'Location', value:'Shillong, Meghalaya, India', note:'Published from the Khasi Hills.' },
                  { label:'Social', value:'@projectsuba', note:'Instagram · Twitter/X · LinkedIn' },
                ].map(item=>(
                  <div key={item.label} className="pb-5 border-b" style={{borderColor:'rgba(26,92,46,0.1)'}}>
                    <span className="label-mono block mb-1" style={{color:'#259745',fontSize:'0.58rem',letterSpacing:'0.15em'}}>{item.label.toUpperCase()}</span>
                    <p style={{fontFamily:'var(--font-fraunces)',fontSize:'1rem',color:'#1A5C2E',fontWeight:500}}>{item.value}</p>
                    <p style={{fontFamily:'var(--font-inter)',fontSize:'0.8rem',color:'#4A4A40'}}>{item.note}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 rounded-sm" style={{backgroundColor:'#FAF0C8',border:'1px solid rgba(26,92,46,0.1)'}}>
                <p style={{fontFamily:'var(--font-fraunces)',fontSize:'0.875rem',fontStyle:'italic',color:'#1A5C2E',lineHeight:'1.6'}}>"One email, one purpose. If you're asking about two different things, please write two emails."</p>
                <span className="label-mono mt-2 block" style={{color:'#4A4A40',fontSize:'0.55rem',letterSpacing:'0.15em'}}>— SUBA COMMUNICATION PRINCIPLES</span>
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="mb-6" style={{fontFamily:'var(--font-fraunces)',fontSize:'1.5rem',color:'#1A5C2E',fontWeight:600}}>Send a message</h2>
              <form className="space-y-5" action="mailto:support@projectsuba.in" method="get" encType="text/plain">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" style={{fontFamily:'var(--font-inter)',fontSize:'0.8rem',color:'#4A4A40',display:'block',marginBottom:'6px'}}>Name</label>
                    <input id="name" name="name" type="text" required placeholder="Your name" className="w-full px-4 py-3 rounded-sm border focus:outline-none focus:border-[#259745] transition-colors" style={{border:'1px solid rgba(26,92,46,0.2)',fontFamily:'var(--font-inter)',fontSize:'0.875rem',color:'#1A1A1A'}} />
                  </div>
                  <div>
                    <label htmlFor="email" style={{fontFamily:'var(--font-inter)',fontSize:'0.8rem',color:'#4A4A40',display:'block',marginBottom:'6px'}}>Email</label>
                    <input id="email" name="email" type="email" required placeholder="your@email.com" className="w-full px-4 py-3 rounded-sm border focus:outline-none focus:border-[#259745] transition-colors" style={{border:'1px solid rgba(26,92,46,0.2)',fontFamily:'var(--font-inter)',fontSize:'0.875rem',color:'#1A1A1A'}} />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" style={{fontFamily:'var(--font-inter)',fontSize:'0.8rem',color:'#4A4A40',display:'block',marginBottom:'6px'}}>Subject</label>
                  <select id="subject" name="subject" className="w-full px-4 py-3 rounded-sm border focus:outline-none focus:border-[#259745] transition-colors" style={{border:'1px solid rgba(26,92,46,0.2)',fontFamily:'var(--font-inter)',fontSize:'0.875rem',color:'#1A1A1A'}}>
                    <option>General Enquiry</option>
                    <option>Volunteer Application</option>
                    <option>Research Collaboration</option>
                    <option>Partnership</option>
                    <option>Media / Press</option>
                    <option>Logo or Brand Assets</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" style={{fontFamily:'var(--font-inter)',fontSize:'0.8rem',color:'#4A4A40',display:'block',marginBottom:'6px'}}>Message</label>
                  <textarea id="message" name="body" required rows={5} placeholder="What would you like to discuss?" className="w-full px-4 py-3 rounded-sm border focus:outline-none focus:border-[#259745] transition-colors resize-none" style={{border:'1px solid rgba(26,92,46,0.2)',fontFamily:'var(--font-inter)',fontSize:'0.875rem',color:'#1A1A1A'}} />
                </div>
                <button type="submit" className="px-7 py-3.5 rounded-sm text-sm font-semibold text-white transition-colors hover:bg-[#259745]" style={{backgroundColor:'#1A5C2E',fontFamily:'var(--font-inter)'}}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
