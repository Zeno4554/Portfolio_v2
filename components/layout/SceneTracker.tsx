"use client";

import { useEffect } from "react";
import { SCENES } from "@/config/site";
import { useSceneStore } from "@/store/useSceneStore";
import { ScrollTrigger } from "@/lib/gsap";

/**
 * Headless component — creates one ScrollTrigger per registered scene that
 * simply flips `activeScene` in the store when that scene crosses the
 * viewport midpoint. Mounted once at the layout root, after scene sections
 * exist in the DOM.
 */
export function SceneTracker() {
  const setActiveScene = useSceneStore((s) => s.setActiveScene);

  useEffect(() => {
    const triggers = SCENES.map((scene) => {
      const el = document.getElementById(scene.id);
      if (!el) return null;
      return ScrollTrigger.create({
        trigger: el,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          if (self.isActive) setActiveScene(scene.id);
        },
      });
    }).filter(Boolean);

    return () => triggers.forEach((t) => t?.kill());
  }, [setActiveScene]);

  return null;
}
