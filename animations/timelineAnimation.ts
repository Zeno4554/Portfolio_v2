import { gsap } from "@/lib/gsap";

export function timelineAnimation() {
  const section = document.querySelector("#timeline");

  if (!section) return;

  const items = gsap.utils.toArray<HTMLElement>("[data-timeline-item]");
  const line = document.querySelector<HTMLElement>("[data-timeline-line]");

  if (line) {
    gsap.set(line, {
      scaleY: 0,
      transformOrigin: "top center",
    });

    gsap.to(line, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }

  items.forEach((item) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}