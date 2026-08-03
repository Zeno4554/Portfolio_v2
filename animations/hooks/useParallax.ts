"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Applies a GPU-only translateY parallax to an element based on scroll
 * position through its own trigger bounds. `speed` > 1 moves faster than
 * scroll (foreground), < 1 moves slower (background) — this is what
 * produces the layered-depth feel across scene backgrounds.
 */
export function useParallax<T extends HTMLElement>(speed = 0.3) {
  const ref = useRef<T | null>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: speed * 30,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [speed]);

  return ref;
}

/** Force-recalculates all ScrollTrigger positions — call after scene lazy-loads settle. */
export function refreshScrollTriggers() {
  ScrollTrigger.refresh();
}
