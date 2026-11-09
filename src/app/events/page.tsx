import type { Metadata } from 'next';
import { newsItems } from '@/lib/data';

export const metadata: Metadata = { title: 'Events & Updates', description: 'News, events, and field updates from SUBA — Shillong, Meghalaya.' };

const typeColors: Record<string,string> = { News:'#1F8EC8', Event:'#F6A225', Announcement:'#1A5C2E', Update:'#259745' };

export default function EventsPage() {
  const upcoming = newsItems.filter(n => n.type === 'Event');
  const updates = newsItems.filter(n => n.type !== 'Event');
  return (
    <>
      <div className="pt-28 pb-16" style={{backgroundColor:'#FAF0C8'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="label-mono block mb-4" style={{color:'#259745',fontSize:'0.6rem',letterSpacing:'0.2em'}}>EVENTS & UPDATES</span>
          <h1 style={{fontFamily:'var(--font-fraunces),Georgia,serif',fontSize:'clamp(2rem,5vw,3.5rem)',fontWeight:600,lineHeight:'1.1',color:'#1A5C2E'}}>What's happening<br/><span style={{fontStyle:'italic',color:'#259745'}}>in Shillong.</span></h1>
        </div>
      </div>
      <section className="py-16" style={{backgroundColor:'white'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8" style={{fontFamily:'var(--font-fraunces)',fontSize:'1.5rem',color:'#1A5C2E',fontWeight:600}}>Upcoming events</h2>
          {upcoming.length === 0 ? (
            <p style={{fontFamily:'var(--font-inter)',color:'#4A4A40',fontSize:'0.9rem'}}>No upcoming events scheduled yet. Check back soon or subscribe to our newsletter.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {upcoming.map(item => (
                <div key={item.id} className="p-6 rounded-sm" style={{backgroundColor:'#FAF0C8',border:'1px solid rgba(26,92,46,0.12)'}}>
                  <span className="px-2.5 py-0.5 rounded-sm text-white label-mono inline-block mb-4" style={{backgroundColor:typeColors[item.type],fontSize:'0.58rem',letterSpacing:'0.1em'}}>{item.type.toUpperCase()}</span>
                  <h3 className="mb-2" style={{fontFamily:'var(--font-fraunces)',fontSize:'1rem',color:'#1A5C2E',fontWeight:600,lineHeight:'1.35'}}>{item.title}</h3>
                  <p style={{fontFamily:'var(--font-inter)',fontSize:'0.85rem',lineHeight:'1.6',color:'#4A4A40'}}>{item.description}</p>
                  {item.location && <p className="mt-3 text-xs" style={{fontFamily:'var(--font-inter)',color:'#4A4A40'}}>📍 {item.location}</p>}
                  <p className="mt-2 text-xs" style={{fontFamily:'var(--font-inter)',color:'#4A4A40'}}>{new Date(item.date).toLocaleDateString('en-IN',{year:'numeric',month:'long',day:'numeric'})}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="py-16" style={{backgroundColor:'#FAF0C8'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8" style={{fontFamily:'var(--font-fraunces)',fontSize:'1.5rem',color:'#1A5C2E',fontWeight:600}}>Recent updates</h2>
          <div className="space-y-0 divide-y" style={{borderColor:'rgba(26,92,46,0.12)'}}>
            {updates.map(item => (
              <div key={item.id} className="py-6 flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-shrink-0 sm:w-32">
                  <span className="px-2 py-0.5 rounded-sm text-white label-mono inline-block mb-2" style={{backgroundColor:typeColors[item.type],fontSize:'0.55rem',letterSpacing:'0.1em'}}>{item.type.toUpperCase()}</span>
                  <p style={{fontFamily:'var(--font-inter)',fontSize:'0.72rem',color:'#4A4A40'}}>{new Date(item.date).toLocaleDateString('en-IN',{year:'numeric',month:'short',day:'numeric'})}</p>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2" style={{fontFamily:'var(--font-fraunces)',fontSize:'1rem',color:'#1A5C2E',fontWeight:600,lineHeight:'1.35'}}>{item.title}</h3>
                  <p style={{fontFamily:'var(--font-inter)',fontSize:'0.875rem',lineHeight:'1.65',color:'#4A4A40'}}>{item.description}</p>
                  {item.location && <p className="mt-2 text-xs" style={{fontFamily:'var(--font-inter)',color:'#4A4A40'}}>📍 {item.location}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
