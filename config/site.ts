/**
 * Central registry of the 8 cinematic scenes. This drives:
 *  - the scene order rendered in app/page.tsx
 *  - the scroll-progress markers used by the global camera/nav
 *  - lazy-loading boundaries (each scene is dynamically imported)
 *
 * Keep this the single source of truth for scene order — do not hardcode
 * scene sequence anywhere else.
 */
export const SCENES = [
  { id: "opening", label: "Opening", index: "00" },
  { id: "identity", label: "Identity", index: "01" },
  { id: "evolution", label: "Odyssey", index: "02" },
  { id: "skills", label: "Skills Galaxy", index: "03" },
  { id: "projects", label: "Projects", index: "04" },
  { id: "experience", label: "Experience", index: "05" },
  { id: "github", label: "GitHub", index: "06" },
  { id: "contact", label: "Contact", index: "07" },
] as const;

export type SceneId = (typeof SCENES)[number]["id"];

export const SITE = {
  name: "Anurag",
  role: "Software Engineer — AI, Full Stack & Cloud Systems",
  description:
    "A cinematic, scroll-driven interactive portfolio for an engineer working across AI, full-stack development, cloud infrastructure, and intelligent systems.",
  url: "https://example.com",
} as const;

export const BREAKPOINTS = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
} as const;

/** Default perspective camera values for R3F scenes (Skills Galaxy, Opening). */
export const CAMERA_DEFAULTS = {
  fov: 45,
  near: 0.1,
  far: 200,
  position: [0, 0, 12] as [number, number, number],
} as const;