import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "Full-Stack E-Commerce Platform",
    summary:
      "A scalable e-commerce platform with secure authentication, online payments, order management, and an admin dashboard.",
    description:
      "Designed and developed a production-ready full-stack e-commerce platform using React, Express.js, PostgreSQL, Prisma ORM, and Razorpay. Features include JWT authentication, role-based access, product management, shopping cart, order processing, payment integration, and an admin dashboard.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Razorpay"
    ],
    role: "Full-Stack Developer",
    year: 2026,
    href: "",
    repoHref: "",
    coverImage: "/assets/images/projects/ecommerce.jpg",
    featured: true,
  },

  {
    id: "data-query-agent",
    title: "Intelligent Data Query Agent",
    summary:
      "A multimodal AI assistant capable of understanding text, images, and audio while querying structured data.",
    description:
      "Built an intelligent data assistant using FastAPI, LangChain, Gemini, PostgreSQL, and Supabase. The system processes multimodal inputs, stores structured information, and answers contextual queries using retrieval-augmented generation.",
    stack: [
      "Python",
      "FastAPI",
      "LangChain",
      "Gemini",
      "PostgreSQL",
      "Supabase",
      "Docker"
    ],
    role: "AI & Backend Developer",
    year: 2026,
    href: "",
    repoHref: "",
    coverImage: "/assets/images/projects/data-agent.jpg",
    featured: true,
  },

  {
    id: "smart-solar-dashboard",
    title: "IoT Smart Solar Dashboard",
    summary:
      "Real-time monitoring and predictive analytics platform for solar energy systems.",
    description:
      "Developed an IoT-based dashboard integrating ESP8266 devices with AWS IoT Core, enabling real-time monitoring, predictive analytics, and cloud visualization through Grafana and AWS services.",
    stack: [
      "ESP8266",
      "AWS IoT",
      "Python",
      "Grafana",
      "Machine Learning"
    ],
    role: "IoT Developer",
    year: 2025,
    href: "",
    repoHref: "",
    coverImage: "/assets/images/projects/solar-dashboard.jpg",
    featured: true,
  },

  {
    id: "aerocorridor",
    title: "AeroCorridor",
    summary:
      "Urban drone navigation and intelligent air corridor planning platform.",
    description:
      "Designed an intelligent drone navigation system focused on optimized flight corridors, collision avoidance, and efficient urban package delivery using algorithmic route planning.",
    stack: [
      "Python",
      "Algorithms",
      "GIS",
      "Simulation"
    ],
    role: "Software Developer",
    year: 2025,
    href: "",
    repoHref: "",
    coverImage: "/assets/images/projects/aerocorridor.jpg",
    featured: true,
  },
];