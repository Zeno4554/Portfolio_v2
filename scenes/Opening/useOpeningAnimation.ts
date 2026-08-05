"use client";

import { useLayoutEffect, RefObject } from "react";
import { openingTimeline } from "@/animations/openingTimeline";

interface OpeningRefs {
  hero: RefObject<HTMLDivElement | null>;
  role: RefObject<HTMLParagraphElement | null>;
  title: RefObject<HTMLHeadingElement | null>;
  mission: RefObject<HTMLParagraphElement | null>;
  scroll: RefObject<HTMLDivElement | null>;
  background: RefObject<HTMLDivElement | null>;
}

export function useOpeningAnimation({
  role,
  title,
  mission,
  scroll,
  background,
}: OpeningRefs) {
  useLayoutEffect(() => {
    if (
      !background.current ||
      !role.current ||
      !title.current ||
      !mission.current ||
      !scroll.current
    ) {
      return;
    }

    const tl = openingTimeline({
      background: background.current,
      role: role.current,
      title: title.current,
      mission: mission.current,
      scroll: scroll.current,
    });

    return () => {
      tl.kill();
    };
  }, [background, role, title, mission, scroll]);
}