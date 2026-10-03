"use client";

import { ReactNode } from "react";

import { Project } from "../../projectsData";
import { ProjectData } from "../../AIAgent/data/projectData";

import useDeepDiveAnimation from "../hooks/useDeepDiveAnimation";

import { resolveConsoleComponent } from "../consoleRegistry";
import DeepDiveHeader from "./DeepDiveHeader";
import BootSequence from "../sections/BootSequence";

type DeepDiveProject = Project | ProjectData;

interface Props {
  project: DeepDiveProject | null;
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export default function DeepDiveOverlay({
  project,
  open,
  onClose,
  children,
}: Props) {
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
          background: `radial-gradient(circle at center, ${
            project?.accent ?? "#ffffff"
          }, transparent 70%)`,
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
            project &&
            (() => {
              /*
               * The default Engineering Console is only used for the
               * standard Project data structure.
               *
               * AI Assistant supplies its own custom console through
               * `children`, so this branch never receives ProjectData.
               */
              if (!("insideBuild" in project)) {
                return null;
              }

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