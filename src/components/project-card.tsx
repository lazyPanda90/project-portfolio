import Image from "next/image";
import Link from "next/link";

import { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <Image src={project.thumbnail} alt={project.title} fill className="project-image" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span>{project.year}</span>
          <span className="status-pill">{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="tech-list">
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          <Link href={project.repoUrl} target="_blank" rel="noreferrer">
            Repository
          </Link>
          {project.liveUrl ? (
            <Link href={project.liveUrl} target="_blank" rel="noreferrer">
              Live Demo
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
