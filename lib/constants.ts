/** Shared z-index scale so layered scenes never fight for stacking order. */
export const Z_INDEX = {
  base: 0,
  scene: 10,
  particles: 20,
  cursor: 40,
  nav: 50,
  overlay: 60,
  loader: 100,
} as const;

/** Session-storage key used to skip the intro loader on subsequent visits. */
export const LOADER_SEEN_KEY = "portfolio:loader-seen";
