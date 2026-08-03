import { gsap } from "@/lib/gsap";
import { splitTextToWords } from "@/animations/text/splitText";

/**
 * Builds (but does not play) a staggered word-reveal timeline for a
 * headline element. Caller owns play/scroll-trigger wiring and must call
 * the returned `revert` on unmount to restore the original DOM text
 * (important for SEO crawlers reading the un-split markup).
 */
export function buildHeadlineReveal(el: HTMLElement) {
  const { words, revert } = splitTextToWords(el);

  const timeline = gsap.timeline({ paused: true });
  timeline.fromTo(
    words,
    { yPercent: 120, opacity: 0 },
    {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      ease: "cinematicOut",
      stagger: 0.06,
    }
  );

  return { timeline, revert };
}
