"use client";

import { useLayoutEffect } from "react";
import { ScrollTrigger } from "@/lib/gsap";
import { Section } from "@/components/common/Section";
import { timeline } from "@/data/timeline";
import { timelineAnimation } from "@/animations/timelineAnimation";

export function Timeline() {
  useLayoutEffect(() => {
    timelineAnimation();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);


  return (
    <Section
      id="timeline"
      index="02"
      label="Odyssey"
      className="relative py-40"
    >
      {/* Animated Spine */}
      <div className="absolute left-[92px] top-40 bottom-40 w-px bg-white/10">
        <div
          data-timeline-line
          className="absolute left-0 top-0 h-full w-full origin-top bg-cyan-400"
        />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-40">
        {timeline.map((item) => (
          <article
            key={item.id}
            data-timeline-item
            className="relative overflow-hidden grid gap-10 lg:grid-cols-[180px_1fr]"
          >
            {/* Soft reveal mask overlays the content and will slide away on reveal */}
            <div className="timeline-mask absolute inset-0 z-20 pointer-events-none rounded-[18px] bg-gradient-to-t from-[#02050d] to-transparent" />
            {/* Large parallax background year */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-start justify-end pr-6">
              <h2 className="timeline-bg-year font-display font-black text-[clamp(6rem,18vw,16rem)] leading-none text-white/6 select-none">
                {item.year}
              </h2>
            </div>
            {/* Year */}
            <div className="sticky top-32 h-fit">
              <h2 className="font-display text-7xl font-black text-cyan-300">
                {item.year}
              </h2>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h3 className="font-display text-5xl font-black uppercase text-white">
                {item.title}
              </h3>

              <p className="max-w-2xl text-xl leading-9 text-white/65">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}