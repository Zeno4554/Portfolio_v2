"use client";

import { RefObject, useLayoutEffect } from "react";
import { gsap } from "@/lib/gsap";

interface BackgroundAnimationProps {
  aurora: RefObject<HTMLDivElement | null>;
  lightBeam: RefObject<HTMLDivElement | null>;
}

export function useBackgroundAnimation({
  aurora,
  lightBeam,
}: BackgroundAnimationProps) {
  useLayoutEffect(() => {
    if (!aurora.current || !lightBeam.current) return;

    const ctx = gsap.context(() => {
      // Aurora breathing
      gsap.to(aurora.current, {
        x: 40,
        y: -20,
        scale: 1.05,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Light beam drifting
      gsap.to(lightBeam.current, {
        x: -25,
        rotation: 3,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, [aurora, lightBeam]);
}