"use client";

import { useLayoutEffect, useRef } from "react";
import { Section } from "@/components/common/Section";
import { experience } from "@/data/experience";
import { gsap } from "@/lib/gsap";

function formatRange(start: string, end: string) {
  const fmt = (d: string) => new Date(`${d}-01`).toLocaleDateString("en-US", { year: "numeric", month: "short" });
  return `${fmt(start)} — ${end === "present" ? "Present" : fmt(end)}`;
}

export function Experience() {
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const rows = el.querySelectorAll<HTMLElement>("[data-role-row]");

    const ctx = gsap.context(() => {
      rows.forEach((row) => {
        gsap.fromTo(
          row,
          { clipPath: "inset(0 0 100% 0)", opacity: 0 },
          {
            clipPath: "inset(0 0 0% 0)",
            opacity: 1,
            duration: 1,
            ease: "cinematicOut",
            scrollTrigger: { trigger: row, start: "top 85%" },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="experience" index="05" label="Experience" className="py-32">
      <div ref={listRef} className="divide-y divide-glass-border">
        {experience.map((role) => (
          <div key={role.id} data-role-row className="grid gap-4 py-10 md:grid-cols-[1fr_2fr]">
            <div>
              <h3 className="font-display text-xl font-medium text-ink">{role.role}</h3>
              <p className="mt-1 font-body text-ink-muted">{role.company}</p>
              <p className="mt-1 font-mono text-xs text-ink-faint">
                {formatRange(role.start, role.end)}
              </p>
            </div>
            <div>
              <p className="font-body text-ink-muted">{role.summary}</p>
              <ul className="mt-4 space-y-2">
                {role.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 font-body text-sm text-ink">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-aurora-cyan" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
