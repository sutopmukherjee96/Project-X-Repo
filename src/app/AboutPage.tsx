import { useEffect, useState } from "react";
import SiteHeader from "./SiteHeader";

const explorations = [
  "Human-AI Collaboration",
  "Enterprise Productivity",
  "Agent Experiences",
  "Product Strategy",
  "Service Design",
  "Decision Support Systems",
];

const perspectives = [
  {
    name: "Tom Waterton",
    role: "Design Lead, Propel",
    location: "United Kingdom",
    pointClass: "map-point--uk",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&h=96&q=80&crop=faces",
    avatarCredit: "Joseph Gonzalez",
    text: "Sutop brings a systems mindset to design challenges. Rather than jumping directly to interfaces, Sutop consistently seeks to understand the relationships between people, workflows, constraints, and business goals before proposing solutions. That perspective helped our team navigate ambiguity and create more coherent experiences.",
  },
  {
    name: "Casey Gollan",
    role: "Senior Engineering Manager",
    location: "United States",
    pointClass: "map-point--us-west",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=96&h=96&q=80&crop=faces",
    avatarCredit: "Christina at wocintechchat.com",
    text: "What stood out to me was Sutop’s ability to engage deeply with both technical and user-centered considerations. Sutop approaches collaboration with curiosity, asks thoughtful questions, and helps bridge conversations across design, engineering, and product teams.",
  },
  {
    name: "Carlos Rosemberg",
    role: "AI Strategist",
    location: "Global / AI",
    pointClass: "map-point--global",
    avatar:
      "https://images.unsplash.com/photo-1600878459138-e1123b37cb30?auto=format&fit=crop&w=96&h=96&q=80&crop=faces",
    avatarCredit: "Itay Verchik",
    text: "Sutop does not treat AI as a feature. Sutop thinks about how intelligent systems influence decision-making, trust, and human behavior. That broader perspective helped shape conversations beyond interface design and into product strategy.",
  },
  {
    name: "Christine Holcombe",
    role: "Director",
    location: "United States",
    pointClass: "map-point--us-east",
    avatar:
      "https://images.unsplash.com/photo-1585240975858-7264fd020798?auto=format&fit=crop&w=96&h=96&q=80&crop=faces",
    avatarCredit: "PodMatch",
    text: "Sutop combines strong design execution with systems-level thinking. Sutop approaches challenges with rigor, seeks evidence before making decisions, and contributes thoughtfully to discussions that influence both product direction and user experience.",
  },
];

function AboutArrow() {
  return (
    <svg aria-hidden="true" className="arrow" viewBox="0 0 20 20" fill="none">
      <path d="M3 10h13M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function ImagePlaceholder({
  label,
  detail,
  landscape = false,
}: {
  label: string;
  detail: string;
  landscape?: boolean;
}) {
  return (
    <div
      className={
        landscape ? "editorial-placeholder editorial-placeholder--wide" : "editorial-placeholder"
      }
    >
      <span>Image placeholder</span>
      <div>
        <strong>{label}</strong>
        <p>{detail}</p>
      </div>
    </div>
  );
}

function WorldMap() {
  return (
    <svg className="world-map" viewBox="0 0 900 450" aria-hidden="true">
      <path d="M78 98l44-31 74 1 45 21 28 38-21 19-34-8-17 30-26 5-7 38-30-4-17-38-39-20-16-31z" />
      <path d="M224 224l37 10 27 36-5 55-24 58-24-19-8-50-22-44z" />
      <path d="M392 101l40-17 45 8 15 21-25 14-18-8-23 16-35-8z" />
      <path d="M419 157l56-12 42 32-5 57-35 66-31-20-8-54-26-33z" />
      <path d="M486 96l70-29 101 10 46 28 72 13 43 42-31 27-58-8-25 20-47-6-26 28-51-8-32-47-51-18-31-31z" />
      <path d="M722 286l48-18 52 23-9 36-61 13-35-25z" />
      <path d="M357 76l14-17 19 8-8 20z" />
      <path d="M533 277l21 10 7 27-16 18-18-22z" />
    </svg>
  );
}

function AboutPage() {
  const [activePerspective, setActivePerspective] = useState(0);
  const active = perspectives[activePerspective];

  useEffect(() => {
    document.title = "About — Sutop Mukherjee";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="about-page" id="top">
        <section className="about-page-hero section-wrap about-grid">
          <a className="case-back" href="/">
            ← Home
          </a>
          <span className="section-kicker">About</span>
          <h1>
            From Spaces
            <br />
            to Systems
          </h1>
          <p>
            A personal reflection on architecture, design, research, and the evolving relationship
            between humans and intelligent technology.
          </p>
        </section>

        <section className="narrative-section section-wrap about-grid">
          <div className="narrative-visual">
            <ImagePlaceholder
              landscape
              label="Architecture studies"
              detail="Drawings, models, studio work, or a personal sketchbook."
            />
          </div>
          <div className="narrative-content">
            <span className="editorial-index">01</span>
            <span className="section-kicker">Architecture → Design</span>
            <h2>Architecture changed the lens.</h2>
            <p>
              Architecture taught me to see design as a relationship between people, constraints,
              and context. It trained me to move between detail and the larger system—to understand
              how every part gains meaning from the whole it belongs to.
            </p>
            <p>
              Moving from buildings to products changed the medium, not the curiosity. Navigation
              became information architecture; physical cues became interactions. I remained
              interested in how people orient themselves, understand complexity, and decide with
              confidence.
            </p>
          </div>
        </section>

        <section className="research-editorial section-wrap about-grid">
          <div className="research-editorial-heading">
            <span className="editorial-index">02</span>
            <span className="section-kicker">Research & curiosity</span>
            <h2>Learning to stay with the question.</h2>
          </div>
          <div className="research-visual">
            <ImagePlaceholder
              landscape
              label="ServDes 2025"
              detail="A future presentation photograph will make the research tangible."
            />
          </div>
          <p className="research-intro">
            At IIT Hyderabad, research taught me to observe before explaining and to treat
            uncertainty as information. Service design widened that perspective, culminating in
            research presented at ServDes 2025 on the connections between digital services,
            institutions, and communities.
          </p>
          <small className="research-caption">Presenting research at ServDes 2025.</small>
        </section>

        <section className="human-ai-editorial">
          <div className="section-wrap about-grid">
            <div className="human-ai-content">
              <span className="editorial-index">03</span>
              <span className="section-kicker">Human + AI</span>
              <h2>
                Intelligence changes the relationship,
                <br />
                not the responsibility.
              </h2>
              <p>
                I’m interested in how intelligent systems influence human judgment, confidence, and
                agency. The essential question is not only what a system can produce, but how people
                understand it, decide when to trust it, and remain responsible for what happens
                next.
              </p>
            </div>
            <div
              className="relationship-diagram relationship-diagram--vertical"
              aria-label="People, decisions, and technology influence one another"
            >
              <div className="diagram-node">People</div>
              <div className="diagram-link">
                <span>judgment</span>
              </div>
              <div className="diagram-node">Decisions</div>
              <div className="diagram-link">
                <span>responsibility</span>
              </div>
              <div className="diagram-node">Technology</div>
            </div>
          </div>
        </section>

        <section className="exploring-editorial section-wrap about-grid">
          <div className="exploring-heading">
            <span className="editorial-index">04</span>
            <span className="section-kicker">Currently exploring</span>
            <h2>What I’m Exploring</h2>
          </div>
          <div className="exploration-list">
            {explorations.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="map-perspectives">
          <div className="section-wrap about-grid">
            <div className="map-perspectives-heading">
              <div>
                <span className="editorial-index">05</span>
                <span className="section-kicker">Perspectives</span>
                <h2>Working across disciplines and distance.</h2>
              </div>
              <p>
                Observations from people I’ve collaborated with across design, engineering, AI, and
                product leadership.
              </p>
            </div>

            <div className="collaboration-visual">
              <ImagePlaceholder
                landscape
                label="Collaboration in practice"
                detail="A working session, design review, or remote workshop."
              />
            </div>

            <div className="map-stage">
              <WorldMap />
              {perspectives.map((perspective, index) => (
                <button
                  className={`map-point ${perspective.pointClass}${activePerspective === index ? " map-point--active" : ""}`}
                  type="button"
                  key={perspective.name}
                  aria-label={`Show perspective from ${perspective.name}, ${perspective.location}`}
                  aria-pressed={activePerspective === index}
                  onMouseEnter={() => setActivePerspective(index)}
                  onFocus={() => setActivePerspective(index)}
                  onClick={() => setActivePerspective(index)}
                >
                  <span className="map-point-dot" />
                  <span className="map-point-line" />
                  <span className="map-point-label">{perspective.location}</span>
                </button>
              ))}
            </div>

            <div className="perspective-slot" aria-live="polite">
              <article className="active-perspective" key={active.name}>
                <div className="perspective-person">
                  <img
                    src={active.avatar}
                    alt=""
                    width="48"
                    height="48"
                    title={`Representative placeholder portrait — photo by ${active.avatarCredit} on Unsplash`}
                  />
                  <div>
                    <strong>{active.name}</strong>
                    <span>{active.role}</span>
                  </div>
                </div>
                <p>{active.text}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="about-final">
          <div className="section-wrap about-grid">
            <span className="section-kicker">The constant</span>
            <h2>I design systems, but I begin with people.</h2>
            <p>
              Across products, services, and intelligent systems, I care about how people understand
              complexity and shape what happens next.
            </p>
            <a href="/#work">
              View selected work <AboutArrow />
            </a>
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

export default AboutPage;
