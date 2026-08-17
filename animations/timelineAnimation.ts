import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "@/lib/gsap";

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

  // Per-item reveal + staggered inner content animation and parallax year
  items.forEach((item) => {
    // Fade/slide the whole item in
    gsap.fromTo(
      item,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Stagger reveal the heading and paragraph inside the item for a cinematic effect
    const inner = item.querySelectorAll("h3, p");
    if (inner.length) {
      // Slight delay so mask clears before inner content reveals
      gsap.fromTo(
        inner,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Parallax the large background year (if present)
    const bg = item.querySelector<HTMLElement>(".timeline-bg-year");
    if (bg) {
      gsap.to(bg, {
        yPercent: -18,
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Soft mask reveal: slide the overlay up to reveal the content
    const mask = item.querySelector<HTMLElement>(".timeline-mask");
    if (mask) {
      gsap.fromTo(
        mask,
        { yPercent: 0 },
        {
          yPercent: -100,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  });

  // Ensure ScrollTrigger is refreshed when content/layout changes
  ScrollTrigger.refresh();
}