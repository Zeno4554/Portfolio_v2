"use client";

import { useLayoutEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function useProjectAnimation() {
  useLayoutEffect(() => {
    const heroes = gsap.utils.toArray<HTMLElement>("[data-project-hero]");
    if (heroes.length === 0) return;

    const context = gsap.context(() => {
      heroes.forEach((hero) => {
        const bgTitle = hero.querySelector("[data-background-title]");
        const title = hero.querySelector("[data-project-title]");
        const eyebrow = hero.querySelector("[data-eyebrow]");
        const tagline = hero.querySelector("[data-project-tagline]");
        const image = hero.querySelector("[data-project-image]");
        const glow = hero.querySelector("[data-project-glow]");
        const pills = hero.querySelectorAll("[data-tech-pill]");

        if (!bgTitle || !title || !eyebrow || !tagline || !image) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top 70%",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        });

        gsap.set(title, { y: 120, opacity: 0 });
        gsap.set(tagline, { y: 40, opacity: 0 });
        gsap.set(image, { y: 120, opacity: 0, scale: 0.9 });
        gsap.set(eyebrow, { y: 20, opacity: 0 });
        gsap.set(pills, { y: 30, opacity: 0 });

        tl.to(bgTitle, { opacity: 1, duration: 1.2 })
          .to(
            title,
            { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
            "-=1"
          )
          .to(eyebrow, { y: 0, opacity: 1, duration: 0.6 }, "<")
          .to(tagline, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4")
          .to(
            image,
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power3.out",
            },
            "-=0.5"
          )
          .to(pills, { opacity: 1, y: 0, stagger: 0.05, duration: 0.45 }, "-=0.6");

        if (glow) {
          const glowTween = gsap.to(glow, {
            scale: 1.08,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            paused: true,
          });

          ScrollTrigger.create({
            trigger: hero,
            start: "top bottom",
            end: "bottom top",
            onEnter: () => glowTween.play(),
            onEnterBack: () => glowTween.play(),
            onLeave: () => glowTween.pause(),
            onLeaveBack: () => glowTween.pause(),
            onRefresh: (self) => self.isActive && glowTween.play(),
          });
        }

        gsap.to(bgTitle, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: { trigger: hero, scrub: true },
        });
      });
    });

    return () => context.revert();
  }, []);
}