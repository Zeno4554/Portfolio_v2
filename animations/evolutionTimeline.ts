import { gsap } from "@/lib/gsap";

export function evolutionTimeline() {
  const section = document.querySelector("#evolution");

  if (!section) return;

  const nodes = gsap.utils.toArray<HTMLElement>("[data-node]");
  const cores = gsap.utils.toArray<HTMLElement>("[data-core]");
  const glows = gsap.utils.toArray<HTMLElement>("[data-glow]");
  const edges = gsap.utils.toArray<HTMLElement>("[data-edge-progress]");

  const background = document.querySelector<HTMLElement>(
    "[data-becoming-bg]"
  );

  // Initial State
  gsap.set(glows, { opacity: 0 });

  gsap.set(nodes, {
    scale: 1,
    borderColor: "rgba(34,211,238,.25)",
  });

  gsap.set(cores, {
    scale: 1,
  });

  gsap.set(edges, {
    scaleX: 0,
    transformOrigin: "left center",
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: "top 70%",
      end: "bottom bottom",
      scrub: 1.2,
    },
  });

  nodes.forEach((node, i) => {
    const core = cores[i];
    const glow = glows[i];
    const edge = edges[i];

    tl.to(
      node,
      {
        scale: 1.12,
        borderColor: "#67e8f9",
        duration: 0.35,
      },
      ">"
    );

    if (core) {
      tl.to(
        core,
        {
          scale: 1.8,
          duration: 0.3,
        },
        "<"
      );
    }

    if (glow) {
      tl.to(
        glow,
        {
          opacity: 1,
          duration: 0.35,
        },
        "<"
      );
    }

    if (edge) {
      tl.to(
        edge,
        {
          scaleX: 1,
          duration: 0.4,
        },
        "<"
      );
    }
  });

  if (background) {
    tl.to(
      background,
      {
        y: -80,
        opacity: 0.08,
      },
      0
    );
  }

  return tl;
}