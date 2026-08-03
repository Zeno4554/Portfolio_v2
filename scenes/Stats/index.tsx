"use client";

import { Section } from "@/components/common/Section";
import { stats } from "@/data/social";
import { StatCounter } from "./StatCounter";

export function Stats() {
  return (
    <Section id="stats" index="06" label="Statistics" className="py-32">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.id}>
            <StatCounter value={stat.value} suffix={stat.suffix} />
            <p className="mt-3 font-mono text-xs tracking-wide text-ink-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
