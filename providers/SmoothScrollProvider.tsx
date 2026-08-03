"use client";

import { useEffect } from "react";
import { registerGsap, ScrollTrigger } from "@/lib/gsap";
import { createLenis, destroyLenis } from "@/lib/lenis";

/**
 * Boots the smooth-scroll + ScrollTrigger pipeline once at the app root.
 * Must wrap everything that contains a pinned ScrollTrigger section, and
 * must mount before any scene calls useGsapScrollTrigger.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerGsap(); // no-op if already registered on import
    const lenis = createLenis();

    // Re-measure pinned sections after fonts/images settle to avoid
    // ScrollTrigger start/end positions drifting from late layout shifts.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      destroyLenis();
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
