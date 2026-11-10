import Link from 'next/link';
import { Section, SectionHead } from '@/components/ui/Section';

const ways = [
  {
    title: 'Volunteer',
    href: '/get-involved#volunteer',
    body: 'Clean-ups, plantations and awareness work. If you can turn up, there is something for you to do.',
  },
  {
    title: 'Collaborate',
    href: '/get-involved#collaborate',
    body: 'Researchers, educators and data people who want to work on Shillong’s problems with us.',
  },
  {
    title: 'Partner',
    href: '/get-involved#partner',
    body: 'Organisations and institutions whose values line up with ours.',
  },
];

export function TakePart() {
  return (
    <Section tone="green" labelledBy="take-part-heading">
      <SectionHead label="Get involved" title="Volunteer, collaborate or partner" id="take-part-heading" dark />
      <div className="grid gap-10 md:grid-cols-3 md:divide-x md:divide-white/30">
        {ways.map((way) => (
          <div key={way.title} className="md:px-8 md:first:pl-0 md:last:pr-0">
            <h3 className="font-display text-2xl font-bold text-white">{way.title}</h3>
            <p className="mt-3 text-[1rem] leading-relaxed text-white/90">{way.body}</p>
            <p className="mt-5">
              <Link href={way.href} className="font-semibold text-mikado underline decoration-2 underline-offset-4 hover:bg-mikado hover:text-forest">
                {way.title} with us →
              </Link>
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
