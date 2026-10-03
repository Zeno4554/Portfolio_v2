"use client";

import { useEffect, type RefObject } from "react";

interface PointerParallaxOptions {
  perspective: number;
  rotateX: number;
  rotateY: number;
}

export function usePointerParallax<T extends HTMLElement>(
  elementRef: RefObject<T | null>,
  { perspective, rotateX, rotateY }: PointerParallaxOptions
) {
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    if (reducedMotion.matches || coarsePointer.matches) return;

    let visible = false;
    let frameId: number | null = null;
    let previousTime = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const cancelFrame = () => {
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    const animate = (time: number) => {
      frameId = null;
      if (!visible || document.hidden) return;

      const delta = previousTime === 0 ? 16.67 : Math.min(time - previousTime, 64);
      previousTime = time;
      const smoothing = 1 - Math.exp(-delta / 120);
      currentX += (targetX - currentX) * smoothing;
      currentY += (targetY - currentY) * smoothing;

      const settled =
        Math.abs(targetX - currentX) < 0.01 &&
        Math.abs(targetY - currentY) < 0.01;

      if (settled) {
        currentX = targetX;
        currentY = targetY;
        previousTime = 0;
        element.style.willChange = "";
        element.style.transform =
          currentX === 0 && currentY === 0
            ? ""
            : `perspective(${perspective}px) rotateX(${currentY.toFixed(
                2
              )}deg) rotateY(${currentX.toFixed(2)}deg) translateZ(0)`;
        return;
      }

      element.style.willChange = "transform";
      element.style.transform = `perspective(${perspective}px) rotateX(${currentY.toFixed(
        2
      )}deg) rotateY(${currentX.toFixed(2)}deg) translateZ(0)`;
      frameId = requestAnimationFrame(animate);
    };

    const scheduleFrame = () => {
      if (visible && !document.hidden && frameId === null) {
        frameId = requestAnimationFrame(animate);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!visible || event.pointerType !== "mouse") return;

      const bounds = element.getBoundingClientRect();
      if (bounds.width === 0 || bounds.height === 0) return;
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      targetX =
        x < 0 || x > 1
          ? 0
          : (x * 2 - 1) * rotateY;
      targetY =
        y < 0 || y > 1
          ? 0
          : -(y * 2 - 1) * rotateX;
      scheduleFrame();
    };

    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
      scheduleFrame();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelFrame();
        previousTime = 0;
      } else {
        scheduleFrame();
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false;
      if (!visible) {
        cancelFrame();
        targetX = 0;
        targetY = 0;
        currentX = 0;
        currentY = 0;
        previousTime = 0;
        element.style.transform = "";
        element.style.willChange = "";
      }
    });

    observer.observe(element);
    element.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    element.addEventListener("pointerleave", handlePointerLeave, {
      passive: true,
    });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      cancelFrame();
      element.removeEventListener("pointermove", handlePointerMove);
      element.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      element.style.transform = "";
      element.style.willChange = "";
    };
  }, [elementRef, perspective, rotateX, rotateY]);
}
