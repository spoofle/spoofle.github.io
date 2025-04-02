import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string;
  link: string;
}

const personalProjects: Project[] = [
  {
    title: "Recall Pit",
    description: "A mobile app that processes and displays product recalls from USDA, FDA, and CPSC datasets in a user-friendly interface. Achieved 800+ downloads on Google Play and App Store.",
    image: "/images/projects/recall-pit.png",
    tech: "Flutter, Dart, Google Cloud, Google Translate API",
    link: "https://recallpit.com/"
  }
  // {
  //   title: "AI Healthcare Assistant",
  //   description: "An intelligent healthcare assistant that helps patients understand their medical conditions and treatment options.",
  //   image: "/images/projects/ai-healthcare.png",
  //   tech: "React, Node.js, OpenAI API",
  //   link: "#"
  // },
  // {
  //   title: "Mobile Fitness App",
  //   description: "A comprehensive fitness tracking application with personalized workout plans and progress monitoring.",
  //   image: "/images/projects/fitness-app.png",
  //   tech: "React Native, Firebase, Redux",
  //   link: "#"
  // }
];

const hack4ImpactProjects: Project[] = [
  {
    title: "Winrock International Dashboard",
    description: "Currently leading development of a comprehensive dashboard and forms system to streamline information processing for Winrock International. As co-tech lead, focusing on creating efficient data management solutions.",
    image: "/images/projects/winrock_international_logo.jpeg",
    tech: "React, TypeScript, Node.js",
    link: "#"
  },
  {
    title: "Hack4Impact Application Tool",
    description: "Led the overhaul of the application process for 200+ prospective applicants, improving user experience and streamlining the application workflow. Enhanced the system's efficiency and user interface.",
    image: "/images/projects/h4i-logo.jpeg",
    tech: "React, Typescript, Firebase",
    link: "#"
  },
  {
    title: "All District Reads",
    description: "Led mobile and web development for the All District Reads nonprofit, creating solutions to improve literacy and education accessibility.",
    image: "/images/projects/All-District-Reads.png",
    tech: "React Native, React, Typescript, Firebase",
    link: "#"
  }
];

const ProjectSection = ({ title, description, projects }: { title: string; description: string; projects: Project[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="project-section"
  >
    <h2 className="section-title">{title}</h2>
    <p className="section-description">{description}</p>
    <div className="portfolio-grid">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          className="portfolio-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="portfolio-content">
            <div className="project-header">
              <img
                src={project.image}
                alt={project.title}
                className="project-logo"
              />
              <h3>{project.title}</h3>
            </div>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.split(', ').map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="button">
              View Project
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <ProjectSection
          title="Personal Projects"
          description="A collection of my personal projects showcasing my skills in software development and AI."
          projects={personalProjects}
        />
        <ProjectSection
          title="Hack4Impact Projects"
          description="Projects I've led as a Tech Lead at Hack4Impact, focusing on creating positive social impact through technology."
          projects={hack4ImpactProjects}
        />
      </div>
    </section>
  );
};

export default Portfolio; 