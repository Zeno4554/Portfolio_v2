"use client";

import { DroneStageId, stageLogs } from "./Pipeline";

interface Props {
  active: DroneStageId | null;
}

export default function DroneExecutionLog({ active }: Props) {
  const timeline = [
    "Urban corridor constraints are loaded.",
    "Navigation service instantiates route smoothing algorithms.",
    "FastAPI mission endpoints are validated.",
    "Spatial database index is built for geofencing queries.",
    "Fleet status and telemetry heartbeat are synchronized.",
    "Streamlit simulation renders active drone trajectories.",
    "Docker compose boots the mission stack.",
  ];

  return (
    <section className="h-full rounded-3xl border border-white/10 bg-[#040d16]/90 backdrop-blur-xl p-6">
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs tracking-[.45em] text-sky-400">DRONE EXECUTION</p>
        <span className="rounded-full bg-sky-400/10 px-3 py-1 text-xs text-sky-200">{active ? stageLogs[active] : "Idle"}</span>
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
