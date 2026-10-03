"use client";

interface BootProject {
  title: string;
  accent: string;
}

interface Props {
  project: BootProject;
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
        p-4
        bg-black
        pointer-events-none
      "
    >
      <div
        className="
          w-full
          max-w-[720px]
          max-h-full
          overflow-y-auto
          rounded-2xl
          border
          border-white/10
          bg-black/70
          p-6
          backdrop-blur-3xl
          sm:rounded-3xl
          sm:p-12
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
            text-[clamp(1.5rem,8vw,3.75rem)]
            font-black
            leading-none
            uppercase
            text-white
            sm:text-6xl
          "
        >
          INITIALIZING
        </h1>

        <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
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