"use client";

import { SolarStageId, stageLogs } from "./Pipeline";

interface Props {
  active: SolarStageId | null;
}

export default function SolarExecutionLog({ active }: Props) {
  const timeline = [
    "Solar panel calibrates output.",
    "ESP8266 connects to AWS IoT Core.",
    "Telemetry packet submitted.",
    "Storage ingestion confirmed.",
    "Prediction model evaluated.",
    "Analytics metrics generated.",
    "Power BI dashboard refreshed.",
  ];

  return (
    <section className="h-full rounded-3xl border border-white/10 bg-[#05080d]/90 backdrop-blur-xl p-6">
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs tracking-[.45em] text-cyan-400">SOLAR EXECUTION</p>
        <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">{active ? stageLogs[active] : "Idle"}</span>
      </div>

      <div className="mt-6 h-[290px] overflow-y-auto pr-3 text-sm text-white/75 space-y-4 touch-auto overscroll-contain">
        {timeline.map((entry, index) => (
          <div key={index} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
            <p className="font-mono text-[11px] uppercase tracking-[.35em] text-white/30">Step {index + 1}</p>
            <p className="mt-2 leading-7">{entry}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
