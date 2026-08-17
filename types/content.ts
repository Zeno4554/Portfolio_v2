export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  role: string;
  year: number;
  href?: string;
  repoHref?: string;
  coverImage: string;
  featured: boolean;
}

export interface SkillNode {
  id: string;
  label: string;
  category: "ai" | "backend" | "frontend" | "cloud" | "systems";
  proficiency: number; // 0–1, drives node size in the Skills Galaxy
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  location?: string;
  start: string; // ISO date
  end: string | "present";
  summary: string;
  highlights: string[];
}

export interface TimelineMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "mail" | "resume";
}

export interface StatEntry {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}
