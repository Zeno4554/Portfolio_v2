"use client";

import { useLayoutEffect } from "react";
import { galaxyTimeline } from "@/animations/timelines/galaxyTimeline";

export function useGalaxyAnimation() {
  useLayoutEffect(() => {
    const context = galaxyTimeline();
    return () => context?.revert();
  }, []);
}