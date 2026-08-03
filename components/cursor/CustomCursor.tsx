"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useCursorStore } from "@/store/useCursorStore";
import { useIsLowPowerDevice } from "@/hooks/usePreferences";
import { Z_INDEX } from "@/lib/constants";

/**
 * A single ring element that GSAP quickTo's to the pointer position every
 * frame. Skipped entirely on touch/low-power devices — a custom cursor on
 * a device with no cursor is pure overhead.
 */
export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const variant = useCursorStore((s) => s.variant);
  const skip = useIsLowPowerDevice();

  useEffect(() => {
    if (skip || !ref.current) return;
    const el = ref.current;

    const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

    const move = (e: PointerEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [skip]);

  if (skip) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      style={{ zIndex: Z_INDEX.cursor }}
      className="pointer-events-none fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2"
    >
      <div
        className={
          variant === "link"
            ? "h-12 w-12 rounded-full border border-aurora-cyan bg-aurora-cyan/10 transition-all duration-300"
            : "h-3 w-3 rounded-full bg-ink transition-all duration-300"
        }
      />
    </div>
  );
}
