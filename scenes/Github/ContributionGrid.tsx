"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";

const WEEKS = 24;
const DAYS = 7;

const MONTH_LABELS = ["Jan", "Mar", "May", "Jul", "Sep", "Nov"];

// Real portfolio repositories to represent code activity
const REPOSITORIES = [
  { name: "skycorridor-3d-drone", lang: "Python", color: "#3572A5" },
  { name: "solar-iot-dashboard", lang: "TypeScript", color: "#3178C6" },
  { name: "smart-query-assistant", lang: "Python", color: "#3572A5" },
  { name: "ott-streaming-platform", lang: "JavaScript", color: "#F7DF1E" },
];

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
    <div
      className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#070a08]/90 p-6 font-mono shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl"
      role="img"
      aria-label="GitHub contribution activity archive"
    >
      {/* Background Subtle Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Frame Header */}
      <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3 text-[9px] uppercase tracking-[0.25em]">
        <div className="flex items-center gap-2 text-[#22d3ee]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
          <span>GITHUB / ACTIVITY ARCHIVE</span>
        </div>
        <span className="text-white/40">BRANCH: MAIN</span>
      </div>

      {/* Month Labels Bar */}
      <div className="mb-2 flex justify-between px-1 font-mono text-[7.5px] uppercase tracking-wider text-white/35">
        {MONTH_LABELS.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>

      {/* Contribution Grid */}
      <div className="overflow-x-auto pb-1">
        <div className="flex gap-1.5">
          {cells.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1.5">
              {week.map((intensity, di) => (
                <div
                  key={di}
                  className={cn(
                    "h-3 w-3 rounded-[2px] transition-all duration-300 hover:scale-125 hover:z-20",
                    intensity > 0.75
                      ? "bg-[#22d3ee] shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                      : intensity > 0.5
                      ? "bg-[#0891b2] shadow-[0_0_6px_rgba(8,145,178,0.5)]"
                      : intensity > 0.25
                      ? "bg-[#164e63]"
                      : "bg-[#101412] border border-white/5"
                  )}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Contribution Legend */}
      <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[8px] text-white/40">
        <span>RECENT CONTRIBUTIONS</span>
        <div className="flex items-center gap-1.5">
          <span>Less</span>
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-[1px] bg-[#101412] border border-white/5" />
            <span className="h-2 w-2 rounded-[1px] bg-[#164e63]" />
            <span className="h-2 w-2 rounded-[1px] bg-[#0891b2]" />
            <span className="h-2 w-2 rounded-[1px] bg-[#22d3ee]" />
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Git Terminal / Real Project Repositories Visual */}
      <div className="mt-5 rounded border border-white/10 bg-[#040605] p-3 text-[8.5px] text-white/70">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[7.5px] uppercase tracking-widest text-white/40">
          <span>$ git status --short</span>
          <span className="text-[#22d3ee]">PUBLIC REPOSITORIES</span>
        </div>

        <div className="mt-2.5 space-y-1.5 font-mono">
          {REPOSITORIES.map((repo) => (
            <div key={repo.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[#22d3ee]">M</span>
                <span className="text-white/80">{repo.name}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[7.5px] text-white/40">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: repo.color }}
                />
                <span>{repo.lang}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Frame Footer Stamp */}
      <div className="mt-4 flex items-center justify-between font-mono text-[7.5px] uppercase tracking-[0.2em] text-white/25">
        <span>ARCHIVE ID: REPO-COMMITS</span>
        <span>OPEN SOURCE DEPLOYMENT</span>
      </div>
    </div>
  );
}
