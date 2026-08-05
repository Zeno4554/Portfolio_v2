import { gsap } from "@/lib/gsap";

interface OpeningTimelineProps {
  background: HTMLDivElement;
  role: HTMLParagraphElement;
  title: HTMLHeadingElement;
  mission: HTMLParagraphElement;
  scroll: HTMLDivElement;
}

export function openingTimeline({
  background,
  role,
  title,
  mission,
  scroll,
}: OpeningTimelineProps) {
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  tl.set([role, title, mission, scroll], {
    opacity: 0,
    y: 30,
  });

  tl.from(background, {
    opacity: 0,
    scale: 1.15,
    duration: 1.8,
  })

    .to(
      role,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      },
      "-=1.1"
    )

    .to(
      title,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
      },
      "-=0.2"
    )

    .to(
      mission,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      "-=0.35"
    )

    .to(
      scroll,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
      },
      "-=0.25"
    );

  return tl;
}