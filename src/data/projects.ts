import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Issue Tracker Dashboard",
    slug: "issue-tracker-dashboard",
    summary: "A full-stack issue tracker built for small dev teams.",
    problem: "Teams were juggling bugs in scattered chats and docs.",
    solution: "I built a Kanban-style dashboard with status workflows and role-based permissions.",
    impact: "Reduced issue handoff time and gave contributors a single source of truth.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    repoUrl: "https://github.com/yourname/issue-tracker",
    liveUrl: "https://your-issue-tracker.vercel.app",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"],
    featured: true,
    year: 2026,
    status: "Live"
  },
  {
    title: "Recipe API Platform",
    slug: "recipe-api-platform",
    summary: "REST API for searchable recipes with auth and favorites.",
    problem: "I needed a backend project focused on clean API architecture.",
    solution: "Designed versioned endpoints, JWT auth, pagination, and input validation.",
    impact: "Improved my backend design patterns and API testing workflow.",
    techStack: ["Node.js", "Express", "MongoDB", "Jest", "Docker"],
    repoUrl: "https://github.com/yourname/recipe-api",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80"],
    featured: true,
    year: 2025,
    status: "In Progress"
  },
  {
    title: "Learning Path App",
    slug: "learning-path-app",
    summary: "A progress tracker to plan and complete coding study goals.",
    problem: "My learning goals were spread across notes and bookmarks.",
    solution: "Created a mobile-friendly planner with milestones and streak tracking.",
    impact: "Made my learning process measurable and consistent over time.",
    techStack: ["React", "Firebase", "CSS Modules"],
    repoUrl: "https://github.com/yourname/learning-path-app",
    thumbnail: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80"],
    featured: false,
    year: 2024,
    status: "Archived"
  }
];
