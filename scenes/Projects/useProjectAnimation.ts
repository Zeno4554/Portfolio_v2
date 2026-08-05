"use client";

import { useLayoutEffect } from "react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "@/lib/gsap";

export default function useProjectAnimation() {
  useLayoutEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>("section");

    sections.forEach((section) => {
      const bgTitle = section.querySelector("[data-background-title]");
      const title = section.querySelector("[data-project-title]");
      const eyebrow = section.querySelector("[data-eyebrow]");
      const tagline = section.querySelector("[data-project-tagline]");
      const image = section.querySelector("[data-project-image]");
      const glow = section.querySelector("[data-project-glow]");
      const pills = section.querySelectorAll("[data-tech-pill]");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      gsap.set(title, {
        y: 120,
        opacity: 0,
      });

      gsap.set(tagline, {
        y: 40,
        opacity: 0,
      });

      gsap.set(image, {
        y: 120,
        opacity: 0,
        scale: 0.9,
      });

      gsap.set(eyebrow, {
        y: 20,
        opacity: 0,
      });

      gsap.set(pills, {
        y: 30,
        opacity: 0,
      });

      tl.to(bgTitle, {
        opacity: 1,
        duration: 1.2,
      });

      tl.to(
        title,
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=1"
      );

      tl.to(
        eyebrow,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
        },
        "<"
      );

      tl.to(
        tagline,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
        "-=0.4"
      );

      tl.to(
        image,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );

      tl.to(
        pills,
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.45,
        },
        "-=0.6"
      );

      gsap.to(glow, {
        scale: 1.08,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(image, {
        y: "+=10",
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(bgTitle, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}