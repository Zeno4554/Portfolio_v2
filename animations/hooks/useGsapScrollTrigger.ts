"use client";

import { useLayoutEffect, useRef, type RefObject } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type BuildTimeline = (
  ctx: { timeline: gsap.core.Timeline; el: HTMLElement }
) => void;

interface Options {
  /** Passed straight through to ScrollTrigger.create/timeline scrollTrigger config. */
  start?: string | (() => string);
  end?: string | (() => string);
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
  dependencies?: unknown[];
}

/**
 * Scopes a GSAP timeline to a ref'd element and wires it to ScrollTrigger,
 * handling context cleanup so timelines don't leak across route changes
 * or fast-refresh. Every scene's scroll animation should go through this
 * rather than creating ScrollTriggers ad hoc.
 */
export function useGsapScrollTrigger<T extends HTMLElement>(
  build: BuildTimeline,
  { start = "top top", end = "+=100%", scrub = 1, pin = false, markers = false, dependencies = [] }: Options = {}
): RefObject<T | null> {
  const scopeRef = useRef<T | null>(null);

  useLayoutEffect(() => {
    if (!scopeRef.current) return;

    const el = scopeRef.current;
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub,
          pin,
          markers,
          invalidateOnRefresh: true,
        },
      });
      build({ timeline, el });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return scopeRef;
}
