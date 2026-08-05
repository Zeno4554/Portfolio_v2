"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, registerGsap } from "@/lib/gsap";
import { useSceneStore } from "@/store/useSceneStore";
import { LOADER_SEEN_KEY, Z_INDEX } from "@/lib/constants";

export function IntroLoader() {
  const ref = useRef<HTMLDivElement>(null);

  const isLoading = useSceneStore((s) => s.isLoading);
  const setIsLoading = useSceneStore((s) => s.setIsLoading);

  useLayoutEffect(() => {
    registerGsap();

    const alreadySeen = sessionStorage.getItem(LOADER_SEEN_KEY);

    if (alreadySeen) {
      setIsLoading(false);
      return;
    }

    const el = ref.current;

    if (!el) {
      setIsLoading(false);
      return;
    }

    document.documentElement.classList.add("lenis-stopped");

    let tl: gsap.core.Timeline;

    try {
      tl = gsap.timeline({
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
    } catch (err) {
      console.error("IntroLoader failed:", err);

      document.documentElement.classList.remove("lenis-stopped");
      setIsLoading(false);
    }

    return () => {
      tl?.kill();
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [setIsLoading]);

  if (!isLoading) return null;

  return (
    <div
      ref={ref}
      style={{ zIndex: Z_INDEX.loader }}
      className="fixed inset-0 flex flex-col items-center justify-center gap-6 bg-void"
    >
      <span className="font-mono text-xs tracking-[0.3em] text-ink-muted">
        LOADING
      </span>

      <div className="h-px w-48 overflow-hidden bg-ink-faint/30">
        <div className="loader-bar h-full w-full origin-left scale-x-0 bg-aurora-cyan" />
      </div>
    </div>
  );
}