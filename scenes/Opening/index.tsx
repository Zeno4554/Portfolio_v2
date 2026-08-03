"use client";

import Hero from "./Hero";
import AuroraBackground from "./AuroraBackground";
import ScrollCue from "./ScrollCue";

export function Opening() {
  return (
    <section
      id="opening"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      <AuroraBackground />

      <Hero />

      <ScrollCue />
    </section>
  );
}