"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

const WEEKS = 26;
const DAYS = 7;

/**
 * Renders a GitHub-style contribution grid. Currently seeded with a
 * deterministic pseudo-random pattern so the visual is real, not a gray
 * box — swap `generateIntensity` for a fetch against the GitHub GraphQL
 * API (server component + revalidate) when real data is wired up.
 */
function generateIntensity(week: number, day: number) {
  const seed = Math.sin(week * 12.9898 + day * 78.233) * 43758.5453;
  return Math.abs(seed - Math.floor(seed));
}

export function ContributionGrid() {
  const cells = useMemo(
    () =>
      Array.from({ length: WEEKS }, (_, week) =>
        Array.from({ length: DAYS }, (_, day) => generateIntensity(week, day))
      ),
    []
  );

  return (
    <div className="glass-panel flex gap-1 rounded-2xl p-6" role="img" aria-label="GitHub contribution activity">
      {cells.map((week, wi) => (
        <div key={wi} className="flex flex-col gap-1">
          {week.map((intensity, di) => (
            <div
              key={di}
              className={cn(
                "h-3 w-3 rounded-sm",
                intensity > 0.75
                  ? "bg-aurora-cyan"
                  : intensity > 0.5
                  ? "bg-aurora-cyan/50"
                  : intensity > 0.25
                  ? "bg-aurora-cyan/20"
                  : "bg-surface-raised"
              )}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
