export interface EvolutionNodeData {
  id: string;
  year?: string;
  title: string;
  subtitle: string;

  level: number;
  lane: number;
}

export const evolutionNodes: EvolutionNodeData[] = [
  {
    id: "hello",
    year: "2022",
    title: "HELLO, WORLD.",
    subtitle: "First line of code",
    level: 0,
    lane: 0,
  },
  {
    id: "web",
    year: "2023",
    title: "WEB DEVELOPMENT",
    subtitle: "HTML • CSS • JavaScript",
    level: 1,
    lane: 0,
  },
  {
    id: "devtern",
    year: "2024",
    title: "DEVTERN",
    subtitle: "Python Developer Intern",
    level: 2,
    lane: 0,
  },
  {
    id: "iot",
    title: "IoT",
    subtitle: "Smart Systems",
    level: 2,
    lane: 1,
  },
  {
    id: "fullstack",
    year: "2025",
    title: "FULL STACK",
    subtitle: "AI • Backend • Frontend",
    level: 3,
    lane: 0,
  },
  {
    id: "future",
    year: "2026",
    title: "BUILDING WHAT'S NEXT",
    subtitle: "Software Engineer",
    level: 4,
    lane: 0,
  },
];

export const evolutionEdges = [
  ["hello", "web"],
  ["web", "devtern"],
  ["devtern", "iot"],
  ["devtern", "fullstack"],
  ["fullstack", "future"],
] as const;