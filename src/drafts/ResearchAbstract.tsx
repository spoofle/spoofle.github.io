/**
 * Unpublished: the per-project abstract page, with the entries for the VLM
 * benchmarking and multimodal projects. The PRG entry is in
 * ./event-based-perception.ts.
 *
 * Nothing imports this file, so none of it ships. To bring the pages back:
 * move it to components/, add the route
 * `<Route path="/research/:projectId" element={<ResearchAbstract />} />` in
 * App.tsx, and link the rows in ProjectList.tsx to `/research/<key>`.
 */
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

interface ResearchAbstract {
  title: string;
  status: 'active' | 'preprint';
  statusLabel: string;
  lab: string;
  advisor: string;
  role: string;
  period: string;
  tech: string;
  abstract: string;
  methodology: string[];
  results: string[];
  futureWork: string[];
}

const researchAbstracts: Record<string, ResearchAbstract> = {
  'vlm-benchmarking': {
    title: 'Vision-Language Model Benchmarking',
    status: 'preprint',
    statusLabel: 'Pre-print · In Submission',
    lab: 'University of Maryland',
    advisor: 'Dr. Furong Huang',
    role: 'Lead Author / Core Contributor',
    period: 'In Submission — 2026',
    tech: 'Python, VLMs, Statistical Evaluation',
    abstract:
      'Most public vision-language benchmarks conflate surface-level alignment with genuine cross-modal grounding. This work introduces a statistically rigorous evaluation protocol: it controls for spurious correlations between caption text and image content, reports per-cohort confidence intervals, and isolates the contribution of each modality to the final prediction.',
    methodology: [
      '[TODO] Methodology placeholder — to be filled in with paper-specific detail.',
      'Constructed an evaluation suite with adversarial caption perturbations and modality-ablation cohorts.',
      'Reported per-task confidence intervals and modality-attribution scores across frontier VLMs.',
    ],
    results: [
      '[TODO] Results placeholder — leave empty until the pre-print is public.',
    ],
    futureWork: [
      'Extending the protocol to interactive, multi-turn vision-language settings.',
      'Releasing the evaluation harness alongside the pre-print.',
    ],
  },
  'multimodal-deep-learning': {
    title: 'Multimodal Deep Learning',
    status: 'active',
    statusLabel: 'Active Working Paper',
    lab: 'University of Maryland',
    advisor: 'Dr. Ruohan Gao',
    role: 'Research Contributor',
    period: 'Sept 2025 — Present',
    tech: 'Python, Multimodal Learning, ObjectFolder 2.0',
    abstract:
      'Builds on the ObjectFolder 2.0 paradigm (Gao et al.) to study geometrically consistent object representations across vision, audio, and tactile modalities. The aim is a single latent that respects shape and surface properties consistently when queried through any modality individually or jointly.',
    methodology: [
      '[TODO] Methodology placeholder — to be filled in with paper-specific detail.',
      'Cross-modal contrastive objectives anchored to object geometry.',
      'Evaluation against ObjectFolder 2.0 baselines on retrieval and reconstruction.',
    ],
    results: [
      '[TODO] Results placeholder — leave empty until the paper draft is shareable.',
    ],
    futureWork: [
      'Extending to dynamic interactions (grasp, drop) rather than static object queries.',
      'Integrating event-camera modality alongside RGB-D.',
    ],
  },
};

// Entries may hold "[TODO] …" lines as reminders; those never reach the page,
// and a section with nothing else in it is left out entirely.
const published = (items: string[]) => items.filter((item) => !item.startsWith('[TODO]'));

const BulletSection = ({ title, items }: { title: string; items: string[] }) => {
  const lines = published(items);
  if (lines.length === 0) return null;
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {lines.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

const ResearchAbstract = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? researchAbstracts[projectId] : null;

  if (!project) {
    return (
      <div className="research-abstract">
        <div className="container">
          <h1>Research entry not found.</h1>
          <p>This research slug doesn&rsquo;t resolve to an entry.</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
      className="research-abstract"
    >
      <div className="container">
        <div className="project-header">
          <div className="project-title">
            <div className="project-period">{project.period} &middot; {project.lab}</div>
            <h1>{project.title}</h1>
            <div className="project-meta-row">
              <span
                className={
                  project.status === 'preprint'
                    ? 'status-tag status-tag--preprint'
                    : 'status-tag'
                }
              >
                {project.statusLabel}
              </span>
              <span className="advisor-line">
                <strong>Advisor</strong>
                {project.advisor} &middot; {project.role}
              </span>
            </div>
          </div>
        </div>

        <div className="research-content">
          <section>
            <h2>Abstract</h2>
            <p>{project.abstract}</p>
          </section>

          <BulletSection title="Methodology" items={project.methodology} />

          <BulletSection title="Results" items={project.results} />

          <BulletSection title="Future Work" items={project.futureWork} />

          <section>
            <h2>Stack</h2>
            <div className="tech-stack">
              {project.tech.split(', ').map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default ResearchAbstract;
