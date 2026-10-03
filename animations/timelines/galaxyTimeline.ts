import { gsap } from "@/lib/gsap";

export function galaxyTimeline() {
  const section = document.querySelector("#skills");

  if (!section) return;

  return gsap.context(() => {
    const nodes = Array.from(
      section.querySelectorAll<HTMLElement>("[data-skill-node]")
    );
    const stars = Array.from(
      section.querySelectorAll<HTMLElement>("[data-star]")
    );
    const edges = Array.from(
      section.querySelectorAll<HTMLElement>("[data-edge]")
    );
    const glows = Array.from(
      section.querySelectorAll<HTMLElement>("[data-glow]")
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(stars, { opacity: 1 });
      gsap.set(edges, { scaleX: 1, transformOrigin: "left center" });
      gsap.set(nodes, { opacity: 1, scale: 1, y: 0 });
      gsap.set(glows, { opacity: 1 });
      return;
    }

    gsap.set(nodes, { opacity: 0, scale: 0.6, y: 40 });
    gsap.set(edges, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(stars, { opacity: 0 });
    gsap.set(glows, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(stars, {
      opacity: 1,
      stagger: 0.01,
      duration: 1,
    });

    tl.to(
      edges,
      {
        scaleX: 1,
        duration: 1.2,
        stagger: 0.05,
        ease: "power2.out",
      },
      "-=0.7"
    );

    tl.to(
      nodes,
      {
        opacity: 1,
        scale: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      "-=0.8"
    );

    tl.to(glows, { opacity: 1, duration: 0.8, stagger: 0.05 }, "<");
  }, section);
}