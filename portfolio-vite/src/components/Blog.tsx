import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span>Code Meets Cognition</span>
            <a 
              href="https://hthota.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="blog-link"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </h2>
          <p className="blog-description">
            Exploring the intersection of Gen AI and neuroscience through research and insights.
          </p>
          
          <div className="blog-preview">
            <div className="blog-card">
              <h3>Latest Posts</h3>
              <p>Visit my Substack blog to read my latest articles on:</p>
              <ul>
                <li>Gen AI developments</li>
                <li>Neuroscience research</li>
                <li>CS + Neuroscience insights</li>
              </ul>
              <a 
                href="https://hthota.substack.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="button"
              >
                Read More on Substack
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog; 