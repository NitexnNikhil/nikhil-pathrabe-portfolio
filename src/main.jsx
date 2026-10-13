import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Download, Mail, MapPin, Sparkles, Terminal, BrainCircuit, Radio, Database } from 'lucide-react';
import './styles.css';

const projects = [
  {
    number: '01',
    title: 'AI Interview Agent',
    description: 'A voice-first interview experience that combines real-time conversation, speech intelligence, and LLM reasoning into one deployable system.',
    tags: ['LiveKit', 'LLMs', 'STT / TTS', 'GCP'],
    metric: '200K+',
    metricLabel: 'students reached',
    icon: Radio,
  },
  {
    number: '02',
    title: 'Job Update Crawler',
    description: 'A focused crawling pipeline that collects newly published roles and makes timely job updates easier to discover and act on.',
    tags: ['Python', 'PostgreSQL', 'Web crawling'],
    metric: 'LIVE',
    metricLabel: 'update pipeline',
    icon: Database,
  },
];

const skills = [
  { label: 'AI / GenAI', value: 'LLMs · RAG · AI Agents · Evaluation', icon: BrainCircuit },
  { label: 'Voice AI', value: 'LiveKit · STT · TTS', icon: Radio },
  { label: 'Cloud & DevOps', value: 'GCP · CI/CD · Deployment', icon: Terminal },
  { label: 'Data & Backend', value: 'Python · PostgreSQL · Crawling', icon: Database },
];

function App() {
  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="wordmark" href="#top" aria-label="Nikhil Pathrabe home">
          <span className="wordmark-mark">NP</span>
          <span>Nikhil Pathrabe</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="mailto:pathrabenikhil23@gmail.com">Let’s talk <ArrowUpRight size={16} /></a>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> AI Engineer · Generative AI · Voice Agents</p>
            <h1>Building AI systems<br /><em>that do the work.</em></h1>
            <p className="hero-lede">I design and ship practical AI products — from voice-powered interview agents to retrieval systems that stay useful in production.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-quiet" href="/assets/Nikhil-Pathrabe-Resume.pdf" download><Download size={16} /> Download resume</a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract AI systems visualization">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core"><Sparkles size={31} strokeWidth={1.5} /></div>
            <span className="art-label label-top">RAG / 90%</span>
            <span className="art-label label-right">VOICE →</span>
            <span className="art-label label-bottom">BUILD / SHIP / LEARN</span>
          </div>
        </section>

        <section className="signal-strip" aria-label="Career highlights">
          <div><strong>90%</strong><span>retrieval accuracy</span></div>
          <div><strong>200K+</strong><span>students supported</span></div>
          <div><strong>01</strong><span>robotics competition win</span></div>
          <div><strong>∞</strong><span>systems to improve</span></div>
        </section>

        <section className="work section-pad" id="work">
          <div className="section-heading"><p className="eyebrow">Selected work</p><h2>Useful over flashy.</h2><p>Systems built around a simple question: can this make someone’s next decision better?</p></div>
          <div className="project-list">
            {projects.map(({ number, title, description, tags, metric, metricLabel, icon: Icon }) => (
              <article className="project-card" key={title}>
                <div className="project-number">{number}</div>
                <div className="project-main"><div className="project-icon"><Icon size={22} /></div><h3>{title}</h3><p>{description}</p><div className="tag-row">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
                <div className="project-metric"><strong>{metric}</strong><span>{metricLabel}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="section-heading"><p className="eyebrow">The toolkit</p><h2>Curious by default.<br /><em>Precise by practice.</em></h2></div>
          <div className="about-grid">
            <div className="about-copy"><p>I’m an AI Engineer at Bootcoding, working across the layers that make intelligent products real: model behavior, retrieval quality, voice interfaces, cloud infrastructure, and repeatable delivery.</p><p>My favorite work lives at the intersection of a good idea and a reliable system — where the prototype gets out of the notebook and into people’s hands.</p><div className="location"><MapPin size={16} /> Based in India · Building for the world</div></div>
            <div className="skill-grid">{skills.map(({ label, value, icon: Icon }) => <div className="skill-item" key={label}><Icon size={19} /><div><strong>{label}</strong><span>{value}</span></div></div>)}</div>
          </div>
        </section>

        <section className="journey section-pad">
          <div className="journey-card"><div><p className="eyebrow">Currently</p><h2>AI Engineer <span>at Bootcoding</span></h2><p>September 2025 — Present</p></div><div className="journey-line"><span /><p>Building voice-enabled interview agents, improving RAG reliability, and supporting repeatable production releases.</p></div></div>
          <div className="education"><div><p className="eyebrow">Education</p><h3>B.Sc. · Mohota Science</h3><p>73.5% · Robotics & IoT competition winner</p></div><div className="edu-badge">01<span>ranked</span></div></div>
        </section>

        <section className="contact section-pad" id="contact"><div className="contact-inner"><p className="eyebrow">Have a problem worth solving?</p><h2>Let’s build the<br /><em>next useful thing.</em></h2><a className="contact-email" href="mailto:pathrabenikhil23@gmail.com">pathrabenikhil23@gmail.com <ArrowUpRight size={22} /></a><div className="contact-footer"><span>Open to thoughtful conversations, ambitious systems, and good coffee.</span><a href="mailto:pathrabenikhil23@gmail.com"><Mail size={16} /> Email me</a></div></div></section>
      </main>

      <footer className="footer"><span>© {new Date().getFullYear()} Nikhil Pathrabe</span><span>AI Engineer · GenAI · Voice AI</span></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
