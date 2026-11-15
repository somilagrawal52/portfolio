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

  return <main className="case-page">
    <header className="case-nav shell"><a className="brand" href="/" aria-label="Somil Agrawal home">SA<span>®</span></a><a href="/#work">← All work</a><a href="mailto:somilagrawal2004@gmail.com">Get in touch ↗</a></header>
    <article>
      <div className="case-hero shell"><p className="kicker">{project.number} / {project.category}</p><h1>{project.name}<span>.</span></h1><p className="case-focus">{project.focus}</p><div className="case-hero-links"><a className="button button-fill" href={project.href} target="_blank" rel="noreferrer">Explore source ↗</a><a className="button" href="/#work">All projects ↗</a></div></div>
      <div className={`case-banner case-${project.visual}`}><div className="shell"><span>PROJECT NOTES / {project.number}</span><strong>{project.name}</strong><span>ENGINEERING · PRODUCT · EXPERIENCE</span></div></div>
      <div className="case-content shell"><aside><span>AT A GLANCE</span><ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul><a href={project.href} target="_blank" rel="noreferrer">GitHub repository ↗</a></aside><div className="case-story"><section><p className="kicker">01 / Overview</p><h2>The product</h2><p>{project.overview}</p></section><section><p className="kicker">02 / Scope</p><h2>What I built</h2><ul>{project.built.map((item) => <li key={item}>{item}</li>)}</ul></section><section><p className="kicker">03 / Engineering</p><h2>Key decisions</h2><ul>{project.decisions.map((item) => <li key={item}>{item}</li>)}</ul></section><section className="case-status"><p className="kicker">04 / Current state</p><h2>Where it stands</h2><p>{project.status}</p></section></div></div>
    </article>
    <div className="case-next"><div className="shell"><span>UP NEXT</span><a href={`/work/${next.slug}/`}>{next.name} <span>↗</span></a></div></div>
    <footer className="shell"><span>© 2026 Somil Agrawal</span><a href="/#top">Back to portfolio ↑</a></footer>
  </main>;
}
