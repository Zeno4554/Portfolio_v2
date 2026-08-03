"use client";

import Image from "next/image";
import { Section } from "@/components/common/Section";
import { useGsapScrollTrigger } from "@/animations/hooks/useGsapScrollTrigger";
import { projects } from "@/data/projects";

/**
 * Projects — same pinned horizontal-scroll pattern as Timeline, but each
 * card is a full case-study surface rather than a milestone marker. Kept
 * as a separate scene (not a shared component) because the two will very
 * likely diverge in interaction detail as the site matures.
 */
export function Projects() {
  const featured = projects.filter((p) => p.featured);

  const sceneRef = useGsapScrollTrigger<HTMLDivElement>(
    ({ timeline }) => {
      const track = document.querySelector<HTMLElement>("[data-projects-track]");
      if (!track) return;
      timeline.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
      });
    },
    { pin: true, end: () => `+=${featured.length * 700}`, scrub: 1 }
  );

  return (
    <Section id="projects" index="04" label="Featured Projects" bleed>
      <div ref={sceneRef} className="relative h-svh overflow-hidden">
        <div data-projects-track className="flex h-full items-center gap-16 pl-12 pr-[30vw]">
          {featured.map((project) => (
            <article
              key={project.id}
              className="glass-panel w-[min(80vw,640px)] shrink-0 overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[16/9] w-full bg-surface-raised">
                <Image
                  src={project.coverImage}
                  alt={`${project.title} cover`}
                  fill
                  sizes="640px"
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl font-medium text-ink">{project.title}</h3>
                  <span className="font-mono text-xs text-ink-faint">{project.year}</span>
                </div>
                <p className="mt-3 font-body text-ink-muted">{project.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-glass-border px-3 py-1 font-mono text-[11px] text-ink-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
