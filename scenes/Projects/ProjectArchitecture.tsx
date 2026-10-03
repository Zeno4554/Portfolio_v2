"use client";

import { useEffect, useRef, useState } from "react";

import { Project } from "./projectsData";

import ArchitectureNode from "./ArchitectureNode";
import ProjectDetails from "./ProjectDetails";
import BlueprintConnector from "./blueprint/BlueprintConnector";
import useInsideBuildAnimation from "./hooks/useInsideBuildAnimation";
import ArcReactor from "./reactor/ArcReactor";

interface Props {
  project: Project;
  onOpen: () => void;
}

export default function ProjectArchitecture({
  project,
  onOpen,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const nodeRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useInsideBuildAnimation(sectionRef);

  const [activeModule, setActiveModule] = useState(
    project.insideBuild[0] ?? null
  );

  const [reactorActive, setReactorActive] = useState(false);

  useEffect(() => {
    if (!reactorActive) return;

    const timer = setTimeout(() => {
      setReactorActive(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [reactorActive]);

  const [connectors, setConnectors] = useState<
    {
      id: string;
      x1: number;
      y1: number;
      x2: number;
      y2: number;
    }[]
  >([]);

  useEffect(() => {
    if (!imageRef.current) return;

    const update = () => {
      if (!containerRef.current || !imageRef.current) return;

      const container = containerRef.current.getBoundingClientRect();
      const reactor = imageRef.current.getBoundingClientRect();

      const cx = reactor.left - container.left + reactor.width / 2;
      const cy = reactor.top - container.top + reactor.height / 2;

      const next = project.insideBuild
        .map((module) => {
          const node = nodeRefs.current[module.id];

          if (!node) return null;

          const rect = node.getBoundingClientRect();

          return {
            id: module.id,
            x1: rect.left - container.left + rect.width / 2,
            y1: rect.top - container.top + rect.height / 2,
            x2: cx,
            y2: cy,
          };
        })
        .filter(
          (
            connector
          ): connector is NonNullable<typeof connector> => connector !== null
        );

      setConnectors(next);
    };

    update();
    requestAnimationFrame(update);

    const observer = new ResizeObserver(update);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [project, activeModule]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24 sm:py-44"
    >
      {/* Ambient Background */}
      <div
        className="absolute inset-0 opacity-20 blur-[240px]"
        style={{
          background: `radial-gradient(circle at center, ${project.accent}, transparent 70%)`,
        }}
      />

      {/* Background Word */}
      <h2
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          whitespace-nowrap
          font-display
          text-[clamp(10rem,20vw,22rem)]
          font-black
          tracking-[-0.08em]
          uppercase
          text-white/[0.02]
        "
      >
        SYSTEM
      </h2>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <p
            className="font-mono text-sm uppercase tracking-[0.45em]"
            style={{
              color: project.accent,
            }}
          >
            LIVE ENGINEERING VIEW
          </p>

          <h2
            className="
              mt-5
              font-display
              text-[clamp(2.5rem,7vw,6rem)]
              font-black
              uppercase
              leading-none
              text-white
            "
          >
            SYSTEM ANALYSIS
          </h2>

          <p className="mx-auto mt-8 max-w-3xl px-5 text-base leading-relaxed text-white/60 sm:text-xl">
            Live architectural breakdown of the complete system showing
            how every layer communicates to power the application.
          </p>
        </div>

        {/* Reactor */}
        <div
          ref={containerRef}
          className="
            project-architecture-layout
            relative
            mx-auto
            mt-28
            min-h-[950px]
            w-full
            max-w-[1280px]
          "
        >
          {/* Center Reactor */}
          <div
            ref={imageRef}
            data-project-image
            className="
              project-architecture-reactor
              absolute
              left-1/2
              top-1/2
              z-20
              w-[min(520px,88vw)]
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            {/* Reactor Glow */}
            <div
              data-project-glow
              className="absolute inset-0 rounded-[36px] blur-[180px]"
              style={{
                background: project.accent,
                opacity: 0.28,
              }}
            />

            <div
              className="
                relative
                flex
                h-[min(520px,88vw)]
                items-center
                justify-center
              "
            >
              <ArcReactor
                project={project}
                accent={project.accent}
                active={reactorActive}
                onOpen={() => {
                  setReactorActive(true);
                  onOpen();
                }}
              />
            </div>
          </div>

          {/* Console Button */}
          <div
            className="
              project-architecture-cta
              absolute
              left-1/2
              top-[82%]
              z-30
              -translate-x-1/2
            "
          >
            <button
              onClick={onOpen}
              className="
                group
                rounded-full
                border
                border-white/10
                bg-black/60
                px-8
                py-3
                backdrop-blur-xl
                transition-all
                duration-300
                hover:scale-105
                hover:border-white/30
              "
            >
              <span
                className="
                  font-mono
                  text-xs
                  uppercase
                  tracking-[.2em] sm:tracking-[.45em]
                  text-white/80
                  group-hover:text-white
                "
              >
                ENTER ENGINEERING CONSOLE
              </span>
            </button>
          </div>

          {connectors.map((connector) => (
            <BlueprintConnector
              key={connector.id}
              x1={connector.x1}
              y1={connector.y1}
              x2={connector.x2}
              y2={connector.y2}
              accent={project.accent}
              active={activeModule?.id === connector.id}
            />
          ))}

          {/* Nodes */}
          {project.insideBuild.map((module) => (
            <ArchitectureNode
              key={module.id}
              ref={(el) => {
                nodeRefs.current[module.id] = el;
              }}
              title={module.title}
              tech={module.tech}
              accent={project.accent}
              x={module.x}
              y={module.y}
              active={activeModule?.id === module.id}
              onHover={() => setActiveModule(module)}
            />
          ))}
        </div>

        {/* Details */}
        {activeModule && (
          <div className="mt-10">
            <ProjectDetails
              title={activeModule.title}
              tech={activeModule.tech}
              description={activeModule.description}
              accent={project.accent}
            />
          </div>
        )}
      </div>
    </section>
  );
}