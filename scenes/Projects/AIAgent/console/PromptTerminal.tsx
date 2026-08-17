"use client";

import { useState } from "react";

interface Props {
  prompt: string;
  onPromptChange: (value: string) => void;
  onExecute: () => void;
  running: boolean;
}

export default function PromptTerminal({
  prompt,
  onPromptChange,
  onExecute,
  running,
}: Props) {
  return (
    <section
      className="
        h-full
        min-h-0
        flex
        flex-col
        rounded-3xl
        border
        border-white/10
        bg-[#05080d]/90
        backdrop-blur-xl
        overflow-hidden
      "
    >
      {/* =========================
          Header
      ========================= */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-white/10
          px-6
          py-4
        "
      >
        <div>
          <p className="font-mono text-xs tracking-[.45em] text-cyan-400">
            PROMPT TERMINAL
          </p>

          <p className="mt-2 text-sm text-white/50">
            AI Instruction Console
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

          <span className="font-mono text-xs tracking-[.3em] text-emerald-300">
            CONNECTED
          </span>
        </div>
      </div>

      {/* =========================
          Prompt Area
      ========================= */}

      <div className="flex-1 px-6 py-4 min-h-0 overflow-hidden">
        <div className="flex h-full gap-3 min-h-0">

          <span className="mt-1 font-mono text-cyan-400">
            &gt;
          </span>

          <textarea
            value={prompt}
            onChange={(e) =>
              onPromptChange(e.target.value)
            }
            spellCheck={false}
            className="
              h-full
              min-h-0
              w-full
              resize-none
              bg-transparent
              font-mono
              text-[15px]
              leading-8
              text-white/80
              outline-none
              placeholder:text-white/25
            "
          />

        </div>
      </div>

      {/* =========================
          Footer
      ========================= */}

      <div
        className="
          flex
          items-center
          justify-between
          border-t
          border-white/10
          px-6
          py-4
        "
      >
        <div className="font-mono text-xs tracking-[.25em] text-white/35">
          CTRL + ENTER TO EXECUTE
        </div>

        <button
          onClick={onExecute}
          disabled={running}
          className="
            rounded-full
            border
            border-cyan-400/30
            bg-cyan-500/10
            px-6
            py-2
            font-mono
            text-xs
            tracking-[.35em]
            text-cyan-300
            transition-all
            duration-300
            hover:border-cyan-300
            hover:bg-cyan-400/15
            disabled:opacity-40
          "
        >
          {running ? "EXECUTING..." : "EXECUTE"}
        </button>
      </div>
    </section>
  );
}