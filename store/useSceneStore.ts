import { create } from "zustand";
import type { SceneId } from "@/config/site";

interface SceneState {
  /** 0–1 progress through the entire document, updated by Lenis on scroll. */
  scrollProgress: number;
  /** Currently "active" scene per ScrollTrigger, drives nav highlight + camera state. */
  activeScene: SceneId;
  /** True while the intro loader sequence is still playing. */
  isLoading: boolean;
  /** True once the visitor has interacted (used to gate autoplay audio/video). */
  hasInteracted: boolean;

  setScrollProgress: (value: number) => void;
  setActiveScene: (scene: SceneId) => void;
  setIsLoading: (value: boolean) => void;
  setHasInteracted: (value: boolean) => void;
}

export const useSceneStore = create<SceneState>((set) => ({
  scrollProgress: 0,
  activeScene: "opening",
  isLoading: true,
  hasInteracted: false,

  setScrollProgress: (value) => set({ scrollProgress: value }),
  setActiveScene: (scene) => set({ activeScene: scene }),
  setIsLoading: (value) => set({ isLoading: value }),
  setHasInteracted: (value) => set({ hasInteracted: value }),
}));
