import { gsap } from "@/lib/gsap";

/**
 * Reveals `el` via an animated clip-path inset instead of opacity — reads
 * as a camera aperture opening rather than a fade, which is the signature
 * transition style between scenes (Opening -> Identity in particular).
 */
export function clipRevealIn(el: gsap.TweenTarget, opts?: gsap.TweenVars) {
  return gsap.fromTo(
    el,
    { clipPath: "inset(0% 0% 100% 0%)" },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1.4,
      ease: "cinematicOut",
      ...opts,
    }
  );
}

export function clipRevealOut(el: gsap.TweenTarget, opts?: gsap.TweenVars) {
  return gsap.to(el, {
    clipPath: "inset(100% 0% 0% 0%)",
    duration: 1,
    ease: "cameraGlide",
    ...opts,
  });
}
