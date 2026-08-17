"use client";

import { useEffect, useState } from "react";
import { RepoNode } from "../../data/ottRepository";

interface Props {
  node: RepoNode;
  level?: number;
  activeFolder: string;
}

function hasActiveChild(
  node: RepoNode,
  activeFolder: string
): boolean {
  if (!node.children) return false;

  return node.children.some((child) => {
    if (child.id === activeFolder) return true;

    return hasActiveChild(child, activeFolder);
  });
}

export default function FolderNode({
  node,
  level = 0,
  activeFolder,
}: Props) {
  const active = node.id === activeFolder;

  const shouldOpen =
    active || level < 1 || hasActiveChild(node, activeFolder);

  const [open, setOpen] = useState(shouldOpen);

  const isFolder = node.type === "folder";

  useEffect(() => {
    if (isFolder) {
      setOpen(shouldOpen);
    }
  }, [shouldOpen, isFolder]);

  return (
    <div>
      <button
        onClick={() => isFolder && setOpen(!open)}
        className="flex w-full items-center rounded-lg py-1.5"
      >
        {/* Chevron Expand Indicator */}
        {isFolder && (
          <span
            className={`
              text-[10px]
              transition-transform
              duration-300
              ${open ? "rotate-90" : ""}
              text-white/35
            `}
          >
            ▶
          </span>
        )}

        {/* SVG Icons */}
        <span
          className={`
            flex
            h-5
            w-5
            items-center
            justify-center
            transition-all
            duration-300
            ${active ? "text-cyan-300" : "text-white/40"}
          `}
        >
          {isFolder ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 7.5C3 6.67 3.67 6 4.5 6H9L11 8H19.5C20.33 8 21 8.67 21 9.5V17.5C21 18.33 20.33 19 19.5 19H4.5C3.67 19 3 18.33 3 17.5V7.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          ) : (
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 3H15L20 8V21H7V3Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          )}
        </span>

        {/* Typography */}
        <span
          className={`
            font-mono
            text-[13px]
            tracking-[0.04em]
            font-medium
            transition-all
            duration-300
            ease-out

            ${active ? "text-cyan-300" : "text-white/80"}
          `}
        >
          {node.name}
        </span>
      </button>

      {/* Accordion Container */}
      <div
        className={`
          overflow-hidden
          transition-all
          duration-500
          ease-out
          ${
            open
              ? "max-h-[1200px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        {isFolder &&
          node.children?.map((child) => (
            <FolderNode
              key={child.id}
              node={child}
              level={level + 1}
              activeFolder={activeFolder}
            />
          ))}
      </div>
    </div>
  );
}