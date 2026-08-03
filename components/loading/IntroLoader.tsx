"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useSceneStore } from "@/store/useSceneStore";
import { LOADER_SEEN_KEY, Z_INDEX } from "@/lib/constants";

/**
 * Plays a short progress-driven intro once per browser session (tracked via
 * sessionStorage, not on every navigation), then unmounts itself. Locks
 * body scroll for its duration via the Lenis "stopped" class.
 */
export function IntroLoader() {
  const ref = useRef<HTMLDivElement>(null);
  const setIsLoading = useSceneStore((s) => s.setIsLoading);

  useLayoutEffect(() => {
    const alreadySeen = sessionStorage.getItem(LOADER_SEEN_KEY);
    if (alreadySeen) {
      setIsLoading(false);
      return;
    }

    const el = ref.current;
    if (!el) return;

    document.documentElement.classList.add("lenis-stopped");

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem(LOADER_SEEN_KEY, "1");
        document.documentElement.classList.remove("lenis-stopped");
        setIsLoading(false);
      },
    });

    tl.to(el.querySelector(".loader-bar"), {
      scaleX: 1,
      duration: 1.4,
      ease: "cinematicOut",
    }).to(el, {
      yPercent: -100,
      duration: 0.9,
      ease: "cameraGlide",
      delay: 0.2,
    });

    return () => {
      tl.kill();
    };
  }, [setIsLoading]);

  return (
    <div
      ref={ref}
      style={{ zIndex: Z_INDEX.loader }}
      className="fixed inset-0 flex flex-col items-center justify-center gap-6 bg-void"
    >
      <span className="font-mono text-xs tracking-[0.3em] text-ink-muted">LOADING</span>
      <div className="h-px w-48 overflow-hidden bg-ink-faint/30">
        <div className="loader-bar h-full w-full origin-left scale-x-0 bg-aurora-cyan" />
      </div>
    </div>
  );
}
