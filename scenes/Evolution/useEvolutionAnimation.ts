"use client";

import { useLayoutEffect } from "react";
import { evolutionTimeline } from "@/animations/evolutionTimeline";

export function useEvolutionAnimation() {
  useLayoutEffect(() => {
    const tl = evolutionTimeline();

    return () => {
      tl?.kill();
    };
  }, []);
}