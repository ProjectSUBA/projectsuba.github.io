import Link from 'next/link';
import { Section } from '@/components/ui/Section';

export function Intro() {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <p className="label-mono border-t-2 border-ink pt-3 lg:col-span-3">About SUBA</p>
        <div className="lg:col-span-9">
          <p className="font-display text-[clamp(1.6rem,3.2vw,2.35rem)] leading-[1.28] tracking-[-0.015em]">
            We plant trees and publish policy briefs. We run clean-up drives and share research with government bodies. We do both because Meghalaya needs both.
          </p>
          <div className="mt-8 grid gap-6 text-[1.0625rem] leading-relaxed text-suba-muted md:grid-cols-2">
            <p>
              SUBA is a Khasi word as well as an acronym. <em>Suba</em> speaks of what is clean and good, and it sits beside <em>khuid</em>, clean, in the phrase <em>khuid and suba</em>. In English it stands for Sustainable Urban and Bioregional Action.
            </p>
            <p>
              Our two wings do different jobs. <strong className="text-ink">Comma</strong> does the hands-on work: clean-ups, plantations and plastic recovery. <strong className="text-ink">Symboh</strong> does the research: surveys, policy briefs and papers about how Shillong works.
            </p>
          </div>
          <p className="mt-8">
            <Link href="/about" className="font-semibold underline decoration-2 underline-offset-4 hover:bg-mikado">
              About SUBA and the name →
            </Link>
          </p>
        </div>
      </div>
    </Section>
  );
}
