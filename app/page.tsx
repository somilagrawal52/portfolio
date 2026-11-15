import { projects, type Project } from "./projects";

const Arrow = () => <span aria-hidden="true">↗</span>;

const moreWork = [
  { name: "Food App", kind: "Commerce / full-stack", summary: "Restaurant discovery, cart, ordering, and vendor management.", stack: "React · Express · MongoDB", href: "https://github.com/somilagrawal52/Food-APP" },
  { name: "Clinical Risk Screening", kind: "Machine learning / prototype", summary: "Educational screening dashboard and FastAPI prediction endpoints.", stack: "Python · FastAPI · scikit-learn", href: "https://github.com/somilagrawal52/disease-detection" },
  { name: "Hospital Management React", kind: "Healthcare / earlier build", summary: "A separate React-based patient, doctor, and admin experience.", stack: "React · Node.js · MongoDB", href: "https://github.com/somilagrawal52/Hospital-Management-react-version" },
  { name: "AI Mock Interviews", kind: "Learning build / voice AI", summary: "Interview practice interface exploring voice interaction and feedback.", stack: "Next.js · Firebase · Vapi", href: "https://github.com/somilagrawal52/ai_mock_interviews-main" },
];

const stackGroups = [
  { title: "01 / Interfaces", lead: "The part people touch.", items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML / CSS", "Redux Toolkit"], proof: [{ label: "DriveLuxe", href: "/work/driveluxe/" }, { label: "CodeSage", href: "/work/codesage-ai/" }, { label: "Chat App", href: "/work/chat-app/" }] },
  { title: "02 / Systems", lead: "The parts that hold up.", items: ["Node.js", "Express", "FastAPI", "REST APIs", "JWT", "Socket.IO", "Kafka"], proof: [{ label: "OneLife", href: "/work/onelife/" }, { label: "Connect Four", href: "/work/connect-four/" }, { label: "SkillSwap", href: "/work/skill-swap/" }] },
  { title: "03 / Data + AI", lead: "From records to useful answers.", items: ["MongoDB", "PostgreSQL", "MySQL", "SQL", "Prisma", "Gemini", "OpenAI", "NLP integration"], proof: [{ label: "Gemini RAG", href: "/work/gemini-rag/" }, { label: "CodeSage", href: "/work/codesage-ai/" }, { label: "OneLife", href: "/work/onelife/" }] },
  { title: "04 / Delivery", lead: "Getting it into the world.", items: ["AWS", "Docker", "CI / CD", "Render", "Git / GitHub", "Web scraping", "C / C++"], proof: [{ label: "OneLife", href: "/work/onelife/" }, { label: "Résumé", href: "/Somil-Agrawal-Resume.pdf" }] },
];

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
          <a href="#experience">Experience</a>
          <a href="/Somil-Agrawal-Resume.pdf" target="_blank" rel="noreferrer">Résumé <Arrow /></a>
        </nav>
        <a className="nav-cta" href="mailto:somilagrawal2004@gmail.com">
          Let&apos;s talk <Arrow />
        </a>
      </header>
      <main id="top">
        <section className="hero shell">
          <div className="hero-intro">
            <p className="kicker"><i /> Somil Agrawal / Full-stack software engineer</p>
            <h1>
              I build the
              <br />
              <em>whole thing.</em>
            </h1>
            <p className="hero-copy">
              From the interface people remember to the systems they rely on.
              I build web products across frontend, APIs, data, real-time flows,
              and applied AI.
            </p>
            <div className="hero-actions">
              <a className="button button-fill" href="#work">
                Explore the work <span>↓</span>
              </a>
              <a className="button" href="/Somil-Agrawal-Resume.pdf" target="_blank" rel="noreferrer">Résumé PDF <Arrow /></a>
            </div>
            <div className="hero-caption"><span>VIT BHOPAL / COMPUTER SCIENCE</span><span>BUILDING ACROSS THE STACK</span></div>
          </div>
          <div className="hero-visual" role="img" aria-label="Illustration of a connected interface, API, and data system">
            <div className="visual-label">THE BUILD / 001 <span>● LIVE SYSTEM</span></div>
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <div className="hero-core"><span>FULL</span><strong>STACK</strong><small>IDEA → INTERFACE → INFRASTRUCTURE</small></div>
            <div className="flow-chip flow-chip-ui"><span>01 / INTERFACE</span><strong>React + Next.js</strong></div>
            <div className="flow-chip flow-chip-api"><span>02 / SERVICE</span><strong>Node + FastAPI</strong></div>
            <div className="flow-chip flow-chip-data"><span>03 / DATA</span><strong>MongoDB + SQL</strong></div>
            <span className="hero-coordinate">23.26° N &nbsp; 77.41° E</span>
          </div>
          <div className="hero-meta">
            <span>Selected work / 2025—26</span>
            <span>Scroll to explore <b>↓</b></span>
          </div>
        </section>
        <div className="ticker" aria-hidden="true"><div>PRODUCT THINKING <b>✳</b> ENGINEERING DEPTH <b>✳</b> REAL-TIME SYSTEMS <b>✳</b> PRODUCT THINKING <b>✳</b> ENGINEERING DEPTH <b>✳</b> REAL-TIME SYSTEMS <b>✳</b></div></div>
        <section className="proof shell" aria-label="Highlights">
          <p>IN THE DETAILS</p>
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
            <p className="kicker">01 / Featured builds</p>
            <div>
              <h2>
                Proof is in
                <br />
                the <em>build.</em>
              </h2>
              <p>
                Seven deeper case studies spanning healthcare, developer tools,
                messaging, marketplaces, booking, games, and document AI.
              </p>
            </div>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>
        <section className="archive shell section" aria-labelledby="archive-heading">
          <div className="archive-head"><p className="kicker">02 / Project archive</p><div><h2 id="archive-heading">More things <em>I&apos;ve built.</em></h2><p>Additional builds and explorations. The full repository list lives on GitHub.</p></div></div>
          <div className="archive-list">{moreWork.map((item, index) => <a key={item.name} href={item.href} target="_blank" rel="noreferrer" className="archive-row"><span className="archive-num">{String(index + 8).padStart(2, "0")}</span><span className="archive-name"><strong>{item.name}</strong><small>{item.kind}</small></span><span className="archive-summary">{item.summary}</span><span className="archive-stack">{item.stack}</span><span className="archive-arrow" aria-hidden="true">↗</span></a>)}</div>
          <a className="archive-all" href="https://github.com/somilagrawal52?tab=repositories" target="_blank" rel="noreferrer">Browse all repositories <Arrow /></a>
        </section>
        <section id="about" className="about section">
          <div className="shell about-grid">
            <p className="kicker">03 / The approach</p>
            <div className="about-copy">
              <h2>
                Curious about
                <br />
                the <em>whole system.</em>
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
                focused middleware work. I&apos;ve also completed a 100-day public
                coding challenge and solved 700+ DSA problems.
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
        <section id="stack" className="stack section">
          <div className="shell">
          <div className="section-top">
            <p className="kicker">04 / The toolkit</p>
            <div>
              <h2>
                Stack, with
                <br />
                <em>receipts.</em>
              </h2>
              <p>
                Drawn from the repositories above and my résumé. Each category
                connects to work where those skills show up.
              </p>
            </div>
          </div>
          <div className="stack-grid">
            {stackGroups.map((group) => <StackGroup key={group.title} {...group} />)}
          </div>
          </div>
        </section>
        <section id="experience" className="experience shell section">
          <div className="section-top">
            <p className="kicker">05 / Experience</p>
            <div>
              <h2>
                Shaped by
                <br />
                <em>real work.</em>
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
              <p>COMPUTER SCIENCE</p>
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
            <p className="kicker">06 / Contact</p>
            <h2>
              Have a problem
              <br />
              worth <em>building?</em>
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
        <span>Designed and built by Somil.</span>
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
  if (type === "rental")
    return (
      <div className="rental-art">
        <div className="rental-top"><strong>DRIVE<span>LUXE</span></strong><small>YOUR NEXT ROAD STARTS HERE ↗</small></div>
        <div className="rental-stage"><div className="car-shape"><i className="car-roof" /><i className="car-wheel car-wheel-one" /><i className="car-wheel car-wheel-two" /></div></div>
        <div className="rental-bottom"><span>01 / SELECT A VEHICLE</span><b>Find your drive.</b><span>EXPLORE THE FLEET →</span></div>
      </div>
    );
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

function StackGroup({ title, lead, items, proof }: { title: string; lead: string; items: string[]; proof: { label: string; href: string }[] }) {
  return (
    <article>
      <p className="stack-index">{title}</p>
      <h3>{lead}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="stack-proof">IN THE WORK <span>{proof.map((item) => <a key={item.href + item.label} href={item.href}>{item.label} ↗</a>)}</span></p>
    </article>
  );
}
