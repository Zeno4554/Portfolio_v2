"use client";

import { useLayoutEffect } from "react";
import { identityTimeline } from "@/animations/identityTimeline";

export function useIdentityAnimation() {
  useLayoutEffect(() => {
    const tl = identityTimeline();

    return () => {
      tl?.kill();
    };
  }, []);
}