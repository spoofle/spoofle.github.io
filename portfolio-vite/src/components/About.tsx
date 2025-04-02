import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle, faMicrosoft, faAmazon, faShopify } from '@fortawesome/free-brands-svg-icons';
import { faUniversity, faBuilding, faUsers } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="about-section fade-in"
    >
      <div className="container">
        <div className="about-grid">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="profile-container"
          >
            <img 
              src="/images/spoofle.png" 
              alt="Hita Thota's Profile Picture" 
              className="profile-image"
            />
            <div className="social-links">
              <a 
                href="https://github.com/spoofle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a 
                href="https://linkedin.com/in/hita-thota" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="about-content"
          >
            <div className="content-section">
              <h2>About Me</h2>
              <p>
                I'm Hita Thota, a Computer Science + Neuroscience student at the University of Maryland with a passion for AI and software development. I'm particularly interested in the intersection of technology and healthcare, where I believe we can make the most meaningful impact.
              </p>
              
              <div>
                <p className="font-medium mb-3">My expertise spans across:</p>
                <ul className="expertise-list">
                  <li className="expertise-item">Frontend & Backend Development</li>
                  <li className="expertise-item">Mobile App Development</li>
                  <li className="expertise-item">Machine Learning & Computer Vision</li>
                  <li className="expertise-item">Large Language Models</li>
                </ul>
              </div>
              
              <p>
                I'm particularly fascinated by the intersection of AI and healthcare, and I'm currently working on projects related to LLMs in medical applications.
              </p>
            </div>

            <motion.div 
              className="education-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="section-title">
                <FontAwesomeIcon icon={faUniversity} className="mr-2" />
                Education
              </h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-year">2021 - Present</div>
                  <div className="timeline-content">
                    <h4>
                      <img 
                        src="/images/logos/umd.png" 
                        alt="UMD Logo" 
                        className="company-icon umd-logo"
                      />
                      University of Maryland
                    </h4>
                    <p>B.S. in Computer Science: Machine Learning Track</p>
                    <p className="minor">Minor in Neuroscience</p>
                    <ul className="achievements-list">
                      <li>Dean's List: Spring 2024, Fall 2024</li>
                      <li>Hack4Impact Tech Lead</li>
                      <li>Maryland Science Cafe Treasurer</li>
                      <li>Perception and Robotics Group: Computer Vision Researcher</li>
                      <li>Teaching Assistant for CMSC 330: Organization of Programming Languages</li>
                      <li>Head Teaching Assistant for CMSC 389O: The Coding Interview</li>
                    </ul>
                    <div className="courses-section">
                      <h5>Relevant Coursework</h5>
                      <div className="courses-grid">
                        <div className="course-category">
                          <h6>Computer Science</h6>
                          <ul className="courses-list">
                            <li>Introduction to Machine Learning</li>
                            <li>Natural Language Processing</li>
                            <li>Computer Vision</li>
                            <li>Organization of Programming Languages</li>
                            <li>Algorithms</li>
                            <li>Introduction to Computer Systems</li>
                          </ul>
                        </div>
                        <div className="course-category">
                          <h6>Neuroscience</h6>
                          <ul className="courses-list">
                            <li>Introduction to Neuroscience</li>
                            <li>Science of Sleep and Biological Rhythms</li>
                            {/* <li>Neurobiology</li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="internships-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="section-title">
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                Experience
              </h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-year">2025</div>
                  <div className="timeline-content">
                    <h4>
                      <img 
                        src="/public/images/logos/shopify.png" 
                        alt="Shopify Logo" 
                        className="company-icon"
                      />
                      Shopify
                    </h4>
                    <p>Incoming Software Engineering Intern</p>
                    <ul className="achievements-list">
                      <li>Summer 2025 - Team TBD</li>
                    </ul>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2021 - 2023</div>
                  <div className="timeline-content">
                    <h4>
                      <img 
                        src="/public/images/logos/rising-team.png" 
                        alt="Rising Team Logo" 
                        className="company-icon"
                      />
                      Rising Team
                    </h4>
                    <p>Software Engineering Intern</p>
                    <ul className="achievements-list">
                      <li>Built and optimized features for team development platform</li>
                      <li>Worked on frontend and backend development</li>
                      <li>Contributed to improving team collaboration tools</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About; 