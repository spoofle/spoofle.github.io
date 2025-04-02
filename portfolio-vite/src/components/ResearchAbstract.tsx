import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

interface ResearchAbstract {
  title: string;
  period: string;
  description: string;
  tech: string;
  abstract: string;
  methodology: string[];
  results: string[];
  futureWork: string[];
}

const researchAbstracts: Record<string, ResearchAbstract> = {
  'robotics-perception': {
    title: "Robotics and Perception Group: Computer Vision Research",
    period: "Dec. 2024 – Present",
    description: "Currently conducting research in calculating optical flow using event camera data",
    tech: "Python",
    abstract: "This research focuses on developing novel approaches for optical flow calculation using event camera data. Event cameras, with their high temporal resolution and low latency, offer unique advantages for motion estimation in robotics applications.",
    methodology: [
      "Implementing event-based optical flow algorithms",
      "Developing data processing pipelines for event camera data",
      "Creating evaluation frameworks for motion estimation accuracy"
    ],
    results: [
      "Initial implementation of event-based optical flow calculation",
      "Development of efficient data structures for event processing",
      "Creation of benchmarking tools for algorithm evaluation"
    ],
    futureWork: [
      "Optimizing algorithm performance for real-time applications",
      "Integrating with existing robotics platforms",
      "Exploring applications in dynamic environments"
    ]
  },
  'llm-oncology': {
    title: "Exploring LLM Efficacy for Oncology Patient Queries",
    period: "Aug. 2024 – Dec. 2024",
    description: "Accepted to and presented at NATCON-ISAO 2024. Conducted rigorous evaluations of Gemini and GPT-4 Mini LLMs for oncology applications, including benchmarking against patient-specific cancer queries.",
    tech: "Python, LLMs",
    abstract: "This research investigates the effectiveness of Large Language Models (LLMs) in handling oncology-related patient queries. The study evaluates multiple LLM architectures for their ability to provide accurate, empathetic, and clinically relevant responses.",
    methodology: [
      "Developing a comprehensive test suite of oncology queries",
      "Implementing evaluation metrics for response quality",
      "Creating a framework for medical accuracy assessment"
    ],
    results: [
      "Comparative analysis of different LLM architectures",
      "Identification of key factors affecting response quality",
      "Development of guidelines for medical LLM deployment"
    ],
    futureWork: [
      "Expanding the query dataset",
      "Developing specialized medical LLM fine-tuning approaches",
      "Creating automated evaluation pipelines"
    ]
  },
  'smart-pac': {
    title: "SMART PAC",
    period: "Aug. 2024 – Sept. 2024",
    description: "Conducted in-depth evaluations of GPT, Gemini, and LlaMa LLMs for their ability to complete the pre-anesthesia forms using anonymized, de-identified datasets. Applied benchmarking methodologies to assess LLM performance on critical medical tasks.",
    tech: "Python, LLMs, Pytesseract",
    abstract: "This research evaluates the capability of various LLMs to accurately complete pre-anesthesia forms using anonymized medical data. The study focuses on both accuracy and efficiency in medical form processing.",
    methodology: [
      "Creating anonymized datasets from medical forms",
      "Developing OCR processing pipelines",
      "Implementing form completion evaluation metrics"
    ],
    results: [
      "Performance comparison of different LLM architectures",
      "Analysis of form completion accuracy",
      "Identification of critical factors affecting performance"
    ],
    futureWork: [
      "Expanding to different types of medical forms",
      "Developing specialized medical form processing models",
      "Creating automated validation systems"
    ]
  }
};

const ResearchAbstract = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? researchAbstracts[projectId] : null;

  if (!project) {
    return (
      <div className="container">
        <h1>Research Abstract Not Found</h1>
        <p>Sorry, the research abstract you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="research-abstract"
    >
      <div className="container">
        <div className="project-header">
          <div className="project-title">
            <h1>{project.title}</h1>
            <span className="project-period">{project.period}</span>
          </div>
          <div className="tech-stack">
            {project.tech.split(', ').map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="research-content">
          <section className="abstract-section">
            <h2>Abstract</h2>
            <p>{project.abstract}</p>
          </section>

          <section className="methodology-section">
            <h2>Methodology</h2>
            <ul>
              {project.methodology.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="results-section">
            <h2>Results</h2>
            <ul>
              {project.results.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="future-work-section">
            <h2>Future Work</h2>
            <ul>
              {project.futureWork.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default ResearchAbstract; 