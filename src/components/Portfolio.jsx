import React from 'react';
import './portfolio.css';

const projects = [
  {
    title: "Artisan Aid",
    stack: "React, CSS, Git",
    description: "A job-matching web app connecting artisans with employers. Includes authentication, dashboard, and filters.",
    type: "Team Project"
  },
  {
    title: "Movie Database App",
    stack: "React, JavaScript, API",
    description: "A web app that fetches and displays movie data. Includes search and filter features.",
    type: "Solo Project"
  },
  {
    title: "To-Do List Web App",
    stack: "HTML, CSS, JavaScript",
    description: "A to-do list app using localStorage for persistence. Focus on interactivity.",
    type: "Personal Project"
  },
  {
    title: "SotoStores",
    stack: "HTML, CSS, JavaScript",
    description: "Landing page for a Japanese restaurant with animations and responsive design.",
    type: "Frontend Web Design"
  },
  {
    title: "Bella Cusine",
    stack: "React, CSS, LocalStorage",
    description: "Landing page and admin dashboard for an Italian restaurant with application form handling.",
    type: "Business Application"
  }
];

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Git", "Node.js", "CSS Frameworks"
];

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1 className="portfolio-name">Gerrard Kelechi Elibe</h1>
        <p className="portfolio-role">Frontend Developer</p>
        <p className="portfolio-contact">
          📞 09041835740 | 09035171809 | ✉️ gerardelibe@gmail.com
        </p>
        <div className="portfolio-links">
          <a
            href="https://github.com/Gerrard-Elibe"
            className="github-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gerard-elibe-05407b357/"
            className="linkedin-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>
      </header>

      <section>
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I am an 18-year-old frontend developer with strong foundations in web development.
          I trained with The Curve Africa and built real-world projects using HTML, CSS, JavaScript, and React.
          I began learning computers early from Data Point and my church tech programs. I love building user-friendly
          and meaningful web applications. I am enthusiastic, quick to learn, and ready to grow in a professional
          environment. I strive to create intuitive, responsive, and visually appealing websites that make a difference.
        </p>
      </section>

      <section>
        <h2 className="section-title">Skills</h2>
        <ul className="skills-grid">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-meta">{project.type} | {project.stack}</p>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Gerrard Kelechi Elibe. All rights reserved.
      </footer>
    </div>
  );
}
