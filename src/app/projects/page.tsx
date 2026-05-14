import { ProjectGrid } from "@/components/project-grid";
import { SectionHeader } from "@/components/section-header";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="content-section">
      <SectionHeader
        eyebrow="All Projects"
        title="Project library"
        description="Browse by technology to see how I approach different product and engineering challenges."
      />
      <ProjectGrid projects={projects} />
    </section>
  );
}
