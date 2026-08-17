"use client";

import { useMemo, useState } from "react";
import useSolarPipeline from "./useSolarPipeline";
import SolarArchitectureGraph from "./SolarArchitectureGraph";
import SolarNodeDetails from "./SolarNodeDetails";
import SolarFolderExplorer from "./SolarFolderExplorer";
import SolarExecutionLog from "./SolarExecutionLog";
import { graphNodes } from "./architectureData";

export default function SolarConsole() {
  const pipeline = useSolarPipeline();
  const [selectedNodeId, setSelectedNodeId] = useState("solar-panel");

  const selectedNode = useMemo(
    () =>
      graphNodes.find((node) => node.id === selectedNodeId) ?? graphNodes[0],
    [selectedNodeId]
  );

  return (
    <section className="flex min-h-full flex-col gap-6 p-8">
      <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#05080d]/90 p-6 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs tracking-[.45em] text-emerald-400">SOLAR ENERGY ANALYTICS</p>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-white">Smart Solar Energy Analytics Platform</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
              Real-time ESP8266 telemetry, AWS IoT ingestion, Python-powered prediction, and Power BI visualization for end-to-end solar energy management.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-sm text-white/80">
            <div className="space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-[.35em] text-white/35">Platform</p>
              <p>ESP8266 · AWS IoT Core · Python · Power BI</p>
            </div>
            <div className="space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-[.35em] text-white/35">Execution</p>
              <p>{pipeline.running ? "Running" : "Ready"}</p>
            </div>
            <button
              onClick={pipeline.start}
              disabled={pipeline.running}
              className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-6 py-2 font-mono text-xs tracking-[.35em] text-emerald-200 transition hover:border-emerald-300 hover:bg-emerald-400/15 disabled:opacity-40"
            >
              {pipeline.running ? "EXECUTING..." : "RUN PIPELINE"}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[320px_1fr_380px] gap-6">
        <aside className="min-h-[720px] rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
          <SolarFolderExplorer activeNode={selectedNodeId} />
        </aside>

        <main className="min-h-[720px] rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
          <SolarArchitectureGraph
            activeFlow={pipeline.activeStage}
            onSelect={(id) => setSelectedNodeId(id)}
          />
        </main>

        <aside className="min-h-[720px] flex flex-col gap-6">
          <SolarNodeDetails node={selectedNode} />
          <SolarExecutionLog active={pipeline.activeStage} />
        </aside>
      </div>
    </section>
  );
}
