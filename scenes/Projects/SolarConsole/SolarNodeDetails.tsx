"use client";

import { GraphNode } from "./architectureData";

interface Props {
  node: GraphNode | null;
}

export default function SolarNodeDetails({ node }: Props) {
  if (!node) {
    return (
      <section className="rounded-3xl border border-white/10 bg-[#05080d]/90 backdrop-blur-xl p-6">
        <p className="font-mono text-xs tracking-[.45em] text-cyan-400">NODE DETAILS</p>
        <p className="mt-8 text-white/40">Select a solar module in the graph to inspect its role.</p>
      </section>
    );
  }

  return (
    <section className="rounded-3xl border border-white/10 bg-[#05080d]/90 backdrop-blur-xl p-6">
      <p className="font-mono text-xs tracking-[.45em] text-emerald-400">MODULE DETAILS</p>
      <h2 className="mt-5 text-3xl font-black uppercase text-white">{node.title}</h2>
      <p className="mt-4 leading-7 text-white/70">{node.description}</p>

      <div className="mt-8 grid gap-4 text-sm text-white/70">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="font-mono text-[10px] uppercase tracking-[.35em] text-white/30">Folder</p>
          <p className="mt-3 font-mono text-cyan-300">{node.folder}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="font-mono text-[10px] uppercase tracking-[.35em] text-white/30">Input</p>
          <p className="mt-3 text-cyan-200">{node.input}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="font-mono text-[10px] uppercase tracking-[.35em] text-white/30">Output</p>
          <p className="mt-3 text-cyan-200">{node.output}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="font-mono text-[10px] uppercase tracking-[.35em] text-white/30">Average Latency</p>
          <p className="mt-3 text-cyan-200">{node.latency}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="font-mono text-[10px] uppercase tracking-[.35em] text-white/30">Files</p>
          <div className="mt-3 space-y-2">
            {node.files.map((file) => (
              <div key={file} className="rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2 font-mono text-xs text-white/70">
                {file}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
