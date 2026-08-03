"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { CustomEase } from "gsap/CustomEase";

let registered = false;

/**
 * Registers GSAP plugins + named custom eases exactly once, client-side
 * only. Runs eagerly below (module-scope, not inside an effect) so that
 * "cinematicOut" / "cameraGlide" are guaranteed to exist by the time any
 * component's first effect runs, regardless of mount order.
 */
export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CustomEase);

  CustomEase.create("cinematicOut", "0.16, 1, 0.3, 1");
  CustomEase.create("cameraGlide", "0.83, 0, 0.17, 1");

  registered = true;
}

if (typeof window !== "undefined") {
  registerGsap();
}

export { gsap, ScrollTrigger };
