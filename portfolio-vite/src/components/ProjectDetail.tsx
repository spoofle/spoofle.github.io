import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

interface ProjectDetail {
  title: string;
  description: string;
  image: string;
  tech: string;
  link: string;
  longDescription: string;
  challenges: string[];
  solutions: string[];
  screenshots?: string[];
}

const projectDetails: Record<string, ProjectDetail> = {
  'recall-pit': {
    title: "Recall Pit",
    description: "A mobile app that processes and displays product recalls from USDA, FDA, and CPSC datasets in a user-friendly interface.",
    image: "/images/projects/recall-pit.png",
    tech: "Flutter, Dart, Google Cloud, Google Translate API",
    link: "https://recallpit.com/",
    longDescription: "Recall Pit is a comprehensive mobile application designed to keep users informed about product recalls across various categories. The app aggregates data from multiple government agencies and presents it in an intuitive, user-friendly interface.",
    challenges: [
      "Processing and normalizing data from multiple government agencies with different formats",
      "Implementing real-time updates for recall information",
      "Creating an intuitive user interface for complex data"
    ],
    solutions: [
      "Developed a robust data processing pipeline using Google Cloud Functions",
      "Implemented efficient caching mechanisms for real-time updates",
      "Created a clean, card-based UI with filtering and search capabilities"
    ],
    screenshots: [
      "/images/projects/recall-pit-screenshot1.png",
      "/images/projects/recall-pit-screenshot2.png"
    ]
  },
  'ai-healthcare': {
    title: "Microsoft Hack4Good 3.0",
    description: "A multilingual chatbot called FRAME assistant designed for aiding accurate data collection and improving food donation processes.",
    image: "/images/projects/microsoft.png",
    tech: "Azure OpenAI Services, Copilot Studio, Azure AI",
    link: "https://www.foodbanking.org/",
    longDescription: "The FRAME assistant is an AI-powered chatbot developed to streamline food bank operations and improve data collection processes. It helps food banks manage donations more efficiently and ensures accurate tracking of food items.",
    challenges: [
      "Handling multiple languages and dialects",
      "Ensuring accurate data collection across different food bank systems",
      "Integrating with existing food bank workflows"
    ],
    solutions: [
      "Leveraged Azure OpenAI Services for multilingual support",
      "Developed a flexible data collection framework",
      "Created a seamless integration system with existing food bank software"
    ]
  },
  'winrock-dashboard': {
    title: "Winrock International Dashboard",
    description: "A comprehensive dashboard and forms system to streamline information processing for Winrock International.",
    image: "/images/projects/winrock-dashboard.png",
    tech: "React, TypeScript, Node.js",
    link: "#",
    longDescription: "As co-tech lead, I'm developing a comprehensive dashboard system for Winrock International to improve their data management and reporting capabilities.",
    challenges: [
      "Managing complex data relationships",
      "Creating an intuitive user interface for non-technical users",
      "Ensuring data security and compliance"
    ],
    solutions: [
      "Implemented a robust data modeling system",
      "Designed a user-friendly interface with guided workflows",
      "Built secure authentication and authorization systems"
    ]
  },
  'h4i-application': {
    title: "Hack4Impact Application Tool",
    description: "Led the overhaul of the application process for 200+ prospective applicants.",
    image: "/images/projects/h4i-application.png",
    tech: "React, Node.js, MongoDB",
    link: "#",
    longDescription: "I led the development of a new application system for Hack4Impact, significantly improving the application process for prospective members.",
    challenges: [
      "Managing high volume of applications",
      "Creating an efficient review process",
      "Ensuring data integrity across the application pipeline"
    ],
    solutions: [
      "Developed an automated application processing system",
      "Created a streamlined review interface for application reviewers",
      "Implemented robust data validation and error handling"
    ]
  },
  'all-district-reads': {
    title: "All District Reads",
    description: "Led mobile and web development for the All District Reads nonprofit.",
    image: "/images/projects/all-district-reads.png",
    tech: "React Native, React, Node.js",
    link: "#",
    longDescription: "I led the development of both mobile and web platforms for All District Reads, creating solutions to improve literacy and education accessibility.",
    challenges: [
      "Creating a consistent experience across platforms",
      "Optimizing performance for low-bandwidth environments",
      "Ensuring accessibility for all users"
    ],
    solutions: [
      "Developed a shared component library",
      "Implemented efficient caching and offline support",
      "Added comprehensive accessibility features"
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectDetails[projectId] : null;

  if (!project) {
    return (
      <div className="container">
        <h1>Project not found</h1>
        <p>Sorry, the project you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="project-detail"
    >
      <div className="container">
        <div className="project-header">
          <img src={project.image} alt={project.title} className="project-logo" />
          <div className="project-title">
            <h1>{project.title}</h1>
            <div className="tech-stack">
              {project.tech.split(', ').map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="project-content">
          <section className="project-description">
            <h2>Overview</h2>
            <p>{project.longDescription}</p>
          </section>

          <section className="project-challenges">
            <h2>Challenges</h2>
            <ul>
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </section>

          <section className="project-solutions">
            <h2>Solutions</h2>
            <ul>
              {project.solutions.map((solution, index) => (
                <li key={index}>{solution}</li>
              ))}
            </ul>
          </section>

          {project.screenshots && project.screenshots.length > 0 && (
            <section className="project-screenshots">
              <h2>Screenshots</h2>
              <div className="screenshots-grid">
                {project.screenshots.map((screenshot, index) => (
                  <img key={index} src={screenshot} alt={`${project.title} screenshot ${index + 1}`} />
                ))}
              </div>
            </section>
          )}

          <div className="project-actions">
            <a href={project.link} className="button">
              View Project
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail; 