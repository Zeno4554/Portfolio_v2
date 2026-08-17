"use client";

import { useMemo } from "react";
import { graphNodes } from "./architectureData";

interface Props {
  activeId: string | null;
}

export default function FolderExplorer({ activeId }: Props) {
  const activeNode = useMemo(
    () => graphNodes.find((node) => node.id === activeId) ?? graphNodes[0],
    [activeId]
  );

  return (
    <div className="rounded-3xl border border-white/10 bg-[#090b14]/90 p-6 text-sm text-slate-200 shadow-[0_25px_80px_-45px_rgba(15,23,42,0.8)]">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Selected module</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{activeNode.title}</h3>
        </div>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">
          {activeNode.column}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-3 rounded-3xl bg-slate-950/40 p-4">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Folder path</p>
          <p className="text-sm text-slate-200">{activeNode.folder}</p>
        </div>
        <div className="space-y-3 rounded-3xl bg-slate-950/40 p-4">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Latency estimate</p>
          <p className="text-sm text-slate-200">{activeNode.latency}</p>
        </div>
      </div>

      <div className="mt-6 rounded-3xl bg-slate-950/40 p-4">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Description</p>
        <p className="mt-3 text-sm leading-6 text-slate-200">{activeNode.description}</p>
      </div>

      <div className="mt-6 rounded-3xl bg-slate-950/40 p-4">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Key files</p>
        <div className="mt-3 space-y-2 text-sm text-slate-200">
          {activeNode.files.map((file) => (
            <div key={file} className="rounded-2xl bg-slate-900/80 px-3 py-2">
              {file}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
