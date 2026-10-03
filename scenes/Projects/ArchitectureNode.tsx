"use client";

import { forwardRef } from "react";

interface ProjectNodeProps {
  title: string;
  tech: string;
  accent: string;

  x: string;
  y: string;

  active: boolean;
  onHover: () => void;
}

const ProjectNode = forwardRef<
  HTMLButtonElement,
  ProjectNodeProps
>(
  (
    {
      title,
      tech,
      accent,
      x,
      y,
      active,
      onHover,
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        data-project-node
        data-title={title}
        aria-pressed={active}
        onMouseEnter={onHover}
        onFocus={onHover}
        onClick={onHover}
        className="
          project-architecture-node
          absolute
          -translate-x-1/2
          -translate-y-1/2
          w-52
          text-left
          transition-all
          duration-300
          group
        "
        style={{
          left: x,
          top: y,
        }}
      >
        {/* Connector Stub */}

        <div
          className="absolute left-0 top-5 h-px w-8"
          style={{
            background: accent,
            opacity: active ? 1 : 0.35,
          }}
        />

        {/* Core */}

        <div className="flex items-start gap-4">

          <div className="relative mt-1">

            {/* Pulse Ring */}

            <div
              className={`
                absolute
                inset-0
                rounded-full
                transition-all
                duration-300
                ${
                  active
                    ? "scale-[2.2] opacity-30"
                    : "scale-150 opacity-10"
                }
              `}
              style={{
                background: accent,
                filter: "blur(10px)",
              }}
            />

            {/* Outer Ring */}

            <div
              className={`
                relative
                flex
                h-4
                w-4
                items-center
                justify-center
                rounded-full
                border
                transition-all
                duration-300
              `}
              style={{
                borderColor: accent,
              }}
            >
              <div
                className="h-2 w-2 rounded-full transition-all duration-300"
                style={{
                  background: active ? accent : "transparent",
                  boxShadow: active
                    ? `0 0 18px ${accent}`
                    : "none",
                  border: `1px solid ${accent}`,
                }}
              />
            </div>

          </div>

          {/* Info */}

          <div>

            <p
              className="font-mono text-[10px] uppercase tracking-[0.45em]"
              style={{
                color: accent,
              }}
            >
              {title}
            </p>

            <h3
              className={`
                mt-2
                text-lg
                font-bold
                transition-all
                duration-300
                ${
                  active
                    ? "text-white"
                    : "text-white/80"
                }
              `}
            >
              {tech}
            </h3>

            <div
              className={`
                mt-3
                h-px
                transition-all
                duration-300
                ${
                  active
                    ? "w-20 opacity-100"
                    : "w-10 opacity-40"
                }
              `}
              style={{
                background: accent,
              }}
            />

          </div>

        </div>

      </button>
    );
  }
);

ProjectNode.displayName = "ProjectNode";

export default ProjectNode;