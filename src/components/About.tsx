import { motion } from 'framer-motion';
import SpikeRaster from './SpikeRaster';

const CV_PDF = 'https://drive.google.com/file/d/1-Mw6ySpBZXCKQu8GmHAmtIswZfHkH1py/view';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="about-section"
    >
      <div className="container">
        <div className="intro">
          <h1 className="intro-name">Hita Thota</h1>
          <p className="intro-line">
            Brain-inspired computation, neuromorphic sensing, and agentic systems.
          </p>
          <p className="intro-line">
            Based in San Francisco. Senior at the University of Maryland. Previously Applied AI at Google
            and Shopify.
          </p>

          <div className="intro-links">
            <a href="https://github.com/spoofle" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/hita-thota"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://hthota.substack.com/" target="_blank" rel="noopener noreferrer">
              Substack
            </a>
            <a href={CV_PDF} target="_blank" rel="noopener noreferrer">
              CV
            </a>
          </div>

          <figure className="raster">
            <SpikeRaster />
            <figcaption>Six simulated neurons, spiking</figcaption>
          </figure>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
