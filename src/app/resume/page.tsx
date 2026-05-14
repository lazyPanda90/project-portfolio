import { SectionHeader } from "@/components/section-header";

export default function ResumePage() {
  return (
    <section className="content-section prose-panel">
      <SectionHeader
        eyebrow="Resume"
        title="Experience snapshot"
        description="A quick view of skills and project impact, with a downloadable PDF for full details."
      />
      <h3>Highlights</h3>
      <ul>
        <li>Built and deployed multiple full-stack projects with modern web tooling.</li>
        <li>Designed APIs, integrated databases, and shipped responsive frontends.</li>
        <li>Documented decisions and focused on maintainable, scalable code structure.</li>
      </ul>
      <a className="btn btn-primary" href="/resume.pdf" target="_blank" rel="noreferrer">
        Download Resume PDF
      </a>
      <p className="muted-note">Add your file at `public/resume.pdf` to enable this download.</p>
    </section>
  );
}
