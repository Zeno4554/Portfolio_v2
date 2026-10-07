import type { SocialLink, TimelineMilestone, StatEntry } from "@/types/content";

export const socialLinks: SocialLink[] = [
  { id: "github", label: "GitHub", href: "https://github.com/", icon: "github" },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
  { id: "mail", label: "Email", href: "mailto:k.anurag0104@gmail.com", icon: "mail" },
];

export const timeline: TimelineMilestone[] = [
  { id: "start", year: "2019", title: "First line of code", description: "Started building." },
  { id: "grad", year: "2021", title: "Graduated", description: "Computer Science, systems focus." },
  { id: "current", year: "2023", title: "Senior Engineer", description: "AI infrastructure and platform." },
];

export const stats: StatEntry[] = [
  { id: "years", label: "Years Experience", value: 5 },
  { id: "projects", label: "Projects Shipped", value: 40, suffix: "+" },
  { id: "contributions", label: "GitHub Contributions", value: 2400, suffix: "+" },
];
