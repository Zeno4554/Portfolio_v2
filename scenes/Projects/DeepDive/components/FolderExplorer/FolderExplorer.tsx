"use client";

import FolderNode from "./FolderNode";
import { ottRepository } from "../../data/ottRepository";

interface Props {
  activeNode: string;
}

const ACTIVE_FOLDER: Record<string, string> = {
  react: "client",
  router: "routes",
  axios: "services",

  express: "server",

  routes: "routes",

  controllers: "controllers",

  services: "services",

  prisma: "prisma",

  postgres: "schema.prisma",
};

export default function FolderExplorer({
  activeNode,
}: Props) {
  const currentFolder =
    ACTIVE_FOLDER[activeNode];

  if (!currentFolder) {
    throw new Error(`No project folder is configured for "${activeNode}".`);
  }

  return (
    <div
      data-folder-explorer
      className="
        h-full
        space-y-1
        overflow-y-auto
        overflow-x-hidden
        pr-1
        touch-auto
        overscroll-contain
      "
    >
      {ottRepository.map((node) => (
        <FolderNode
          key={node.id}
          node={node}
          activeFolder={currentFolder}
        />
      ))}
    </div>
  );
}