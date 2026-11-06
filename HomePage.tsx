import SiteHeader from "./SiteHeader";

const pillars = [
  {
    number: "01",
    title: "AI Product Design",
    description:
      "Designing systems where people and AI collaborate with clarity, trust, and meaningful human control.",
  },
  {
    number: "02",
    title: "Enterprise Systems",
    description:
      "Making complex workflows, permissions, and organizational dependencies feel coherent and usable.",
  },
  {
    number: "03",
    title: "Research & Strategy",
    description:
      "Using evidence and systems thinking to frame the right problems and guide consequential product decisions.",
  },
];

const projects = [
  {
    index: "01",
    slug: "propel",
    name: "Propel",
    type: "Enterprise collaboration",
    title: "Making unfinished work safe to share.",
    description:
      "A new collaboration model for sharing prototypes across complex organizations—without losing context, control, or momentum.",
    challenge:
      "Teams needed to move quickly, while permissions and ambiguity made early-stage work difficult to circulate.",
    focus: ["Workflow design", "Permissions", "Collaboration"],
    signal: "Reduced coordination friction",
  },
  {
    index: "02",
    slug: "aha-agent",
    name: "AHA Agent",
    type: "AI-assisted product management",
    title: "Designing AI that supports judgment.",
    description:
      "An AI collaborator that helps product teams synthesize evidence, interrogate assumptions, and make better decisions.",
    challenge:
      "The opportunity was not automation alone, but creating assistance teams could understand, challenge, and trust.",
    focus: ["AI collaboration", "Trust", "Decision support"],
    signal: "Human oversight by design",
  },
  {
    index: "03",
    slug: "service-design-research",
    name: "Service Design Research",
    type: "Published research",
    title: "Connecting digital services to real communities.",
    description:
      "Research into how service ecosystems move between digital interfaces, institutions, and lived human experience.",
    challenge:
      "A rigorous inquiry into the gaps that emerge when services are designed as isolated touchpoints rather than systems.",
    focus: ["Research rigor", "Systems thinking", "Service design"],
    signal: "Published perspective",
  },
];

const principles = [
  "Design for decisions, not screens.",
  "AI should augment judgment, not replace it.",
  "Systems matter more than interfaces.",
  "Research creates leverage.",
  "Simplicity requires understanding.",
];

const articles = [
  {
    number: "01",
    title: "Designing Human–AI Collaboration",
    category: "AI Experience",
    time: "8 min",
  },
  {
    number: "02",
    title: "What Makes AI Systems Trustworthy?",
    category: "Research",
    time: "6 min",
  },
  {
    number: "03",
    title: "Enterprise UX Is More Than Screens",
    category: "Systems",
    time: "7 min",
  },
  {
    number: "04",
    title: "Prompt Design as a New UX Discipline",
    category: "Practice",
    time: "5 min",
  },
  {
    number: "05",
    title: "Designing for Human Oversight",
    category: "Point of view",
    time: "9 min",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? "arrow arrow--diagonal" : "arrow"}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3 10h13M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IBMLogo() {
  const bars = Array.from({ length: 8 }, (_, index) => index * 8 + 7);

  return (
    <svg className="ibm-logo" viewBox="0 0 214 80" role="img" aria-label="IBM">
      <defs>
        <mask id="ibm-wordmark-mask">
          <rect width="214" height="80" fill="black" />
          <text
            x="-2"
            y="70"
            fill="white"
            fontFamily="Arial Black, Arial, sans-serif"
            fontSize="82"
            fontWeight="900"
            letterSpacing="-8"
          >
            IBM
          </text>
        </mask>
      </defs>
      <g mask="url(#ibm-wordmark-mask)">
        {bars.map((y) => (
          <rect key={y} x="0" y={y} width="214" height="5" fill="currentColor" />
        ))}
      </g>
    </svg>
  );
}

function HomePage() {
  return (
    <div className="site-shell">
      <SiteHeader />

      <main id="top">
        <section className="hero section-wrap">
          <div className="eyebrow">
            <span className="status-dot" />
            AI product designer · Systems thinker
          </div>
          <h1>
            I design how humans
            <br />
            and <span className="accent-word">AI</span> work together.
          </h1>
          <div className="hero-lower">
            <p>
              Enterprise product designer focused on intelligent workflows, decision-making systems,
              and the future of work.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#work">
                View work <Arrow />
              </a>
              <a className="button button--text" href="#thinking">
                Read my thinking <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="credibility" aria-label="Current role and areas of expertise">
          <div className="section-wrap credibility-inner">
            <div className="credibility-main">
              <span className="credibility-label">Currently at</span>
              <div className="employer">
                <IBMLogo />
                <p>
                  Designing enterprise AI-powered product experiences and intelligent workflows.
                </p>
              </div>
            </div>
            <div className="credibility-items" aria-label="Additional expertise">
              <span>Enterprise software</span>
              <span>AI workflows</span>
              <span>Product design</span>
              <span>Service design research</span>
              <span>Published research</span>
            </div>
          </div>
        </section>

        <section className="section section-wrap" id="expertise">
          <div className="section-heading">
            <span className="section-kicker">What I do</span>
            <h2>Turning complexity into direction.</h2>
            <p>
              I work across products, organizations, and service ecosystems to make intelligent
              technology useful, responsible, and human.
            </p>
          </div>
          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <article className="pillar" key={pillar.title}>
                <span className="pillar-number">{pillar.number}</span>
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-wrap">
            <div className="section-heading section-heading--split">
              <div>
                <span className="section-kicker">Selected work</span>
                <h2>
                  Complex problems.
                  <br />
                  Clearer systems.
                </h2>
              </div>
              <p>
                A selection of work across enterprise collaboration, AI-assisted decisions, and
                service design research.
              </p>
            </div>

            <div className="project-list">
              {projects.map((project) => (
                <article className="project" key={project.name}>
                  <div className="project-topline">
                    <span>{project.index}</span>
                    <span>{project.type}</span>
                  </div>
                  <div className="project-main">
                    <div className="project-name-block">
                      <h3>{project.name}</h3>
                      <span className="project-signal">{project.signal}</span>
                    </div>
                    <div className="project-story">
                      <h4>{project.title}</h4>
                      <p className="project-description">{project.description}</p>
                      <div className="project-challenge">
                        <span>Core challenge</span>
                        <p>{project.challenge}</p>
                      </div>
                    </div>
                  </div>
                  <div className="project-footer">
                    <div className="tags">
                      {project.focus.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    <a
                      href={`/work/${project.slug}`}
                      aria-label={`Read the ${project.name} case study`}
                    >
                      Read case study <Arrow />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section principles-section">
          <div className="section-wrap principles-layout">
            <div className="principles-intro">
              <span className="section-kicker">Principles</span>
              <p>
                A point of view is a design tool. These ideas shape how I frame problems and make
                decisions.
              </p>
            </div>
            <div className="principles-list">
              {principles.map((principle, index) => (
                <div className="principle" key={principle}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{principle}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-wrap" id="thinking">
          <div className="section-heading section-heading--split">
            <div>
              <span className="section-kicker">Thinking</span>
              <h2>
                Ideas for designing
                <br />
                intelligent systems.
              </h2>
            </div>
            <p>
              Notes and essays on human–AI interaction, enterprise experience, design research, and
              product strategy.
            </p>
          </div>
          <div className="article-list">
            {articles.map((article) => (
              <a className="article-row" href="#contact" key={article.title}>
                <span className="article-number">{article.number}</span>
                <h3>{article.title}</h3>
                <span className="article-meta">{article.category}</span>
                <span className="article-time">{article.time}</span>
                <Arrow />
              </a>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-wrap about-layout">
            <div className="about-heading">
              <span className="section-kicker">About</span>
              <h2>
                Designer by practice.
                <br />
                Systems thinker by nature.
              </h2>
            </div>
            <div className="about-copy">
              <p className="about-lead">
                I’m Sutop, a product designer interested in how people think, decide, trust, and
                work together.
              </p>
              <p>
                My practice connects product design, human–AI collaboration, research, and systems
                thinking. Technology is the context; human curiosity is the starting point.
              </p>
              <a className="about-journey-link" href="/about">
                <span>Why I think in systems</span>
                <strong>
                  Explore my story <Arrow />
                </strong>
              </a>
            </div>
          </div>
        </section>

        <section className="section section-wrap resume-section" id="resume">
          <div className="resume-header">
            <div>
              <span className="section-kicker">Experience</span>
              <h2>
                Experience built across
                <br />
                systems and disciplines.
              </h2>
            </div>
          </div>
          <div className="resume-grid">
            <div className="resume-column">
              <h3>Experience</h3>
              <div className="resume-entry">
                <div className="resume-entry-main">
                  <h4>Product Designer</h4>
                  <div className="resume-affiliation resume-affiliation--ibm">
                    <IBMLogo />
                  </div>
                  <p>Designing enterprise collaboration and AI-assisted experiences.</p>
                </div>
                <span>Current</span>
              </div>
              <div className="resume-entry">
                <div className="resume-entry-main">
                  <h4>AI Product Design</h4>
                  <p>
                    Designing AI-assisted workflows, decision-support tools, and agent experiences.
                  </p>
                </div>
                <span>Recent</span>
              </div>
              <div className="resume-entry">
                <div className="resume-entry-main">
                  <h4>Published Research</h4>
                  <div className="resume-affiliation">ServDes 2025</div>
                  <p>Research exploring digital services, communities, and complex systems.</p>
                </div>
                <span>Published</span>
              </div>
            </div>
            <div className="resume-column resume-column--compact">
              <div>
                <h3>Core areas</h3>
                <ul>
                  <li>Human-AI Collaboration</li>
                  <li>Enterprise Systems</li>
                  <li>Agent Experiences</li>
                  <li>Decision Support</li>
                  <li>Service Design</li>
                  <li>Research Strategy</li>
                </ul>
              </div>
              <div className="practice-statement">
                <h3>Practice</h3>
                <p>
                  I use research, systems thinking, and design to help people make better decisions
                  in increasingly AI-assisted environments.
                </p>
              </div>
            </div>
          </div>
          <div className="resume-cta">
            <span>Need the one-page version?</span>
            <button type="button" disabled>
              Download Resume <Arrow diagonal />
            </button>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap">
            <span className="section-kicker section-kicker--light">Contact</span>
            <h2>
              Let’s design the future
              <br />
              of intelligent work.
            </h2>
            <p>
              I’m interested in ambitious teams working at the intersection of AI, enterprise
              systems, and human judgment.
            </p>
            <div className="contact-links">
              <a href="mailto:sutopmukherjee@gmail.com">
                Email <Arrow diagonal />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn <Arrow diagonal />
              </a>
              <a href="#resume">
                Resume <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="section-wrap footer-inner">
          <p>Sutop Mukherjee</p>
          <p>Designing human–AI collaboration.</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
