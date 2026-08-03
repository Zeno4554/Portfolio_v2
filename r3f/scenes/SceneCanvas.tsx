"use client";

import { Canvas } from "@react-three/fiber";
import { CAMERA_DEFAULTS } from "@/config/site";

export function SceneCanvas({ children }: { children: React.ReactNode }) {
  return (
    <Canvas
      dpr={[1, 1.5]} // capped DPR — R3F on a 3x retina display is a common perf trap
      gl={{ antialias: true, alpha: true }}
      camera={CAMERA_DEFAULTS}
    >
      {children}
    </Canvas>
  );
}
