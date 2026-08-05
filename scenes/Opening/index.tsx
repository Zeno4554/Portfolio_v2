"use client";

import Hero from "./Hero";
import ScrollCue from "./ScrollCue";

export function Opening() {
  return (
    <section
      id="opening"
      className="relative min-h-screen overflow-hidden bg-black"
    >
    

      <Hero />

      <ScrollCue />
    </section>
  );
}