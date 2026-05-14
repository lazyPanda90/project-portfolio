import Link from "next/link";

export function Hero() {
  return (
    <section className="hero">
      <p className="eyebrow">Developer Portfolio</p>
      <h1>I build practical software that solves real problems.</h1>
      <p>
        This site is my online resume and project library. It showcases what I built, why I built it,
        and the impact each project delivered.
      </p>
      <div className="hero-actions">
        <Link href="/projects" className="btn btn-primary">
          Explore Projects
        </Link>
        <Link href="/contact" className="btn btn-secondary">
          Contact Me
        </Link>
      </div>
    </section>
  );
}
