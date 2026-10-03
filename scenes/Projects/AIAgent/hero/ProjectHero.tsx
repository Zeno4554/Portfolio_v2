"use client";

import Image from "next/image";

import { projectData } from "../data/projectData";

interface Props {
  project: typeof projectData;
}

export default function ProjectHero({
  project,
}: Props) {
  return (
    <section
      data-project-hero
      className="relative min-h-screen overflow-hidden"
    >

      <div
        className="absolute inset-0 opacity-20 blur-[220px]"
        style={{
          background: `radial-gradient(circle at center, ${project.accent}, transparent 70%)`,
        }}
      />

      <h2
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          whitespace-nowrap
          font-display
          text-[clamp(10rem,22vw,24rem)]
          font-black
          uppercase
          tracking-[-0.08em]
          text-white/[0.03]
        "
      >
        INTELLIGENCE
      </h2>

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          min-h-screen
          max-w-7xl
          flex-col
          items-stretch
          gap-12
          px-5
          py-24
          lg:flex-row
          lg:items-center
          lg:gap-24
          lg:px-12
        "
      >
        <div className="w-full min-w-0 max-w-3xl flex-1">

          <p
            className="font-mono text-[10px] tracking-[.2em] sm:text-sm sm:tracking-[.45em]"
            style={{
              color: project.accent,
            }}
          >
            ARTIFICIAL INTELLIGENCE
          </p>

          <h1
            className="
              mt-6
              font-display
              text-[clamp(2.75rem,12vw,8rem)]
              font-black
              uppercase
              leading-[0.9]
              text-white
            "
          >
            {project.title}
          </h1>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-white/70
              sm:mt-10
              sm:text-xl
              sm:leading-relaxed
            "
          >
            {project.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3 lg:mt-14 lg:gap-4">
            {project.technologies.map((tech) => (
              <span
                key={tech.name}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-3
                  py-1.5
                  text-xs
                  text-white/80
                  sm:px-5
                  sm:py-2
                  sm:text-sm
                "
              >
                {tech.name}
              </span>
            ))}
          </div>

        </div>

        <div className="relative aspect-[16/9] min-h-[220px] w-full max-w-[720px] shrink-0 sm:min-h-[320px] lg:min-h-[420px] lg:w-[50%]">

          <div
            className="
              absolute
              inset-0
              rounded-[24px] sm:rounded-[42px]
              blur-[140px]
            "
            style={{
              background: project.accent,
              opacity: .25,
            }}
          />

          <div
            className="
              relative
              h-full
              overflow-hidden
              rounded-[24px] sm:rounded-[42px]
              border
              border-white/10
              bg-white/[0.03]
            "
          >
            <Image
              src={project.heroImage}
              alt={project.fullTitle}
              width={1600}
              height={900}
              priority
              className="
                h-full
                w-full
                rounded-[24px] sm:rounded-[42px]
                object-cover
                transition-transform
                duration-700
              "
            />
          </div>

        </div>

      </div>

    </section>
  );
}