"use client";

import { useLayoutEffect } from "react";
import { gsap } from "@/lib/gsap";

export default function useInsideBuildAnimation() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /*
      ==========================================
      Floating Project Nodes
      ==========================================
      */

      gsap.utils
        .toArray<HTMLElement>("[data-project-node]")
        .forEach((node, index) => {
          gsap.to(node, {
            y: 10 + index * 2,
            duration: 3.5 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

      /*
      ==========================================
      Connector Draw Animation
      ==========================================
      */

      gsap.utils
        .toArray<SVGPathElement>("[data-connector]")
        .forEach((line, index) => {
          const length = line.getTotalLength();

          gsap.set(line, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });

          gsap.to(line, {
            strokeDashoffset: 0,
            duration: 1.2,
            ease: "power2.out",
            delay: index * 0.15,
          });
        });

      /*
      ==========================================
      Scanner Sweep
      ==========================================
      */

      gsap.set("[data-scanner-line]", {
        y: "-5%",
      });

      gsap.to("[data-scanner-line]", {
        y: "105%",
        duration: 2.2,
        repeat: -1,
        ease: "none",
      });

      /*
      ==========================================
      Status Dot
      ==========================================
      */

      gsap.to("[data-status-dot]", {
        scale: 0.75,
        opacity: 0.3,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /*
      ==========================================
      Project Glow
      ==========================================
      */

      gsap.to("[data-project-glow]", {
        opacity: 0.45,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /*
      ==========================================
      Arc Reactor Rings
      ==========================================
      */

      gsap.to("[data-ring-1]", {
        rotate: 360,
        svgOrigin: "250 250",
        duration: 24,
        repeat: -1,
        ease: "none",
      });

      gsap.to("[data-ring-2]", {
        rotate: -360,
        svgOrigin: "250 250",
        duration: 16,
        repeat: -1,
        ease: "none",
      });

      gsap.to("[data-ring-3]", {
        rotate: 360,
        svgOrigin: "250 250",
        duration: 10,
        repeat: -1,
        ease: "none",
      });

      /*
      ==========================================
      Fixed Energy Nodes
      ==========================================
      */

      gsap.utils
        .toArray<SVGCircleElement>("[data-orbit-dot]")
        .forEach((dot, index) => {
          gsap
            .timeline({
              repeat: -1,
              delay: index * 0.18,
            })
            .to(dot, {
              scale: 1.55,
              duration: 0.35,
              transformOrigin: "center center",
              ease: "power2.out",
            })
            .to(dot, {
              scale: 1,
              duration: 0.9,
              ease: "sine.inOut",
            });
        });

      /*
      ==========================================
      Energy Arc
      ==========================================
      */

      gsap.to("[data-energy-arc]", {
        rotate: 360,
        svgOrigin: "250 250",
        duration: 5,
        repeat: -1,
        ease: "none",
      });

      /*
      ==========================================
      Energy Wave
      ==========================================
      */

      gsap.fromTo(
        "[data-energy-wave]",
        {
          scale: 1,
          opacity: 0.45,
          transformOrigin: "center center",
        },
        {
          scale: 1.45,
          opacity: 0,
          duration: 2,
          repeat: -1,
          ease: "power1.out",
        }
      );

      /*
      ==========================================
      Mechanical Iris
      ==========================================
      */

      gsap.to("[data-reactor-iris]", {
        rotate: 360,
        svgOrigin: "250 250",
        duration: 80,
        repeat: -1,
        ease: "none",
      });

      gsap.utils
        .toArray<SVGGElement>("[data-reactor-blade]")
        .forEach((blade, index) => {
          gsap.to(blade, {
            rotation: index % 2 === 0 ? 2 : -2,
            svgOrigin: "250 250",
            duration: 2 + index * 0.15,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

      /*
      ==========================================
      Reactor Core
      ==========================================
      */

      gsap.to("[data-reactor-core]", {
        scale: 1.08,
        svgOrigin: "250 250",
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /*
==========================================
Blueprint Scan
==========================================
*/

gsap.set("[data-blueprint-scan]", {
  y: "-10%",
});

gsap.to("[data-blueprint-scan]", {
  y: "110%",
  duration: 3,
  ease: "none",
  repeat: -1,
});

/*
==========================================
Blueprint Modules
==========================================
*/

gsap.from("[data-blueprint-node]", {
  opacity: 0,
  y: 40,
  scale: .85,
  stagger: .18,
  duration: .8,
  ease: "power3.out",
});

gsap.to("[data-module-status]", {
  scale: .65,
  opacity: .35,
  repeat: -1,
  yoyo: true,
  duration: .7,
  stagger: .15,
});

      /*
      ==========================================
      Reactor Glow
      ==========================================
      */

      gsap.to("[data-reactor-glow]", {
        opacity: 0.45,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);
}