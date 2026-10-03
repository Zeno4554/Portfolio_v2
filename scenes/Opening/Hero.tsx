"use client";

import { useRef } from "react";
import { HERO } from "./constants";
import LightSweep from "./LightSweep";
import { useOpeningAnimation } from "./useOpeningAnimation";

export default function Hero() {
  const hero = useRef<HTMLDivElement>(null);
  const role = useRef<HTMLParagraphElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const mission = useRef<HTMLParagraphElement>(null);
  const scroll = useRef<HTMLDivElement>(null);
  const background = useRef<HTMLDivElement>(null);
  const lightSweep = useRef<HTMLDivElement>(null);

  useOpeningAnimation({
    hero,
    role,
    title,
    mission,
    scroll,
    background,
    lightSweep,
  });

  return (
    <>
      {/* Background overlay */}
      <div
        ref={background}
        className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent"
      />

      {/* Animated light sweep */}
      <LightSweep ref={lightSweep} />

      {/* Hero */}
      <div
        ref={hero}
        className="relative z-20 flex min-h-screen flex-col items-center justify-center px-5 py-24 text-center sm:px-6"
      >
        <div className="w-full space-y-8">
          <div className="space-y-4">
            <p
              ref={role}
              className="text-[10px] uppercase tracking-[0.3em] text-blue-400/80 sm:text-xs sm:tracking-[0.6em]"
            >
              {HERO.role}
            </p>

            <h1
              ref={title}
              className="font-display text-[clamp(3rem,14vw,12rem)] font-black uppercase leading-none tracking-[-0.07em] text-white"
            >
              {HERO.title}
            </h1>
          </div>

          <p
            ref={mission}
            className="mx-auto max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-9"
          >
            Building scalable software.
            <br />
            Crafting exceptional digital experiences.
          </p>
        </div>

        <div
          ref={scroll}
          className="absolute bottom-14 text-xs uppercase tracking-[0.4em] text-white/40"
        >
          {HERO.scrollText}
        </div>
      </div>
    </>
  );
}