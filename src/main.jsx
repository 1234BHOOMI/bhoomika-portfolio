import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
  GraduationCap,
  Sparkles,
  Terminal,
  Database,
  BrainCircuit,
  ShieldCheck,
  ChevronRight,
  FileText,
  Sun,
  Moon
} from "lucide-react";

import "./style.css";

const A = "/certificates/";

const certificates = [
  ["ServiceNow Certified Application Developer", "ServiceNow", "Professional certification · Feb 2026", "ServiceNow-CAD.pdf"],
  ["Certified Application Developer — Maintenance Exam (Delta) 2026", "ServiceNow", "Certification maintenance · Feb 2026", "ServiceNow-CAD-Maintenance-2026.pdf"],
  ["Certified System Administrator", "ServiceNow", "Professional certification · Oct 2025", "ServiceNow-CSA.pdf"],
  ["Cyber Job Simulation", "Deloitte / Forage", "Job simulation · Jul 2025", "Deloitte-Cyber-Simulation.pdf"],
  ["Data Analytics Job Simulation", "Deloitte / Forage", "Job simulation · Jul 2025", "Deloitte-Data-Analytics-Simulation.pdf"],
  ["HTML Course For Beginners", "ScholarHat", "Course completion · Mar 2026", "HTML-Beginners.pdf"],
  ["JavaScript Programming Course For Beginners", "ScholarHat", "Course completion · Mar 2026", "JavaScript-Beginners.pdf"],
  ["MongoDB Foundations Course For Beginners", "ScholarHat", "Course completion · Mar 2026", "MongoDB-Foundations.pdf"],
  ["Node.js Foundations Course", "ScholarHat", "Course completion · Mar 2026", "NodeJS-Foundations.pdf"],
  ["ReactJS Foundations Course", "ScholarHat", "Course completion · Mar 2026", "ReactJS-Foundations.pdf"],
  ["SQL Server Foundations Course", "ScholarHat", "Course completion · Mar 2026", "SQL-Server-Foundations.pdf"],
  ["Web Development Internship", "WAYEVA Innovations", "Internship · Mar–May 2025", "WAYEVA-Internship.pdf"],
  ["Industrial Training", "WAYEVA Innovations", "Training · Mar–May 2025", "WAYEVA-Industrial-Training.pdf"],
  ["Letter of Recommendation", "WAYEVA Innovations", "Recommendation · May 2025", "WAYEVA-Recommendation.pdf"],
  ["Front-End Development Internship", "Cognifyz Technologies", "Internship · Feb–Mar 2026", "Cognifyz-Frontend-Internship.pdf"],
];

const skills = [
  { name: "Programming", items: ["Java", "Python (Basics)", "C", "Object-Oriented Programming"] },
  { name: "Web Development", items: ["HTML", "CSS", "JavaScript", "ReactJS"] },
  { name: "Databases", items: ["MySQL", "MongoDB", "Oracle Database", "SQL Server"] },
  { name: "Platforms & Tools", items: ["ServiceNow", "Git", "VS Code", "ServiceNow Studio"] },
  { name: "Core CS", items: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks"] },
  { name: "AI & Analytics", items: ["Machine Learning", "Natural Language Processing", "Text Analysis", "Model Evaluation"] },
];

const projects = [
  {
    n: "01",
    title: "Recipe Finder",
    type: "Web Application",
    desc: "A recipe discovery website designed to help users browse featured food and drink ideas and explore recipe links.",
    tags: ["HTML", "CSS", "JavaScript", "Web Development"],
    icon: Code2,
    link: "https://1234bhoomi.github.io/reciepefinder/",
    linkLabel: "Live website"
  },
  {
    n: "02",
    title: "Wheel N Deal — Car Rental",
    type: "Frontend Web Application",
    desc: "A luxury car rental interface with vehicle categories, pick-up and return date selection, location-based discovery, and booking calls to action.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    icon: Code2,
    link: "https://1234bhoomi.github.io/Wheel_N_Deal-Rental-Car/",
    linkLabel: "Live website"
  },
  {
    n: "03",
    title: "Intelligent Bug Prioritization & Fixing",
    type: "Machine Learning / Website Scanning",
    desc: "The supplied live demo presents an automated website scanner where users can enter a website URL, set crawl limits and worker count, optionally scan JavaScript console errors with Selenium, and run a scan.",
    tags: ["Machine Learning", "Bug Analysis", "Website Scanning", "Selenium"],
    icon: BrainCircuit,
    link: "https://1234bhoomi.github.io/intelligent-bug-prioritization-and-fixing-based-on-machine-learning/",
    linkLabel: "Live website"
  },
  {
    n: "04",
    title: "Restaurant Management System",
    type: "Python Application",
    desc: "A Python-based application for managing restaurant orders, billing, and menu operations, with data storage, input validation, an intuitive interface, and unit testing.",
    tags: ["Python", "Database Integration", "Validation", "Unit Testing"],
    icon: Database
  },
];

const experiences = [
  {
    role: "AI Intern",
    company: "Learner’s Byte — Bharat Unnati AI Fellowship",
    date: "Jan 2026 – May 2026",
    points: [
      "Explored Generative AI, Codexpert, Agentic AI, and automation tools through hands-on learning and practical projects.",
      "Built small projects and workflows to understand AI agents and automation for real-world problem solving.",
      "Worked with no-code, low-code, and coding-based tools while developing and testing AI solutions."
    ]
  },
  {
    role: "Front-End Development Intern",
    company: "Cognifyz Technologies",
    date: "Feb 2026 – Mar 2026",
    points: [
      "Completed a Front-End Development internship from 16 February to 18 March 2026.",
      "Demonstrated dedication, coordination, communication, and attention to detail during assignments."
    ]
  },
  {
    role: "Web Development Intern",
    company: "WAYEVA Innovations",
    date: "Mar 2025 – May 2025",
    points: [
      "Developed and tested frontend components using HTML, CSS, and JavaScript.",
      "Assisted with debugging, unit testing, defect resolution, and technical documentation.",
      "Used Git for version control and collaborative development."
    ]
  },
];

function App() {
  const [menu, setMenu] = useState(false);
  const [dark, setDark] = useState(false);
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    const obs = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );

    els.forEach(el => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  const nav = [
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Certificates",
    "Contact"
  ];

  const filtered =
    filter === "All"
      ? certificates
      : certificates.filter(c => c[1] === filter);

  return (
    <div className="app">

      <header className="topbar">
        <a className="brand" href="#home">
          B<span>.</span>SN
        </a>

        <nav className={menu ? "nav open" : "nav"}>
          {nav.map(x => (
            <a
              key={x}
              href={"#" + x.toLowerCase()}
              onClick={() => setMenu(false)}
            >
              {x}
            </a>
          ))}
        </nav>

        <div className="head-actions">
          <button
            className="icon-btn"
            aria-label="Toggle theme"
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a className="nav-cta" href="#contact">
            Let’s talk <ArrowUpRight size={16} />
          </a>

          <button
            className="icon-btn mobile-menu"
            aria-label="Open menu"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>

        <section className="hero section-wrap" id="home">

          <div className="hero-copy">

            <div className="eyebrow">
              <span className="pulse"></span>
              COMPUTER SCIENCE & ENGINEERING
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Hello, I’m
              <br />
              <em>Bhoomika S N.</em>
            </motion.h1>

            <p className="hero-lead">
              I build thoughtful digital solutions through software development, AI, and automation.
            </p>

            <p className="hero-sub">
              Computer Science & Engineering · ServiceNow Certified Application Developer · Bengaluru, India
            </p>

            <div className="hero-buttons">
              <a className="button dark-button" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>

              <a
                className="button light-button"
                href="/Bhoomika-SN-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Download size={17} /> View resume
              </a>
            </div>

            <div className="hero-social">

              <a href="mailto:bhoomikasn08@gmail.com">
                <Mail size={17} /> Email
              </a>

              <a href="tel:+919481869812">
                <Phone size={17} /> +91 94818 69812
              </a>

              <a
                href="https://www.linkedin.com/in/bhoomika-s-n-30914925a/"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={17} /> LinkedIn
              </a>

              <span>
                <MapPin size={17} /> Bengaluru, India
              </span>

            </div>
          </div>

          <div className="hero-art">

            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="hero-card">

              <div className="card-top">
                <span>PORTFOLIO / 2026</span>
                <Sparkles size={18} />
              </div>

              <div className="monogram">
                B<span>.</span>
              </div>

              <div className="card-bottom">
                <div>
                  <strong>Curious mind.</strong>
                  <br />
                  Builder’s mindset.
                </div>
                <span>01 — 04</span>
              </div>

            </div>

            <div className="float-chip chip-one">
              <ShieldCheck size={17} /> ServiceNow CAD
            </div>

            <div className="float-chip chip-two">
              <BrainCircuit size={17} /> AI & ML
            </div>

            <div className="art-caption">
              DESIGNING · BUILDING · LEARNING
            </div>

          </div>

          <a className="scroll-cue" href="#about">
            <ArrowDown size={16} /> SCROLL TO EXPLORE
          </a>

        </section>

        <section className="intro-strip">
          <div><span>01</span> SOFTWARE DEVELOPMENT</div>
          <div><span>02</span> AI & MACHINE LEARNING</div>
          <div><span>03</span> SERVICENOW & AUTOMATION</div>
        </section>

        <section className="section section-wrap" id="about">

          <div className="section-label reveal">
            <span>01 / ABOUT</span><i></i>
          </div>

          <div className="about-grid">

            <h2 className="section-title reveal">
              Driven by curiosity.
              <br />
              <em>Focused on impact.</em>
            </h2>

            <div className="about-text reveal">

              <p>
                I’m a Computer Science and Engineering undergraduate from Nagarjuna College of Engineering and Technology, with a strong foundation in programming, data structures, web development, databases, and core computer science.
              </p>

              <p>
                Through internships, academic projects, and hands-on learning, I’ve explored web technologies, Artificial Intelligence, Natural Language Processing, Machine Learning, and ServiceNow development. I enjoy learning new tools and turning ideas into practical software solutions.
              </p>

              <div className="quick-facts">
                <div>
                  <strong>8.12/10</strong>
                  <small>Academic CGPA</small>
                </div>

                <div>
                  <strong>3+</strong>
                  <small>Internship experiences</small>
                </div>

                <div>
                  <strong>3+</strong>
                  <small>Project areas</small>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">

          <div className="section-wrap">

            <div className="section-label reveal">
              <span>02 / TOOLKIT</span><i></i>
            </div>

            <div className="section-heading reveal">
              <h2 className="section-title">
                Skills & <em>technologies</em>
              </h2>

              <p>
                A growing toolkit for building reliable, useful applications.
              </p>
            </div>

            <div className="skill-grid">
              {skills.map((s, i) => (
                <article className="skill-card reveal" key={s.name}>

                  <div className="skill-index">
                    0{i + 1}
                  </div>

                  <h3>{s.name}</h3>

                  <div className="tag-list">
                    {s.items.map(t => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>

                </article>
              ))}
            </div>

          </div>
        </section>

        <section className="section section-wrap" id="projects">

          <div className="section-label reveal">
            <span>03 / SELECTED WORK</span><i></i>
          </div>

          <div className="section-heading reveal">
            <h2 className="section-title">
              Projects with <em>purpose.</em>
            </h2>

            <p>
              Academic and practical work across AI, machine learning, and application development.
            </p>
          </div>

          <div className="project-grid">
            {projects.map(p => (
              <article className="project-card reveal" key={p.n}>

                <div className="project-top">
                  <span>{p.n} / PROJECT</span>
                  <p.icon size={23} />
                </div>

                <div className="project-type">
                  {p.type}
                </div>

                <h3>{p.title}</h3>

                <p className="project-desc">
                  {p.desc}
                </p>

                <div className="tag-list">
                  {p.tags.map(t => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                {p.link && (
                  <a
                    className="project-link"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {p.linkLabel} <ArrowUpRight size={15} />
                  </a>
                )}

              </article>
            ))}
          </div>

        </section>

        <section className="section experience-section" id="experience">

          <div className="section-wrap">

            <div className="section-label reveal">
              <span>04 / EXPERIENCE</span><i></i>
            </div>

            <div className="section-heading reveal">
              <h2 className="section-title">
                Learning by <em>doing.</em>
              </h2>

              <p>Internship and fellowship experience.</p>
            </div>

            <div className="timeline">

              {experiences.map((e, i) => (
                <article className="timeline-item reveal" key={e.company}>

                  <div className="timeline-mark">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="timeline-content">

                    <div className="timeline-meta">
                      <span>{e.date}</span>
                      <BriefcaseBusiness size={17} />
                    </div>

                    <h3>{e.role}</h3>
                    <h4>{e.company}</h4>

                    <ul>
                      {e.points.map(pt => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>

                  </div>
                </article>
              ))}

            </div>
          </div>
        </section>

        <section className="section section-wrap" id="education">

          <div className="section-label reveal">
            <span>05 / EDUCATION</span><i></i>
          </div>

          <div className="education-card reveal">

            <div className="edu-icon">
              <GraduationCap size={28} />
            </div>

            <div>

              <span className="date-label">
                2022 — 2026
              </span>

              <h2>B.E. — Computer Science and Engineering</h2>

              <p>
                Nagarjuna College of Engineering and Technology
              </p>

              <div className="edu-bottom">
                <span>
                  CGPA <strong>8.12 / 10</strong>
                </span>

                <span>2026 Batch</span>
              </div>

            </div>
          </div>
        </section>

        <section className="section cert-section" id="certificates">

          <div className="section-wrap">

            <div className="section-label reveal">
              <span>06 / CREDENTIALS</span><i></i>
            </div>

            <div className="section-heading reveal">

              <h2 className="section-title">
                Certificates & <em>recognition.</em>
              </h2>

              <p>
                Verified credentials and course completions from the documents provided.
              </p>

            </div>

            <div className="filters reveal">

              {[
                "All",
                "ServiceNow",
                "Deloitte / Forage",
                "ScholarHat",
                "WAYEVA Innovations",
                "Cognifyz Technologies"
              ].map(f => (
                <button
                  className={filter === f ? "active" : ""}
                  onClick={() => setFilter(f)}
                  key={f}
                >
                  {f}
                </button>
              ))}

            </div>

            <div className="cert-grid">

              {filtered.map(c => (
                <article className="cert-card reveal" key={c[0]}>

                  <div className="cert-icon">
                    <Award size={21} />
                  </div>

                  <div className="cert-info">
                    <span>{c[1]}</span>
                    <h3>{c[0]}</h3>
                    <small>{c[2]}</small>
                  </div>

                  <a
                    href={A + c[3]}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={"Open " + c[0]}
                  >
                    <ExternalLink size={18} />
                  </a>

                </article>
              ))}

            </div>

          </div>
        </section>

        <section className="contact-section" id="contact">

          <div className="section-wrap contact-inner">

            <div className="section-label light-label reveal">
              <span>07 / GET IN TOUCH</span><i></i>
            </div>

            <div className="contact-grid">

              <div className="reveal">

                <h2>
                  Have an idea?
                  <br />
                  <em>Let’s build it.</em>
                </h2>

                <p>
                  I’m always open to connecting, learning, and exploring opportunities in software development, AI, and technology.
                </p>

                <a
                  className="button white-button"
                  href="mailto:bhoomikasn08@gmail.com"
                >
                  Start a conversation <ArrowUpRight size={17} />
                </a>

              </div>

              <div className="contact-links reveal">

                <a href="mailto:bhoomikasn08@gmail.com">
                  <Mail />
                  <span>
                    <small>EMAIL</small>
                    bhoomikasn08@gmail.com
                  </span>
                  <ArrowUpRight />
                </a>

                <a href="tel:+919481869812">
                  <Phone />
                  <span>
                    <small>PHONE</small>
                    +91 94818 69812
                  </span>
                  <ArrowUpRight />
                </a>

                <div>
                  <MapPin />
                  <span>
                    <small>LOCATION</small>
                    Bengaluru, Karnataka, India
                  </span>
                </div>

                <a
                  href="https://www.linkedin.com/in/bhoomika-s-n-30914925a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink />
                  <span>
                    <small>LINKEDIN</small>
                    linkedin.com/in/bhoomika-s-n-30914925a
                  </span>
                  <ArrowUpRight />
                </a>

              </div>
            </div>

            <footer>

              <a className="brand footer-brand" href="#home">
                B<span>.</span>SN
              </a>

              <span>
                © 2026 Bhoomika S N. Designed with intention.
              </span>

              <a href="#home">
                BACK TO TOP ↑
              </a>

            </footer>

          </div>
        </section>

      </main>

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div
            className="modal-box"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setSelected(null)}>
              <X />
            </button>

            <h3>{selected}</h3>
          </div>
        </div>
      )}

    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);