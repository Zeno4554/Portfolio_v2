"use client";

import { Project } from "../../projectsData";

interface Props {
  project: Project;
}

const MODULES = [
  "Frontend",
  "Backend",
  "Database",
  "AI Engine",
  "Cloud",
];

export default function BootSequence({
  project,
}: Props) {
  return (
    <section
      data-boot-sequence
      className="
        absolute
        inset-0
        z-10
        flex
        items-center
        justify-center
        bg-black
        pointer-events-none
      "
    >
      <div
        className="
          w-[720px]
          rounded-3xl
          border
          border-white/10
          bg-black/70
          p-12
          backdrop-blur-3xl
        "
      >
        <p
          className="font-mono text-xs tracking-[.45em]"
          style={{
            color: project.accent,
          }}
        >
          ENGINEERING CONSOLE
        </p>

        <h1
          className="
            mt-6
            text-6xl
            font-black
            uppercase
            text-white
          "
        >
          INITIALIZING
        </h1>

        <div className="mt-10 space-y-4">
          {MODULES.map((module) => (
            <div
              key={module}
              data-boot-line
              className="
                flex
                items-center
                justify-between
                font-mono
                text-lg
              "
            >
              <span>{module}</span>

              <span
                data-boot-status
                style={{
                  color: project.accent,
                }}
              >
                ...
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}