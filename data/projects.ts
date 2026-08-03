import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    id: "neural-pipeline",
    title: "Neural Pipeline",
    summary: "Distributed inference platform for real-time multimodal models.",
    description:
      "A horizontally-scalable inference layer routing multimodal model requests across GPU pools, with automatic batching and cold-start elimination.",
    stack: ["Python", "PyTorch", "gRPC", "Kubernetes", "Redis"],
    role: "Lead Engineer",
    year: 2025,
    coverImage: "/assets/images/projects/neural-pipeline.jpg",
    featured: true,
  },
  {
    id: "orbit-cloud",
    title: "Orbit",
    summary: "Multi-region infrastructure-as-code framework for edge deployments.",
    description:
      "A declarative IaC toolkit that provisions edge-adjacent compute across providers from a single manifest, with drift detection built in.",
    stack: ["TypeScript", "Terraform", "AWS", "Cloudflare Workers"],
    role: "Founding Engineer",
    year: 2024,
    coverImage: "/assets/images/projects/orbit.jpg",
    featured: true,
  },
];
