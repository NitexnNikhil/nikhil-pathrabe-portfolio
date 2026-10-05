import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Start" },
  { id: "about", label: "Profile" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Builds" },
  { id: "contact", label: "Contact" },
];

const experience = [
  "Designed and developed an AI Interview Agent using agent-based architecture, LLMs, STT, TTS, and LiveKit.",
  "Built and integrated production deployment workflows with CI/CD pipelines to support reliable releases.",
  "Developed a RAG-based system achieving approximately 90% retrieval accuracy.",
  "Worked on production systems with approximately 90% system uptime and successful client adoption.",
  "Contributed to deployment and delivery of an AI project serving approximately 2 lakh students.",
];

const projects = [
  {
    number: "01",
    title: "AI Interview Agent",
    description:
      "An AI-powered interview agent capable of conducting interactive interview workflows with real-time communication, language model capabilities, and speech interfaces.",
    tech: ["LiveKit", "LLM", "GPT-5.4 mini", "STT", "TTS", "GCP"],
    proof: "deployed for ≈2 lakh students",
  },
  {
    number: "02",
    title: "Job Data Crawler",
    description:
      "A crawler that collects the latest uploaded job postings, stores and manages the data in PostgreSQL, and enables timely notification of new job updates.",
    tech: ["PyWrite", "PostgreSQL", "Data crawling"],
    proof: "fresh listings, faster signals",
  },
];

const skillGroups = [
  { label: "AI / LLM", items: ["LLM Integration", "AI Agents", "RAG", "Retrieval Systems"] },
  { label: "Speech / Realtime", items: ["STT", "TTS", "LiveKit"] },
  { label: "Backend / Data", items: ["Python", "PostgreSQL", "Data Crawling"] },
  { label: "Cloud / DevOps", items: ["GCP", "CI/CD", "Deployment Pipelines"] },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h9M8 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M9 3h4v4M13 3 7 9M12 9v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0.1, 0.3, 0.6] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navigate = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="site-shell">
      <div className="grain" aria-hidden="true" />
      <aside className="index-rail" aria-label="Page index">
        <a className="wordmark" href="#home" onClick={(event) => { event.preventDefault(); navigate("home"); }}>
          <span className="wordmark-mark">NP<span>/</span></span>
          <span className="wordmark-name">Nikhil<br />Pathrabe</span>
        </a>
        <div className="rail-nav">
          {navItems.map((item, index) => (
            <button
              type="button"
              key={item.id}
              className={activeSection === item.id ? "rail-link is-active" : "rail-link"}
              onClick={() => navigate(item.id)}
            >
              <span className="rail-number">0{index + 1}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
        <div className="rail-footer"><span className="status-dot" /> available for meaningful builds</div>
      </aside>

      <header className="mobile-header">
        <a className="mobile-wordmark" href="#home" onClick={(event) => { event.preventDefault(); navigate("home"); }}>
          NP<span>/</span>
        </a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen((open) => !open)}>
          <span>{menuOpen ? "Close" : "Index"}</span><i aria-hidden="true">{menuOpen ? "×" : "＋"}</i>
        </button>
        {menuOpen && (
          <nav className="mobile-nav" id="mobile-nav" aria-label="Mobile page index">
            {navItems.map((item, index) => (
              <button type="button" key={item.id} onClick={() => navigate(item.id)}>
                <span>0{index + 1}</span>{item.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main className="content">
        <section className="hero section" id="home">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="status-dot" /> AI ENGINEER / SOFTWARE DEVELOPER</p>
            <h1>I build AI systems<br /><em>that hold up</em><br />in the real world.</h1>
            <p className="hero-intro">From interview agents to retrieval systems, I turn ambitious ideas into dependable, deployable products.</p>
            <div className="hero-actions">
              <button className="button button-primary" type="button" onClick={() => navigate("projects")}>Explore the work <ArrowIcon /></button>
              <a className="text-link" href="/assets/nikhil-pathrabe-resume.pdf" download="Nikhil-Pathrabe-Resume.pdf">Download resume <ArrowIcon /></a>
            </div>
          </div>
          <div className="hero-art reveal reveal-delay" aria-label="Nikhil Pathrabe monogram mark">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="crosshair crosshair-top" />
            <div className="crosshair crosshair-bottom" />
            <div className="hero-monogram"><span>NP</span><small>/ 01</small></div>
            <div className="art-label art-label-top">SYSTEMS / HUMAN<br />SCALE / PRACTICAL</div>
            <div className="art-label art-label-bottom">19° 06′ 25″ N<br />AI / DELIVERY</div>
          </div>
          <div className="hero-bottomline"><span>Based in India</span><span>Scroll to inspect <span className="scroll-arrow">↓</span></span><span>© 2026</span></div>
        </section>

        <section className="about section section-lined" id="about">
          <div className="section-heading"><span className="section-index">01 /</span><h2>Profile <span>signal</span></h2></div>
          <div className="about-grid">
            <div className="about-lead"><p className="large-copy">AI Engineer with 1 year of industry experience building <strong>AI-powered agents</strong>, RAG-based systems, and production deployment workflows.</p><p className="body-copy">Experienced in agent development, LLM integration, speech technologies, CI/CD, cloud deployment, and data crawling. The goal is straightforward: make complex systems useful, reliable, and ready for the people who depend on them.</p></div>
            <div className="metric-stack">
              <div className="metric"><strong>≈2L</strong><span>students reached through deployed AI systems</span></div>
              <div className="metric"><strong>≈90%</strong><span>retrieval accuracy on a RAG-based system</span></div>
              <div className="metric"><strong>≈90%</strong><span>system uptime across production work</span></div>
            </div>
          </div>
        </section>

        <section className="work section section-lined" id="work">
          <div className="section-heading"><span className="section-index">02 /</span><h2>Experience <span>in motion</span></h2></div>
          <div className="experience-card">
            <div className="experience-meta"><span>SEP 2025 — PRESENT</span><span className="company-mark">BOOTCODING<br />PVT. LTD.</span></div>
            <div className="experience-main"><h3>AI Engineer</h3><p>Building and shipping AI products that connect language, speech, retrieval, and deployment.</p><ul>{experience.map((item) => <li key={item}><span>↳</span>{item}</li>)}</ul></div>
          </div>
        </section>

        <section className="projects section section-lined" id="projects">
          <div className="section-heading"><span className="section-index">03 /</span><h2>Selected <span>builds</span></h2></div>
          <div className="project-list">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-topline"><span>{project.number} / PROJECT</span><span className="project-proof">{project.proof}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tech.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div><div className="project-line" /></article>)}</div>
        </section>

        <section className="skills section section-lined" id="skills">
          <div className="section-heading"><span className="section-index">04 /</span><h2>Technical <span>stack</span></h2></div>
          <div className="skills-table">{skillGroups.map((group) => <div className="skill-row" key={group.label}><span className="skill-label">{group.label}</span><div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div>
        </section>

        <section className="education section section-lined" id="education">
          <div className="section-heading"><span className="section-index">05 /</span><h2>Foundation <span>& proof</span></h2></div>
          <div className="foundation-grid"><div className="foundation-block"><span className="mini-label">EDUCATION</span><h3>B.Sc.</h3><p>Mohota Science College</p><span className="score">73.5%</span></div><div className="foundation-block achievement"><span className="mini-label">ACHIEVEMENT</span><div className="trophy-mark">1<span>st</span></div><p>Intercollegiate competition for a Robotics and IoT-based robot project.</p></div></div>
        </section>

        <section className="contact section section-lined" id="contact">
          <div className="contact-grid"><div><span className="section-index">06 / CONTACT</span><h2>Let’s make<br /><em>something useful.</em></h2><p>Have a problem worth solving? I’m interested in the systems, products, and ideas that make a real difference.</p></div><div className="contact-links"><a href="mailto:pathrabenikhil23@gmail.com"><span className="link-type">EMAIL</span><span>pathrabenikhil23@gmail.com</span><ExternalIcon /></a><a href="https://www.linkedin.com/in/nikhil-pathrabe" target="_blank" rel="noreferrer"><span className="link-type">LINKEDIN</span><span>nikhil-pathrabe</span><ExternalIcon /></a><a href="https://github.com/NitexnNikhil" target="_blank" rel="noreferrer"><span className="link-type">GITHUB</span><span>NitexnNikhil</span><ExternalIcon /></a></div></div>
          <footer className="site-footer"><span>NP/ — AI Engineer & Software Developer</span><span>Built with clarity, deployed with intent.</span></footer>
        </section>
      </main>
    </div>
  );
}

export default App;
