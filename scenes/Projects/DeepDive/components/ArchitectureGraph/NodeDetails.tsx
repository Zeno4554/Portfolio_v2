"use client";

import { GraphNode } from "./architectureData";

interface Props {
  node: GraphNode;
}

export default function NodeDetails({
  node,
}: Props) {
  return (
    <div className="space-y-10">
      {/* Module Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs tracking-[.45em] text-cyan-400">
            MODULE
          </p>

          <span
            className="
              rounded-full
              border
              border-emerald-400/20
              bg-emerald-400/10
              px-3
              py-1
              font-mono
              text-[10px]
              tracking-[.3em]
              text-emerald-300
            "
          >
            ONLINE
          </span>
        </div>

        <h2
          className="
            text-[46px]
            leading-none
            font-black
            uppercase
            tracking-tight
            text-white
          "
        >
          {node.title}
        </h2>
      </div>

      <div className="space-y-6">
        {/* Purpose Card */}
        <div
          className="
            rounded-2xl
            border
            border-white/6
            bg-white/[0.025]
            p-5
          "
        >
          <p className="font-mono text-[11px] tracking-[.45em] uppercase text-white/35">
            Purpose
          </p>

          <p className="mt-3 text-[15px] leading-7 text-white/75">
            {node.description}
          </p>
        </div>

        {/* Folder Card */}
        <div
          className="
            rounded-2xl
            border
            border-white/6
            bg-white/[0.025]
            p-5
          "
        >
          <p className="font-mono text-[11px] tracking-[.45em] uppercase text-white/35">
            Folder
          </p>

          <div
            className="
              mt-4
              inline-flex
              rounded-lg
              border
              border-cyan-400/10
              bg-cyan-400/[0.05]
              px-3
              py-2
              font-mono
              text-sm
              text-cyan-300
            "
          >
            {node.folder}
          </div>
        </div>

        {/* Files Card */}
        <div
          className="
            rounded-2xl
            border
            border-white/6
            bg-white/[0.025]
            p-5
          "
        >
          <p className="font-mono text-[11px] tracking-[.45em] uppercase text-white/35">
            Files
          </p>

          <div className="mt-4 space-y-2">
            {node.files.map((file) => (
              <div
                key={file}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/6
                  bg-white/[0.03]
                  px-4
                  py-3
                  transition-all
                  duration-300
                  hover:border-cyan-400/20
                  hover:bg-cyan-400/[0.04]
                "
              >
                <span className="text-cyan-400">●</span>

                <span
                  className="
                    font-mono
                    text-[13px]
                    text-white/75
                  "
                >
                  {file}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}