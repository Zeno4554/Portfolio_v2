"use client";

import Background from "./Background";
import Hero from "./Hero";
import ScrollCue from "./ScrollCue";

export function Opening() {
  return (
    <section
      id="opening"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      <Background />

      <Hero />

      <ScrollCue />
    </section>
  );
}