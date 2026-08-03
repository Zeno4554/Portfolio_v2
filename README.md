# Portfolio v1 — Cinematic Scroll-Driven Portfolio

Next.js 15 / React 19 / TypeScript / Tailwind v4 / GSAP + ScrollTrigger / Lenis / React Three Fiber.

## Getting started

```bash
npm install
npm run dev
```

## Architecture

```
app/            Next.js App Router — layout, page composition, route-level loading
scenes/         One folder per narrative scene (Opening, About, Timeline, Skills, ...)
                Each exports a single named component + its own local sub-components.
components/     Shared, scene-agnostic UI (layout chrome, buttons, cursor, typography)
animations/     GSAP logic, decoupled from components:
                  gsap/       plugin registration (see lib/gsap.ts — registers eagerly)
                  hooks/      useGsapScrollTrigger, useParallax, useMagnetic
                  text/       split-text utilities for headline reveals
                  timelines/  reusable timeline *factories* (build, don't play)
                  transitions/ clip-path / mask reveal helpers
r3f/            React Three Fiber — canvas wrapper + scene-specific 3D content
lib/            Framework-agnostic utilities: gsap.ts, lenis.ts, utils.ts, constants.ts
store/          Zustand stores (scene/scroll state, cursor state — split to avoid
                over-rendering on high-frequency cursor updates)
data/           Typed content (projects, skills, experience, social, stats)
types/          Shared content types consumed by data/ and scene components
config/         Site-wide constants: scene registry, breakpoints, camera defaults, motion tokens
providers/      Client providers composed once at the root (SmoothScrollProvider)
hooks/          Generic, non-animation hooks (useMediaQuery, useReducedMotion)
```

## Conventions

- **Scene order is defined once**, in `config/site.ts` (`SCENES`). `app/page.tsx` and
  `components/layout/SceneTracker.tsx` both read from it — don't hardcode scene order elsewhere.
- **Every scene past Opening is `dynamic()`-imported** in `app/page.tsx` for code-splitting.
  Opening is not, since it's the LCP element.
- **All ScrollTrigger instances should go through `useGsapScrollTrigger`** (or `gsap.context`
  directly, as in `scenes/Experience`) so cleanup on unmount/fast-refresh is automatic.
- **Reduced motion & low-power devices**: `hooks/usePreferences.ts` exposes
  `useIsLowPowerDevice()`, used by the Skills Galaxy to swap the R3F canvas for a static list.
  Extend this pattern to any other GPU-heavy scene additions.

## Known gap to resolve before shipping real content

`data/projects.ts` currently points `coverImage` at `/assets/images/...`. Only files under
`public/` are served at a URL in Next.js — the top-level `assets/` folder in this scaffold
mirrors the originally-proposed architecture (source-organized, imported by components) rather
than the `public/` convention. Before adding real project imagery, either:

1. Move images into `public/assets/...` and keep the string-path `coverImage` field, or
2. Import images directly (`import cover from "@/assets/images/x.jpg"`) and change
   `coverImage` to `StaticImageData` in `types/content.ts`.

(1) is simpler; (2) gets automatic blur placeholders and dimension inference from `next/image`.

## Fonts

`app/layout.tsx` currently uses `next/font/google` (Inter + Space Grotesk) so the project
builds without any binary font files. Swap in real licensed display/body faces under
`assets/fonts/` via `next/font/local` when finalizing the type system in
`app/globals.css` (`--font-display` / `--font-body`).
