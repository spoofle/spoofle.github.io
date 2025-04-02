import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string;
  link: string;
  learnMoreLink: string;
}

interface ProjectSection {
  title: string;
  description: string;
  projects: Project[];
}

const projectSections: ProjectSection[] = [
  {
    title: "Featured Projects",
    description: "A collection of my most impactful projects, showcasing my skills in software development and problem-solving.",
    projects: [
      {
        title: "Recall Pit",
        description: "A mobile app that processes and displays product recalls from USDA, FDA, and CPSC datasets in a user-friendly interface.",
        image: "/images/projects/recall-pit.png",
        tech: "Flutter, Dart, Google Cloud, Google Translate API",
        link: "https://recallpit.com/",
        learnMoreLink: "/projects/recall-pit"
      },
      {
        title: "Microsoft Hack4Good 3.0",
        description: "A multilingual chatbot called FRAME assistant designed for aiding accurate data collection and improving food donation processes.",
        image: "/images/projects/microsoft.png",
        tech: "Azure OpenAI Services, Copilot Studio, Azure AI",
        link: "https://www.foodbanking.org/",
        learnMoreLink: "/projects/ai-healthcare"
      }
    ]
  },
  {
    title: "Other Projects",
    description: "Additional projects demonstrating my diverse skill set and experience.",
    projects: [
      {
        title: "Winrock International Dashboard",
        description: "A comprehensive dashboard and forms system to streamline information processing for Winrock International.",
        image: "/images/projects/winrock_international_logo.jpeg",
        tech: "React, TypeScript, Node.js",
        link: "#",
        learnMoreLink: "/projects/winrock-dashboard"
      },
      {
        title: "Hack4Impact Application Tool",
        description: "Led the overhaul of the application process for 200+ prospective applicants.",
        image: "/images/projects/h4i-application.png",
        tech: "React, Node.js, MongoDB",
        link: "#",
        learnMoreLink: "/projects/h4i-application"
      },
      {
        title: "All District Reads",
        description: "Led mobile and web development for the All District Reads nonprofit.",
        image: "/images/projects/all-district-reads.png",
        tech: "React Native, React, Node.js",
        link: "#",
        learnMoreLink: "/projects/all-district-reads"
      }
    ]
  }
];

const ProjectSection = ({ title, description, projects }: ProjectSection) => (
  <div className="project-section">
    <h2 className="section-title">{title}</h2>
    <p className="section-description">{description}</p>
    <div className="portfolio-grid">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="portfolio-card"
        >
          <div className="portfolio-content">
            <div className="project-header">
              <img src={project.image} alt={project.title} className="project-logo" />
              <h3>{project.title}</h3>
            </div>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.split(', ').map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.link} className="button">
                View Project
              </a>
              <Link to={project.learnMoreLink} className="button button-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        {projectSections.map((section, index) => (
          <ProjectSection key={index} {...section} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio; 