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
    <section className="relative min-h-screen overflow-hidden">

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

      <div className="relative z-10 mx-auto flex min-h-screen flex-col gap-12 px-6 py-12 lg:flex-row lg:items-center lg:gap-20 lg:px-12">

        {/* LEFT */}
        <div className="w-full lg:w-[45%]">

          <p
            data-eyebrow
            className="font-mono text-sm uppercase tracking-[0.45em]"
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
              text-[clamp(4rem,8vw,8rem)]
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
              text-xl
              leading-relaxed
              text-white/70
            "
          >
            {project.tagline}
          </p>

          <div
            data-tech-container
            className="mt-14 flex flex-wrap gap-4"
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
                  px-5
                  py-2
                  text-sm
                  text-white/80
                  backdrop-blur-xl
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
          className="relative w-full max-w-full shrink-0 aspect-[16/9] min-h-[440px] sm:min-h-[520px] lg:w-[55%]"
        >

          <div
            className="
              absolute
              inset-0
              rounded-[42px]
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
              rounded-[42px]
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