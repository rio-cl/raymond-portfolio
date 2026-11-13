import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Routes, Route, Link } from "react-router-dom";
import { projects } from "./projects";
import ProjectDetails from "./ProjectDetails";
import "./App.css";
import ScrollToTop from "./ScrollToTop";


function Home() {
  const sliderRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function updateNavigation() {
      setScrolled(window.scrollY > 40);

      const sectionIds = ["home", "about", "projects", "contact"];
      const marker = window.scrollY + window.innerHeight * 0.35;

      let currentSection = "home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= marker) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    }

    updateNavigation();

    window.addEventListener("scroll", updateNavigation, {
      passive: true,
    });

    window.addEventListener("resize", updateNavigation);

    return () => {
      window.removeEventListener("scroll", updateNavigation);
      window.removeEventListener("resize", updateNavigation);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  const reveal = {
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.65, ease: "easeOut" },
  };

  function slideProjects(direction) {
    const slider = sliderRef.current;

    if (!slider) return;

    const card = slider.querySelector(".project-card");
    const distance = card
      ? card.getBoundingClientRect().width + 24
      : 380;

    slider.scrollBy({
      left: direction * distance,
      behavior: reduceMotion ? "instant" : "smooth",
    });
  }

  return (
    <div className="portfolio">
      
    <header
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <a
        className="logo"
        href="#home"
        onClick={closeMenu}
        aria-label="Okolo Raymond — Home"
      >
        OR<span>.</span>
      </a>

      <button
        className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((previous) => !previous)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="main-navigation"
        className={`nav-links ${menuOpen ? "nav-open" : ""}`}
        aria-label="Main navigation"
      >
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "projects", label: "Projects" },
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={
              activeSection === item.id ? "nav-active" : ""
            }
            aria-current={
              activeSection === item.id ? "location" : undefined
            }
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}

        <a
          href="#contact"
          className={`nav-contact ${
            activeSection === "contact" ? "contact-active" : ""
          }`}
          aria-current={
            activeSection === "contact" ? "location" : undefined
          }
          onClick={closeMenu}
        >
          Let's Talk <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>


      <main>
        {/* HERO SECTION */}

        <section className="hero" id="home">
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 30 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow">
              HELLO, I'M
            </p>

            <h1>
              Okolo <span>Raymond.</span>
            </h1>

            <h2>
              Developer. Problem Solver.
              <br />
              Creative Thinker.
            </h2>

            <p className="hero-description">
              I'm a Software Engineering student who enjoys
              building software, exploring new technologies,
              and turning interesting ideas into useful
              digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                Explore My Work ↗
              </a>

              <a href="#contact" className="secondary-btn">
                Get in Touch
              </a>
            </div>
          </motion.div>

          <div className="hero-glow" aria-hidden="true" />

          <a className="scroll-indicator" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <span aria-hidden="true">↓</span>
          </a>
        </section>

        {/* ABOUT SECTION */}

        <motion.section
          className="section about-section"
          id="about"
          {...reveal}
        >
          <p className="eyebrow">A LITTLE ABOUT ME</p>

          <h2>
            Beyond the <span>code.</span>
          </h2>

          <p>
            I'm passionate about learning, solving
            problems, and developing applications that
            make everyday tasks easier.
          </p>

          <p>
            My interests include web development,
            software engineering, and emerging
            technologies. I enjoy creating digital
            experiences that combine functionality
            with thoughtful design.
          </p>

          <div className="about-highlights">
            <div className="highlight-card">
              <span>01</span>
              <h3>Development</h3>
              <p>
                Building practical and interactive
                web applications.
              </p>
            </div>

            <div className="highlight-card">
              <span>02</span>
              <h3>Problem Solving</h3>
              <p>
                Turning ideas and challenges into
                working solutions.
              </p>
            </div>

            <div className="highlight-card">
              <span>03</span>
              <h3>Continuous Learning</h3>
              <p>
                Exploring technologies and improving
                my skills with every project.
              </p>
            </div>
          </div>
        </motion.section>

        {/* PROJECTS SECTION */}

        <motion.section
          className="section projects-section"
          id="projects"
          {...reveal}
        >
          <div className="projects-heading">
            <div>
              <p className="eyebrow">MY WORK</p>

              <h2>
                Selected <span>projects.</span>
              </h2>

              <p className="projects-intro">
                A collection of things I've designed
                and built, exploring different aspects
                of frontend development.
              </p>
            </div>

            <div
              className="slider-controls"
              aria-label="Project carousel controls"
            >
              <button
                type="button"
                onClick={() => slideProjects(-1)}
                aria-label="Previous project"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => slideProjects(1)}
                aria-label="Next project"
              >
                →
              </button>
            </div>
          </div>

          <div
            className="projects-slider"
            ref={sliderRef}
            role="region"
            aria-label="Selected projects"
            tabIndex={0}
          >
            {projects.map((project, index) => (
              <article
                className="project-card"
                key={project.id}
              >
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                  />
                </div>

                <div className="project-content">
                  <p className="project-number">
                    PROJECT{" "}
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        View Code ↗
                      </a>
                    )}

                    {project.id === "tip-calculator" && (
                      <Link
                        to="/projects/tip-calculator"
                        className="project-link details-link"
                      >
                        Project Details ↗
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="slider-hint">
            ← Swipe or use the arrows to explore more projects →
          </p>
        </motion.section>

        {/* CONTACT SECTION */}

        <motion.section
          className="section contact-section"
          id="contact"
          {...reveal}
        >
          <p className="eyebrow">LET'S CONNECT</p>

          <h2>
            Have something <span>in mind?</span>
          </h2>

          <p>
            Whether it's a project idea, collaboration,
            or just a conversation about technology,
            I'd love to connect.
          </p>

          <div className="contact-buttons">
            <a
              href="mailto:raymuski16@gmail.com"
              className="primary-btn"
            >
              Send Me an Email ↗
            </a>

            <a
              href="https://github.com/rio-cl"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              Visit My GitHub ↗
            </a>
          </div>
        </motion.section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Okolo Raymond.
        </p>

        <p>Designed & built with React.</p>
      </footer>
    </div>
  );
}


function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects/tip-calculator"
          element={<ProjectDetails />}
        />
      </Routes>
    </>
  );
}


export default App;
