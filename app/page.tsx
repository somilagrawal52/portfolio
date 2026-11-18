"use client";

import { useState } from "react";
import {
  projects,
  archiveWork,
  certifications,
  achievements,
  type Project,
  type ProjectFilter,
} from "./projects";

const Arrow = () => <span aria-hidden="true" className="arrow-icon">↗</span>;

const skillCategories = [
  {
    title: "01 / Frontend & Interfaces",
    lead: "Pixel-perfect, accessible, high-performance UIs.",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Redux Toolkit", "Radix UI / shadcn", "HTML5 & CSS3"],
    proof: [
      { label: "AuraPOS", href: "/work/aurapos/" },
      { label: "CodeSage AI", href: "/work/codesage-ai/" },
      { label: "Chat-App", href: "/work/chat-app/" },
    ],
  },
  {
    title: "02 / Backend & Distributed Systems",
    lead: "High-throughput APIs, WebSockets & event streaming.",
    items: ["Node.js", "Express.js", "FastAPI (Python)", "RESTful APIs", "WebSockets / Socket.IO", "Apache Kafka", "JWT / Auth & RBAC", "Clean Architecture"],
    proof: [
      { label: "OneLife", href: "/work/onelife/" },
      { label: "Connect Four", href: "/work/connect-four/" },
      { label: "Birlasoft Work", href: "#experience" },
    ],
  },
  {
    title: "03 / Databases & ORMs",
    lead: "Data modeling, query optimization & transaction integrity.",
    items: ["MongoDB & Mongoose", "PostgreSQL", "MySQL", "Prisma ORM", "SQLAlchemy", "Redis", "Database Indexing", "BOM Schema"],
    proof: [
      { label: "AuraPOS", href: "/work/aurapos/" },
      { label: "Gemini RAG", href: "/work/gemini-rag/" },
      { label: "OneLife", href: "/work/onelife/" },
    ],
  },
  {
    title: "04 / Applied AI & Machine Learning",
    lead: "From predictive pipelines to autonomous LLM agents.",
    items: ["Gemini API", "OpenAI API", "scikit-learn", "FastAPI ML Services", "Pydantic v2", "RAG & Grounding", "NLP Integration", "NumPy & Pandas"],
    proof: [
      { label: "Disease Screening", href: "/work/disease-detection/" },
      { label: "CodeSage AI", href: "/work/codesage-ai/" },
      { label: "OneLife Triage", href: "/work/onelife/" },
    ],
  },
  {
    title: "05 / Cloud, DevOps & Tooling",
    lead: "Continuous integration, containerization & deployment.",
    items: ["AWS (EC2, S3)", "Docker & Containers", "Render & Vercel", "CI/CD Pipelines", "Git & GitHub", "Postman", "Linux / Bash", "Vitest & PyTest"],
    proof: [
      { label: "OneLife Docker", href: "/work/onelife/" },
      { label: "Résumé PDF", href: "/Somil-Agrawal-Resume.pdf" },
    ],
  },
  {
    title: "06 / Core CS & Problem Solving",
    lead: "Data structures, algorithms & low-level fundamentals.",
    items: ["C++", "C", "Data Structures & Algorithms", "Competitive Programming", "System Design", "Object-Oriented Programming (OOP)"],
    proof: [
      { label: "700+ DSA Problems", href: "#certifications" },
      { label: "Chess C++ Engine", href: "#archive" },
    ],
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("somilagrawal2004@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.filter === activeFilter);

  return (
    <>
      <div className="grain" aria-hidden="true" />

      {/* Top Navbar */}
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Somil Agrawal home">
          SA<span>®</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#certifications">Certifications</a>
          <a href="#stack">Toolkit</a>
          <a href="#about">Philosophy</a>
          <a href="/Somil-Agrawal-Resume.pdf" target="_blank" rel="noreferrer" className="nav-resume-pill">
            Résumé <Arrow />
          </a>
        </nav>
        <div className="nav-right">
          <button
            onClick={copyEmail}
            className="nav-copy-btn"
            title="Click to copy email address"
            aria-label="Copy email address"
          >
            {copied ? "Copied! ✓" : "Copy Email"}
          </button>
          <a className="nav-cta" href="mailto:somilagrawal2004@gmail.com">
            Let&apos;s talk <Arrow />
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero Section */}
        <section className="hero shell">
          <div className="hero-intro">
            <div className="hero-badge-row">
              <span className="live-status-pill">
                <span className="pulse-dot" /> AVAILABLE FOR SOFTWARE ENGINEERING ROLES
              </span>
              <span className="hero-school-pill">VIT VELLORE &apos;26 · B.TECH CSE</span>
            </div>

            <h1>
              Engineering the
              <br />
              <em>whole system.</em>
            </h1>

            <p className="hero-copy">
              I&apos;m <strong>Somil Agrawal</strong>, a full-stack engineer who builds
              high-throughput backends, real-time event streams, resilient data layers,
              and responsive interfaces. Experienced with <strong>Node.js, React, FastAPI,
              WebSockets, scikit-learn, and Gemini AI</strong>.
            </p>

            <div className="hero-actions">
              <a className="button button-fill" href="#work">
                Explore Projects <span>↓</span>
              </a>
              <a
                className="button"
                href="/Somil-Agrawal-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download Résumé <Arrow />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="button button-outline copy-pill-btn"
              >
                {copied ? "Email Copied! ✓" : "somilagrawal2004@gmail.com 📋"}
              </button>
            </div>

            <div className="hero-social-row">
              <a
                href="https://github.com/somilagrawal52"
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
              >
                GitHub (@somilagrawal52) <Arrow />
              </a>
              <span className="hero-divider">/</span>
              <a
                href="https://www.linkedin.com/in/somil-agrawal-28a707250/"
                target="_blank"
                rel="noreferrer"
                className="hero-social-link"
              >
                LinkedIn <Arrow />
              </a>
              <span className="hero-divider">/</span>
              <span className="hero-stat-badge">700+ DSA · 1400+ Rating</span>
            </div>
          </div>

          {/* Interactive Architecture & System Core Visual */}
          <div
            className="hero-visual"
            role="img"
            aria-label="Interactive multi-layer architecture visualization: UI, APIs, Data, AI"
          >
            <div className="visual-label">
              <span>SYSTEM ARCHITECTURE / PRODUCTION VIEW</span>
              <strong>● LIVE NODES ACTIVE</strong>
            </div>

            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />

            <div className="hero-core">
              <span>FULL-STACK</span>
              <strong>CORE</strong>
              <small>DISTRIBUTED · RESILIENT · DETERMINISTIC</small>
            </div>

            <div className="flow-chip flow-chip-ui">
              <span>01 / CLIENT INTERFACES</span>
              <strong>React 18 · Next.js · Tailwind</strong>
              <em>Sub-100ms optimistic UI</em>
            </div>

            <div className="flow-chip flow-chip-api">
              <span>02 / SERVICES &amp; STREAMS</span>
              <strong>Express · FastAPI · WebSockets</strong>
              <em>Socket.IO · Apache Kafka events</em>
            </div>

            <div className="flow-chip flow-chip-data">
              <span>03 / DATA PERSISTENCE</span>
              <strong>MongoDB · PostgreSQL · Redis</strong>
              <em>ACID checks · Indexed schemas</em>
            </div>

            <div className="flow-chip flow-chip-ai">
              <span>04 / APPLIED INTELLIGENCE</span>
              <strong>Gemini API · scikit-learn ML</strong>
              <em>98.25% cytology · RAG citations</em>
            </div>

            <span className="hero-coordinate">23.26° N &nbsp; 77.41° E &nbsp; | &nbsp; INDIA</span>
          </div>

          <div className="hero-meta">
            <span>Selected Works · 2024—2026</span>
            <span>Software Engineer Portfolio</span>
            <span>
              Scroll to explore <b>↓</b>
            </span>
          </div>
        </section>

        {/* Ticker / Running Ribbon */}
        <div className="ticker" aria-hidden="true">
          <div>
            FULL-STACK ARCHITECTURE <b>✳</b> REAL-TIME WEBSOCKETS <b>✳</b> MACHINE LEARNING &amp; APPLIED AI <b>✳</b> HIGH-THROUGHPUT REST APIS <b>✳</b> 700+ DSA SOLVED <b>✳</b> KAFKA EVENT STREAMING <b>✳</b> FULL-STACK ARCHITECTURE <b>✳</b> REAL-TIME WEBSOCKETS <b>✳</b>
          </div>
        </div>

        {/* Key Metrics / Proof Points Bar */}
        <section className="proof shell" aria-label="Key Engineering Metrics">
          <div className="proof-label-col">
            <p>QUANTIFIED IMPACT</p>
            <small>Key engineering receipts from real builds &amp; internships</small>
          </div>
          {achievements.map((item) => (
            <div key={item.label} className="proof-card">
              <strong>{item.stat}</strong>
              <span className="proof-title">{item.label}</span>
              <p className="proof-sub">{item.sub}</p>
            </div>
          ))}
        </section>

        {/* Work / Featured Projects Section */}
        <section id="work" className="work shell section">
          <div className="section-top">
            <p className="kicker">01 / Featured Engineering Builds</p>
            <div>
              <h2>
                Proof is in
                <br />
                the <em>execution.</em>
              </h2>
              <p>
                Nine production-grade full-stack, distributed, real-time, and AI
                systems built with robust architectures, clean schemas, and verified test suites.
              </p>
            </div>
          </div>

          {/* Interactive Project Filter Tabs */}
          <div className="filter-bar" role="tablist" aria-label="Filter projects by category">
            <button
              role="tab"
              aria-selected={activeFilter === "all"}
              onClick={() => setActiveFilter("all")}
              className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            >
              All Projects <span className="filter-count">{projects.length}</span>
            </button>
            <button
              role="tab"
              aria-selected={activeFilter === "fullstack"}
              onClick={() => setActiveFilter("fullstack")}
              className={`filter-btn ${activeFilter === "fullstack" ? "active" : ""}`}
            >
              Full-Stack &amp; Enterprise{" "}
              <span className="filter-count">
                {projects.filter((p) => p.filter === "fullstack").length}
              </span>
            </button>
            <button
              role="tab"
              aria-selected={activeFilter === "ai-ml"}
              onClick={() => setActiveFilter("ai-ml")}
              className={`filter-btn ${activeFilter === "ai-ml" ? "active" : ""}`}
            >
              AI &amp; Machine Learning{" "}
              <span className="filter-count">
                {projects.filter((p) => p.filter === "ai-ml").length}
              </span>
            </button>
            <button
              role="tab"
              aria-selected={activeFilter === "realtime"}
              onClick={() => setActiveFilter("realtime")}
              className={`filter-btn ${activeFilter === "realtime" ? "active" : ""}`}
            >
              Real-Time &amp; Systems{" "}
              <span className="filter-count">
                {projects.filter((p) => p.filter === "realtime").length}
              </span>
            </button>
          </div>

          {/* Project Cards Grid */}
          <div className="project-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* Project Archive / Additional Repositories */}
        <section id="archive" className="archive shell section" aria-labelledby="archive-heading">
          <div className="archive-head">
            <p className="kicker">02 / Project Archive</p>
            <div>
              <h2 id="archive-heading">
                More things <em>I&apos;ve engineered.</em>
              </h2>
              <p>
                Specialized prototypes, algorithms, automation pipelines, and
                exploratory builds from my GitHub repositories.
              </p>
            </div>
          </div>

          <div className="archive-list">
            {archiveWork.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="archive-row"
              >
                <span className="archive-num">{String(index + 10).padStart(2, "0")}</span>
                <span className="archive-name">
                  <strong>{item.name}</strong>
                  <small>{item.kind}</small>
                </span>
                <span className="archive-summary">{item.summary}</span>
                <span className="archive-stack">{item.stack}</span>
                <span className="archive-badge-pill">{item.badge}</span>
                <span className="archive-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>

          <div className="archive-foot">
            <a
              className="archive-all button button-fill"
              href="https://github.com/somilagrawal52?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              Explore all repositories on GitHub <Arrow />
            </a>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience shell section">
          <div className="section-top">
            <p className="kicker">03 / Work Experience</p>
            <div>
              <h2>
                Shaped by
                <br />
                <em>real engineering.</em>
              </h2>
              <p>
                Production backend internship impact, independent client web delivery, and solid computer science
                rigor at Vellore Institute of Technology.
              </p>
            </div>
          </div>

          <div className="experience-list">
            {/* Birlasoft Internship */}
            <article className="experience-card">
              <div className="exp-meta-col">
                <span className="exp-duration">OCT 2024 — DEC 2024</span>
                <span className="exp-type-tag">Internship · Backend</span>
              </div>
              <div className="exp-content-col">
                <div className="exp-heading-row">
                  <h3>
                    Software Engineering Intern / Backend Intern{" "}
                    <span>· Birlasoft</span>
                  </h3>
                  <span className="exp-highlight-chip">20% Latency Improvement</span>
                </div>
                <ul className="exp-bullets">
                  <li>
                    Developed and tested <strong>10+ secure REST and real-time APIs</strong> using
                    Node.js, Express.js, and Socket.IO, enabling low-latency one-to-one messaging workflows.
                  </li>
                  <li>
                    <strong>Improved API response efficiency by 20%</strong> through SQL/NoSQL query
                    optimization and middleware refactoring under senior engineer guidance.
                  </li>
                  <li>
                    Delivered <strong>15+ modular backend components</strong> following clean
                    architecture and code review standards across active sprint cycles.
                  </li>
                  <li>
                    Integrated database queries and REST services for <strong>3+ internal tools</strong>,
                    substantially reducing manual data lookup effort for cross-functional teams.
                  </li>
                </ul>
                <div className="exp-tech-tags">
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>Socket.IO</span>
                  <span>RESTful APIs</span>
                  <span>MongoDB</span>
                  <span>Query Optimization</span>
                  <span>Clean Architecture</span>
                </div>
              </div>
              <a
                href="mailto:somilagrawal2004@gmail.com?subject=Inquiry%20regarding%20Birlasoft%20experience"
                aria-label="Contact Somil about his Birlasoft internship"
                className="exp-arrow-link"
              >
                <Arrow />
              </a>
            </article>

            {/* Freelance Web Development & Digital Operations */}
            <article className="experience-card">
              <div className="exp-meta-col">
                <span className="exp-duration">4 MONTHS</span>
                <span className="exp-type-tag">Freelance / Contract</span>
              </div>
              <div className="exp-content-col">
                <div className="exp-heading-row">
                  <h3>
                    Freelance Web Developer &amp; Digital Operations{" "}
                    <span>· Independent Client / Multiple Business Projects</span>
                  </h3>
                  <span className="exp-highlight-chip">Built 2 Websites from Scratch</span>
                </div>
                <ul className="exp-bullets">
                  <li>
                    Designed and developed <strong>two complete business websites from scratch</strong> based
                    on client requirements, ensuring responsive layouts, cross-browser compatibility, and modern UI.
                  </li>
                  <li>
                    Handled ongoing <strong>website management, content updates, performance maintenance, and enhancements</strong> to
                    guarantee reliable availability and clean presentation.
                  </li>
                  <li>
                    Implemented <strong>Search Engine Optimization (SEO)</strong> for a client business website,
                    improving search metadata, discoverability, and on-page structure.
                  </li>
                  <li>
                    Assisted digital business operations by <strong>organizing and maintaining operational Excel spreadsheets</strong> and
                    managing professional email communications and technical solutions directly with the business owner.
                  </li>
                </ul>
                <div className="exp-tech-tags">
                  <span>Web Development</span>
                  <span>HTML5 / CSS3</span>
                  <span>JavaScript</span>
                  <span>Responsive Design</span>
                  <span>SEO</span>
                  <span>Website Maintenance</span>
                  <span>Client Collaboration</span>
                  <span>Digital Operations</span>
                </div>
              </div>
              <a
                href="mailto:somilagrawal2004@gmail.com?subject=Inquiry%20regarding%20freelance%20web%20development%20work"
                aria-label="Contact Somil about his freelance web development work"
                className="exp-arrow-link"
              >
                <Arrow />
              </a>
            </article>

            {/* University Education */}
            <article className="experience-card">
              <div className="exp-meta-col">
                <span className="exp-duration">2022 — 2026</span>
                <span className="exp-type-tag">B.Tech · Computer Science</span>
              </div>
              <div className="exp-content-col">
                <div className="exp-heading-row">
                  <h3>
                    B.Tech in Computer Science &amp; Engineering{" "}
                    <span>· Vellore Institute of Technology (VIT)</span>
                  </h3>
                  <span className="exp-highlight-chip">CGPA: 8.05 / 10</span>
                </div>
                <p className="exp-summary-text">
                  Deep grounding in computer science fundamentals: Data Structures &amp; Algorithms,
                  Distributed Systems, Database Management Systems (DBMS), Operating Systems, and
                  Computer Networks. Backed by practical full-stack projects, real-time architectures,
                  and 700+ competitive algorithmic solutions.
                </p>
                <div className="exp-tech-tags">
                  <span>C++</span>
                  <span>Data Structures</span>
                  <span>Algorithms</span>
                  <span>DBMS</span>
                  <span>Operating Systems</span>
                  <span>Computer Networks</span>
                </div>
              </div>
              <a href="#top" aria-label="Back to top" className="exp-arrow-link">
                <Arrow />
              </a>
            </article>
          </div>
        </section>

        {/* Certifications & Extracurricular Section */}
        <section id="certifications" className="certifications-section shell section">
          <div className="section-top">
            <p className="kicker">04 / Certifications &amp; Milestones</p>
            <div>
              <h2>
                Industry
                <br />
                <em>credentials.</em>
              </h2>
              <p>
                Professional certifications verified by industry leaders, coupled
                with consistent competitive programming milestones.
              </p>
            </div>
          </div>

          <div className="cert-grid">
            {certifications.map((cert) => (
              <div key={cert.title} className="cert-card">
                <div className="cert-card-top">
                  <span className="cert-issuer-badge">{cert.issuer} Verified</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <h3>{cert.title}</h3>
                <div className="cert-skills">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="cert-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-verify-link"
                >
                  Verify Credential <Arrow />
                </a>
              </div>
            ))}

            {/* Coding Challenge & DSA Milestone Card */}
            <div className="cert-card cert-card-highlight">
              <div className="cert-card-top">
                <span className="cert-issuer-badge">Competitive Milestone</span>
                <span className="cert-date">1400+ Rating</span>
              </div>
              <h3>700+ DSA Problems Solved &amp; 100-Day Streak</h3>
              <p className="cert-highlight-p">
                Consistently solved 700+ algorithmic problems across LeetCode,
                GeeksforGeeks, and CodeChef. Completed a public 100-Day Coding Challenge
                on LinkedIn showcasing daily problem decompositions and clean C++ implementations.
              </p>
              <div className="cert-skills">
                <span className="cert-skill-pill">Dynamic Programming</span>
                <span className="cert-skill-pill">Graphs &amp; Trees</span>
                <span className="cert-skill-pill">Two Pointers</span>
                <span className="cert-skill-pill">Greedy &amp; Heuristics</span>
              </div>
              <a
                href="https://www.linkedin.com/in/somil-agrawal-28a707250/"
                target="_blank"
                rel="noreferrer"
                className="cert-verify-link"
              >
                View LinkedIn Coding Journal <Arrow />
              </a>
            </div>
          </div>
        </section>

        {/* Technical Stack / Toolkit Matrix */}
        <section id="stack" className="stack section">
          <div className="shell">
            <div className="section-top">
              <p className="kicker">05 / The Technical Toolkit</p>
              <div>
                <h2>
                  Full-stack, with
                  <br />
                  <em>verified receipts.</em>
                </h2>
                <p>
                  Every technology here has been implemented in production or
                  featured repositories above. Click any proof link to inspect the code.
                </p>
              </div>
            </div>

            <div className="stack-grid">
              {skillCategories.map((group) => (
                <article key={group.title} className="stack-card">
                  <p className="stack-index">{group.title}</p>
                  <h3>{group.lead}</h3>
                  <ul className="stack-pill-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="stack-proof">
                    <span>SEEN IN THE CODE:</span>
                    <div className="stack-proof-links">
                      {group.proof.map((p) => (
                        <a key={p.href + p.label} href={p.href}>
                          {p.label} <Arrow />
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About / Engineering Approach */}
        <section id="about" className="about section">
          <div className="shell about-grid">
            <p className="kicker">06 / Engineering Philosophy</p>
            <div className="about-copy">
              <h2>
                Curious about
                <br />
                the <em>whole architecture.</em>
              </h2>
              <p>
                I&apos;m Somil, a computer science engineer graduating from VIT in 2026.
                I build web platforms from the database index up to the CSS transition.
                I care deeply about the invisible parts — auth boundaries, connection
                resilience, zero-downtime schemas, and cache invalidation — as much as
                I care about a smooth, intuitive user experience.
              </p>
              <p>
                Whether it&apos;s improving API response times by 20% at Birlasoft,
                architecting multi-tenant restaurant POS tables, or calibrating clinical
                machine learning pipelines with 98.25% test accuracy, I bring disciplined
                problem-solving and ownership to every sprint.
              </p>
              <div className="about-actions">
                <a className="button button-fill" href="mailto:somilagrawal2004@gmail.com">
                  Let&apos;s build something together <Arrow />
                </a>
                <a
                  className="button"
                  href="/Somil-Agrawal-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Résumé <Arrow />
                </a>
              </div>
            </div>

            <div className="principles">
              <article>
                <span>PRINCIPLE 01</span>
                <h3>Start with the Flow</h3>
                <p>
                  Map user workflows, failure points, and data lifecycles before
                  committing to code or frameworks.
                </p>
              </article>
              <article>
                <span>PRINCIPLE 02</span>
                <h3>Engineer the Core</h3>
                <p>
                  Build clean APIs, strict role boundaries, transactional safety,
                  and sub-second real-time event systems.
                </p>
              </article>
              <article>
                <span>PRINCIPLE 03</span>
                <h3>Finish the Experience</h3>
                <p>
                  Provide clear optimistic states, transparent error handling,
                  and fluid, accessible interfaces across any screen.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="shell contact-inner">
            <div className="contact-badge-wrap">
              <p className="kicker">07 / Open for Opportunities</p>
              <span className="contact-status-chip">● CURRENTLY INTERVIEWING FOR SWE ROLES</span>
            </div>

            <h2>
              Have a problem
              <br />
              worth <em>engineering?</em>
            </h2>

            <p className="contact-intro">
              I am actively looking for software engineering roles, full-stack positions,
              and backend engineering teams where I can deliver high-impact work.
            </p>

            <div className="email-action-row">
              <a className="email" href="mailto:somilagrawal2004@gmail.com">
                somilagrawal2004@gmail.com <Arrow />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="button button-fill copy-direct-btn"
              >
                {copied ? "Email Copied! ✓" : "Copy to Clipboard 📋"}
              </button>
            </div>

            <div className="contact-links">
              <a
                href="https://github.com/somilagrawal52"
                target="_blank"
                rel="noreferrer"
                className="contact-link-pill"
              >
                GitHub Profile <Arrow />
              </a>
              <a
                href="https://www.linkedin.com/in/somil-agrawal-28a707250/"
                target="_blank"
                rel="noreferrer"
                className="contact-link-pill"
              >
                LinkedIn Profile <Arrow />
              </a>
              <a
                href="/Somil-Agrawal-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="contact-link-pill"
              >
                Download Résumé PDF <Arrow />
              </a>
              <a href="#top" className="back-to-top-btn">
                Back to top ↑
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="shell footer-wrap">
        <div>
          <span>© 2026 Somil Agrawal. All rights reserved.</span>
          <span className="footer-sub">
            Built with Next.js 16, React 19, TypeScript &amp; Pure Modern CSS.
          </span>
        </div>
        <div className="footer-links">
          <a href="https://github.com/somilagrawal52" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/somil-agrawal-28a707250/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:somilagrawal2004@gmail.com">Email</a>
        </div>
      </footer>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project project-${project.visual}`}>
      <div className="project-art">
        <ProjectArt type={project.visual} />
        <span className="project-no">{project.number}</span>
        <span className="project-metric-badge">{project.metric}</span>
      </div>
      <div className="project-body">
        <div className="project-top-row">
          <p className="project-category">{project.category}</p>
          <span className="project-filter-tag">{project.filter.toUpperCase()}</span>
        </div>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-actions">
          <a className="project-link" href={`/work/${project.slug}/`}>
            Case study &amp; architecture <Arrow />
          </a>
          <a
            className="source-link"
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            Source code <Arrow />
          </a>
        </div>
      </div>
    </article>
  );
}

function ProjectArt({ type }: { type: Project["visual"] }) {
  if (type === "health") {
    return (
      <div className="health-art">
        <div className="health-top">
          <i /> OneLife Telemedicine <span>PATIENT PORTAL · ACTIVE</span>
        </div>
        <div className="health-main">
          <small>AI CARE ASSISTANT &amp; TRIAGE</small>
          <h4>
            Your clinical care,
            <br />
            coordinated in one place.
          </h4>
          <div className="appointment">
            <span>Next Consultation</span>
            <b>Dr. Mehta · 10:30 AM · WebSockets Ready</b>
          </div>
          <div className="health-triage-chip">
            <span>Gemini AI Triage:</span>
            <b>Symptom cleared · Low Urgency</b>
          </div>
        </div>
        <div className="health-plus">+</div>
      </div>
    );
  }

  if (type === "pos") {
    return (
      <div className="pos-art">
        <div className="pos-header">
          <span className="pos-title">AuraPOS 1.0</span>
          <span className="pos-live-badge">● KDS RUSH ACTIVE</span>
        </div>
        <div className="pos-ticket">
          <div className="pos-ticket-meta">
            <strong>TICKET #ORD-108</strong>
            <span>Table 04 · Dine-In</span>
          </div>
          <ul className="pos-items">
            <li>
              <span>1x Truffle Risotto</span>
              <b>$24.00</b>
            </li>
            <li>
              <span>2x Artisan Spritz</span>
              <b>$18.00</b>
            </li>
            <li>
              <span>1x Woodfired Burrata</span>
              <b>$16.00</b>
            </li>
          </ul>
          <div className="pos-total-row">
            <span>BOM Deducted · Subtotal</span>
            <strong>$58.00</strong>
          </div>
        </div>
        <div className="pos-status-bar">
          <span>KDS Status: <strong>Station 02 (Main)</strong></span>
          <span>Shift: <strong>Register 01 Open</strong></span>
        </div>
      </div>
    );
  }

  if (type === "review") {
    return (
      <div className="review-art">
        <div className="review-head">
          <i />
          <i />
          <i />
          <span>codesage/pr-review.ts</span>
          <small>5 AGENTS ACTIVE</small>
        </div>
        <p>
          <b>01</b> <em>const</em> findings = await <strong>orchestrator</strong>.review(diff);
        </p>
        <p>
          <b>02</b> securityAgent.<strong>auditFindings</strong>(pydanticSchema);
        </p>
        <p>
          <b>03</b> deterministicScore.<strong>compute</strong>(findings); <i>// 92/100</i>
        </p>
        <div className="review-score">
          <small>CODE HEALTH SCORE</small>
          <strong>92</strong>
          <span>Deterministic · 0 Hallucinations</span>
        </div>
      </div>
    );
  }

  if (type === "clinic") {
    return (
      <div className="clinic-art">
        <div className="clinic-header">
          <span className="clinic-dot" />
          <strong>Clinical Risk Intelligence</strong>
          <span>FASTAPI ML ENGINE</span>
        </div>
        <div className="clinic-gauges">
          <div className="gauge-item">
            <small>WISCONSIN FNA ONCOLOGY</small>
            <strong className="gauge-val-high">98.25%</strong>
            <span>Validated Test Accuracy</span>
          </div>
          <div className="gauge-item">
            <small>DIABETES MELLITUS SVM</small>
            <strong className="gauge-val-mid">18.4%</strong>
            <span>Low Risk · ADA Standard</span>
          </div>
        </div>
        <div className="clinic-framingham">
          <div className="framingham-bar">
            <span>Framingham Heart Age: <strong>23 yrs</strong> (Bio: 21 yrs)</span>
            <span className="grade-badge">CARDIOMETABOLIC GRADE A</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "chat") {
    return (
      <div className="chat-art">
        <div className="chat-bar">
          <i />
          Socket.IO Channel <span>50+ concurrent users</span>
        </div>
        <p className="message inbound">Ready to deploy the real-time event pipeline?</p>
        <p className="message outbound">Socket sub-second latency verified. All tests green. ✓</p>
        <div className="chat-footer-row">
          <div className="typing">
            <i />
            <i />
            <i />
          </div>
          <span className="chat-sub-second">14ms latency</span>
        </div>
      </div>
    );
  }

  if (type === "skills") {
    return (
      <div className="skills-art">
        <div className="skill-orbit">
          SKILL
          <br />
          SWAP
        </div>
        <div className="skill-card one">
          <i>JS</i>
          <span>Teaches React / Node</span>
        </div>
        <div className="skill-card two">
          <i>PY</i>
          <span>Learns FastAPI / ML</span>
        </div>
        <div className="skill-card three">
          <i>DB</i>
          <span>Reciprocal Barter Match 100%</span>
        </div>
      </div>
    );
  }

  if (type === "rental") {
    return (
      <div className="rental-art">
        <div className="rental-top">
          <strong>
            DRIVE<span>LUXE</span>
          </strong>
          <small>FLEET RESERVATIONS ↗</small>
        </div>
        <div className="rental-stage">
          <div className="car-shape">
            <i className="car-roof" />
            <i className="car-wheel car-wheel-one" />
            <i className="car-wheel car-wheel-two" />
          </div>
        </div>
        <div className="rental-bottom">
          <span>SERVER VALIDATED PRICING</span>
          <b>BMW M4 Competition · 3 Days</b>
          <div className="rental-pricing-row">
            <small>Total: $585.00</small>
            <span>Confirmed ✓</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === "game") {
    return (
      <div className="game-art">
        <div className="game-top-bar">
          <p>
            MULTIPLAYER CONNECT FOUR <span>●</span>
          </p>
          <small>Kafka Event Producer Active</small>
        </div>
        <div className="game-board">
          {Array.from({ length: 16 }, (_, i) => (
            <i
              key={i}
              className={
                [1, 6, 10].includes(i)
                  ? "yellow"
                  : [3, 7, 11].includes(i)
                    ? "red"
                    : ""
              }
            />
          ))}
        </div>
        <div className="game-status">
          <b>KAFKA STREAM: MOVE_PLAYED</b>
          <span>Matchmaking Queue &amp; Bot Fallback</span>
        </div>
      </div>
    );
  }

  return (
    <div className="rag-art">
      <div className="rag-title">
        <i /> Gemini RAG Engine <span>PRISMA GROUNDED</span>
      </div>
      <div className="prompt">&quot;What is the warranty coverage duration?&quot;</div>
      <div className="answer">
        <small>GROUNDED SEMANTIC ANSWER</small>
        <p>
          Per Section 4.2 of the technical manual, the equipment is covered for 5
          years against manufacturing defects.
        </p>
        <span className="rag-cite">3 verifiable sources cited · 0 hallucination</span>
      </div>
    </div>
  );
}
