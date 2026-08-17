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
        items-center
        justify-end
        px-6
        py-5
        md:px-12
      "
    >
      <nav
        aria-label="Scene navigation"
        className="hidden gap-1 md:flex"
      >
        {SCENES.map((scene) => (
          <a
            key={scene.id}
            href={`#${scene.id}`}
            aria-current={
              activeScene === scene.id ? "true" : undefined
            }
            className={cn(
              "rounded-full px-4 py-2 font-mono text-xs tracking-wide transition-colors duration-300",
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