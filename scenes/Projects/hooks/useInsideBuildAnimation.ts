"use client";

import { useLayoutEffect, type RefObject } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function useInsideBuildAnimation(
  scopeRef: RefObject<HTMLElement | null>
) {
  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    const context = gsap.context(() => {
      const selectAll = <T extends Element>(selector: string) =>
        Array.from(scope.querySelectorAll<T>(selector));
      const connectors = selectAll<SVGPathElement>("[data-connector]");
      const blueprintNodes = selectAll<HTMLElement>("[data-blueprint-node]");
      const loops: gsap.core.Animation[] = [];
      const intro = gsap.timeline({ paused: true });

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(connectors, { strokeDashoffset: 0 });
        gsap.set(blueprintNodes, { opacity: 1, y: 0, scale: 1 });
        return;
      }

      const addLoop = (
        target: gsap.TweenTarget,
        vars: gsap.TweenVars
      ) => {
        if (Array.isArray(target) && target.length === 0) return;
        loops.push(gsap.to(target, { ...vars, paused: true }));
      };

      const nodes = selectAll<HTMLElement>("[data-project-node]");
      nodes.forEach((node, index) => {
        addLoop(node, {
          y: 10 + index * 2,
          duration: 3.5 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      connectors.forEach((line, index) => {
        const length = line.getTotalLength();
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
        intro.to(
          line,
          {
            strokeDashoffset: 0,
            duration: 1.2,
            ease: "power2.out",
          },
          index * 0.15
        );
      });

      const scannerLines = selectAll<HTMLElement>("[data-scanner-line]");
      if (scannerLines.length > 0) {
        gsap.set(scannerLines, { y: "-5%" });
        addLoop(scannerLines, {
          y: "105%",
          duration: 2.2,
          repeat: -1,
          ease: "none",
        });
      }

      addLoop(selectAll("[data-status-dot]"), {
        scale: 0.75,
        opacity: 0.3,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      addLoop(selectAll("[data-project-glow]"), {
        opacity: 0.45,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      addLoop(selectAll("[data-ring-1]"), {
        rotate: 360,
        svgOrigin: "250 250",
        duration: 24,
        repeat: -1,
        ease: "none",
      });
      addLoop(selectAll("[data-ring-2]"), {
        rotate: -360,
        svgOrigin: "250 250",
        duration: 16,
        repeat: -1,
        ease: "none",
      });
      addLoop(selectAll("[data-ring-3]"), {
        rotate: 360,
        svgOrigin: "250 250",
        duration: 10,
        repeat: -1,
        ease: "none",
      });

      selectAll<SVGCircleElement>("[data-orbit-dot]").forEach(
        (dot, index) => {
          const orbit = gsap
            .timeline({ repeat: -1, delay: index * 0.18, paused: true })
            .to(dot, {
              scale: 1.55,
              duration: 0.35,
              transformOrigin: "center center",
              ease: "power2.out",
            })
            .to(dot, { scale: 1, duration: 0.9, ease: "sine.inOut" });
          loops.push(orbit);
        }
      );

      addLoop(selectAll("[data-energy-arc]"), {
        rotate: 360,
        svgOrigin: "250 250",
        duration: 5,
        repeat: -1,
        ease: "none",
      });
      selectAll("[data-energy-wave]").forEach((wave) => {
        loops.push(
          gsap.fromTo(
            wave,
            { scale: 1, opacity: 0.45, transformOrigin: "center center" },
            {
              scale: 1.45,
              opacity: 0,
              duration: 2,
              repeat: -1,
              paused: true,
              ease: "power1.out",
            }
          )
        );
      });
      addLoop(selectAll("[data-reactor-core]"), {
        scale: 1.08,
        svgOrigin: "250 250",
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const blueprintScans = selectAll<HTMLElement>("[data-blueprint-scan]");
      if (blueprintScans.length > 0) {
        gsap.set(blueprintScans, { y: "-10%" });
        addLoop(blueprintScans, {
          y: "110%",
          duration: 3,
          repeat: -1,
          ease: "none",
        });
      }

      if (blueprintNodes.length > 0) {
        intro.from(
          blueprintNodes,
          {
            opacity: 0,
            y: 40,
            scale: 0.85,
            stagger: 0.18,
            duration: 0.8,
            ease: "power3.out",
          },
          0
        );
      }

      addLoop(selectAll("[data-module-status]"), {
        scale: 0.65,
        opacity: 0.35,
        repeat: -1,
        yoyo: true,
        duration: 0.7,
        stagger: 0.15,
      });
      addLoop(selectAll("[data-reactor-glow]"), {
        opacity: 0.45,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const play = () => {
        intro.play();
        loops.forEach((animation) => animation.play());
      };
      const pause = () => {
        intro.pause();
        loops.forEach((animation) => animation.pause());
      };

      ScrollTrigger.create({
        trigger: scope,
        start: "top bottom",
        end: "bottom top",
        onEnter: play,
        onEnterBack: play,
        onLeave: pause,
        onLeaveBack: pause,
        onRefresh: (self) => (self.isActive ? play() : pause()),
      });
    }, scope);

    return () => context.revert();
  }, [scopeRef]);
}
