import { projects, type Project } from "./projects";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Somil Agrawal home">
          SA<span>®</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#stack">Stack</a>
          <a href="/Somil-Agrawal-Resume.pdf" target="_blank" rel="noreferrer">Résumé ↗</a>
        </nav>
        <a className="nav-cta" href="mailto:somilagrawal2004@gmail.com">
          Start a conversation <Arrow />
        </a>
      </header>
      <main id="top">
        <section className="hero shell">
          <div className="hero-intro">
            <p className="kicker">
              <i /> Software engineer · Bhopal, India
            </p>
            <h1>
              I build digital
              <br />
              products that <em>move.</em>
            </h1>
            <p className="hero-copy">
              Full-stack engineer focused on the parts that make a product feel
              alive: dependable APIs, real-time flows, thoughtful interfaces,
              and practical AI.
            </p>
            <div className="hero-actions">
              <a className="button button-fill" href="#work">
                See selected work <span>↓</span>
              </a>
              <a
                className="button"
                href="https://github.com/somilagrawal52"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow />
              </a>
              <a className="button" href="/Somil-Agrawal-Resume.pdf" target="_blank" rel="noreferrer">Résumé PDF <Arrow /></a>
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="A visual summary of Somil's engineering focus"
          >
            <div className="visual-label">
              NOW BUILDING <span>▣</span>
            </div>
            <div className="orbital orbital-one" />
            <div className="orbital orbital-two" />
            <div className="signal">
              <b>001</b>
              <span>ideas into interfaces</span>
              <i />
            </div>
            <div className="signal signal-bottom">
              <b>002</b>
              <span>systems that respond</span>
              <i />
            </div>
            <div className="hero-card">
              <div className="card-dots">
                <i />
                <i />
                <i />
              </div>
              <code>
                const product = <em>intent</em>
                <br />
                &nbsp;&nbsp;.map(<em>experience</em>)<br />
                &nbsp;&nbsp;.ship(<em>withCare</em>)
              </code>
              <small>
                STATUS <strong>IN MOTION</strong>
              </small>
            </div>
          </div>
          <div className="hero-meta">
            <span>Full-stack · Real-time · Applied AI</span>
            <span>
              Scroll to explore <b>↓</b>
            </span>
          </div>
        </section>
        <section className="proof shell" aria-label="Highlights">
          <p>THE SHORT VERSION</p>
          <div>
            <strong>20+</strong>
            <span>
              REST APIs
              <br />
              in OneLife
            </span>
          </div>
          <div>
            <strong>700+</strong>
            <span>
              DSA problems
              <br />
              solved
            </span>
          </div>
          <div>
            <strong>8.05</strong>
            <span>
              CGPA
              <br />
              at VIT
            </span>
          </div>
          <div><strong>45</strong><span>OneLife tests<br />passing locally</span></div>
        </section>
        <section id="work" className="work shell section">
          <div className="section-top">
            <p className="kicker">01 / Selected work</p>
            <div>
              <h2>
                From a good idea
                <br />
                to a working <em>system.</em>
              </h2>
              <p>
                Six selected builds across healthcare, developer tools,
                real-time systems, and community. Explore the engineering behind
                each one.
              </p>
            </div>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>
        <section id="about" className="about section">
          <div className="shell about-grid">
            <p className="kicker">02 / How I think</p>
            <div className="about-copy">
              <h2>
                Built with
                <br />
                <em>intention.</em>
              </h2>
              <p>
                I&apos;m Somil, with a computer science background at VIT Bhopal, who
                enjoys turning product problems into dependable web systems. I
                care as much about the invisible parts - data flow, auth,
                architecture - as I do about the moment a user taps a button.
              </p>
              <p>
                At Birlasoft, I developed and tested REST and real-time APIs,
                improving response efficiency through query optimization and
                focused middleware work. Outside class, I&apos;ve kept a 100-day
                public coding streak and solved 700+ DSA problems.
              </p>
              <a
                className="inline-link"
                href="mailto:somilagrawal2004@gmail.com"
              >
                Let&apos;s build something useful <Arrow />
              </a>
            </div>
            <div className="principles">
              <article>
                <span>01</span>
                <h3>Start with the flow</h3>
                <p>
                  Clarify what users need, then map the happy path and the edge
                  cases.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Engineer the core</h3>
                <p>
                  Build clean APIs, reliable data boundaries, and real-time
                  behavior that holds up.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Finish the experience</h3>
                <p>
                  Make the details clear, responsive, and satisfying on every
                  screen.
                </p>
              </article>
            </div>
          </div>
        </section>
        <section id="stack" className="stack shell section">
          <div className="section-top">
            <p className="kicker">03 / Toolkit</p>
            <div>
              <h2>
                The tools behind
                <br />
                the <em>work.</em>
              </h2>
              <p>
                A practical stack shaped by the systems above and the work I
                enjoy doing next.
              </p>
            </div>
          </div>
          <div className="stack-grid">
            <StackGroup
              title="Frontend"
              items={[
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
                "HTML / CSS",
              ]}
            />
            <StackGroup
              title="Backend & Data"
              items={[
                "Node.js",
                "Express",
                "FastAPI",
                "MongoDB",
                "PostgreSQL",
                "MySQL",
              ]}
            />
            <StackGroup
              title="AI & Real-time"
              items={[
                "OpenAI",
                "Gemini",
                "Socket.IO",
                "Kafka",
                "Web Scraping",
                "REST APIs",
              ]}
            />
            <StackGroup
              title="Cloud & Craft"
              items={[
                "AWS",
                "Docker",
                "CI / CD",
                "Git / GitHub",
                "Render",
                "JWT Auth",
              ]}
            />
          </div>
        </section>
        <section className="experience shell section">
          <div className="section-top">
            <p className="kicker">04 / Experience</p>
            <div>
              <h2>
                Learning in
                <br />
                the <em>real world.</em>
              </h2>
            </div>
          </div>
          <div className="experience-list">
            <article>
              <p>OCT 2024 — DEC 2024</p>
              <div>
                <h3>
                  Software Engineering Intern <span>· Birlasoft</span>
                </h3>
                <p>
                  Developed and tested secure REST and real-time APIs with
                  Node.js, Express, and Socket.IO. Improved API response
                  efficiency by 20% through query optimization and middleware
                  refactoring, and delivered modular backend components across
                  sprint cycles.
                </p>
              </div>
              <a
                href="mailto:somilagrawal2004@gmail.com"
                aria-label="Contact Somil about his Birlasoft internship"
              >
                <Arrow />
              </a>
            </article>
            <article>
              <p>2022 — 2026</p>
              <div>
                <h3>
                  B.Tech, Computer Science Engineering <span>· VIT Bhopal</span>
                </h3>
                <p>
                  CGPA: 8.05 / 10. A foundation in computer science backed by
                  hands-on full-stack projects and consistent problem solving.
                </p>
              </div>
              <a href="#top" aria-label="Back to the top">
                <Arrow />
              </a>
            </article>
          </div>
        </section>
        <section className="contact">
          <div className="shell contact-inner">
            <p className="kicker">05 / Contact</p>
            <h2>
              Let&apos;s make the next
              <br />
              thing <em>count.</em>
            </h2>
            <a className="email" href="mailto:somilagrawal2004@gmail.com">
              somilagrawal2004@gmail.com <Arrow />
            </a>
            <div className="contact-links">
              <a
                href="https://github.com/somilagrawal52"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow />
              </a>
              <a
                href="https://www.linkedin.com/in/somil-agrawal-28a707250/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <Arrow />
              </a>
              <a href="#top">Back to top ↑</a>
              <a href="/Somil-Agrawal-Resume.pdf" target="_blank" rel="noreferrer">Résumé PDF <Arrow /></a>
            </div>
          </div>
        </section>
      </main>
      <footer className="shell">
        <span>© 2026 Somil Agrawal</span>
        <span>Designed and built with intent.</span>
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
        <span className="concept-label">Illustrative visual</span>
      </div>
      <div className="project-body">
        <p className="project-category">{project.category}</p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-actions"><a className="project-link" href={`/work/${project.slug}/`}>Read case study <Arrow /></a><a className="source-link" href={project.href} target="_blank" rel="noreferrer">Source code <Arrow /></a></div>
      </div>
    </article>
  );
}

function ProjectArt({ type }: { type: Project["visual"] }) {
  if (type === "health")
    return (
      <div className="health-art">
        <div className="health-top">
          <i /> OneLife <span>Patient view</span>
        </div>
        <div className="health-main">
          <small>GOOD MORNING, SOMIL</small>
          <h4>
            Your care,
            <br />
            all in one place.
          </h4>
          <div className="appointment">
            <span>Next appointment</span>
            <b>Dr. Mehta · 10:30 AM</b>
          </div>
        </div>
        <div className="health-plus">+</div>
      </div>
    );
  if (type === "review")
    return (
      <div className="review-art">
        <div className="review-head">
          <i />
          <i />
          <i />
          <span>review.ts</span>
        </div>
        <p>
          <b>01</b> <em>const</em> findings = await <strong>review</strong>
          (diff)
        </p>
        <p>
          <b>02</b> score.<strong>security</strong> <span>=</span> <i>92</i>
        </p>
        <p>
          <b>03</b> score.<strong>quality</strong> <span>=</span> <i>88</i>
        </p>
        <div className="review-score">
          <small>CODE HEALTH</small>
          <strong>92</strong>
          <span>Example score</span>
        </div>
      </div>
    );
  if (type === "chat")
    return (
      <div className="chat-art">
        <div className="chat-bar">
          <i />
          Project team <span>3 online</span>
        </div>
        <p className="message inbound">Ready to ship?</p>
        <p className="message outbound">Tests are green. Let&apos;s go. ✓</p>
        <div className="typing">
          <i />
          <i />
          <i />
        </div>
      </div>
    );
  if (type === "game")
    return (
      <div className="game-art">
        <p>
          YOUR TURN <span>●</span>
        </p>
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
          <b>LIVE MATCH</b>
          <span>Socket connected</span>
        </div>
      </div>
    );
  if (type === "rag")
    return (
      <div className="rag-art">
        <div className="rag-title">
          <i /> Gemini Q&amp;A <span>AI assistant</span>
        </div>
        <div className="prompt">What is the warranty policy?</div>
        <div className="answer">
          <small>GROUNDED ANSWER</small>
          <p>
            Based on the product guide, the warranty covers manufacturing
            defects for five years.
          </p>
          <span>3 sources cited</span>
        </div>
      </div>
    );
  return (
    <div className="skills-art">
      <div className="skill-orbit">
        SKILL
        <br />
        SWAP
      </div>
      <div className="skill-card one">
        <i>JS</i>
        <span>Mentoring</span>
      </div>
      <div className="skill-card two">
        <i>UI</i>
        <span>Learning</span>
      </div>
      <div className="skill-card three">
        <i>DB</i>
        <span>Pairing</span>
      </div>
    </div>
  );
}

function StackGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <article>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
