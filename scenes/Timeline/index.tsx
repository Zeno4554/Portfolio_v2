"use client";

import { Section } from "@/components/common/Section";
import { useGsapScrollTrigger } from "@/animations/hooks/useGsapScrollTrigger";
import { timeline as milestones } from "@/data/social";

/**
 * Journey — a pinned scene where vertical scroll is translated into
 * horizontal motion across the milestone track. The pin duration is
 * proportional to the number of milestones so pacing stays consistent if
 * more are added later.
 */
export function Timeline() {
  const trackLength = milestones.length;

  const sceneRef = useGsapScrollTrigger<HTMLDivElement>(
    ({ timeline }) => {
      const track = document.querySelector<HTMLElement>("[data-timeline-track]");
      if (!track) return;
      timeline.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
      });
    },
    { pin: true, end: () => `+=${trackLength * 600}`, scrub: 1 }
  );

  return (
    <Section id="timeline" index="02" label="Journey" bleed>
      <div ref={sceneRef} className="relative h-svh overflow-hidden">
        <div
          data-timeline-track
          className="flex h-full items-center gap-24 pl-12 pr-[50vw]"
        >
          {milestones.map((m) => (
            <article key={m.id} className="w-[min(70vw,480px)] shrink-0">
              <span className="font-mono text-sm text-aurora-cyan">{m.year}</span>
              <h3 className="mt-3 font-display text-3xl font-medium text-ink">{m.title}</h3>
              <p className="mt-3 max-w-xs font-body text-ink-muted">{m.description}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
