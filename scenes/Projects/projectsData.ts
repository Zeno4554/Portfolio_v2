export interface InsideBuildModule {
  id: string;
  title: string;
  tech: string;
  description: string;
  x: string;
  y: string;
}

export interface Project {
  id: string;

  // Large cinematic title
  title: string;

  // Official project name
  fullTitle: string;

  tagline: string;

  description: string;

  accent: string;

  heroImage: string;

  insideBuild: InsideBuildModule[];

  architecture: string[];

  features: string[];

  technologies: string[];

  folderTree: string[];

  github?: string;

  live?: string;
}

export const projects: Project[] = [
  {
    id: "ott",

    title: "OTT STREAMING",

    fullTitle: "OTT Streaming Platform",

    tagline:
      "A Netflix-inspired streaming platform engineered for scalable content management and immersive user experiences.",

    description:
      "Built a full-stack OTT streaming platform featuring secure authentication, role-based administration, movie management, Cloudinary media delivery and a cinematic React experience.",

    accent: "#E50914",

    heroImage: "/images/projects/ott/hero.png",

    insideBuild: [
      {
        id: "frontend",
        title: "Frontend",
        tech: "React.js",
        description: "Responsive cinematic UI",
        x: "10%",
        y: "26%",
      },
      {
        id: "backend",
        title: "API Engine",
        tech: "Express.js",
        description: "REST APIs & Business Logic",
        x: "90%",
        y: "26%",
      },
      {
        id: "media",
        title: "Media Pipeline",
        tech: "Cloudinary",
        description: "Poster & Trailer Delivery",
        x: "10%",
        y: "78%",
      },
      {
        id: "database",
        title: "Data Layer",
        tech: "PostgreSQL",
        description: "Relational Database",
        x: "90%",
        y: "78%",
      },
    ],

    architecture: [
      "React.js",
      "Express.js",
      "PostgreSQL",
      "Cloudinary",
    ],

    features: [
      "Movie Discovery",
      "Trailer Playback",
      "JWT Authentication",
      "Admin Dashboard",
      "Cloudinary Media",
    ],

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Cloudinary",
      "JWT",
      "Tailwind CSS",
    ],

    folderTree: [
      "client",
      "server",
      "prisma",
      "controllers",
      "middleware",
      "cloudinary"
    ],

    github: "#",
  },

  {
    id: "query",

    title: "QUERY ASSISTANT",

    fullTitle: "Smart Query Assistant",

    tagline:
      "Natural language intelligence for querying structured data in real time.",

    description:
      "An AI-powered query assistant using LLMs, LangChain and FastAPI to retrieve and analyze structured database information.",

    accent: "#8B5CF6",

    heroImage: "/images/projects/query/hero.png",
    insideBuild: [
      {
        id: "llm",
        title: "LLM Engine",
        tech: "Gemini",
        description: "Natural Language Intelligence",
        x: "10%",
        y: "26%",
      },
      {
        id: "agent",
        title: "Agent Layer",
        tech: "LangChain",
        description: "Tool Orchestration",
        x: "90%",
        y: "26%",
      },
      {
        id: "api",
        title: "API Layer",
        tech: "FastAPI",
        description: "Backend Services",
        x: "10%",
        y: "78%",
      },
      {
        id: "knowledge-base",
        title: "Knowledge Base",
        tech: "PostgreSQL",
        description: "Structured Data Storage",
        x: "90%",
        y: "78%",
      },
    ],

    architecture: [
      "LLMs",
      "LangChain",
      "FastAPI",
      "PostgreSQL",
      "Web Dashboard",
    ],

    features: [
      "Natural Language Queries",
      "Context Retrieval",
      "Response Generation",
      "Database Integration",
    ],

    technologies: [
      "LLMs",
      "LangChain",
      "FastAPI",
      "PostgreSQL",
      "Web Dashboard",
    ],

    folderTree: [
      "frontend",
      "backend",
      "agents",
      "memory",
      "llm",
      "docker"
    ],

    github: "#",
  },

  {
    id: "solar",

    title: "SOLAR DASHBOARD",

    fullTitle: "IoT-Based Solar Power Management Dashboard",

    tagline:
      "Real-time monitoring, prediction and intelligent energy analytics.",

    description:
      "Built an end-to-end IoT solar monitoring system using ESP8266 and AWS IoT Core with machine-learning-powered energy prediction and real-time analytics.",

    accent: "#16C784",

    heroImage: "/images/projects/solar/hero.png",

    insideBuild: [
      {
        id: "sensor",
        title: "Sensor Layer",
        tech: "ESP8266",
        description: "Live Telemetry Collection",
        x: "10%",
        y: "26%",
      },
      {
        id: "iot-gateway",
        title: "IoT Gateway",
        tech: "AWS IoT Core",
        description: "Real-Time Device Communication",
        x: "90%",
        y: "26%",
      },
      {
        id: "analytics",
        title: "Analytics",
        tech: "Python",
        description: "Prediction & Processing",
        x: "10%",
        y: "78%",
      },
      {
        id: "visualization",
        title: "Visualization",
        tech: "Grafana",
        description: "Interactive Monitoring Dashboard",
        x: "90%",
        y: "78%",
      },
    ],

    architecture: [
      "ESP8266",
      "MQTT",
      "AWS IoT",
      "Python",
      "Grafana",
    ],

    features: [
      "Live Monitoring",
      "Energy Prediction",
      "AWS IoT",
      "Machine Learning",
    ],

    technologies: [
      "AWS IoT Core",
      "Python",
      "Grafana",
      "Pandas",
      "MQTT",
      "ML",
      "ESP8266",
    ],

    folderTree: [
      "firmware",
      "aws-iot",
      "analytics",
      "ml-pipeline",
      "grafana",
      "docker"
    ],

    github: "#",
  },

  {
    id: "drone",

    title: "SKYCORRIDOR",

    fullTitle: "SkyCorridor",

    tagline:
      "3D intelligent drone navigation for next-generation urban mobility.",

    description:
      "Engineered an intelligent drone delivery navigation platform with altitude-aware path planning, interactive visualization and cloud-based fleet management concepts.",

    accent: "#4EA1FF",

    heroImage: "/images/projects/aero/aero.png",

    insideBuild: [
      {
        id: "navigation",
        title: "Navigation",
        tech: "Python",
        description: "3D Path Planning",
        x: "10%",
        y: "26%",
      },
      {
        id: "simulation",
        title: "Simulation",
        tech: "Streamlit",
        description: "Interactive Flight Visualization",
        x: "90%",
        y: "26%",
      },
      {
        id: "backend",
        title: "Backend",
        tech: "FastAPI",
        description: "Mission Services",
        x: "10%",
        y: "78%",
      },
      {
        id: "database",
        title: "Data Layer",
        tech: "PostgreSQL",
        description: "Persistent Mission Data",
        x: "90%",
        y: "78%",
      },
    ],

    architecture: [
      "Streamlit",
      "FastAPI",
      "PostgreSQL",
    ],

    features: [
      "3D Navigation",
      "Path Planning",
      "Visualization",
      "Fleet Management",
    ],

    technologies: [
      "Streamlit",
      "FastAPI",
      "PostgreSQL",
    ],

    folderTree: [
      "pathfinding",
      "simulation",
      "api",
      "spatial-db",
      "fleet",
      "docker"
    ],

    github: "#",
  },

  {
    id: "ecommerce",

    title: "E-COMMERCE",

    fullTitle: "Full Stack E-Commerce Platform",

    tagline:
      "Modern commerce powered by scalable APIs and secure transactions.",

    description:
      "Developed a scalable e-commerce platform featuring authentication, product management, shopping cart, role-based administration and Razorpay payment integration.",

    accent: "#FFFFFF",

    heroImage: "/images/projects/ecommerce/hero.png",

    insideBuild: [
      {
        id: "frontend",
        title: "Frontend",
        tech: "React.js",
        description: "Responsive Shopping Experience",
        x: "10%",
        y: "26%",
      },
      {
        id: "backend",
        title: "Backend",
        tech: "Express.js",
        description: "REST APIs & Business Logic",
        x: "90%",
        y: "26%",
      },
      {
        id: "payments",
        title: "Payments",
        tech: "Razorpay",
        description: "Secure Payment Gateway",
        x: "10%",
        y: "78%",
      },
      {
        id: "database",
        title: "Database",
        tech: "Prisma + PostgreSQL",
        description: "Scalable Data Management",
        x: "90%",
        y: "78%",
      },
    ],

    architecture: [
      "React",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],

    features: [
      "Authentication",
      "Product Catalog",
      "Shopping Cart",
      "Razorpay",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "JWT",
      "Razorpay",
    ],

    folderTree: [
      "frontend",
      "backend",
      "database",
      "docker",
      "cloud"
    ],

    github: "#",
  },
];