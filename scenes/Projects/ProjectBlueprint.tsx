"use client";

import { InsideBuildModule } from "./projectsData";

interface Props {
  module: InsideBuildModule;
  accent: string;
  open: boolean;
}

export default function ProjectBlueprint({
  module,
  accent,
  open,
}: Props) {
  return (
    <aside>
      {/* Blueprint HUD */}
    </aside>
  );
}