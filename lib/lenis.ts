"use client";

import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";

let lenis: Lenis | null = null;

const syncLenisWithGsap = (time: number) => {
  lenis?.raf(time * 1000);
};

/**
 * Creates the single Lenis instance for the app and syncs it to GSAP's
 * ticker so ScrollTrigger stays in lockstep with smooth-scroll (instead of
 * the native scroll event), which is what keeps pinned scenes jitter-free.
 */
export function createLenis() {
  if (lenis || typeof window === "undefined") return lenis;

  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.5,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add(syncLenisWithGsap);

  return lenis;
}

export function getLenis() {
  return lenis;
}

export function destroyLenis() {
  gsap.ticker.remove(syncLenisWithGsap);
  lenis?.destroy();
  lenis = null;
}
