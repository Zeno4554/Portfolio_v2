"use client";

import { Project } from "./projectsData";
import Image from "next/image";

interface ProjectHeroProps {
  project: Project;
}

export default function ProjectHero({
  project,
}: ProjectHeroProps) {
  return (
    <section
      data-project-hero
      className="relative min-h-screen overflow-hidden"
    >

      {/* Animated Glow */}
      <div
        data-project-glow
        className="absolute inset-0 opacity-20 blur-[220px]"
        style={{
          background: `radial-gradient(circle at center, ${project.accent}, transparent 70%)`,
        }}
      />

      {/* Massive Background Typography */}
      <h2
        data-background-title
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
          select-none
        "
      >
        {project.title}
      </h2>

      <div className="relative z-10 mx-auto flex min-h-svh w-full max-w-7xl flex-col gap-8 px-5 py-24 sm:gap-10 sm:px-8 lg:min-h-screen lg:flex-row lg:items-center lg:gap-20 lg:px-12">

        {/* LEFT */}
        <div className="w-full min-w-0 lg:w-[45%]">

          <p
            data-eyebrow
            className="font-mono text-[10px] uppercase tracking-[0.25em] sm:text-sm sm:tracking-[0.45em]"
            style={{
              color: project.accent,
            }}
          >
            SELECTED WORK
          </p>

          <h1
            data-project-title
            className="
              mt-6
              font-display
              text-[clamp(2.75rem,12vw,8rem)]
              font-black
              uppercase
              leading-[0.9]
              tracking-[-0.06em]
              text-white
            "
          >
            {project.title}
          </h1>

          <p
            data-project-tagline
            className="
              mt-10
              max-w-2xl
              text-base
              leading-7
              text-white/70
              sm:text-xl
              sm:leading-relaxed
            "
          >
            {project.tagline}
          </p>

          <div
            data-tech-container
            className="mt-8 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3 lg:mt-14 lg:gap-4"
          >
            {project.technologies.map((tech) => (
              <span
                key={tech}
                data-tech-pill
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-3
                  py-1.5
                  text-xs
                  text-white/80
                  backdrop-blur-xl
                  sm:px-5
                  sm:py-2
                  sm:text-sm
                "
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* RIGHT */}

        <div
          data-project-image
          className="relative aspect-[16/9] min-h-[220px] w-full max-w-full shrink-0 sm:min-h-[320px] lg:min-h-[440px] lg:w-[55%]"
        >

          <div
            className="
              absolute
              inset-0
              rounded-2xl sm:rounded-[32px] lg:rounded-[42px]
              blur-[140px]
            "
            style={{
              background: project.accent,
              opacity: 0.25,
            }}
          />

          <div
            className="
              relative
              h-full
              overflow-hidden
              rounded-2xl sm:rounded-[32px] lg:rounded-[42px]
              border
              border-white/10
              bg-white/[0.03]
              shadow-[0_40px_120px_rgba(0,0,0,0.45)]
              backdrop-blur-xl
            "
          >
            <Image
              src={project.heroImage}
              alt={project.fullTitle}
              width={1920}
              height={1080}
              priority
              className="
                h-full
                w-full
                rounded-2xl sm:rounded-[32px] lg:rounded-[42px]
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