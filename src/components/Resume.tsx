import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  return (
    <section className="resume-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="resume-content"
        >
          <h2 className="section-title">
            <FontAwesomeIcon icon={faFileAlt} />
            Resume
          </h2>
          <p className="resume-description">
            View my full resume to learn more about my experience and skills.
          </p>
          
          <div className="resume-card">
            <div className="resume-preview">
              <h3>Hita Thota</h3>
              <p>Computer Science + Neuroscience Student</p>
              <p>University of Maryland</p>
            </div>
            
            <div className="resume-viewer">
              <iframe
                src="https://drive.google.com/file/d/1-Mw6ySpBZXCKQu8GmHAmtIswZfHkH1py/preview"
                width="100%"
                height="800"
                allow="autoplay"
                title="Resume"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 