import { useEffect } from "react";
import { Navigate, useParams } from "react-router";
import SiteHeader from "./SiteHeader";

type Decision = {
  title: string;
  why: string;
  tradeoff: string;
  outcome: string;
};

type CaseStudy = {
  name: string;
  description: string;
  organization: string;
  discipline: string;
  domain: string;
  timeframe: string;
  role: string;
  why: string;
  complexity: Array<{ title: string; detail: string }>;
  decisions: Decision[];
  ambiguity: string[];
  outcomes: string[];
  reflection: string;
  visualNodes: string[];
};

const caseStudies: Record<string, CaseStudy> = {
  propel: {
    name: "Propel",
    description: "Designing enterprise collaboration experiences for AI-powered prototyping.",
    organization: "IBM Product Excellence Office",
    discipline: "Product Design",
    domain: "Enterprise Software",
    timeframe: "2025 – Present",
    role: "Product Designer",
    why: "Early product ideas become more valuable when teams can share them before they are polished. But in an enterprise, unfinished work carries context, ownership, and access risks. Propel explored how teams could move prototypes across organizational boundaries without making collaboration feel unsafe or administratively heavy.",
    complexity: [
      {
        title: "Collaboration",
        detail: "Creators, reviewers, and sponsors entered with different expectations.",
      },
      {
        title: "Governance",
        detail: "Access rules had to remain legible without slowing the work.",
      },
      {
        title: "Decision making",
        detail: "Teams needed to know what was ready to share—and with whom.",
      },
      {
        title: "Ambiguity",
        detail: "Prototype states and edge cases changed faster than policy could.",
      },
    ],
    decisions: [
      {
        title: "Separate internal and external sharing",
        why: "Each audience carried different expectations around visibility, responsibility, and security.",
        tradeoff:
          "One universal flow was simpler to build, but concealed meaningful differences in risk.",
        outcome: "Teams could predict what recipients would see before committing to a share.",
      },
      {
        title: "Make access status visible before action",
        why: "Permission uncertainty was most costly at the moment people were ready to collaborate.",
        tradeoff:
          "More context added density, but hiding it deferred confusion until after sharing.",
        outcome: "Reviewers could resolve access issues earlier and share with greater confidence.",
      },
      {
        title: "Treat context as part of the prototype",
        why: "An unfinished artifact without intent or ownership was easy to misinterpret.",
        tradeoff: "Requiring extensive documentation would have discouraged early sharing.",
        outcome:
          "A lightweight context layer made early work understandable without adding process overhead.",
      },
    ],
    ambiguity: [
      "The hardest cases sat between policy and practice: temporary collaborators, changing ownership, and work that was neither private nor ready for broad circulation.",
      "The model evolved by distinguishing reversible decisions from high-consequence ones. Fast paths remained fast; sensitive actions received clearer confirmation and context.",
    ],
    outcomes: [
      "Reduced uncertainty around who could access unfinished work.",
      "Created a shared language for prototype status and responsibility.",
      "Improved confidence in collaboration across organizational boundaries.",
    ],
    reflection:
      "The most important decisions were not interface decisions. They were decisions about trust, responsibility, governance, and how unfinished ideas move through a complex organization.",
    visualNodes: ["Create", "Set context", "Define access", "Collaborate"],
  },
  "aha-agent": {
    name: "AHA Agent",
    description:
      "Designing AI assistance that strengthens product judgment rather than replacing it.",
    organization: "Enterprise Product Strategy",
    discipline: "AI Product Design",
    domain: "Decision Support",
    timeframe: "Recent",
    role: "Product Designer",
    why: "Product teams rarely lack information; they lack time to connect evidence, assumptions, and competing priorities. AHA Agent investigated how AI could help teams reason across fragmented inputs while keeping recommendations transparent, contestable, and firmly under human control.",
    complexity: [
      { title: "Trust", detail: "Useful assistance needed to show where its reasoning came from." },
      { title: "Agency", detail: "Teams had to remain responsible for consequential decisions." },
      {
        title: "Evidence",
        detail: "Inputs varied in quality, recency, and organizational context.",
      },
      {
        title: "Adaptation",
        detail: "The right level of help changed across tasks and expertise.",
      },
    ],
    decisions: [
      {
        title: "Frame the agent as a thinking partner",
        why: "Product decisions require interpretation, not merely generated answers.",
        tradeoff: "Direct recommendations felt faster, but risked encouraging passive acceptance.",
        outcome: "The experience prompted comparison, questioning, and active judgment.",
      },
      {
        title: "Connect every synthesis to evidence",
        why: "Teams needed to evaluate the basis of an AI-generated interpretation.",
        tradeoff: "Visible evidence made responses denser, but materially improved accountability.",
        outcome: "Users could inspect, challenge, and refine the agent’s conclusions.",
      },
      {
        title: "Design explicit moments of human commitment",
        why: "Generating options and making a decision are fundamentally different acts.",
        tradeoff: "Additional confirmation introduced friction at a deliberate point in the flow.",
        outcome: "Responsibility remained clear while low-risk exploration stayed fluid.",
      },
    ],
    ambiguity: [
      "The central unknown was not whether the agent could produce a plausible response, but when that response deserved confidence. Expertise, evidence quality, and consequence all changed the answer.",
      "The design shifted from a single confidence signal toward layered cues: source visibility, uncertainty language, and clear opportunities for human correction.",
    ],
    outcomes: [
      "Established a model for assistance grounded in evidence and oversight.",
      "Made uncertainty visible without making the experience feel unusable.",
      "Clarified the boundary between AI exploration and human commitment.",
    ],
    reflection:
      "Trust did not come from making the agent appear certain. It came from making the system understandable enough to question—and useful enough to improve human judgment.",
    visualNodes: ["Evidence", "Synthesize", "Challenge", "Decide"],
  },
  "service-design-research": {
    name: "Service Design Research",
    description:
      "Studying how digital services connect institutions, systems, and real communities.",
    organization: "ServDes 2025",
    discipline: "Published Research",
    domain: "Service Design",
    timeframe: "2025",
    role: "Researcher & Designer",
    why: "Digital services often look coherent at the interface while remaining fragmented in practice. This research examined the gaps between designed touchpoints and the community relationships, institutional constraints, and informal work that actually make services function.",
    complexity: [
      {
        title: "Multiple realities",
        detail: "Institutions and communities described the same service differently.",
      },
      {
        title: "Invisible work",
        detail: "Informal coordination carried much of the service experience.",
      },
      {
        title: "System boundaries",
        detail: "The service extended well beyond its digital touchpoints.",
      },
      {
        title: "Research ethics",
        detail: "Interpretation required care around voice, power, and representation.",
      },
    ],
    decisions: [
      {
        title: "Study relationships, not isolated touchpoints",
        why: "A screen-level view could not explain why the service succeeded or broke down.",
        tradeoff: "A wider boundary increased research complexity but revealed the actual system.",
        outcome: "The inquiry surfaced dependencies that conventional journey maps had obscured.",
      },
      {
        title: "Treat community knowledge as infrastructure",
        why: "Participants were not merely users; they actively sustained and repaired the service.",
        tradeoff: "This challenged institution-centered definitions of expertise and ownership.",
        outcome:
          "Recommendations accounted for the people and practices holding the system together.",
      },
      {
        title: "Use patterns without flattening difference",
        why: "Synthesis needed to create leverage without erasing local context.",
        tradeoff:
          "Fewer universal claims produced a more nuanced, less easily packaged conclusion.",
        outcome: "The resulting framework remained useful while preserving meaningful variation.",
      },
    ],
    ambiguity: [
      "The research repeatedly surfaced contradictions: the same workaround could signal resilience for one participant and institutional failure for another.",
      "Rather than resolve those tensions prematurely, the work used them to identify where service ownership, policy, and lived experience were misaligned.",
    ],
    outcomes: [
      "Produced a published perspective on services as social and institutional systems.",
      "Made invisible coordination and community knowledge more legible.",
      "Created a stronger basis for designing across digital and real-world boundaries.",
    ],
    reflection:
      "The work reinforced that services are not delivered by interfaces alone. They are continuously negotiated by people, institutions, policies, and the relationships between them.",
    visualNodes: ["Institution", "Digital service", "Community", "Lived experience"],
  },
};

function CaseArrow() {
  return (
    <svg aria-hidden="true" className="arrow" viewBox="0 0 20 20" fill="none">
      <path d="M3 10h13M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CaseStudyPage() {
  const { projectSlug = "" } = useParams();
  const project = caseStudies[projectSlug];

  useEffect(() => {
    if (!project) return;
    document.title = `${project.name} — Sutop Mukherjee`;
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) return <Navigate to="/not-found" replace />;

  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="case-study" id="top">
        <section className="case-hero section-wrap">
          <a className="case-back" href="/#work">
            ← Selected work
          </a>
          <span className="section-kicker">Case study · 4 min read</span>
          <h1>{project.name}</h1>
          <p className="case-dek">{project.description}</p>

          <div className="case-meta">
            <div>
              <span>Context</span>
              <p>{project.organization}</p>
            </div>
            <div>
              <span>Discipline</span>
              <p>{project.discipline}</p>
            </div>
            <div>
              <span>Domain</span>
              <p>{project.domain}</p>
            </div>
            <div>
              <span>Timeline</span>
              <p>{project.timeframe}</p>
            </div>
            <div>
              <span>Role</span>
              <p>{project.role}</p>
            </div>
          </div>

          <div className="case-visual" aria-label={`${project.name} system flow`}>
            <div className="case-visual-heading">
              <span>System view</span>
              <span>{project.domain}</span>
            </div>
            <div className="case-flow">
              {project.visualNodes.map((node, index) => (
                <div className="case-node-wrap" key={node}>
                  <div className="case-node">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{node}</strong>
                  </div>
                  {index < project.visualNodes.length - 1 && (
                    <span className="case-connector">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section section-wrap case-intro">
          <span className="case-section-number">01</span>
          <div>
            <span className="section-kicker">Why this problem matters</span>
            <h2>The challenge behind the interface.</h2>
            <p>{project.why}</p>
          </div>
        </section>

        <section className="case-section case-complexity-section">
          <div className="section-wrap">
            <div className="case-section-heading">
              <span className="case-section-number">02</span>
              <div>
                <span className="section-kicker">What made it complex?</span>
                <h2>Several systems, one experience.</h2>
              </div>
            </div>
            <div className="complexity-grid">
              {project.complexity.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-decisions">
          <div className="section-wrap">
            <div className="case-section-heading">
              <span className="case-section-number">03</span>
              <div>
                <span className="section-kicker">Key decisions</span>
                <h2>Judgment shaped the system.</h2>
                <p>Three decisions that materially changed the direction of the work.</p>
              </div>
            </div>
            <div className="decision-list">
              {project.decisions.map((decision, index) => (
                <article className="decision" key={decision.title}>
                  <span className="decision-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{decision.title}</h3>
                  <dl>
                    <div>
                      <dt>Why</dt>
                      <dd>{decision.why}</dd>
                    </div>
                    <div>
                      <dt>Tradeoff</dt>
                      <dd>{decision.tradeoff}</dd>
                    </div>
                    <div>
                      <dt>Outcome</dt>
                      <dd>{decision.outcome}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section section-wrap case-ambiguity">
          <span className="case-section-number">04</span>
          <div>
            <span className="section-kicker">Navigating ambiguity</span>
            <h2>Designing before every answer was known.</h2>
            <div className="ambiguity-copy">
              {project.ambiguity.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section case-outcome-section">
          <div className="section-wrap case-outcome-layout">
            <div>
              <span className="case-section-number">05</span>
              <span className="section-kicker">Outcome</span>
              <h2>What changed.</h2>
            </div>
            <ol>
              {project.outcomes.map((outcome, index) => (
                <li key={outcome}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{outcome}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="case-reflection">
          <div className="section-wrap case-reflection-inner">
            <span className="case-section-number">06</span>
            <div>
              <span className="section-kicker">Reflection</span>
              <blockquote>{project.reflection}</blockquote>
              <a href="/#work">
                Explore other work <CaseArrow />
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

export default CaseStudyPage;
