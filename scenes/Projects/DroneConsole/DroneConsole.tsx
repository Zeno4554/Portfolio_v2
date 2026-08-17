"use client";

import { useMemo, useState } from "react";
import useDronePipeline from "./useDronePipeline";
import DroneArchitectureGraph from "./DroneArchitectureGraph";
import DroneNodeDetails from "./DroneNodeDetails";
import DroneFolderExplorer from "./DroneFolderExplorer";
import DroneExecutionLog from "./DroneExecutionLog";
import { graphNodes } from "./architectureData";

export default function DroneConsole() {
  const pipeline = useDronePipeline();
  const [selectedNodeId, setSelectedNodeId] = useState("route-planning");

  const selectedNode = useMemo(
    () => graphNodes.find((node) => node.id === selectedNodeId) ?? graphNodes[0],
    [selectedNodeId]
  );

  return (
    <section className="flex min-h-full flex-col gap-6 p-8">
      <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#020c18]/90 p-6 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-[.45em] text-sky-400">SKYCORRIDOR MISSION CONTROL</p>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-white">SkyCorridor Drone Navigation System</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
              Intelligent drone navigation for urban corridors, with FastAPI mission control, spatial database routing, and Streamlit flight simulation.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/80">
            <div className="space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-[.35em] text-white/35">Platform</p>
              <p>Python · FastAPI · PostgreSQL · Streamlit</p>
            </div>
            <div className="space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-[.35em] text-white/35">Execution</p>
              <p>{pipeline.running ? "Mission Active" : "Ready"}</p>
            </div>
            <button
              onClick={pipeline.start}
              disabled={pipeline.running}
              className="rounded-full border border-sky-400/30 bg-sky-400/10 px-6 py-2 font-mono text-xs tracking-[.35em] text-sky-200 transition hover:border-sky-300 hover:bg-sky-400/15 disabled:opacity-40"
            >
              {pipeline.running ? "DEPLOYING..." : "START MISSION"}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[320px_1fr_380px] gap-6">
        <aside className="min-h-[720px] rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
          <DroneFolderExplorer activeNode={selectedNodeId} />
        </aside>

        <main className="min-h-[720px] rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
          <DroneArchitectureGraph
            activeFlow={pipeline.activeStage}
            onSelect={(id) => setSelectedNodeId(id)}
          />
        </main>

        <aside className="min-h-[720px] flex flex-col gap-6">
          <DroneNodeDetails node={selectedNode} />
          <DroneExecutionLog active={pipeline.activeStage} />
        </aside>
      </div>
    </section>
  );
}
