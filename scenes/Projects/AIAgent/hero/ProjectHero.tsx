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
    <section className="relative min-h-screen overflow-hidden">

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
          min-h-screen
          max-w-7xl
          items-center
          gap-24
          px-12
        "
      >
        <div className="max-w-3xl flex-1">

          <p
            className="font-mono text-sm tracking-[.45em]"
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
              text-[clamp(4rem,8vw,8rem)]
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
              mt-10
              max-w-2xl
              text-xl
              leading-relaxed
              text-white/70
            "
          >
            {project.tagline}
          </p>

          <div className="mt-14 flex flex-wrap gap-4">
            {project.technologies.map((tech) => (
              <span
                key={tech.name}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-2
                  text-sm
                  text-white/80
                "
              >
                {tech.name}
              </span>
            ))}
          </div>

        </div>

        <div className="relative w-full max-w-[720px] shrink-0 aspect-[16/9] min-h-[420px] lg:w-[50%]">

          <div
            className="
              absolute
              inset-0
              rounded-[42px]
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
              rounded-[42px]
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
                rounded-[42px]
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