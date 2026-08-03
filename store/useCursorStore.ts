import { create } from "zustand";

type CursorVariant = "default" | "link" | "drag" | "view" | "hidden";

interface CursorState {
  variant: CursorVariant;
  label: string | null;
  setVariant: (variant: CursorVariant, label?: string | null) => void;
}

/**
 * Kept out of useSceneStore deliberately: cursor position updates at pointer
 * frequency and we don't want every subscriber of scene state re-rendering
 * on every mousemove.
 */
export const useCursorStore = create<CursorState>((set) => ({
  variant: "default",
  label: null,
  setVariant: (variant, label = null) => set({ variant, label }),
}));
