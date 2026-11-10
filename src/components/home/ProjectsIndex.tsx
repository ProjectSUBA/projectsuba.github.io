import Link from 'next/link';
import { Section, SectionHead } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';
import { projects } from '@/lib/data';

/** The four projects as an index, like a table of contents. */
export function ProjectsIndex() {
  return (
    <Section tone="white" labelledBy="projects-heading">
      <SectionHead label="Our work" aside={<Link href="/our-work" className="underline underline-offset-4 hover:bg-mikado">All projects →</Link>} title="What we are working on" id="projects-heading" />
      <ul className="border-t border-ink/30">
        {projects.map((project) => (
          <li key={project.id}>
            <Link
              href={`/our-work/${project.id}`}
              className="group grid gap-2 border-b border-ink/30 py-6 transition-colors hover:bg-paper sm:grid-cols-12 sm:gap-6"
            >
              <span className="label-mono pt-1.5 text-suba-muted sm:col-span-3">{project.place}</span>
              <span className="sm:col-span-6">
                <span className="block font-display text-2xl font-bold leading-snug group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">
                  {project.title}
                </span>
                <span className="mt-1 block text-[0.975rem] leading-relaxed text-suba-muted">{project.summary}</span>
              </span>
              <span className="flex items-start gap-3 sm:col-span-3 sm:flex-col sm:items-end sm:gap-2">
                <Tag tone={project.wing === 'Symboh' ? 'blue' : 'green'}>{project.wing}</Tag>
                <span className="label-mono pt-0.5 text-suba-muted">Since {project.since}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
