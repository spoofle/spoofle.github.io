import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faMicroscope, faBrain, faRobot, faLanguage, faFlask } from '@fortawesome/free-solid-svg-icons';

const Research = () => {
  const researchAreas = [
    {
      icon: faRobot,
      title: "Robotics and Perception",
      description: "Research in computer vision and optical flow using event camera data. Also working on undergraduate thesis in gaze algorithms inspired by biological processes."
    },
    {
      icon: faBrain,
      title: "Multimodal Object Understanding",
      description: "Research in optimized object representation in three separate modalities."
    },
    {
      icon: faFlask,
      title: "Medical AI Applications",
      description: "Developing and evaluating AI solutions for healthcare, including medical form processing and patient query systems through the use of LLMs."
    }
  ];

  const researchProjects = [
    {
      title: "Multimodal Deep Learning Research",
      period: "Sept. 2025 – Present",
      description: "Building off of ObjectFolder 2.0 (Gao et al.) to implement a more geometrically consistent object representation to allow for more optimized object representation.",
      tech: "Python, Deep Learning, Multimodal Learning"
    },
    {
      title: "Robotics and Perception Group: Gaze Algorithms Research",
      period: "Aug. 2025 – Present",
      description: "Taking inspiration from the foveal and periphiral vision within the eye to implement a more optimized gaze algorithm. Undergraduate thesis topic.",
      tech: "Python, Event Camera, Neuroscience"
    },
    {
      title: "Robotics and Perception Group: Computer Vision Research",
      period: "Dec. 2024 – Present",
      description: "Currently conducting research in calculating optical flow using event camera data.",
      tech: "Python, Event Camera"
    },
    {
      title: "Exploring LLM Efficacy for Oncology Patient Queries",
      period: "Aug. 2024 – Dec. 2024",
      description: "Accepted to and presented at NATCON-ISAO 2024. Conducted rigorous evaluations of Gemini and GPT-4 Mini LLMs for oncology applications, including benchmarking against patient-specific cancer queries.",
      tech: "Python, LLMs"
    },
    {
      title: "SMART PAC",
      period: "Aug. 2024 – Sept. 2024",
      description: "Conducted in-depth evaluations of GPT, Gemini, and LlaMa LLMs for their ability to complete the pre-anesthesia forms using anonymized, de-identified datasets. Applied benchmarking methodologies to assess LLM performance on critical medical tasks.",
      tech: "Python, LLMs, Pytesseract"
    }
  ];

  // const publications = [

  // ]

  return (
    <section className="research-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <FontAwesomeIcon icon={faGraduationCap} />
            Research
          </h2>
          <p className="section-description">
            Exploring the frontiers of AI/ML and vision through research and innovation.
          </p>

          <div className="research-areas">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                className="research-area-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <FontAwesomeIcon icon={area.icon} className="research-icon" />
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="research-projects">
            <h3 className="subsection-title">Research Projects</h3>
            <div className="projects-list">
              {researchProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className="project-card"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="project-header">
                    <h4>{project.title}</h4>
                    <span className="project-period">{project.period}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-stack">
                    {project.tech.split(', ').map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Publications section commented out for future use
          <div className="publications-section">
            <h3 className="subsection-title">Selected Publications</h3>
            <div className="publications-list">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.title}
                  className="publication-card"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <h4>{pub.title}</h4>
                  <p className="authors">{pub.authors}</p>
                  <p className="journal">{pub.journal}, {pub.year}</p>
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="read-more">
                    Read Paper
                  </a>
                </motion.div>
              ))}
            </div>
          </div> */}
         
        </motion.div>
      </div>
    </section>
  );
};

export default Research; 