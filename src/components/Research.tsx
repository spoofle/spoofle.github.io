import { motion } from 'framer-motion';
// import ProjectList from './ProjectList';

const focus = [
  {
    title: 'Neuromorphic perception',
    description:
      'Event cameras, low-latency motion estimation, and visual saliency modelled on how biological vision samples the world.',
  },
  {
    title: 'Brain-inspired computation',
    description:
      'Sparse representations, predictive coding, and multimodal binding, for systems that learn from less data.',
  },
  {
    title: 'Autonomous agentic systems',
    description:
      'Multi-agent architectures, system routing, and benchmarks for how vision-language models reason and ground.',
  },
];

const Research = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="research-section"
    >
      <div className="container">
        <div className="section-number">Work</div>
        <h1 className="statement">
          Perception that works the way brains do: sparse, fast, and driven by change.
        </h1>

        <div className="prose">
          <p>
            Brains don&rsquo;t process frames. They respond to change, spend almost no energy
            doing it, and still act in milliseconds. I want to build machines that see that
            way, and agents that can act on what those machines see.
          </p>
        </div>

        <h2 className="block-label">Focus</h2>
        <ol className="focus-list">
          {focus.map((area, i) => (
            <li key={area.title}>
              <span className="focus-number">0{i + 1}</span>
              <div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Current research: hidden for now. To restore, remove this comment wrapper
            and un-comment the ProjectList import at the top of the file.
        <h2 className="block-label">Current research</h2>
        <div className="prose">
          <p>
            I&rsquo;m a researcher in the Perception and Robotics Group, working on low-latency
            perception with event cameras and on how vision-language models are evaluated.
          </p>
        </div>
        <ProjectList showRole />
        */}

        <h2 className="block-label">Industry</h2>
        <div className="prose">
          <p>
            In summer 2026 I was on <strong>Google</strong>&rsquo;s Cloud Applied AI team,
            architecting internal multi-agent workflows and the routing behind them. The
            summer before, at <strong>Shopify</strong>, I built an AI agent for investigating
            production incidents. 
          </p>
          <p>
            At Maryland, I direct engineering for Hack4Impact-UMD, am head teaching assistant
            for CMSC 389O: The Coding Interview, and have been a teaching assistant for CMSC 330: Organization of Programming Languages for five semesters.
          </p>
        </div>

        <div className="prose closing">
          <p>
            This is the work I want to keep doing. If you&rsquo;re building in this space,{' '}
            <a href="mailto:hita.thota@gmail.com">get in touch</a>.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Research;
