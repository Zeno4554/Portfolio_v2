"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { SkillNode } from "@/types/content";

const CATEGORY_COLOR: Record<SkillNode["category"], string> = {
  ai: "#7c5cff",
  backend: "#3ce7ff",
  frontend: "#ff4fd8",
  cloud: "#ffb84f",
  systems: "#f3f3f8",
};

/**
 * Distributes skill nodes on a fibonacci sphere (even spacing without the
 * clustering a naive random distribution produces) and renders each as a
 * glowing point. Slow constant rotation implies depth without demanding
 * pointer interaction.
 */
export function SkillNodes({ nodes }: { nodes: SkillNode[] }) {
  const groupRef = useRef<THREE.Group>(null);

  const positions = useMemo(() => {
    const radius = 4.5;
    const golden = Math.PI * (3 - Math.sqrt(5));
    return nodes.map((_, i) => {
      const y = 1 - (i / Math.max(nodes.length - 1, 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      return new THREE.Vector3(Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius);
    });
  }, [nodes]);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.06;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh key={node.id} position={positions[i]}>
          <sphereGeometry args={[0.12 + node.proficiency * 0.14, 16, 16]} />
          <meshStandardMaterial
            color={CATEGORY_COLOR[node.category]}
            emissive={CATEGORY_COLOR[node.category]}
            emissiveIntensity={0.6}
            roughness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}
