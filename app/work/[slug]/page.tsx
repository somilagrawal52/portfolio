import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: `${project.name} — Somil Agrawal`, description: project.description } : {};
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const next = projects[(projects.findIndex(({ slug: value }) => value === slug) + 1) % projects.length];

  return (
    <main className="case-page">
      <header className="case-nav shell">
        <a className="brand" href="/" aria-label="Somil Agrawal home">
          SA<span>®</span>
        </a>
        <a href="/#work">← All projects</a>
        <a href="/Somil-Agrawal-Resume.pdf" target="_blank" rel="noreferrer">
          Résumé PDF ↗
        </a>
        <a href="mailto:somilagrawal2004@gmail.com" className="case-contact-link">
          Get in touch ↗
        </a>
      </header>
      <article>
        <div className="case-hero shell">
          <div className="case-hero-meta">
            <span className="case-num-badge">{project.number}</span>
            <p className="kicker">{project.category}</p>
            <span className="case-metric-pill">{project.metric}</span>
          </div>
          <h1>
            {project.name}
            <span>.</span>
          </h1>
          <p className="case-focus">{project.focus}</p>
          <div className="case-hero-links">
            <a className="button button-fill" href={project.href} target="_blank" rel="noreferrer">
              View on GitHub ↗
            </a>
            {project.liveHref && (
              <a className="button" href={project.liveHref} target="_blank" rel="noreferrer">
                Live Demo ↗
              </a>
            )}
            <a className="button" href="/#work">
              ← Back to portfolio
            </a>
          </div>
        </div>

        <div className={`case-banner case-${project.visual}`}>
          <div className="shell">
            <span>ARCHITECTURE &amp; ENGINEERING / {project.number}</span>
            <strong>{project.name}</strong>
            <span className="case-banner-sub">{project.metric}</span>
          </div>
        </div>

        <div className="case-content shell">
          <aside>
            <div className="case-sidebar-block">
              <span>TECH STACK</span>
              <ul className="case-tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <div className="case-sidebar-block">
              <span>PROJECT LINKS</span>
              <div className="case-links-list">
                <a href={project.href} target="_blank" rel="noreferrer" className="case-source-link">
                  GitHub Repository ↗
                </a>
                <a href="/#work" className="case-back-link">
                  Browse other builds ↗
                </a>
              </div>
            </div>
            <div className="case-sidebar-block">
              <span>CORE METRIC</span>
              <div className="case-highlight-stat">{project.metric}</div>
            </div>
          </aside>

          <div className="case-story">
            <section>
              <p className="kicker">01 / Overview</p>
              <h2>The problem &amp; product</h2>
              <p>{project.overview}</p>
            </section>

            <section>
              <p className="kicker">02 / System Architecture</p>
              <h2>How it is engineered</h2>
              <p className="case-arch-box">{project.architecture}</p>
            </section>

            <section>
              <p className="kicker">03 / Implementation Scope</p>
              <h2>What I built</h2>
              <ul className="case-bullets">
                {project.built.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <p className="kicker">04 / Engineering Decisions</p>
              <h2>Key trade-offs &amp; security</h2>
              <div className="case-decisions-grid">
                {project.decisions.map((decision, i) => (
                  <div key={i} className="decision-card">
                    <span className="decision-index">0{i + 1}</span>
                    <p>{decision}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="case-status">
              <p className="kicker">05 / Verification &amp; Current State</p>
              <h2>Where it stands today</h2>
              <p>{project.status}</p>
            </section>
          </div>
        </div>
      </article>

      <div className="case-next">
        <div className="shell">
          <span>UP NEXT IN PORTFOLIO</span>
          <a href={`/work/${next.slug}/`}>
            {next.name} <span>↗</span>
          </a>
        </div>
      </div>

      <footer className="shell">
        <span>© 2026 Somil Agrawal — Full-Stack Software Engineer</span>
        <a href="/#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
