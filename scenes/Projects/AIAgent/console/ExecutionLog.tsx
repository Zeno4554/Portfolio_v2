"use client";

import { executionSteps } from "../data/executionSteps";

interface Props {
  active: string;
}

export default function ExecutionLog({
  active,
}: Props) {
  const logs =
    executionSteps[active] ?? [];

  return (
    <section
      className="
        flex
        h-full
        flex-col
        rounded-3xl
        border
        border-white/10
        bg-[#05080d]/90
        backdrop-blur-xl
        p-6
      "
    >
      <div className="flex items-center justify-between">

        <p className="font-mono text-xs tracking-[.45em] text-cyan-400">
          EXECUTION TRACE
        </p>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

          <span className="font-mono text-xs tracking-[.3em] text-emerald-300">
            LIVE
          </span>
        </div>

      </div>

      <div
        className="
          mt-6
          flex-1
          space-y-4
          overflow-y-auto
        "
      >
        {logs.map((log, index) => (
          <div
            key={index}
            className="
              rounded-xl
              border
              border-white/5
              bg-white/[0.02]
              p-4
            "
          >
            <p className="font-mono text-xs tracking-[.3em] text-cyan-300 uppercase">
              {log.title}
            </p>

            <p
              className="
                mt-3
                text-sm
                leading-7
                text-white/70
              "
            >
              {log.status}
            </p>
          </div>
        ))}

        {logs.length === 0 && (
          <p className="text-white/40">
            Waiting for pipeline execution...
          </p>
        )}
      </div>
    </section>
  );
}