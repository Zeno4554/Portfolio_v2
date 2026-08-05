import { gsap } from "@/lib/gsap";

export function identityTimeline() {
  const section = document.querySelector("#identity");

  if (!section) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
      end: "bottom 35%",
      toggleActions: "play none none reverse",
    },
  });

  // Main Elements
  const headline = document.querySelector("[data-identity-headline]");
  const description = document.querySelector("[data-identity-description]");
  const quote = document.querySelector("[data-identity-quote]");
  const systems = document.querySelector("[data-systems]");

  // Word spans
  const words = gsap.utils.toArray<HTMLElement>("[data-word] span");

  // Initial state
  gsap.set([description, quote], {
    opacity: 0,
    y: 40,
  });

  gsap.set(words, {
    opacity: 0,
    y: 80,
  });

  gsap.set(systems, {
    opacity: 0,
    y: 80,
  });

  // Headline
  if (headline) {
    tl.from(
      headline,
      {
        opacity: 0,
        y: 60,
        duration: 0.7,
        ease: "power3.out",
      },
      0
    );
  }

  // Word Stack
  tl.to(
    words,
    {
      opacity: 1,
      y: 0,
      stagger: 0.15,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.2"
  );

  // SYSTEMS
  if (systems) {
    tl.to(
      systems,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.2"
    );
  }

  // Description
  if (description) {
    tl.to(
      description,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      "-=0.15"
    );
  }

  // Quote
  if (quote) {
    tl.to(
      quote,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      "-=0.3"
    );
  }

  return tl;
}