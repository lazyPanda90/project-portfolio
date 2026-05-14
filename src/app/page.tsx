import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      <Hero />
      <section className="content-section">
        <SectionHeader
          eyebrow="Featured Work"
          title="Selected projects"
          description="A snapshot of the products and tools I am most proud of."
        />
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
