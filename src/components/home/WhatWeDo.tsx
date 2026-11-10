import { focusAreas } from '@/lib/data';
import { Reveal } from '@/components/ui/Reveal';
import { Icon, type IconName } from '@/components/ui/Icons';
import { SectionHeading } from '@/components/ui/Section';

export function WhatWeDo() {
  return (
    <section className="bg-white py-20 lg:py-28" aria-labelledby="whatwedo-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="What we do" id="whatwedo-heading" title={<>Six areas of work, <em>one place.</em></>}>
          Our work spans environment, civic action, research, education, circular economy and policy, always grounded in Meghalaya.
        </SectionHeading>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, i) => (
            <Reveal key={area.title} delay={(i % 3) * 90}>
              <div className="card card-lift relative h-full overflow-hidden p-7">
                <div
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full"
                  style={{ background: area.color, filter: 'blur(40px)', opacity: 0.08 }}
                  aria-hidden="true"
                />
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: area.color + '1F' }}
                  aria-hidden="true"
                >
                  <Icon name={area.icon as IconName} color={area.color === '#FEC110' ? '#8A5200' : area.color} />
                </div>
                <div className="mb-4 h-1 w-8 rounded-full" style={{ backgroundColor: area.color }} aria-hidden="true" />
                <h3 className="mb-3 font-display text-[1.1875rem] font-semibold">{area.title}</h3>
                <p className="text-sm leading-relaxed text-suba-muted">{area.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
