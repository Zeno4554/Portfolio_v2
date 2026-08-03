"use client";

import { SCENES } from "@/config/site";
import { useSceneStore } from "@/store/useSceneStore";
import { getLenis } from "@/lib/lenis";
import { cn } from "@/lib/utils";
import { Z_INDEX } from "@/lib/constants";

export function Header() {
  const activeScene = useSceneStore((s) => s.activeScene);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) getLenis()?.scrollTo(el, { duration: 1.4 });
  };

  return (
    <header
      style={{ zIndex: Z_INDEX.nav }}
      className="fixed inset-x-0 top-0 flex items-center justify-between px-6 py-5 md:px-12"
    >
      <span className="font-display text-sm font-medium tracking-wide text-ink">PORTFOLIO</span>

      <nav aria-label="Scene navigation" className="hidden gap-1 md:flex">
        {SCENES.map((scene) => (
          <button
            key={scene.id}
            onClick={() => scrollTo(scene.id)}
            aria-current={activeScene === scene.id ? "true" : undefined}
            className={cn(
              "rounded-full px-4 py-2 font-mono text-xs tracking-wide transition-colors duration-300",
              activeScene === scene.id ? "text-aurora-cyan" : "text-ink-muted hover:text-ink"
            )}
          >
            {scene.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
