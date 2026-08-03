"use client";

import { OrbitControls } from "@react-three/drei";
import { SceneCanvas } from "./SceneCanvas";
import { SkillNodes } from "./SkillNodes";
import type { SkillNode } from "@/types/content";

export function GalaxyCanvas({ nodes }: { nodes: SkillNode[] }) {
  return (
    <SceneCanvas>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={80} color="#3ce7ff" />
      <pointLight position={[-10, -5, -10]} intensity={60} color="#7c5cff" />
      <SkillNodes nodes={nodes} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.4}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(Math.PI * 2) / 3}
      />
    </SceneCanvas>
  );
}
