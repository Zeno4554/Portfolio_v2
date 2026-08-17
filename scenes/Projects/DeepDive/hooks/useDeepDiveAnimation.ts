"use client";

import { useLayoutEffect } from "react";
import { gsap } from "@/lib/gsap";

interface Props {
  open: boolean;
}

export default function useDeepDiveAnimation({
  open,
}: Props) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const overlay = "[data-deepdive-overlay]";
      const consolePanel = "[data-deepdive-console]";
      const header = "[data-deepdive-header]";
      const boot = "[data-boot-sequence]";
      const bootLines = "[data-boot-line]";
      const bootStatus = "[data-boot-status]";

      if (open) {
        gsap.set(overlay, {
          display: "block",
        });

        const tl = gsap.timeline({
          defaults: {
            ease: "power4.out",
          },
        });

        tl.fromTo(
          overlay,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.45,
          }
        )
          .fromTo(
            consolePanel,
            {
              y: 120,
              opacity: 0,
              scale: 0.97,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
            },
            "-=0.2"
          )
          .fromTo(
            header,
            {
              opacity: 0,
              y: -40,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.55,
            },
            "-=0.45"
          )
          .fromTo(
            bootLines,
            {
              opacity: 0,
              x: -30,
            },
            {
              opacity: 1,
              x: 0,
              stagger: 0.18,
              duration: 0.4,
            }
          )
          .to(
            bootStatus,
            {
              textContent: "READY",
              duration: 0.01,
              stagger: 0.18,
            },
            "-=0.5"
          )
          .to(
            boot,
            {
              opacity: 0,
              duration: 0.6,
              delay: 0.5,
            }
          );
      } else {
        const tl = gsap.timeline();

        tl.to(header, {
          opacity: 0,
          y: -25,
          duration: 0.25,
        })
          .to(
            consolePanel,
            {
              opacity: 0,
              y: 80,
              scale: 0.96,
              duration: 0.45,
              ease: "power2.in",
            },
            "-=0.1"
          )
          .to(
            overlay,
            {
              opacity: 0,
              duration: 0.35,
            },
            "-=0.2"
          );
      }
    });

    return () => ctx.revert();
  }, [open]);
}   