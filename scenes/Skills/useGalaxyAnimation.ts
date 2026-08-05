"use client";

import { useLayoutEffect } from "react";
import { galaxyTimeline } from "@/animations/timelines/galaxyTimeline";

export function useGalaxyAnimation() {
  useLayoutEffect(() => {
    const tl = galaxyTimeline();

    return () => {
      tl?.scrollTrigger?.kill();
      tl?.kill();
    };
  }, []);
}