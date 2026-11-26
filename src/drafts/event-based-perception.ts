/**
 * Unpublished: the abstract page for the PRG Lab event-based perception work.
 *
 * Kept here, out of the site, until the paper is public. Nothing imports this
 * file, so none of it ships. To publish: move this object back into
 * `researchAbstracts` in ./ResearchAbstract.tsx under the key
 * 'event-based-perception', then follow the note at the top of that file.
 */
export const eventBasedPerception = {
    title: 'Event-Based Perception',
    status: 'active',
    statusLabel: 'Active Working Paper',
    lab: 'PRG Lab, University of Maryland',
    advisor: 'PRG Lab',
    role: 'Co-Author',
    period: 'Dec 2024 — Present',
    tech: 'Python, Event Cameras, Vision Transformers',
    abstract:
      'Asynchronous event cameras emit sparse, microsecond-precise streams of brightness changes rather than dense frames. This work studies how transformer architectures and learned saliency can exploit that structure for low-latency motion and structure estimation, with a particular focus on regimes where conventional frame-based pipelines fail (high speed, low light, agile motion).',
    methodology: [
      '[TODO] Methodology placeholder — to be filled in with paper-specific detail.',
      'Asynchronous event representation and tokenization for transformer ingestion.',
      'Saliency-conditioned attention to concentrate compute on informative regions of the event stream.',
    ],
    results: [
      '[TODO] Results placeholder — leave empty until paper draft is shareable.',
    ],
    futureWork: [
      'Extending the saliency mechanism to multi-camera rigs and foveated sampling.',
      'Real-time deployment on neuromorphic hardware (e.g. Loihi-class platforms).',
    ],
  };
