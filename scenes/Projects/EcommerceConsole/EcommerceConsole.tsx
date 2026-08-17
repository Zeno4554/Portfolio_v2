"use client";

import { useMemo, useState } from "react";
import EcommerceArchitectureGraph from "./EcommerceArchitectureGraph";
import FolderExplorer from "./FolderExplorer";
import ExecutionLog from "./ExecutionLog";
import useEcommercePipeline from "./useEcommercePipeline";
import { graphNodes } from "./architectureData";

const projectSummary = {
  title: "Full Stack E-Commerce Platform",
  description:
    "A production-grade commerce app connecting React storefront routing, Express APIs, Prisma ORM, PostgreSQL, and Razorpay checkout flows.",
  highlights: [
    "Client-side product catalog, cart, and checkout experience",
    "Secure JWT authentication with protected order and user routes",
    "Server-side Express controllers coordinating Prisma persistence and payment verification",
    "PostgreSQL-backed transaction and order lifecycle management",
  ],
};

export default function EcommerceConsole() {
  const [activeId, setActiveId] = useState<string>(graphNodes[0].id);
  const { stages, activeStage, running, messages, start, stop, reset } = useEcommercePipeline();

  const activeNode = useMemo(
    () => graphNodes.find((node) => node.id === activeId) ?? graphNodes[0],
    [activeId]
  );

  return (
    <div className="space-y-10 px-6 py-8 lg:px-10">
      <section className="grid gap-8 lg:grid-cols-[1.35fr_0.95fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Engineering console</p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            E-Commerce architecture deep dive
          </h1>
          <p className="max-w-3xl text-base leading-8 text-slate-300">
            {projectSummary.description}
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {projectSummary.highlights.map((highlight) => (
              <div key={highlight} className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 text-sm text-slate-200 shadow-lg shadow-slate-950/30">
                {highlight}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-4xl border border-white/10 bg-[#061024]/90 p-6 shadow-[0_30px_120px_-70px_rgba(15,23,42,0.8)]">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Active backend module</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">{activeNode.title}</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">{activeNode.description}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-950/50 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Folder</p>
              <p className="mt-2 text-sm text-slate-200">{activeNode.folder}</p>
            </div>
            <div className="rounded-3xl bg-slate-950/50 p-4">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Latency</p>
              <p className="mt-2 text-sm text-slate-200">{activeNode.latency}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-6">
          <EcommerceArchitectureGraph activeFlow={activeStage ?? activeId} onSelect={setActiveId} />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#05080f]/90 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Pipeline status</p>
              <div className="mt-4 space-y-2 text-sm text-slate-200">
                <div className="flex items-center justify-between rounded-2xl bg-slate-950/80 px-4 py-3">
                  <span>Active stage</span>
                  <span className="font-semibold text-white">{activeStage ?? "Idle"}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-950/80 px-4 py-3">
                  <span>Running</span>
                  <span className="font-semibold text-white">{running ? "Yes" : "No"}</span>
                </div>
                <div className="rounded-2xl bg-slate-950/80 px-4 py-3 text-xs uppercase tracking-[0.35em] text-slate-400">
                  Use the controls to replay the full commerce flow from storefront render through order completion.
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#05080f]/90 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Controls</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={start}
                  className="inline-flex items-center justify-center rounded-2xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
                >
                  Start flow
                </button>
                <button
                  type="button"
                  onClick={stop}
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-700"
                >
                  Stop
                </button>
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-transparent px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/5"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <FolderExplorer activeId={activeId} />
          <ExecutionLog messages={messages} />
        </div>
      </section>
    </div>
  );
}
