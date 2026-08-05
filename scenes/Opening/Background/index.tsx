"use client";

import AuroraGlow from "./AuroraGlow";
import LightBeam from "./LightBeam";
import NoiseOverlay from "./NoiseOverlay";
import Vignette from "./Vignette";

export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#05050A]" />

      <AuroraGlow />
      <LightBeam />
      <NoiseOverlay />
      <Vignette />
    </div>
  );
}