"use client";

import { EcommerceMessage } from "./useEcommercePipeline";

interface Props {
  messages: EcommerceMessage[];
}

export default function ExecutionLog({ messages }: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#02040a]/90 p-6 text-sm text-slate-200 shadow-[0_25px_80px_-55px_rgba(15,23,42,0.8)]">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Execution log</p>
          <h3 className="mt-2 text-xl font-semibold text-white">Pipeline events</h3>
        </div>
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">
          Real-time trace
        </span>
      </div>

      <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2 text-sm text-slate-200">
        {messages.map((message, index) => (
          <div key={`${message.role}-${index}`} className="rounded-3xl bg-slate-950/80 p-4 ring-1 ring-white/5 shadow-inner">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{message.role}</p>
            <p className="mt-2 leading-6">{message.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
