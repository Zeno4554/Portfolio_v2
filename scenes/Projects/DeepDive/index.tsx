"use client";

import { ReactNode } from "react";

import { Project } from "../projectsData";

import DeepDiveOverlay from "./components/DeepDiveOverlay";

interface Props {
  project: Project | null;
  open: boolean;
  onClose: () => void;

  children?: ReactNode;
}

export default function DeepDive({
  project,
  open,
  onClose,
  children,
}: Props) {
  return (
    <DeepDiveOverlay
      project={project}
      open={open}
      onClose={onClose}
    >
      {children}
    </DeepDiveOverlay>
  );
}