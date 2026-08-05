"use client";

import { useRef } from "react";

import AuroraGlow from "./AuroraGlow";
import LightBeam from "./LightBeam";
import NoiseOverlay from "./NoiseOverlay";
import Vignette from "./Vignette";


import { useBackgroundAnimation } from "../useBackgroundAnimation";

export default function Background() {
  const auroraRef = useRef<HTMLDivElement>(null);
  const lightBeamRef = useRef<HTMLDivElement>(null);

  useBackgroundAnimation({
    aurora: auroraRef,
    lightBeam: lightBeamRef,
  });

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#05050A]" />

      <AuroraGlow ref={auroraRef} />

      <LightBeam ref={lightBeamRef} />

      <NoiseOverlay />

      <Vignette />
    </div>
  );
}