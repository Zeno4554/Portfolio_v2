"use client";

import { ReactNode } from "react";

import { Project } from "../../projectsData";

import useDeepDiveAnimation from "../hooks/useDeepDiveAnimation";

import { resolveConsoleComponent } from "../consoleRegistry";
import DeepDiveHeader from "./DeepDiveHeader";
import BootSequence from "../sections/BootSequence";

interface Props {
  project: Project | null;
  open: boolean;
  onClose: () => void;

  /**
   * Optional custom content.
   * If not provided, the default EngineeringConsole is rendered.
   */
  children?: ReactNode;
}

export default function DeepDiveOverlay({
  project,
  open,
  onClose,
  children,
}: Props) {

  // 👇 Debug
  console.log("========== DEEPDIVE ==========");
  console.log("Project:", project?.title);
  console.log("Open:", open);
  console.log("Children:", children);
  console.log("==============================");

  useDeepDiveAnimation({
    open,
  });

  if (!project && !open) return null;

  return (
    <div
      data-deepdive-overlay
      className="fixed inset-0 z-[300]"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-black/90 backdrop-blur-3xl" />

      {/* Accent */}

      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at center, ${project?.accent}, transparent 70%)`,
        }}
      />

      {/* Console */}

      <div
        data-deepdive-console
        className="
          relative
          flex
          h-full
          w-full
          flex-col
        "
      >
        {/* Boot Animation */}

        {project && <BootSequence project={project} />}

        {/* Header */}

        {project && (
          <DeepDiveHeader
            project={project}
            onClose={onClose}
          />
        )}

        {/* Project Content */}

        <div className="flex-1 overflow-auto touch-auto overscroll-contain">
          {children ? (
            children
          ) : (
            project && (() => {
              const ConsoleComponent = resolveConsoleComponent(project);

              if (!ConsoleComponent) {
                return null;
              }

              return <ConsoleComponent project={project} />;
            })()
          )}
        </div>
      </div>
    </div>
  );
}