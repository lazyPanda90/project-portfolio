export type ProjectStatus = "Live" | "In Progress" | "Archived";

export type Project = {
  title: string;
  slug: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  repoUrl: string;
  liveUrl?: string;
  thumbnail: string;
  images: string[];
  featured: boolean;
  year: number;
  status: ProjectStatus;
};
