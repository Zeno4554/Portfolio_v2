import { gsap } from "@/lib/gsap";

export function galaxyTimeline() {
  const section = document.querySelector("#skills");

  if (!section) return;

  const nodes = gsap.utils.toArray<HTMLElement>("[data-skill-node]");
  const stars = gsap.utils.toArray<HTMLElement>("[data-star]");
  const edges = gsap.utils.toArray<HTMLElement>("[data-edge]");
  const glows = gsap.utils.toArray<HTMLElement>("[data-glow]");

  gsap.set(nodes, {
    opacity: 0,
    scale: 0.6,
    y: 40,
  });

  gsap.set(edges, {
    scaleX: 0,
    transformOrigin: "left center",
  });

  gsap.set(stars, {
    opacity: 0,
  });

  gsap.set(glows, {
    opacity: 0,
  });

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

  tl.to(
    glows,
    {
      opacity: 1,
      duration: 0.8,
      stagger: 0.05,
    },
    "<"
  );

  // Living galaxy
  nodes.forEach((node, i) => {
    gsap.to(node, {
      y: `+=${6 + (i % 4)}`,
      duration: 3 + (i % 5),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: i * 0.08,
    });
  });

  // Twinkling stars
  stars.forEach((star, i) => {
    gsap.to(star, {
      opacity: 0.2 + Math.random() * 0.8,
      duration: 1 + Math.random() * 3,
      repeat: -1,
      yoyo: true,
      delay: i * 0.02,
    });
  });

  // Breathing glow
  glows.forEach((glow, i) => {
    gsap.to(glow, {
      opacity: 0.45,
      duration: 2 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: i * 0.12,
    });
  });

  return tl;
}