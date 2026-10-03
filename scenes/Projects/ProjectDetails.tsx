"use client";

interface Props {
  title: string;
  tech: string;
  description: string;
  accent: string;
}

export default function ProjectDetails({
  title,
  tech,
  description,
  accent,
}: Props) {
  return (
    <section
      className="
        mx-auto
        mt-20
        w-full
        max-w-6xl
      "
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.02]
          backdrop-blur-2xl
        "
      >
        {/* Ambient Glow */}

        <div
          className="absolute inset-0 opacity-10 blur-[140px]"
          style={{
            background: accent,
          }}
        />

        {/* Blueprint Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
            bg-[size:28px_28px]
          "
        />

        <div className="relative z-10 p-5 sm:p-8 lg:p-10">

          {/* Header */}

          <div className="flex flex-col gap-6 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p
                className="font-mono text-[11px] uppercase tracking-[0.45em]"
                style={{
                  color: accent,
                }}
              >
                TECH STACK
              </p>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-black
                  uppercase
                  text-white
                  sm:text-5xl
                "
              >
                {title}
              </h2>

            </div>

            <div className="text-left sm:text-right">

              <div className="flex items-center gap-3 sm:justify-end">

                <div
                  className="h-3 w-3 rounded-full"
                  style={{
                    background: accent,
                    boxShadow: `0 0 16px ${accent}`,
                  }}
                />

                <span
                  className="font-mono text-xs tracking-[0.35em]"
                  style={{
                    color: accent,
                  }}
                >
                  CORE STACK
                </span>

              </div>

              <p className="mt-3 font-mono text-[11px] tracking-[0.35em] text-white/40">
                TECH-FIRST DELIVERY
              </p>

            </div>

          </div>

          {/* Console */}

          <div className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-12">

            {/* Left */}

            <div>

              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/40">
                STACK
              </p>

              <p
                className="mt-3 text-xl font-bold sm:text-2xl"
                style={{
                  color: accent,
                }}
              >
                {tech}
              </p>

            </div>

            {/* Middle */}

            <div>

              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/40">
                FOCUS
              </p>

              <p className="mt-3 text-xl font-bold text-white sm:text-2xl">
                {title}
              </p>

            </div>

            {/* Right */}

            <div>

              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/40">
                IMPACT
              </p>

              <p
                className="mt-3 text-xl font-bold sm:text-2xl"
                style={{
                  color: accent,
                }}
              >
                HIGH
              </p>

            </div>

          </div>

          {/* Description */}

          <div className="mt-14 border-t border-white/10 pt-8">

            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/40">
              ANALYSIS
            </p>

            <p
              className="
                mt-5
                max-w-4xl
                text-base
                leading-7
                text-white/65
                sm:text-lg
                sm:leading-9
              "
            >
              {description}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}