"use client";

import { useEffect, useMemo, useState } from "react";
import { Section } from "@/components/common/Section";

type ArtifactType =
  | "code"
  | "terminal"
  | "iot"
  | "architecture"
  | "photo"
  | "ai"
  | "note";

interface DiaryPage {
  year: string;
  chapter: string;
  title: string;
  subtitle: string;
  body: string;
  artifact: ArtifactType;
  artifactLabel: string;
  tags: string[];
  note?: string;
}

const pages: DiaryPage[] = [
  // ============================================================
  // 2022
  // ============================================================

  {
    year: "2022",
    chapter: "THE BEGINNING",
    title: "THE FIRST PAGE",
    subtitle: "Hello, world.",
    body:
      "The beginning was simple. Curiosity turned into the first lines of code, and suddenly a screen could respond to something I had written.",
    artifact: "code",
    artifactLabel: "FIRST PROGRAM",
    tags: ["C", "PYTHON", "LOGIC"],
    note: "Every journey starts with something small.",
  },

  {
    year: "2022",
    chapter: "THE BEGINNING",
    title: "FIRST EXPERIMENTS",
    subtitle: "Learning by breaking things.",
    body:
      "Programming started becoming less about remembering syntax and more about understanding why something worked — and why it didn't.",
    artifact: "terminal",
    artifactLabel: "OLD TERMINAL",
    tags: ["CLI", "DEBUGGING", "PYTHON"],
    note: "Run it. Break it. Understand it. Run it again.",
  },

  {
    year: "2022",
    chapter: "THE BEGINNING",
    title: "THE FIRST TURN",
    subtitle: "Maybe I could build things.",
    body:
      "There wasn't a clear destination yet. There was only the feeling that building something from an empty screen was worth pursuing.",
    artifact: "photo",
    artifactLabel: "ARCHIVE / 2022",
    tags: ["CURIOSITY", "COLLEGE", "BEGINNING"],
    note: "A small beginning became a much longer story.",
  },

  // ============================================================
  // 2023
  // ============================================================

  {
    year: "2023",
    chapter: "FINDING MY WAY",
    title: "THE WEB",
    subtitle: "Things started connecting.",
    body:
      "The browser became another canvas. HTML, CSS and JavaScript turned ideas into interfaces that other people could actually interact with.",
    artifact: "code",
    artifactLabel: "WEB EXPERIMENT",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    note: "From writing code to making something visible.",
  },

  {
    year: "2023",
    chapter: "FINDING MY WAY",
    title: "CONNECTED THINGS",
    subtitle: "Software met the physical world.",
    body:
      "IoT introduced another way of thinking: sensors, devices, data and software could all become part of one system.",
    artifact: "iot",
    artifactLabel: "IOT WORKBENCH",
    tags: ["ESP8266", "SENSORS", "IOT"],
    note: "A device could now become part of the program.",
  },

  {
    year: "2023",
    chapter: "FINDING MY WAY",
    title: "EXPERIMENTATION",
    subtitle: "One project led to another.",
    body:
      "Some ideas worked. Some didn't. The important part was learning to move from an idea to something that could actually run.",
    artifact: "photo",
    artifactLabel: "PROJECT ARCHIVE",
    tags: ["REACT", "PROJECTS", "EXPERIMENTS"],
    note: "The experiments were becoming the education.",
  },

  // ============================================================
  // 2024
  // ============================================================

  {
    year: "2024",
    chapter: "THE BUILDING YEARS",
    title: "BIGGER SYSTEMS",
    subtitle: "From assignments to systems.",
    body:
      "Projects started becoming more structured. Frontends needed backends. Backends needed databases. Everything needed to talk to everything else.",
    artifact: "architecture",
    artifactLabel: "SYSTEM SKETCH",
    tags: ["NODE", "API", "DATABASE"],
    note: "The interesting problems were no longer isolated.",
  },

  {
    year: "2024",
    chapter: "THE BUILDING YEARS",
    title: "THE WORKBENCH",
    subtitle: "Code became a place to experiment.",
    body:
      "Terminal windows, APIs, databases and debugging sessions became part of the everyday process of turning an idea into a working system.",
    artifact: "terminal",
    artifactLabel: "DEVELOPMENT LOG",
    tags: ["BACKEND", "REST", "POSTGRES"],
    note: "Most of engineering happens between the first idea and the final result.",
  },

  {
    year: "2024",
    chapter: "THE BUILDING YEARS",
    title: "THE BIGGER BUILDS",
    subtitle: "Engineering started to feel real.",
    body:
      "The projects were no longer just demonstrations. They became systems with users, data, APIs, interfaces and problems that needed solving.",
    artifact: "photo",
    artifactLabel: "BUILD ARCHIVE",
    tags: ["FULL STACK", "SYSTEMS", "BUILDING"],
    note: "The scale changed. The curiosity stayed.",
  },

  // ============================================================
  // 2025
  // ============================================================

  {
    year: "2025",
    chapter: "THE ACCELERATION",
    title: "THINGS GOT SERIOUS",
    subtitle: "Real systems. Real constraints.",
    body:
      "Internships, larger projects, cloud infrastructure and automation changed the way I thought about software. Things had to work beyond my own machine.",
    artifact: "architecture",
    artifactLabel: "PRODUCTION FLOW",
    tags: ["AWS", "CLOUD", "AUTOMATION"],
    note: "A working demo and a working system are two different things.",
  },

  {
    year: "2025",
    chapter: "THE ACCELERATION",
    title: "REAL WORLD",
    subtitle: "Seeing systems outside the screen.",
    body:
      "Working with network and operational systems brought a different perspective — monitoring, faults, restoration and the importance of keeping systems running.",
    artifact: "iot",
    artifactLabel: "FIELD NOTES",
    tags: ["NETWORK", "FTTH", "MONITORING"],
    note: "Reliability becomes visible when something stops working.",
  },

  {
    year: "2025",
    chapter: "THE ACCELERATION",
    title: "BUILDING INTELLIGENCE",
    subtitle: "The AI chapter began.",
    body:
      "Machine learning and generative AI opened another direction. Software wasn't only processing instructions anymore — it could start interpreting information and producing useful results.",
    artifact: "ai",
    artifactLabel: "AI WORKBENCH",
    tags: ["AI", "ML", "GENAI"],
    note: "The question changed from 'what can I code?' to 'what can this system understand?'",
  },

  // ============================================================
  // 2026
  // ============================================================

  {
    year: "2026",
    chapter: "STILL BECOMING",
    title: "THE MULTIMODAL CHAPTER",
    subtitle: "More than one way to understand information.",
    body:
      "Text, images and audio started coming together inside intelligent systems. The boundary between different forms of information became something to design around.",
    artifact: "ai",
    artifactLabel: "MULTIMODAL PIPELINE",
    tags: ["MULTIMODAL", "LLM", "AGENTS"],
    note: "The interface isn't always a screen anymore.",
  },

  {
    year: "2026",
    chapter: "STILL BECOMING",
    title: "THE CURRENT WORKBENCH",
    subtitle: "Still building.",
    body:
      "AI agents, full-stack applications, intelligent systems and new experiments now share the same workbench. Each project is another attempt to build something useful.",
    artifact: "architecture",
    artifactLabel: "CURRENT SYSTEMS",
    tags: ["AGENTS", "FULL STACK", "SYSTEMS"],
    note: "The workbench is messy. That's usually a good sign.",
  },

  {
    year: "2026",
    chapter: "STILL BECOMING",
    title: "THE UNFINISHED PAGE",
    subtitle: "What's next?",
    body:
      "There isn't a final answer yet. And that's the point. This diary ends here because the story hasn't.",
    artifact: "note",
    artifactLabel: "NEXT CHAPTER",
    tags: ["2026", "NEXT", "∞"],
    note: "The next page hasn't been written.",
  },
];

function CodeArtifact({ page }: { page?: DiaryPage }) {
  const is2023 = page?.year === "2023";

  if (is2023) {
    return (
      <div className="relative overflow-hidden rounded-sm border border-black/20 bg-[#171a18] p-4 font-mono text-[9px] leading-5 text-[#a8e69b] shadow-[0_15px_35px_rgba(0,0,0,0.22)]">
        <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#ff6b5b]/70" />
            <span className="h-2 w-2 rounded-full bg-[#e6c85b]/70" />
            <span className="h-2 w-2 rounded-full bg-[#69c96a]/70" />
            <span className="ml-2 text-[8px] text-white/40">app.jsx — DOM Experiment</span>
          </div>
          <span className="text-[7px] text-[#69c96a]/80">React 18</span>
        </div>

        <div>
          <span className="text-[#d99cff]">function</span>{" "}
          <span className="text-[#7ddcff]">InteractiveCanvas</span>() &#123;
        </div>
        <div className="pl-3">
          <span className="text-[#d99cff]">const</span> [active, setActive] ={" "}
          <span className="text-[#7ddcff]">useState</span>(<span className="text-[#d7c77c]">true</span>);
        </div>
        <div className="pl-3">
          <span className="text-[#d99cff]">return</span> (
        </div>
        <div className="pl-6 text-[#d7c77c]">
          &lt;<span className="text-[#7ddcff]">button</span> onClick=&#123;() =&gt; setActive(!active)&#125;&gt;
        </div>
        <div className="pl-9 text-white/70">
          &#123;active ? <span className="text-[#a8e69b]">&quot;[ LIVE INTERFACE ]&quot;</span> : <span className="text-white/40">&quot;[ OFFLINE ]&quot;</span>&#125;
        </div>
        <div className="pl-6 text-[#d7c77c]">
          &lt;/<span className="text-[#7ddcff]">button</span>&gt;
        </div>
        <div className="pl-3">&#125;;</div>

        <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 text-[8px]">
          <span className="text-white/30">&gt; DOM Render: SUCCESS</span>
          <span className="rounded bg-[#69c96a]/10 px-1.5 py-0.5 text-[#69c96a]">Interactive UI</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-sm border border-black/20 bg-[#171a18] p-5 font-mono text-[10px] leading-6 text-[#a8e69b] shadow-[0_15px_35px_rgba(0,0,0,0.22)]">
      <div className="mb-4 flex items-center gap-1.5 border-b border-white/10 pb-3">
        <span className="h-2 w-2 rounded-full bg-[#ff6b5b]/70" />
        <span className="h-2 w-2 rounded-full bg-[#e6c85b]/70" />
        <span className="h-2 w-2 rounded-full bg-[#69c96a]/70" />
        <span className="ml-2 text-[8px] text-white/30">
          first_experiment.py
        </span>
      </div>

      <div>
        <span className="text-[#d99cff]">def</span>{" "}
        <span className="text-[#7ddcff]">begin</span>():
      </div>
      <div className="pl-4">
        <span className="text-white/45">message</span>{" "}
        ={" "}
        <span className="text-[#d7c77c]">
          &quot;Hello, World!&quot;
        </span>
      </div>
      <div className="pl-4">
        <span className="text-[#7ddcff]">print</span>(message)
      </div>
      <div className="mt-3 text-white/25">
        &gt; process completed
      </div>
    </div>
  );
}

function TerminalArtifact({ page }: { page?: DiaryPage }) {
  const is2024 = page?.year === "2024";

  if (is2024) {
    return (
      <div className="relative overflow-hidden rounded-sm border border-black/25 bg-[#10120f] p-4 font-mono text-[8.5px] leading-5 text-[#a9e79d] shadow-[0_15px_35px_rgba(0,0,0,0.22)]">
        <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
          <span className="text-[8px] uppercase tracking-[0.2em] text-white/40">
            zsh / node-backend-service
          </span>
          <span className="text-[7px] text-[#7ddcff]">PORT 5000</span>
        </div>

        <div className="text-white/40">$ npx prisma migrate dev --name init</div>
        <div className="text-[#7ddcff]">✔ Environment variables loaded from .env</div>
        <div className="text-white/70">✔ PostgreSQL database schema synchronized (3.2s)</div>

        <div className="mt-3 text-white/40">$ npm run start:dev</div>
        <div className="text-[#a9e79d]">[Express] Server running on http://localhost:5000</div>
        <div className="text-white/50">POST /api/v1/auth/login <span className="text-[#69c96a]">200 OK</span> - 38ms</div>
        <div className="text-white/50">GET /api/v1/products/query <span className="text-[#69c96a]">200 OK</span> - 14ms</div>

        <div className="mt-3 border-t border-white/10 pt-2 text-white/30">
          STATUS: <span className="text-[#d7c77c]">API ACTIVE & ACCESSIBLE</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-sm border border-black/25 bg-[#10120f] p-5 font-mono text-[9px] leading-6 text-[#a9e79d] shadow-[0_15px_35px_rgba(0,0,0,0.22)]">
      <div className="mb-4 text-[8px] uppercase tracking-[0.2em] text-white/30">
        terminal / archive
      </div>

      <div className="text-white/35">$ python main.py</div>
      <div>initializing project...</div>
      <div>loading modules...</div>
      <div>connecting...</div>
      <div className="text-[#d7c77c]">ready.</div>

      <div className="mt-4 text-white/30">
        $ npm run dev
      </div>
      <div className="text-[#7ddcff]">
        local development server started
      </div>

      <div className="mt-4 text-white/20">
        ───────────────────────────
      </div>

      <div className="text-white/45">
        note: <span className="text-white/70">keep building.</span>
      </div>
    </div>
  );
}

function IoTArtifact({ page }: { page?: DiaryPage }) {
  const is2025 = page?.year === "2025";

  if (is2025) {
    return (
      <div className="relative overflow-hidden rounded-sm border border-black/20 bg-[#161a15] p-3 shadow-[0_15px_35px_rgba(0,0,0,0.25)]">
        <div className="mb-2 flex items-center justify-between border-b border-white/10 pb-1.5 font-mono text-[8px]">
          <span className="uppercase tracking-[0.2em] text-[#80d86c]">
            SOLAR MONITORING / FIELD TELEMETRY
          </span>
          <span className="rounded bg-[#80d86c]/15 px-1.5 py-0.5 text-[#80d86c]">
            AWS IoT CORE
          </span>
        </div>

        {/* Real solar dashboard screenshot preview */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded border border-white/15 bg-black/40">
          <img
            src="/images/projects/solar/hero.png"
            alt="IoT Solar Power Management Dashboard"
            className="h-full w-full object-cover opacity-90 sepia-[0.15] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          <div className="absolute bottom-2 left-2.5 font-mono text-[7.5px] tracking-wider text-white/90">
            LIVE ANALYTICS & PREDICTIVE TELEMETRY
          </div>
        </div>

        <div className="mt-2.5 grid grid-cols-3 gap-1.5 text-center font-mono text-[7px]">
          <div className="border border-white/10 bg-white/5 p-1 text-white/70">
            VOLTAGE
            <br />
            <span className="text-[9px] font-bold text-[#80d86c]">48.2 V</span>
          </div>
          <div className="border border-white/10 bg-white/5 p-1 text-white/70">
            CURRENT
            <br />
            <span className="text-[9px] font-bold text-[#7ddcff]">70.5 A</span>
          </div>
          <div className="border border-white/10 bg-white/5 p-1 text-white/70">
            MQTT STATUS
            <br />
            <span className="text-[9px] font-bold text-[#d7c77c]">ONLINE</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-sm border border-black/15 bg-[#c4bcaa] p-5 shadow-[0_15px_35px_rgba(0,0,0,0.16)]">
      <div className="mb-4 font-mono text-[8px] uppercase tracking-[0.25em] text-black/40">
        IoT / ESP8266 FIELD SKETCH
      </div>

      <div className="flex items-center justify-center gap-3">
        <div className="border-2 border-black/40 bg-[#77776f] px-4 py-7 font-mono text-[9px] text-white/80 shadow-lg">
          ESP8266
        </div>

        <div className="h-px w-10 bg-black/30" />

        <div className="border border-black/30 bg-[#a49c89] px-4 py-5 text-center font-mono text-[8px] text-black/55">
          DHT22
          <br />
          SENSOR
        </div>

        <div className="h-px w-10 bg-black/30" />

        <div className="border border-black/30 bg-[#8c927e] px-4 py-5 text-center font-mono text-[8px] text-black/55">
          MQTT
          <br />
          BROKER
        </div>
      </div>

      <div className="mt-5 flex justify-between font-mono text-[7px] uppercase tracking-[0.18em] text-black/45">
        <span>device → sensor data</span>
        <span>MQTT: telemetry/live</span>
      </div>
    </div>
  );
}

function ArchitectureArtifact({ page }: { page?: DiaryPage }) {
  const is2025 = page?.year === "2025";
  const is2026 = page?.year === "2026";

  if (is2025) {
    return (
      <div className="relative overflow-hidden rounded-sm border border-black/15 bg-[#c8c0ae] p-4 shadow-[0_15px_35px_rgba(0,0,0,0.16)]">
        <div className="mb-3 flex justify-between border-b border-black/15 pb-2 font-mono text-[8px] uppercase tracking-[0.25em] text-black/50">
          <span>AWS PRODUCTION TOPOLOGY</span>
          <span className="font-bold text-black/70">CLOUD INFRA</span>
        </div>

        <div className="grid grid-cols-3 gap-2 font-mono text-[7.5px] text-black/75">
          <div className="border border-black/30 bg-[#b9b09d] p-2 text-center">
            <span className="font-bold">ROUTE 53</span>
            <br />
            DNS & SSL
          </div>
          <div className="border border-black/30 bg-[#b9b09d] p-2 text-center">
            <span className="font-bold">API GATEWAY</span>
            <br />
            Load Balancing
          </div>
          <div className="border border-black/30 bg-[#b9b09d] p-2 text-center">
            <span className="font-bold">EC2 / DOCKER</span>
            <br />
            Auto Scaling
          </div>
        </div>

        <div className="my-2 text-center font-mono text-[8px] text-black/40">
          ↓ Database & Storage Layer ↓
        </div>

        <div className="grid grid-cols-2 gap-2 font-mono text-[7.5px] text-black/75">
          <div className="border border-black/30 bg-[#ada28d] p-2 text-center">
            <span className="font-bold">RDS POSTGRESQL</span>
            <br />
            Multi-AZ Replicas
          </div>
          <div className="border border-black/30 bg-[#ada28d] p-2 text-center">
            <span className="font-bold">S3 & CLOUDWATCH</span>
            <br />
            Logs & Media Assets
          </div>
        </div>
      </div>
    );
  }

  if (is2026) {
    return (
      <div className="relative overflow-hidden rounded-sm border border-black/15 bg-[#c8c0ae] p-4 shadow-[0_15px_35px_rgba(0,0,0,0.16)]">
        <div className="mb-3 flex justify-between border-b border-black/15 pb-2 font-mono text-[8px] uppercase tracking-[0.25em] text-black/50">
          <span>INTEGRATED SYSTEM ARCHITECTURE</span>
          <span className="font-bold text-black/70">WORKBENCH 2026</span>
        </div>

        <div className="flex flex-col gap-2 font-mono text-[7.5px] text-black/75">
          <div className="flex justify-between gap-2">
            <div className="flex-1 border border-black/30 bg-[#b9b09d] p-2 text-center">
              <span className="font-bold">SKYCORRIDOR</span>
              <br />
              3D Pathfinding Engine
            </div>
            <div className="flex-1 border border-black/30 bg-[#b9b09d] p-2 text-center">
              <span className="font-bold">AI QUERY AGENT</span>
              <br />
              LLM + LangChain
            </div>
          </div>
          <div className="border border-black/30 bg-[#a89d88] p-2 text-center">
            <span className="font-bold">CORE PLATFORM SERVICES</span>
            <br />
            FastAPI · Express · Prisma · PostgreSQL · AWS IoT
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-sm border border-black/15 bg-[#c8c0ae] p-5 shadow-[0_15px_35px_rgba(0,0,0,0.16)]">
      <div className="mb-4 font-mono text-[8px] uppercase tracking-[0.25em] text-black/40">
        FULL STACK SYSTEM ARCHITECTURE
      </div>

      <div className="flex flex-col items-center gap-2 font-mono text-[8px] text-black/60">
        <div className="w-full border border-black/30 bg-[#b9b09d] py-2 text-center font-bold">
          REACT FRONTEND
        </div>

        <div className="h-3 w-px bg-black/30" />

        <div className="w-full border border-black/30 bg-[#b9b09d] py-2 text-center font-bold">
          EXPRESS REST API & CONTROLLERS
        </div>

        <div className="h-3 w-px bg-black/30" />

        <div className="flex w-full gap-2">
          <div className="flex-1 border border-black/30 bg-[#ada28d] py-2 text-center font-bold">
            POSTGRESQL DB
          </div>

          <div className="flex-1 border border-black/30 bg-[#ada28d] py-2 text-center font-bold">
            REDIS CACHE
          </div>
        </div>
      </div>
    </div>
  );
}

function AIArtifact({ page }: { page?: DiaryPage }) {
  const is2026 = page?.year === "2026";

  if (is2026) {
    return (
      <div className="relative overflow-hidden rounded-sm border border-black/20 bg-[#161a15] p-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.25)]">
        <div className="mb-2 flex items-center justify-between border-b border-white/10 pb-1.5 font-mono text-[8px]">
          <span className="uppercase tracking-[0.2em] text-[#80d86c]">
            SKYCORRIDOR / 3D DRONE NAVIGATION
          </span>
          <span className="rounded bg-[#7ddcff]/15 px-1.5 py-0.5 text-[#7ddcff]">
            MULTIMODAL AGENT
          </span>
        </div>

        {/* Real SkyCorridor aero screenshot preview */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded border border-white/15 bg-black/40">
          <img
            src="/images/projects/aero/aero.png"
            alt="SkyCorridor 3D Drone Delivery Navigation Platform"
            className="h-full w-full object-cover opacity-90 sepia-[0.15] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          <div className="absolute bottom-2 left-2.5 font-mono text-[7.5px] tracking-wider text-white/90">
            AUTONOMOUS 3D PATH PLANNING & VISUALIZATION
          </div>
        </div>

        <div className="mt-2.5 flex items-center justify-between font-mono text-[7.5px] text-white/60">
          <span>PIPELINE: VISION → PATHFINDING → API</span>
          <span className="text-[#80d86c]">ACTIVE AGENT</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-sm border border-black/20 bg-[#1b1b18] p-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.25)]">
      <div className="mb-2 flex items-center justify-between border-b border-white/10 pb-1.5 font-mono text-[8px]">
        <span className="uppercase tracking-[0.2em] text-[#80d86c]">
          SMART QUERY ASSISTANT / LLM PIPELINE
        </span>
        <span className="rounded bg-[#80d86c]/15 px-1.5 py-0.5 text-[#80d86c]">
          LANGCHAIN + FASTAPI
        </span>
      </div>

      {/* Real Query Assistant screenshot preview */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded border border-white/15 bg-black/40">
        <img
          src="/images/projects/query/hero.png"
          alt="Smart Query Assistant"
          className="h-full w-full object-cover opacity-90 sepia-[0.15] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
        <div className="absolute bottom-2 left-2.5 font-mono text-[7.5px] tracking-wider text-white/90">
          NATURAL LANGUAGE TO STRUCTURED QUERY INTELLIGENCE
        </div>
      </div>

      <div className="mt-2.5 flex items-center justify-between font-mono text-[7.5px] text-white/60">
        <span>MODEL: GEMINI LLM · POSTGRESQL AGENT</span>
        <span className="text-[#7ddcff]">RETRIEVAL ONLINE</span>
      </div>
    </div>
  );
}

function PhotoArtifact({ label, page }: { label: string; page?: DiaryPage }) {
  const is2023 = page?.year === "2023";
  const is2024 = page?.year === "2024";

  if (is2023) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden border border-black/20 bg-[#a9a293] p-1.5 shadow-[6px_10px_25px_rgba(0,0,0,0.2)]">
        <div className="relative h-full w-full overflow-hidden border border-black/15 bg-[#1a1712]">
          <img
            src="/images/projects/ott/hero.png"
            alt="OTT Streaming Platform"
            className="h-full w-full object-cover opacity-95 sepia-[0.2] contrast-[1.05] brightness-[0.95]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          <div className="absolute bottom-2 left-3 font-mono text-[7.5px] uppercase tracking-[0.2em] text-[#e8e4d8]">
            2023 / OTT STREAMING PLATFORM
          </div>
        </div>
        {/* Photo corner tabs */}
        <div className="absolute left-2 top-2 h-2.5 w-2.5 border-l-2 border-t-2 border-black/40" />
        <div className="absolute right-2 top-2 h-2.5 w-2.5 border-r-2 border-t-2 border-black/40" />
        <div className="absolute bottom-2 left-2 h-2.5 w-2.5 border-b-2 border-l-2 border-black/40" />
        <div className="absolute bottom-2 right-2 h-2.5 w-2.5 border-b-2 border-r-2 border-black/40" />
      </div>
    );
  }

  if (is2024) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden border border-black/20 bg-[#a9a293] p-1.5 shadow-[6px_10px_25px_rgba(0,0,0,0.2)]">
        <div className="relative h-full w-full overflow-hidden border border-black/15 bg-[#1a1712]">
          <img
            src="/images/projects/ecommerce/hero.png"
            alt="Full Stack E-Commerce Platform"
            className="h-full w-full object-cover opacity-95 sepia-[0.2] contrast-[1.05] brightness-[0.95]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          <div className="absolute bottom-2 left-3 font-mono text-[7.5px] uppercase tracking-[0.2em] text-[#e8e4d8]">
            2024 / FULL STACK E-COMMERCE
          </div>
        </div>
        {/* Photo corner tabs */}
        <div className="absolute left-2 top-2 h-2.5 w-2.5 border-l-2 border-t-2 border-black/40" />
        <div className="absolute right-2 top-2 h-2.5 w-2.5 border-r-2 border-t-2 border-black/40" />
        <div className="absolute bottom-2 left-2 h-2.5 w-2.5 border-b-2 border-l-2 border-black/40" />
        <div className="absolute bottom-2 right-2 h-2.5 w-2.5 border-b-2 border-r-2 border-black/40" />
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden border border-black/20 bg-[#a9a293] p-1.5 shadow-[6px_10px_25px_rgba(0,0,0,0.18)]">
      <div className="relative h-full w-full overflow-hidden border border-black/15 bg-[#1e201d] p-4 text-[#a8e69b]">
        <div className="flex h-full flex-col justify-between font-mono">
          <div className="flex justify-between border-b border-white/10 pb-2 text-[8px]">
            <span className="text-white/40">ARCHIVE MEMORY</span>
            <span className="text-[#d7c77c]">2022</span>
          </div>

          <div className="my-auto space-y-1.5 text-[8.5px]">
            <div className="text-white/70">&gt; Initializing developer environment...</div>
            <div className="text-[#7ddcff]">&gt; Loading early code experiments</div>
            <div className="text-[#a8e69b]">&gt; Hello, world. First step completed.</div>
          </div>

          <div className="border-t border-white/10 pt-2 text-[7.5px] uppercase tracking-wider text-white/35">
            {label}
          </div>
        </div>
      </div>
      {/* Photo corner tabs */}
      <div className="absolute left-2 top-2 h-2.5 w-2.5 border-l-2 border-t-2 border-black/40" />
      <div className="absolute right-2 top-2 h-2.5 w-2.5 border-r-2 border-t-2 border-black/40" />
      <div className="absolute bottom-2 left-2 h-2.5 w-2.5 border-b-2 border-l-2 border-black/40" />
      <div className="absolute bottom-2 right-2 h-2.5 w-2.5 border-b-2 border-r-2 border-black/40" />
    </div>
  );
}

function NoteArtifact({ note }: { note: string }) {
  return (
    <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-[#d8ca91]/70 p-7 shadow-[6px_10px_25px_rgba(0,0,0,0.15)]">
      <div className="absolute left-0 right-0 top-10 h-px bg-black/10" />
      <div className="absolute left-0 right-0 top-[calc(2.5rem+2rem)] h-px bg-black/10" />
      <div className="absolute left-0 right-0 top-[calc(2.5rem+4rem)] h-px bg-black/10" />

      {/* Tape strip */}
      <div className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 bg-white/30 backdrop-blur-[1px] shadow-sm rotate-[2deg]" />

      <p className="relative max-w-sm rotate-[-1.5deg] text-center font-display text-2xl font-bold italic leading-9 text-black/70">
        &quot;{note}&quot;
      </p>
    </div>
  );
}

function Artifact({
  page,
}: {
  page: DiaryPage;
}) {
  switch (page.artifact) {
    case "code":
      return <CodeArtifact page={page} />;

    case "terminal":
      return <TerminalArtifact page={page} />;

    case "iot":
      return <IoTArtifact page={page} />;

    case "architecture":
      return <ArchitectureArtifact page={page} />;

    case "ai":
      return <AIArtifact page={page} />;

    case "photo":
      return <PhotoArtifact label={page.artifactLabel} page={page} />;

    case "note":
      return <NoteArtifact note={page.note ?? ""} />;

    default:
      return null;
  }
}

function DiaryPageView({
  page,
  pageNumber,
}: {
  page: DiaryPage;
  pageNumber: number;
}) {
  return (
    <article className="relative h-full min-h-[560px] overflow-hidden bg-[#d8d0bd] p-7 text-[#181815] md:p-10">
      {/* Paper grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#000_0.5px,transparent_0.7px)] [background-size:6px_6px]"
      />

      {/* Paper edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 border border-black/[0.07]"
      />

      {/* Page content */}
      <div className="relative z-10 flex h-full flex-col">
        <header className="border-b border-black/15 pb-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-mono text-[8px] uppercase tracking-[0.3em] text-black/40">
                {page.chapter}
              </div>

              <div className="mt-2 font-display text-5xl font-black tracking-[-0.07em] md:text-6xl">
                {page.year}
              </div>
            </div>

            <div className="font-mono text-[7px] uppercase tracking-[0.22em] text-black/30">
              Memory / {String(pageNumber).padStart(2, "0")}
            </div>
          </div>
        </header>

        <div className="flex-1 pt-7">
          <div className="font-mono text-[8px] uppercase tracking-[0.25em] text-black/40">
            {page.title}
          </div>

          <h3 className="mt-2 font-display text-2xl font-black uppercase leading-none tracking-[-0.05em] md:text-4xl">
            {page.subtitle}
          </h3>

          <p className="mt-4 max-w-xl font-body text-xs leading-6 text-black/65 md:text-sm md:leading-7">
            {page.body}
          </p>

          <div className="mt-7">
            <Artifact page={page} />
          </div>

          {page.note && (
            <div className="mt-6 border-l-2 border-black/15 pl-4">
              <p className="max-w-md font-display text-sm italic leading-6 text-black/50">
                {page.note}
              </p>
            </div>
          )}
        </div>

        <footer className="mt-6 flex items-end justify-between border-t border-black/10 pt-4">
          <div className="flex flex-wrap gap-1.5">
            {page.tags.map((tag) => (
              <span
                key={tag}
                className="border border-black/15 px-2 py-1 font-mono text-[7px] uppercase tracking-[0.15em] text-black/45"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="font-mono text-[8px] text-black/30">
            {String(pageNumber).padStart(2, "0")}
          </span>
        </footer>
      </div>
    </article>
  );
}

/**
 * A green candle-flame accent, built from two rotated teardrop
 * shapes (a classic CSS flame trick) rather than a small clip-path
 * polygon — this reads as an actual flame silhouette even at small
 * sizes, instead of collapsing into a blurry dot.
 */
function GreenFlame({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dims =
    size === "sm" ? "h-9 w-6" : size === "lg" ? "h-16 w-10" : "h-12 w-8";

  return (
    <div className={`pointer-events-none absolute ${className}`}>
      <div className={`relative ${dims}`}>
        {/* soft ambient glow behind everything */}
        <div className="absolute -inset-4 rounded-full bg-[#4dff3d]/25 blur-xl" />

        {/* outer flame body — deep to mid green teardrop */}
        <div
          className="absolute inset-0 animate-[flicker_2.1s_ease-in-out_infinite] bg-gradient-to-t from-[#0f6b1f] via-[#2fbf3d] to-[#8dff6e]"
          style={{
            borderRadius: "0% 50% 50% 50%",
            transform: "rotate(-45deg)",
            transformOrigin: "50% 85%",
          }}
        />

        {/* mid flame — brighter green, slightly smaller, offset up */}
        <div
          className="absolute inset-x-[22%] bottom-0 top-[18%] animate-[flicker_1.4s_ease-in-out_infinite_0.2s] bg-gradient-to-t from-[#3ad64c] via-[#7bff5e] to-[#c9ffb0]"
          style={{
            borderRadius: "0% 50% 50% 50%",
            transform: "rotate(-45deg)",
            transformOrigin: "50% 85%",
          }}
        />

        {/* inner core — pale, hottest part of the flame */}
        <div
          className="absolute inset-x-[36%] bottom-[6%] top-[42%] animate-[flicker_1.1s_ease-in-out_infinite_0.4s] bg-gradient-to-t from-[#d9ffca] to-[#f4fff0]"
          style={{
            borderRadius: "0% 50% 50% 50%",
            transform: "rotate(-45deg)",
            transformOrigin: "50% 85%",
          }}
        />
      </div>
    </div>
  );
}

/** Slow-rising green embers drifting up the cover, witch-fire style. */
function DriftingEmbers() {
  const embers = Array.from({ length: 9 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {embers.map((_, i) => (
        <div
          key={i}
          className="absolute h-[3px] w-[3px] rounded-full bg-[#8dff6e] shadow-[0_0_6px_2px_rgba(77,255,61,0.6)]"
          style={{
            left: `${8 + i * 10}%`,
            bottom: `${5 + (i % 4) * 6}%`,
            animation: `drift ${4 + (i % 3)}s ease-in-out ${i * 0.6}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/**
 * A thick, foxed block of aged pages — meant to peek out from
 * behind the cover along the right edge (and slivers along the
 * top/bottom) so the whole diary reads as a fat, well-thumbed old
 * journal rather than a slim modern book.
 */
function FatPageBlock() {
  const lines = Array.from({ length: 46 });
  const stains = [
    { top: "8%", left: "10%", size: 26, opacity: 0.1 },
    { top: "31%", left: "55%", size: 34, opacity: 0.08 },
    { top: "52%", left: "20%", size: 22, opacity: 0.12 },
    { top: "68%", left: "65%", size: 30, opacity: 0.09 },
    { top: "84%", left: "35%", size: 20, opacity: 0.1 },
  ];

  return (
    <div className="absolute inset-y-1 right-0 w-9 overflow-hidden rounded-r-[6px] shadow-[4px_0_16px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:-translate-y-3 md:w-11">
      {/* Base parchment gradient, aged and uneven */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#efe1bd] via-[#d9c294] via-40% to-[#b89b68]" />

      {/* Individual page lines — dense near the spine edge, giving a
          hand-thumbed, hundreds-of-pages feel */}
      <div className="absolute inset-0">
        {lines.map((_, i) => (
          <div
            key={i}
            className="absolute left-0 right-0 h-px bg-black/[0.14]"
            style={{ top: `${(i / lines.length) * 100}%` }}
          />
        ))}
      </div>

      {/* Foxing / age stains scattered across the fore-edge */}
      {stains.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#7a5a2c] blur-[3px]"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
          }}
        />
      ))}

      {/* Deckled, uneven outer edge — subtle stepped shadow so the
          page block doesn't read as a flat slab */}
      <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-l from-black/25 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-r from-black/20 to-transparent" />

      {/* A few pages splayed slightly further out, as if the book
          doesn't quite close flat anymore */}
      <div className="absolute inset-y-6 right-0 w-1 bg-[#e9dab0]/70" />
      <div className="absolute inset-y-14 right-0 w-[3px] bg-[#e2d1a4]/60" />
    </div>
  );
}

/**
 * A more film-accurate, witchier rendition of the Eye of Agamotto:
 * a metal bezel with rune-etched ticks, rotating rings, radiating
 * emerald/violet petals, mechanical iris blades, and a glowing
 * cat-slit center gem that reacts on hover with sparks.
 */
function EyeOfAgamotto() {
  const runes = Array.from({ length: 16 });
  const petals = Array.from({ length: 10 });
  const blades = Array.from({ length: 12 });
  const sparks = Array.from({ length: 6 });

  return (
    <div className="absolute left-1/2 top-1/2 flex h-52 w-52 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
      {/* Ambient dual-tone glow — green core, violet edge */}
      <div className="absolute inset-[-100px] rounded-full bg-[#4dff3d]/10 blur-[70px] transition-all duration-700 group-hover:bg-[#4dff3d]/25" />
      <div className="absolute inset-[-60px] rounded-full bg-[#8b3dff]/10 blur-[60px] transition-all duration-700 group-hover:bg-[#8b3dff]/20" />

      {/* Outer bezel — engraved metal ring */}
      <div className="absolute inset-0 rounded-full border-[3px] border-[#c9a668]/70 shadow-[0_0_40px_rgba(92,255,77,0.15)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full opacity-70"
        style={{
          background:
            "repeating-conic-gradient(from 0deg, rgba(201,166,104,0.55) 0deg 3deg, rgba(60,45,20,0.15) 3deg 9deg)",
          WebkitMask:
            "radial-gradient(farthest-side, transparent calc(100% - 6px), black calc(100% - 5px))",
          mask:
            "radial-gradient(farthest-side, transparent calc(100% - 6px), black calc(100% - 5px))",
        }}
      />

      {/* Rune ticks around the bezel */}
      {runes.map((_, i) => (
        <div
          key={`rune-${i}`}
          className="absolute h-2.5 w-[2px] bg-[#c9a668]/60"
          style={{
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) rotate(${i * 22.5}deg) translateY(-98px)`,
          }}
        />
      ))}

      {/* Slow-rotating etched rings */}
      <div className="absolute inset-4 animate-[spin_22s_linear_infinite] rounded-full border border-dashed border-[#e4c98a]/40" />
      <div className="absolute inset-6 animate-[spin_16s_linear_infinite_reverse] rounded-full border border-[#8b3dff]/25" />

      {/* Radiating emerald/violet petals */}
      {petals.map((_, i) => (
        <div
          key={`petal-${i}`}
          className="absolute left-1/2 top-1/2 w-3 origin-bottom"
          style={{
            height: "94px",
            marginLeft: "-6px",
            marginTop: "-94px",
            transform: `rotate(${i * 36}deg)`,
          }}
        >
          <div
            className="h-full w-full bg-gradient-to-t from-[#3a1a5c] via-[#2f7a3a] to-[#a4ff8e] shadow-[0_0_8px_rgba(0,0,0,0.5)] transition-transform duration-700 ease-out group-hover:-translate-y-2"
            style={{
              clipPath: "polygon(50% 0%, 100% 82%, 50% 100%, 0% 82%)",
            }}
          />
        </div>
      ))}

      {/* Mechanical iris blades */}
      <div className="absolute inset-0 flex items-center justify-center">
        {blades.map((_, i) => (
          <div
            key={`blade-${i}`}
            className="absolute h-16 w-16"
            style={{ transform: `rotate(${i * 30}deg)` }}
          >
            <div
              className="absolute left-1/2 top-1/2 h-16 w-7 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#1a0f2e] via-[#2a1d0c] to-[#1a0f2e] opacity-90 transition-transform duration-700 ease-out group-hover:rotate-[18deg] group-hover:scale-x-[0.5]"
              style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
            />
          </div>
        ))}
      </div>

      {/* Central cat-eye gem — vertical slit pupil, glowing core */}
      <div className="relative h-16 w-16 rounded-[45%] border-2 border-[#a4ff8e] bg-[#0e2a0c] shadow-[0_0_35px_rgba(92,255,77,0.9)] transition-transform duration-700 group-hover:scale-110">
        <div className="absolute inset-0 rounded-[45%] bg-[radial-gradient(circle_at_35%_30%,rgba(184,255,159,0.55),transparent_60%)]" />
        <div className="absolute left-1/2 top-1/2 h-11 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0a1a08] shadow-[0_0_10px_rgba(0,0,0,0.8)_inset] transition-transform duration-700 group-hover:scale-y-75" />
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-[68%] rounded-full bg-[#e8ffe0] blur-[1px] shadow-[0_0_18px_8px_rgba(92,255,77,0.6)]" />
      </div>

      {/* Sparks flung outward on hover */}
      {sparks.map((_, i) => (
        <div
          key={`spark-${i}`}
          className="absolute h-1 w-1 rounded-full bg-[#c9ffb0] opacity-0 shadow-[0_0_6px_2px_rgba(77,255,61,0.7)] transition-all duration-700 group-hover:opacity-100"
          style={{
            left: "50%",
            top: "50%",
            transform: `rotate(${i * 60}deg) translateY(-70px)`,
          }}
        />
      ))}
    </div>
  );
}

export function Evolution() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Physical page-turn state: the page currently rotating off, and
  // whether the CSS transition has been kicked off yet.
  const [flip, setFlip] = useState<
    | {
        dir: "next" | "prev";
        page: DiaryPage;
        pageNumber: number;
      }
    | null
  >(null);
  const [flipActive, setFlipActive] = useState(false);

  const totalSpreads = Math.ceil(pages.length / 2);

  const currentLeftIndex = currentSpread * 2;
  const currentRightIndex = currentLeftIndex + 1;

  const currentLeftPage = pages[currentLeftIndex];
  const currentRightPage = pages[currentRightIndex];

  const progress = useMemo(() => {
    return ((currentSpread + 1) / totalSpreads) * 100;
  }, [currentSpread, totalSpreads]);

  const openDiary = () => {
    if (isOpen) return;

    setIsOpen(true);
    setCurrentSpread(0);
  };

  const closeDiary = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    window.setTimeout(() => {
      setIsOpen(false);
      setCurrentSpread(0);
      setIsAnimating(false);
    }, 650);
  };

  const nextSpread = () => {
    if (!isOpen || flip || isAnimating) return;
    if (currentSpread >= totalSpreads - 1) return;

    const outgoingIndex = currentSpread * 2 + 1;
    const outgoingPage = pages[outgoingIndex];
    if (!outgoingPage) return;

    setFlip({ dir: "next", page: outgoingPage, pageNumber: outgoingIndex + 1 });
    setCurrentSpread((value) => value + 1);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => setFlipActive(true));
    });

    window.setTimeout(() => {
      setFlip(null);
      setFlipActive(false);
    }, 720);
  };

  const previousSpread = () => {
    if (!isOpen || flip || isAnimating) return;
    if (currentSpread <= 0) return;

    const outgoingIndex = currentSpread * 2;
    const outgoingPage = pages[outgoingIndex];
    if (!outgoingPage) return;

    setFlip({ dir: "prev", page: outgoingPage, pageNumber: outgoingIndex + 1 });
    setCurrentSpread((value) => value - 1);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => setFlipActive(true));
    });

    window.setTimeout(() => {
      setFlip(null);
      setFlipActive(false);
    }, 720);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDiary();
        return;
      }

      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        event.preventDefault();
        nextSpread();
      }

      if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        event.preventDefault();
        previousSpread();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });



  return (
    <Section
      id="evolution"
      index="02"
      label="Odyssey"
      className="relative min-h-screen overflow-hidden bg-[#050604] py-0"
    >
      {/* =========================================================
          ATMOSPHERE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5cff4d]/[0.035] blur-[170px]" />

        <div className="absolute left-[10%] top-[40%] h-[300px] w-[300px] rounded-full bg-[#32ff49]/[0.025] blur-[130px]" />

        <div className="absolute bottom-[5%] right-[8%] h-[350px] w-[350px] rounded-full bg-[#9cff72]/[0.02] blur-[140px]" />

        <div className="absolute right-[20%] top-[15%] h-[260px] w-[260px] rounded-full bg-[#8b3dff]/[0.02] blur-[130px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(0,0,0,0.72)_100%)]" />

        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,white_0.6px,transparent_0.7px)] [background-size:80px_80px]" />
      </div>

      {/* =========================================================
          INTRO
      ========================================================== */}

      <div
        className={`absolute left-6 top-28 z-30 transition-all duration-1000 md:left-12 md:top-32 ${
          isOpen
            ? "pointer-events-none -translate-x-12 opacity-0"
            : "opacity-100"
        }`}
      >
        <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#69ff59]/70">
          <span className="h-px w-8 bg-[#69ff59]/50" />
          02 — Odyssey
        </div>

        <h2 className="font-display text-[clamp(3rem,6vw,6rem)] font-black uppercase leading-[0.82] tracking-[-0.07em] text-[#e8e4d8]">
          A Walk
          <br />
          Down
          <br />
          <span className="text-white/30">Memory Lane.</span>
        </h2>

        <p className="mt-7 max-w-xs font-body text-sm leading-7 text-white/40">
          Five years. A collection of beginnings, experiments,
          mistakes, breakthroughs and everything in between.
        </p>

        <div className="mt-6 font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">
          2022 — 2026
        </div>
      </div>

      {/* =========================================================
          CLOSED DIARY
      ========================================================== */}

      {!isOpen && (
        <div className="relative z-20 flex min-h-screen items-center justify-center px-6 py-32">
          <button
            type="button"
            onClick={openDiary}
            aria-label="Open Odyssey diary"
            className="group relative aspect-[0.62] w-[min(480px,82vw)] cursor-pointer outline-none"
          >
            {/* Ground shadow */}
            <div className="absolute -bottom-12 left-1/2 h-20 w-[80%] -translate-x-1/2 rounded-full bg-black/90 blur-3xl" />

            {/* Thin slivers of pages peeking at top and bottom, so the
                book reads as fat from every edge, not just the side */}
            <div className="absolute -top-1 left-6 right-9 h-2 rounded-t-[3px] bg-gradient-to-b from-[#e6d5a8] to-[#c7ac78] opacity-90 shadow-[0_-1px_4px_rgba(0,0,0,0.3)] md:right-11" />
            <div className="absolute -bottom-1 left-6 right-9 h-2 rounded-b-[3px] bg-gradient-to-t from-[#e6d5a8] to-[#c7ac78] opacity-90 shadow-[0_1px_4px_rgba(0,0,0,0.3)] md:right-11" />

            {/* Fat page-block, peeking from behind the cover */}
            <FatPageBlock />

            {/* Diary cover */}
            <div className="absolute inset-0 right-9 overflow-hidden rounded-[8px] border border-[#927b53]/60 bg-gradient-to-br from-[#342d21] via-[#17140f] to-[#070706] shadow-[0_50px_120px_rgba(0,0,0,0.85)] transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-[0_65px_140px_rgba(0,0,0,0.95)] md:right-11">
              {/* Leather grain */}
              <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#d5c08b_0.6px,transparent_0.7px)] [background-size:7px_7px]" />

              {/* Worn scratches */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(115deg,rgba(0,0,0,0.35)_0px,rgba(0,0,0,0.35)_1px,transparent_1px,transparent_60px)]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.1] [background-image:repeating-linear-gradient(35deg,rgba(255,255,255,0.15)_0px,rgba(255,255,255,0.15)_1px,transparent_1px,transparent_90px)]"
              />

              {/* Vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />

              {/* Spine */}
              <div className="absolute bottom-0 left-5 top-0 w-5 border-r border-black/60 bg-gradient-to-r from-black/40 via-[#6d5635]/20 to-black/50" />

              {/* Outer frame */}
              <div className="absolute inset-6 rounded-[4px] border border-[#a68a56]/35" />
              <div className="absolute inset-9 rounded-[3px] border border-[#a68a56]/15" />

              {/* Metal corner protectors */}
              {[
                "left-3 top-3 rotate-0",
                "right-3 top-3 rotate-90",
                "right-3 bottom-3 rotate-180",
                "left-3 bottom-3 -rotate-90",
              ].map((pos) => (
                <div key={pos} className={`absolute h-9 w-9 ${pos}`}>
                  <div
                    className="h-full w-full bg-gradient-to-br from-[#f4dfa0] via-[#b6924f] to-[#5c451f] shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
                    style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                  />
                  <div className="absolute left-2 top-2 h-1 w-1 rounded-full bg-[#2a1d0c]" />
                </div>
              ))}

              {/* =================================================
                  EYE OF AGAMOTTO
              ================================================== */}
              <EyeOfAgamotto />

              <DriftingEmbers />

              {/* Cover title */}
              <div className="absolute bottom-14 left-0 right-0 text-center">
                <div className="font-mono text-[8px] uppercase tracking-[0.45em] text-[#b6a37d]/60">
                  Grimoire · Personal Archive
                </div>

                <div className="mt-3 font-display text-3xl font-black uppercase tracking-[0.08em] text-[#d7c7a4]">
                  ODYSSEY
                </div>

                <div className="mt-2 font-mono text-[8px] uppercase tracking-[0.3em] text-[#8e7d5d]/60">
                  2022 — 2026
                </div>
              </div>
            </div>

            {/* =================================================
                CLOSURE STRAP — wraps all the way across the cover
                AND the fat page block, so the whole book visibly
                reads as bound shut rather than just resting closed.
            ================================================== */}
            <div className="absolute left-[4%] right-[2%] top-[64%] z-30 h-4 -translate-y-1/2 rotate-[1.5deg] bg-gradient-to-b from-[#3c2a14] via-[#2a1c0c] to-[#1c1206] opacity-95 shadow-[0_3px_10px_rgba(0,0,0,0.65)]" />
            <div className="absolute right-[5%] top-[64%] z-30 h-8 w-8 -translate-y-1/2 rounded-sm border-2 border-[#e4c98a]/80 bg-[#171512] shadow-[0_0_12px_rgba(0,0,0,0.7)]">
              <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4dff3d]/70 shadow-[0_0_10px_4px_rgba(77,255,61,0.5)]" />
            </div>

            {/* =================================================
                CORNER TORCHES — mounted outside the clipped cover
                so the flames render as full silhouettes, not
                truncated dots, with a small dark bracket underneath
                to sell them as sconces fixed to the book's corners.
            ================================================== */}
            {[
              "-left-3 -top-3",
              "-right-2 -top-3 md:right-0",
              "-left-3 -bottom-3",
              "-right-2 -bottom-3 md:right-0",
            ].map((pos) => (
              <div key={pos} className={`absolute ${pos} z-30`}>
                <GreenFlame className="left-1/2 top-0 -translate-x-1/2 -translate-y-[85%]" size="lg" />
                <div className="h-2 w-3 rounded-b-[2px] rounded-t-[1px] bg-gradient-to-b from-[#4a4038] to-[#191510] shadow-[0_2px_5px_rgba(0,0,0,0.6)]" />
              </div>
            ))}

            {/* Instruction */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
              <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#69ff59]/60 transition-colors group-hover:text-[#69ff59]">
                Click the eye to break the seal
              </div>

              <div className="mt-2 font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                Enter the archive
              </div>
            </div>
          </button>
        </div>
      )}

      {/* =========================================================
          OPEN DIARY
      ========================================================== */}

      {isOpen && (
        <div
          className={`relative z-40 flex min-h-screen items-center justify-center px-4 py-28 transition-all duration-700 ${
            isAnimating ? "scale-[0.985] opacity-90" : "scale-100 opacity-100"
          }`}
        >
          <div className="w-full max-w-[1200px]">
            {/* Top controls */}
            <div className="mb-5 flex items-center justify-between px-1">
              <div>
                <div className="font-mono text-[8px] uppercase tracking-[0.3em] text-[#69ff59]/60">
                  Personal Archive
                </div>

                <div className="mt-1 font-display text-xl font-black uppercase tracking-[-0.04em] text-white/80">
                  {currentLeftPage?.chapter}
                </div>
              </div>

              <button
                type="button"
                onClick={closeDiary}
                disabled={isAnimating}
                className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/35 transition-colors hover:text-[#69ff59] disabled:opacity-30"
              >
                Close Diary ×
              </button>
            </div>

            {/* Book */}
            <div className="relative overflow-hidden rounded-[4px] border border-[#806b4b]/50 bg-[#17130d] shadow-[0_50px_150px_rgba(0,0,0,0.85)]">
              {/* Desktop two-page spread */}
              <div className="grid min-h-[650px] grid-cols-1 md:grid-cols-2">
                {currentLeftPage && (
                  <div
                    key={`left-${currentLeftIndex}`}
                    className="relative animate-[pageIn_500ms_ease-out] border-b border-[#594a34]/40 md:border-b-0 md:border-r"
                  >
                    <DiaryPageView
                      page={currentLeftPage}
                      pageNumber={currentLeftIndex + 1}
                    />

                    {/* Page curl */}
                    <div className="pointer-events-none absolute bottom-0 right-0 h-16 w-16 bg-gradient-to-tl from-black/10 to-transparent" />
                  </div>
                )}

                {currentRightPage ? (
                  <div
                    key={`right-${currentRightIndex}`}
                    className="relative animate-[pageIn_550ms_ease-out]"
                  >
                    <DiaryPageView
                      page={currentRightPage}
                      pageNumber={currentRightIndex + 1}
                    />

                    <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-16 bg-gradient-to-tr from-black/10 to-transparent" />
                  </div>
                ) : (
                  <div className="hidden bg-[#d2c9b5] md:block" />
                )}
              </div>

              {/* Center spine */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-8 -translate-x-1/2 bg-gradient-to-r from-black/20 via-black/5 to-black/20 shadow-[0_0_30px_rgba(0,0,0,0.3)] md:block"
              />

              {/* =================================================
                  PHYSICAL PAGE TURN
                  The outgoing page rotates around the spine edge
                  (like a real page), revealing the new spread —
                  already rendered underneath — as it turns.
              ================================================== */}
              {flip && (
                <div
                  className={`pointer-events-none absolute inset-y-0 z-50 hidden w-1/2 md:block ${
                    flip.dir === "next" ? "right-0" : "left-0"
                  }`}
                  style={{ perspective: "2600px" }}
                >
                  <div
                    className="absolute inset-0 transition-transform ease-[cubic-bezier(0.45,0,0.2,1)]"
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin:
                        flip.dir === "next" ? "left center" : "right center",
                      transitionDuration: "700ms",
                      transform: flipActive
                        ? `rotateY(${flip.dir === "next" ? "-178deg" : "178deg"})`
                        : "rotateY(0deg)",
                      boxShadow: flipActive
                        ? flip.dir === "next"
                          ? "-60px 0 90px rgba(0,0,0,0.65)"
                          : "60px 0 90px rgba(0,0,0,0.65)"
                        : "0 0 0 rgba(0,0,0,0)",
                    }}
                  >
                    {/* Front face — the outgoing page, as it was */}
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <DiaryPageView page={flip.page} pageNumber={flip.pageNumber} />
                      <div
                        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
                        style={{
                          opacity: flipActive ? 1 : 0,
                          background:
                            flip.dir === "next"
                              ? "linear-gradient(to left, rgba(0,0,0,0.45), rgba(0,0,0,0) 55%)"
                              : "linear-gradient(to right, rgba(0,0,0,0.45), rgba(0,0,0,0) 55%)",
                        }}
                      />
                    </div>

                    {/* Back face — blank aged paper, seen mid-turn */}
                    <div
                      className="absolute inset-0 overflow-hidden bg-[#cabf9f]"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <div className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(#000_0.5px,transparent_0.7px)] [background-size:6px_6px]" />
                      <div className="absolute inset-3 border border-black/[0.08]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom navigation controls & progress indicator */}
            <div className="mt-6 flex items-center justify-between gap-4 px-2 md:px-6">
              <button
                type="button"
                onClick={previousSpread}
                disabled={currentSpread <= 0 || !!flip || isAnimating}
                aria-label="Previous spread"
                className="group flex items-center gap-2 rounded border border-[#806b4b]/30 bg-[#14110b]/60 px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-[#b6a37d]/80 transition-all hover:border-[#69ff59]/40 hover:text-[#69ff59] hover:shadow-[0_0_12px_rgba(105,255,89,0.15)] focus:border-[#69ff59]/60 focus:text-[#69ff59] focus:outline-none disabled:pointer-events-none disabled:opacity-20"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
                <span>PREVIOUS</span>
              </button>

              <div className="flex flex-col items-center">
                <div className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/35">
                  Spread {currentSpread + 1} / {totalSpreads}
                </div>

                <div className="mt-2.5 h-px w-32 overflow-hidden bg-white/10">
                  <div
                    className="h-full bg-[#69ff59]/60 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={nextSpread}
                disabled={currentSpread >= totalSpreads - 1 || !!flip || isAnimating}
                aria-label="Next spread"
                className="group flex items-center gap-2 rounded border border-[#806b4b]/30 bg-[#14110b]/60 px-3.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-[#b6a37d]/80 transition-all hover:border-[#69ff59]/40 hover:text-[#69ff59] hover:shadow-[0_0_12px_rgba(105,255,89,0.15)] focus:border-[#69ff59]/60 focus:text-[#69ff59] focus:outline-none disabled:pointer-events-none disabled:opacity-20"
              >
                <span>NEXT</span>
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </button>
            </div>

            <div className="mt-4 text-center font-mono text-[7px] uppercase tracking-[0.25em] text-white/15">
              ← → Arrow keys to navigate · Esc to close
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}