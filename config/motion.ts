/**
 * -----------------------------------------------------------------------------
 * Motion Tokens
 * -----------------------------------------------------------------------------
 * Every animation in the project must use these values.
 * -----------------------------------------------------------------------------
 */

export const MOTION = {
  duration: {
    instant: 0,
    fast: 0.3,
    normal: 0.6,
    slow: 1.2,
    cinematic: 2.2,
  },

  ease: {
    default: "power2.out",
    cinematic: "cinematicOut",
    camera: "cameraGlide",
    smooth: "power3.inOut",
    snap: "expo.out",
  },

  stagger: {
    tiny: 0.03,
    small: 0.08,
    normal: 0.12,
    large: 0.2,
  },
} as const;