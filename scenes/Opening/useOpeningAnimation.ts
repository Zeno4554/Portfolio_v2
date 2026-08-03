"use client";

import { useLayoutEffect, RefObject } from "react";
import { gsap } from "@/lib/gsap";

interface OpeningRefs {
  hero: RefObject<HTMLDivElement | null>;
  role: RefObject<HTMLParagraphElement | null>;
  title: RefObject<HTMLHeadingElement | null>;
  mission: RefObject<HTMLParagraphElement | null>;
  scroll: RefObject<HTMLDivElement | null>;
  background: RefObject<HTMLDivElement | null>;
}

export function useOpeningAnimation({
  hero,
  role,
  title,
  mission,
  scroll,
  background,
}: OpeningRefs) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(background.current, {
        opacity: 0,
        scale: 1.15,
        duration: 1.8,
      })

        .from(
          role.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
          },
          "-=1.0"
        )

        .from(
          title.current,
          {
            opacity: 0,
            y: 70,
            duration: 1,
          },
          "-=0.3"
        )

        .from(
          mission.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.5"
        )

        .from(
          scroll.current,
          {
            opacity: 0,
            y: 10,
            duration: 0.6,
          },
          "-=0.3"
        );

      // Background breathing
      gsap.to(background.current, {
        scale: 1.03,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Scroll indicator
      gsap.to(scroll.current, {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);
}