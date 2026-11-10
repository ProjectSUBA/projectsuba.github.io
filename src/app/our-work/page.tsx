import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { PhotoSlot } from '@/components/ui/SubaImage';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icons';
import { galleryEntries } from '@/lib/data';
import { formatDate, wingTone } from '@/lib/ui';

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Photo documentation of SUBA campaigns and field work, before, during and after. Shillong, Meghalaya.',
};

const statColor = { SUBA: 'text-dark-green', Symboh: 'text-blue-ink', Comma: 'text-green-ink' } as const;

export default function OurWorkPage() {
  return (
    <>
      <PageHeader eyebrow="Our work" title={<>Before, during <em>and after.</em></>}>
        The before and after is part of every SUBA campaign, not an extra. It closes the loop. Here is the documented record of our field work, drive by drive.
      </PageHeader>

      <Section>
        <div className="space-y-16">
          {galleryEntries.map((entry, idx) => (
            <Reveal key={entry.id}>
              <article className={idx > 0 ? 'border-t border-dark-green/10 pt-16' : ''} aria-labelledby={`work-${entry.id}`}>
                <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <Badge tone={wingTone[entry.wing]}>{entry.wing}</Badge>
                      <time dateTime={entry.date} className="text-[0.8rem] text-suba-muted">{formatDate(entry.date)}</time>
                    </div>
                    <h2 id={`work-${entry.id}`} className="font-display text-2xl font-semibold">{entry.title}</h2>
                    <p className="mt-1.5 flex items-center gap-1.5 text-sm text-suba-muted">
                      <Icon name="pin" size={15} />
                      {entry.location}
                    </p>
                  </div>

                  <dl className="flex flex-shrink-0 gap-6">
                    {entry.stats.map((s) => (
                      <div key={s.label} className="flex flex-col-reverse">
                        <dt className="text-[0.75rem] text-suba-muted">{s.label}</dt>
                        <dd className={`font-display text-2xl font-bold ${statColor[entry.wing]}`}>{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <p className="mb-8 max-w-2xl text-[0.9375rem] leading-[1.7]">{entry.summary}</p>

                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {/*
                    PHOTO SLOTS. Replace each with:
                    <SubaImage src={`/images/our-work/${entry.id}-before.jpg`} alt={entry.before.caption} width={500} height={375} className="rounded-md" />
                    (and the same for -during.jpg and -after.jpg)
                  */}
                  <div>
                    <span className="label-mono mb-2 block text-suba-muted">Before</span>
                    <PhotoSlot label="Before photo" sublabel={entry.before.caption} aspectRatio="4/3" accentColor="#961416" />
                  </div>
                  <div>
                    <span className="label-mono mb-2 block text-suba-muted">During</span>
                    <PhotoSlot label="During photo" sublabel={entry.during.caption} aspectRatio="4/3" accentColor="#F6A225" />
                  </div>
                  <div>
                    <span className="label-mono mb-2 block text-suba-muted">After</span>
                    <PhotoSlot label="After photo" sublabel={entry.after.caption} aspectRatio="4/3" accentColor="#259745" />
                  </div>
                </div>

                {entry.reflection && (
                  <blockquote className="mb-4 rounded-lg bg-cream-light p-5">
                    <p className="font-display text-[0.9375rem] italic leading-relaxed text-dark-green">{entry.reflection}</p>
                  </blockquote>
                )}

                {entry.credits && <p className="text-xs text-suba-muted">{entry.credits.join(' · ')}</p>}
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <div className="text-center">
          <h2 className="mb-5 font-display text-2xl font-semibold">Want to be part of the next one?</h2>
          <ButtonLink href="/get-involved#volunteer">Volunteer with SUBA</ButtonLink>
        </div>
      </Section>
    </>
  );
}
