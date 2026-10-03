"use client";

import { SCENES } from "@/config/site";
import { useSceneStore } from "@/store/useSceneStore";
import { cn } from "@/lib/utils";
import { Z_INDEX } from "@/lib/constants";

export function Header() {
  const activeScene = useSceneStore((s) => s.activeScene);

  return (
    <header
      style={{ zIndex: Z_INDEX.nav }}
      className="
        fixed
        inset-x-0
        top-0
        flex
        justify-start
        px-3
        py-3
        sm:px-6
        sm:py-5
        md:px-12
        md:justify-end
      "
    >
      <nav
        aria-label="Scene navigation"
        className="scene-navigation flex max-w-full gap-1 overflow-x-auto"
      >
        {SCENES.map((scene) => (
          <a
            key={scene.id}
            href={`#${scene.id}`}
            aria-current={
              activeScene === scene.id ? "true" : undefined
            }
            className={cn(
              "shrink-0 rounded-full px-2.5 py-2 font-mono text-[10px] tracking-wide transition-colors duration-300 sm:px-4 sm:text-xs",
              activeScene === scene.id
                ? "text-aurora-blue"
                : "text-ink-muted hover:text-ink"
            )}
          >
            {scene.label}
          </a>
        ))}
      </nav>
    </header>
  );
} 