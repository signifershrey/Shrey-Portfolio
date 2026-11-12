import { useState } from 'react'
import projects from './components/projects.json'
import './index.css'

const skills = [
  { group: 'Data engineering', items: ['Python', 'PySpark', 'Apache Spark', 'SQL'] },
  { group: 'Platforms & streaming', items: ['Azure Databricks', 'Apache Kafka', 'AWS'] },
  { group: 'AI & development', items: ['Generative AI', 'LangChain', 'React', 'Java'] },
]

const experience = [
  {
    role: 'Software Engineer 2 · Data Engineer',
    company: 'HashedIn by Deloitte',
    period: 'Dec 2025 — Present',
    detail: 'Building and maintaining data infrastructure, ETL pipelines, and analytics foundations.',
    current: true,
  },
  {
    role: 'Software Engineer 1',
    company: 'HashedIn by Deloitte',
    period: 'Nov 2023 — Dec 2025',
    detail: 'Worked across software engineering and data engineering as part of the HashedIn team.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'HashedIn by Deloitte',
    period: 'May — Aug 2023',
    detail: 'Explored Spark, Kafka, Docker, Spring Boot, and generative AI; developed and presented an AI-assisted investing and learning platform.',
  },
  {
    role: 'Frontend Web Developer',
    company: 'Digitea',
    period: 'Oct 2022 — Jan 2023',
    detail: 'Turned Figma designs into responsive client portfolio experiences with React and Next.js.',
  },
  {
    role: 'Web Developer Intern',
    company: 'Koders',
    period: 'Apr — Jul 2022',
    detail: 'Contributed to a system designed to make client onboarding smoother.',
  },
]

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

function ProjectVisual({ id }) {
  if (id === 'cryptogeek') {
    return (
      <div className="visual visual-chart" aria-hidden="true">
        <div className="visual-label"><span>MARKET SNAPSHOT</span><strong>+12.8%</strong></div>
        <svg viewBox="0 0 480 150" preserveAspectRatio="none">
          <path className="chart-fill" d="M0 125 C38 117 45 93 82 101 S130 113 165 82 S223 95 255 61 S318 78 346 43 S404 61 432 25 S463 36 480 8 V150 H0Z" />
          <path className="chart-line" d="M0 125 C38 117 45 93 82 101 S130 113 165 82 S223 95 255 61 S318 78 346 43 S404 61 432 25 S463 36 480 8" />
        </svg>
        <div className="visual-ticks"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span></div>
      </div>
    )
  }

  if (id === 'nameit') {
    return (
      <div className="visual visual-names" aria-hidden="true">
        <span className="name-chip">goodideas<span>.com</span><b>↗</b></span>
        <span className="name-chip selected">makeit<span>.io</span><b>↗</b></span>
        <span className="name-chip">brightwork<span>.co</span><b>↗</b></span>
      </div>
    )
  }

  if (id === 'whiteboard') {
    return (
      <div className="visual visual-board" aria-hidden="true">
        <span className="board-tool">✳</span><span className="board-tool">╱</span><span className="board-tool">◯</span>
        <svg viewBox="0 0 440 160" preserveAspectRatio="none">
          <path d="M17 117 C72 56 93 140 151 85 S226 52 255 108 S325 130 359 54 S407 46 425 76" />
          <path d="M104 21 L127 44 L106 67 M300 28 C325 13 348 33 337 56 S299 69 289 51" />
        </svg>
        <span className="board-caption">an idea, in progress</span>
      </div>
    )
  }

  if (id === 'datapilot-ai') {
    return (
      <div className="visual visual-datapilot" aria-hidden="true">
        <div className="datapilot-topline"><span>DATAPILOT AI</span><span>ONE ENTRY POINT · TWO WORKFLOWS</span></div>
        <div className="datapilot-query"><span className="query-spark">✳</span><span>Ask about your data or move it.</span><span className="query-arrow">↗</span></div>
        <div className="datapilot-branches">
          <div className="datapilot-branch sql-branch">
            <span className="branch-label">01 / SQL ANALYST</span>
            <b>Question → insight</b>
            <span>Schema → read-only check → result</span>
          </div>
          <div className="datapilot-branch etl-branch">
            <span className="branch-label">02 / ETL ANALYST</span>
            <b>Source → clean output</b>
            <span>API / CSV → transform → file</span>
          </div>
        </div>
        <div className="datapilot-footer"><span>LANGGRAPH</span><span>GEMINI</span><span>PYTHON</span><span>POSTGRESQL</span></div>
      </div>
    )
  }

  return (
    <div className="visual visual-memes" aria-hidden="true">
      <span className="meme-tile meme-one">TODAY<br />WE SHIP</span>
      <span className="meme-tile meme-two">IT WORKS<br />ON MY<br />MACHINE</span>
      <span className="meme-tile meme-three">ONE MORE<br />COMMIT</span>
    </div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <article className={`project-card project-card-${index + 1}`}>
      <ProjectVisual id={project.id} />
      <div className="project-copy">
        <div className="project-heading">
          <div>
            <p className="eyebrow">0{index + 1} / {project.category}</p>
            <h3>{project.title}</h3>
          </div>
          <span className="project-year">CASE STUDY</span>
        </div>
        <div className="case-grid">
          <div><h4>The challenge</h4><p>{project.problem}</p></div>
          <div><h4>My role</h4><p>{project.role}</p></div>
          <div><h4>How it works</h4><p>{project.process}</p></div>
          <div><h4>Outcome</h4><p>{project.outcome}</p></div>
        </div>
        <ul className="tag-list" aria-label={`${project.title} technology stack`}>
          {project.stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="project-links">
          {project.demo
            ? <a href={project.demo} target="_blank" rel="noreferrer">Live project <Arrow diagonal /></a>
            : <span className="project-unavailable">{project.availability || 'Live demo not currently available'}</span>}
          {project.code
            ? <a href={project.code} target="_blank" rel="noreferrer">Repository <Arrow diagonal /></a>
            : <span className="project-unavailable">Source code not public</span>}
        </div>
      </div>
    </article>
  )
}

function App() {
  const [theme, setTheme] = useState(() => (
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  ))
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell" data-theme={theme}>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Shrey Maurya, home" onClick={closeMenu}>
          <span className="wordmark-mark">S<span>.</span></span>
          <span>SHREY MAURYA<small>DATA ENGINEER · INDIA</small></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>
        <nav id="primary-navigation" className={`primary-navigation${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#kind-words" onClick={closeMenu}>Kind words</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          <span aria-hidden="true">{theme === 'light' ? '◐' : '☼'}</span>
          <span className="theme-label">{theme === 'light' ? 'Dark' : 'Light'}</span>
        </button>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker"><span className="status-dot" /> DATA ENGINEERING · AI ENGINEERING</p>
            <h1 id="hero-title">Data foundations<br />for useful <em>AI.</em></h1>
            <p className="hero-intro">I’m Shrey, an SDE-2 and Data Engineer at HashedIn by Deloitte. I build data foundations and thoughtful AI experiences that turn complex information into something people can use.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <Arrow /></a>
              <a className="text-link" href="#contact">Let’s talk <Arrow diagonal /></a>
            </div>
          </div>
          <div className="hero-art data-hero-art" aria-label="A visual overview of a data and AI workflow">
            <div className="data-visual">
              <div className="data-visual-label"><span>ENGINEERED FOR WHAT’S NEXT</span><span>01 — 03</span></div>
              <div className="data-pipeline">
                <div className="pipeline-node"><span className="pipeline-index">01</span><span><b>INGEST</b><small>Python · Kafka</small></span><i>↓</i></div>
                <div className="pipeline-node"><span className="pipeline-index">02</span><span><b>TRANSFORM</b><small>PySpark · Databricks</small></span><i>↓</i></div>
                <div className="pipeline-node pipeline-node-output"><span className="pipeline-index">03</span><span><b>PUT TO WORK</b><small>Analytics · Applied AI</small></span><span className="pipeline-spark">✳</span></div>
              </div>
              <div className="data-chips"><span>AWS</span><span>AZURE</span><span>GENERATIVE AI</span></div>
            </div>
          </div>
          <a className="scroll-cue" href="#work"><span /> SCROLL TO EXPLORE</a>
          <div className="hero-side-note">SDE-2 <span>—</span> DATA ENGINEER <span>—</span> OPEN TO OPPORTUNITIES</div>
        </section>

        <section className="work-section section-wrap section-pad" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div><p className="eyebrow">DATA, SOFTWARE & APPLIED AI</p><h2 id="work-title">Selected work<span className="accent">.</span></h2></div>
            <p className="section-aside">From an AI-powered investing concept<br />to independent projects made with care.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
          </div>
        </section>

        <section className="experience-section section-wrap section-pad" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <div><p className="eyebrow">WHERE I’VE GROWN</p><h2 id="experience-title">Experience<span className="accent">.</span></h2></div>
            <p className="section-aside">Engineering in teams, learning<br />through every kind of problem.</p>
          </div>
          <div className="experience-layout">
            <ol className="experience-list">
              {experience.map((item) => (
                <li className={`experience-item${item.current ? ' is-current' : ''}`} key={`${item.company}-${item.role}`}>
                  <span className="experience-marker" aria-hidden="true" />
                  <div className="experience-heading">
                    <div><h3>{item.role}</h3><p>{item.company}</p></div>
                    <span className="experience-period">{item.period}</span>
                  </div>
                  <p className="experience-detail">{item.detail}</p>
                </li>
              ))}
            </ol>
            <aside className="credentials-panel">
              <div>
                <p className="eyebrow">EDUCATION</p>
                <h3>B.Tech, Computer Software Engineering</h3>
                <p>Jaypee University of Engineering and Technology<br />2019 — 2023</p>
              </div>
              <div className="credential-divider" />
              <div>
                <p className="eyebrow">CERTIFICATION</p>
                <h3>AWS Certified AI Practitioner</h3>
                <p>AI and cloud fundamentals</p>
              </div>
              <div className="credential-divider" />
              <div>
                <p className="eyebrow">LANGUAGES</p>
                <p>English · Hindi</p>
              </div>
              <a className="text-link" href="https://www.linkedin.com/in/shreymaurya/" target="_blank" rel="noreferrer">Full experience on LinkedIn <Arrow diagonal /></a>
            </aside>
          </div>
        </section>

        <section className="about-section section-wrap section-pad" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <div><p className="eyebrow">A LITTLE ABOUT ME</p><h2 id="about-title">Good data starts<br />with <em>good questions.</em></h2></div>
            <div className="about-copy">
              <p>I’m an SDE-2 and Data Engineer at HashedIn by Deloitte, with around three years of experience building data infrastructure and ETL pipelines. I work with Python, PySpark, SQL, AWS, and big-data tools to make information dependable and ready for decisions.</p>
              <p>I’m also drawn to applied AI: the opportunity to turn a capable model into a clear, genuinely useful product. Outside my day-to-day work, I’ve led developer communities, taught web development, and supported peers through project reviews.</p>
              <a className="text-link" href="https://www.linkedin.com/in/shreymaurya/" target="_blank" rel="noreferrer">A little more about me <Arrow diagonal /></a>
            </div>
          </div>
          <div className="skills-panel" id="skills">
            <div className="skills-intro"><p className="eyebrow">MY TOOLKIT</p><h3>Data first.<br />AI in practice.</h3></div>
            {skills.map((group) => (
              <div className="skill-group" key={group.group}>
                <h4>{group.group}</h4>
                <ul>{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonial-section section-wrap section-pad" id="kind-words" aria-labelledby="testimonial-title">
          <div className="testimonial-content">
            <p className="eyebrow">KIND WORDS</p>
            <h2 id="testimonial-title">The best work<br />is <em>collaborative.</em></h2>
            <p className="testimonial-note">I’m gathering notes from people I’ve built and learned alongside. If we’ve worked together, I’d love to hear what the experience was like.</p>
            <a className="text-link" href="mailto:shreymaurya2000@gmail.com?subject=A%20note%20about%20working%20together">Share a few words <Arrow diagonal /></a>
          </div>
          <div className="testimonial-aside" aria-label="Testimonial status">
            <span className="quote-mark" aria-hidden="true">✳</span>
            <p>Stories from collaborators,<br />coming soon.</p>
            <span className="eyebrow">MORE STORIES, SOON</span>
          </div>
        </section>

        <section className="contact-section section-wrap section-pad" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow"><span className="status-dot" /> HAVE A GOOD ONE IN MIND?</p>
          <h2 id="contact-title">Let’s make<br />something <em>useful.</em></h2>
          <div className="contact-bottom">
            <a className="button button-primary" href="mailto:shreymaurya2000@gmail.com">Say hello <Arrow diagonal /></a>
            <div className="contact-details">
              <a href="mailto:shreymaurya2000@gmail.com">shreymaurya2000@gmail.com</a>
              <a href="https://www.linkedin.com/in/shreymaurya/" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow diagonal /></a>
              <span>Lucknow, India · Open to opportunities</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark footer-mark" href="#home"><span className="wordmark-mark">S<span>.</span></span>        <span>SHREY MAURYA<small>DATA · ENGINEERING · AI</small></span></a>
        <span>© {new Date().getFullYear()} Shrey Maurya</span>
        <div className="footer-links">
          <a href="https://github.com/signifershrey" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a>
          <a href="https://www.linkedin.com/in/shreymaurya/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
