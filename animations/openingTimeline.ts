import { gsap } from "@/lib/gsap";

interface OpeningTimelineProps {
  background: HTMLDivElement;
  role: HTMLParagraphElement;
  title: HTMLHeadingElement;
  mission: HTMLParagraphElement;
  scroll: HTMLDivElement;
  lightSweep: HTMLDivElement;
}

export function openingTimeline({
  background,
  role,
  title,
  mission,
  scroll,
  lightSweep,
}: OpeningTimelineProps) {
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
    },
  });

  // Initial states
  gsap.set(background, {
    opacity: 0,
    scale: 1.08,
  });

  gsap.set(lightSweep, {
    x: -window.innerWidth,
    opacity: 0,
    rotate: -12,
  });

  gsap.set([role, title, mission, scroll], {
    opacity: 0,
    y: 40,
  });

  // Opening sequence
  tl.to(background, {
    opacity: 1,
    scale: 1,
    duration: 1.6,
  })

    // Cinematic light sweep
    .to(
      lightSweep,
      {
        opacity: 1,
        x: window.innerWidth * 1.8,
        duration: 1.8,
        ease: "power2.inOut",
      },
      "-=1.2"
    )

    // Hero reveal
    .to(
      role,
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
      },
      "-=1.2"
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
      "-=0.45"
    )

    .to(
      scroll,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      },
      "-=0.35"
    )

    // Sweep exits
    .to(
      lightSweep,
      {
        opacity: 0,
        duration: 0.5,
      },
      "-=0.2"
    )

    // Idle breathing
    .add(() => {
      gsap.to(background, {
        scale: 1.03,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(scroll, {
        y: 8,
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

  return tl;
}