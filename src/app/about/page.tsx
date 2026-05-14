import { SectionHeader } from "@/components/section-header";

const strengths = [
  "Build products end-to-end from concept to deployment",
  "Write maintainable TypeScript and testable APIs",
  "Translate user needs into practical, performant features"
];

const tools = ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "Prisma", "Docker", "GitHub Actions"];

export default function AboutPage() {
  return (
    <section className="content-section prose-panel">
      <SectionHeader
        eyebrow="About Me"
        title="Developer focused on useful software"
        description="I enjoy building web applications that feel polished, solve real problems, and are easy to maintain."
      />
      <p>
        I am a software developer who likes to combine thoughtful UI with reliable backend engineering.
        My favorite projects are the ones where I can work close to the problem, ship quickly, and iterate
        based on feedback.
      </p>
      <h3>Core strengths</h3>
      <ul>
        {strengths.map((strength) => (
          <li key={strength}>{strength}</li>
        ))}
      </ul>
      <h3>Common tools</h3>
      <ul className="inline-list">
        {tools.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
    </section>
  );
}
