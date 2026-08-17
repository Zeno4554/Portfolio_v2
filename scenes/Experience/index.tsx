"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { Section } from "@/components/common/Section";
import { experience } from "@/data/experience";
import { gsap } from "@/lib/gsap";

function formatRange(start: string, end: string) {
  const fmt = (d: string) => {
    const [year, month] = d.split("-");
    const dateObj = new Date(parseInt(year, 10), parseInt(month, 10) - 1);
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };
  return `${fmt(start)} — ${end === "present" ? "Present" : fmt(end)}`;
}

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [activeMissionIndex, setActiveMissionIndex] = useState<number>(0);

  // Smooth 60 FPS mouse parallax offset
  const targetRot = useRef({ x: 0, y: 0 });
  const currentRot = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const offsetX = (e.clientX - cx) / (rect.width / 2);
      const offsetY = (e.clientY - cy) / (rect.height / 2);

      targetRot.current = {
        x: offsetX * 12,
        y: -offsetY * 8,
      };
    };

    const updateFrame = () => {
      currentRot.current.x += (targetRot.current.x - currentRot.current.x) * 0.08;
      currentRot.current.y += (targetRot.current.y - currentRot.current.y) * 0.08;

      if (containerRef.current) {
        containerRef.current.style.transform = `perspective(1000px) rotateX(${currentRot.current.y.toFixed(
          2
        )}deg) rotateY(${currentRot.current.x.toFixed(2)}deg) translateZ(0)`;
      }

      rafId.current = requestAnimationFrame(updateFrame);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafId.current = requestAnimationFrame(updateFrame);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  useLayoutEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>("[data-mission-card]");

    const ctx = gsap.context(() => {
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 85%" },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      id="experience"
      index="05"
      label="Field Operations Log"
      className="relative overflow-hidden bg-[#040605] py-32"
    >
      {/* Background Watermark */}
      <h1
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          whitespace-nowrap
          select-none
          font-display
          text-[clamp(8rem,18vw,18rem)]
          font-black
          uppercase
          tracking-[-0.08em]
          text-white/[0.018]
        "
      >
        FIELD LOG
      </h1>

      {/* Atmospheric Industrial Grid & Dust overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-30"
      >
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(245,158,11,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.04)_1px,transparent_1px)] [background-size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(4,6,5,0.85)_100%)]" />
      </div>

      {/* Header & Subtitle */}
      <div className="relative z-20 mb-12 text-center px-4">
        <div className="mb-2.5 inline-flex items-center gap-2.5 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-3.5 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-[#f59e0b]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#10b981] animate-pulse" />
          05 — FIELD OPERATIONS ARCHIVE
        </div>

        <h2 className="font-display text-4xl font-black uppercase tracking-[-0.04em] text-[#e8e4d8] md:text-5xl">
          Field Log
        </h2>

        <p className="mx-auto mt-3 max-w-md font-mono text-xs tracking-wider text-white/40">
          &quot;WHERE THEORY MET THE REAL WORLD.&quot;
        </p>
      </div>

      {/* Main Field Log Interactive Scene Container */}
      <div className="relative z-20 mx-auto max-w-5xl px-4">
        {/* Top Telemetry / Status Bar */}
        <div className="mb-6 flex items-center justify-between rounded-t-lg border border-[#f59e0b]/25 bg-[#090d0a]/90 px-5 py-3 font-mono text-[9px] text-white/60 shadow-lg">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#f59e0b]">
              <span className="h-2 w-2 rounded-full bg-[#f59e0b]" />
              FIELD EXPERIENCES: {experience.length}
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline text-white/40">
              SYSTEM STATUS: ARCHIVE
            </span>
          </div>

          <div className="flex items-center gap-2 text-white/40">
            <span>FIELD RECORDS</span>
            <span className="text-[#10b981]">VERIFIED</span>
          </div>
        </div>

        {/* 3D Parallax Outer Frame */}
        <div
          ref={containerRef}
          className="will-change-transform transition-transform duration-700 ease-out"
        >
          <div ref={listRef} className="space-y-8">
            {experience.map((role, idx) => {
              const isActive = activeMissionIndex === idx;
              const isDevtern = role.id === "devtern";
              const isBsnl = role.id === "bsnl";

              return (
                <div
                  key={role.id}
                  data-mission-card
                  onClick={() => setActiveMissionIndex(idx)}
                  className={`group relative overflow-hidden rounded-b-lg rounded-t-none border transition-all duration-500 ${
                    isActive
                      ? "border-[#f59e0b]/50 bg-[#0c100d] shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                      : "border-white/10 bg-[#080b09]/80 hover:border-white/25"
                  }`}
                >
                  {/* Corner Industrial Brackets */}
                  <div className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-[#f59e0b]/70" />
                  <div className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-[#f59e0b]/70" />
                  <div className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-[#f59e0b]/70" />
                  <div className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-[#f59e0b]/70" />

                  {/* Top Dossier Header Bar */}
                  <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-6 py-3 font-mono text-[9.5px] uppercase tracking-[0.25em]">
                    <div className="flex items-center gap-3">
                      <span className="text-[#f59e0b]">
                        MISSION {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-white/30">/</span>
                      <span className="text-white/80 font-bold">
                        {role.company}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-white/40">
                      <span>{role.location}</span>
                      <span className="text-white/30">|</span>
                      <span>{formatRange(role.start, role.end)}</span>
                      <span className="rounded bg-[#10b981]/15 px-2 py-0.5 text-[8px] text-[#10b981]">
                        COMPLETED
                      </span>
                    </div>
                  </div>

                  {/* Main Dossier Content */}
                  <div className="p-6 md:p-8">
                    <div className="grid gap-8 lg:grid-cols-[1.8fr_1fr]">
                      {/* Left: Role Details & Field Highlights */}
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="font-display text-2xl font-black uppercase tracking-tight text-white md:text-3xl">
                            {role.role}
                          </h3>
                        </div>

                        {/* Factual Summary */}
                        <p className="mt-3 font-body text-sm leading-6 text-white/70">
                          {role.summary}
                        </p>

                        {/* Factual Highlights List */}
                        <div className="mt-6 border-t border-white/10 pt-5">
                          <div className="mb-3 font-mono text-[8.5px] uppercase tracking-[0.25em] text-[#f59e0b]">
                            FIELD LOG HIGHLIGHTS
                          </div>

                          <ul className="space-y-3 font-body text-xs leading-5 text-white/80">
                            {role.highlights.map((highlight, hIdx) => (
                              <li
                                key={hIdx}
                                className="flex items-start gap-3 rounded border border-white/5 bg-white/[0.02] p-3 transition-colors group-hover:border-white/15"
                              >
                                <span className="mt-0.5 font-mono text-[10px] font-bold text-[#06b6d4]">
                                  [{String(hIdx + 1).padStart(2, "0")}]
                                </span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right: Real Technical Visual Artifacts Panel */}
                      <div className="flex flex-col justify-between rounded border border-white/10 bg-[#060807] p-5 font-mono">
                        {isDevtern && (
                          <div>
                            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-2 text-[8px] uppercase tracking-[0.25em] text-white/40">
                              <span>PYTHON AUTOMATION</span>
                              <span className="text-[#06b6d4]">REST API</span>
                            </div>

                            {/* Devtern Flow Diagram */}
                            <div className="mb-5 space-y-2">
                              <div className="flex items-center justify-between text-[7.5px] text-white/70">
                                <span>PYTHON</span>
                                <span>→</span>
                                <span>AUTOMATION</span>
                                <span>→</span>
                                <span>REST API</span>
                                <span>→</span>
                                <span>APPS</span>
                              </div>
                              <div className="h-1.5 w-full overflow-hidden rounded bg-white/10">
                                <div className="h-full w-full bg-gradient-to-r from-[#06b6d4] to-[#f59e0b]" />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <div className="rounded border border-white/10 bg-white/[0.02] p-2 text-[8px] text-white/60">
                                • AUTOMATION TOOL OPTIMIZATION
                              </div>
                              <div className="rounded border border-white/10 bg-white/[0.02] p-2 text-[8px] text-white/60">
                                • INTERACTIVE PYTHON APPLICATIONS
                              </div>
                              <div className="rounded border border-white/10 bg-white/[0.02] p-2 text-[8px] text-white/60">
                                • INTEGRATION RELIABILITY
                              </div>
                            </div>
                          </div>
                        )}

                        {isBsnl && (
                          <div>
                            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-2 text-[8px] uppercase tracking-[0.25em] text-white/40">
                              <span>NETWORK OPERATIONS</span>
                              <span className="text-[#10b981]">SYSTEM VERIFIED</span>
                            </div>

                            {/* Systems Checklist */}
                            <div className="mb-4 grid grid-cols-3 gap-1.5 text-center text-[8px]">
                              <div className="rounded border border-[#10b981]/30 bg-[#10b981]/10 p-1.5 text-[#10b981]">
                                GSM ✓
                              </div>
                              <div className="rounded border border-[#10b981]/30 bg-[#10b981]/10 p-1.5 text-[#10b981]">
                                FTTH ✓
                              </div>
                              <div className="rounded border border-[#10b981]/30 bg-[#10b981]/10 p-1.5 text-[#10b981]">
                                BROADBAND ✓
                              </div>
                            </div>

                            {/* Monitoring Metrics & Field Operations */}
                            <div className="space-y-1.5 text-[7.5px] text-white/60">
                              <div className="flex justify-between border-b border-white/5 pb-1">
                                <span>KPI MONITORING</span>
                                <span className="text-white/40">PACKET LOSS / TRAFFIC / SIGNAL</span>
                              </div>
                              <div className="flex justify-between border-b border-white/5 pb-1">
                                <span>FIELD OPERATIONS</span>
                                <span className="text-white/40">FIBER SPLICING / OTDR / FAULT ISOLATION</span>
                              </div>
                              <div className="flex justify-between">
                                <span>REPORTING</span>
                                <span className="text-white/40">EXCEL VBA AUTOMATION</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Real Prominent Metric for BSNL or Devtern */}
                        {isBsnl && (
                          <div className="mt-6 flex items-center justify-between rounded border border-[#10b981]/30 bg-[#10b981]/10 p-3 text-[#10b981]">
                            <div>
                              <div className="font-display text-3xl font-black leading-none">
                                300+
                              </div>
                              <div className="mt-1 text-[7.5px] uppercase tracking-wider text-white/80">
                                Users Affected
                              </div>
                            </div>
                            <div className="text-right text-[7.5px] uppercase tracking-widest text-white/40">
                              FTTH FAULT RESTORATION
                            </div>
                          </div>
                        )}

                        {isDevtern && (
                          <div className="mt-6 flex items-center justify-between rounded border border-[#f59e0b]/30 bg-[#f59e0b]/10 p-3 text-[#f59e0b]">
                            <div>
                              <div className="font-mono text-base font-bold leading-tight">
                                PYTHON
                              </div>
                              <div className="mt-0.5 text-[7.5px] uppercase tracking-wider text-white/80">
                                Automation & APIs
                              </div>
                            </div>
                            <div className="text-right text-[7.5px] uppercase tracking-widest text-white/40">
                              RELIABILITY ENHANCED
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Footer Stamp */}
                  <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.01] px-6 py-2.5 font-mono text-[8px] uppercase tracking-[0.2em] text-white/30">
                    <span>DISPATCH ID: {role.id}</span>
                    <span>VERIFIED OPERATIONAL LOG</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Navigation Hint */}
        <div className="mt-8 text-center font-mono text-[7.5px] uppercase tracking-[0.25em] text-white/20">
          Move mouse to inspect telemetry · Field records synchronized
        </div>
      </div>
    </Section>
  );
}
