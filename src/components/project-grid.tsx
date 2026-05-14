"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import { Project } from "@/types/project";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedTech, setSelectedTech] = useState<string>("All");

  const techOptions = useMemo(() => {
    const allTech = new Set<string>();
    projects.forEach((project) => {
      project.techStack.forEach((tech) => allTech.add(tech));
    });
    return ["All", ...Array.from(allTech).sort()];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (selectedTech === "All") return projects;
    return projects.filter((project) => project.techStack.includes(selectedTech));
  }, [projects, selectedTech]);

  return (
    <>
      <div className="filter-bar" role="toolbar" aria-label="Project filters">
        {techOptions.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={selectedTech === tech ? "chip chip-active" : "chip"}
          >
            {tech}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
