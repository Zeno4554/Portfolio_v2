"use client";

import CloseButton from "./CloseButton";

interface HeaderProject {
  title: string;
  accent: string;
}

interface Props {
  project: HeaderProject;
  onClose: () => void;
}

export default function DeepDiveHeader({
  project,
  onClose,
}: Props) {
  return (
    <header
      data-deepdive-header
      className="
        flex
        items-center
        justify-between
        border-b
        border-white/10
        px-12
        py-8
      "
    >
      <div>
        <p
          className="font-mono text-xs uppercase tracking-[.45em]"
          style={{
            color: project.accent,
          }}
        >
          ENGINEERING CONSOLE
        </p>

        <h1
          className="
            mt-2
            text-4xl
            font-black
            uppercase
            text-white
          "
        >
          {project.title}
        </h1>
      </div>

      <CloseButton onClose={onClose} />
    </header>
  );
}