"use client";

import { useMediaQuery } from "./useMediaQuery";

/** Respect OS-level reduced-motion — gates GSAP/R3F heavy animation paths. */
export function useReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}

/**
 * Coarse device-capability signal used to decide whether to mount the R3F
 * Skills Galaxy canvas at full fidelity, a static fallback, or skip particles.
 */
export function useIsLowPowerDevice() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const prefersReducedMotion = useReducedMotion();
  return isMobile || prefersReducedMotion;
}
