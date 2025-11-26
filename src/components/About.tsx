import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin/*, faGoogle, faMicrosoft, faAmazon, faShopify*/ } from '@fortawesome/free-brands-svg-icons';
import { faUniversity, faBuilding/*, faUsers*/ } from '@fortawesome/free-solid-svg-icons';
import spoofleImg from '../images/spoofle.png';
import umdLogo from '../images/logos/umd.png';
import shopifyLogo from '../images/logos/shopify.png';
import risingTeamLogo from '../images/logos/rising-team.png';


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
              src={spoofleImg} 
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
                I'm Hita Thota, a Computer Science + Neuroscience student at the University of Maryland with a passion for AI and software development.
              </p>
              
              <div>
                <p className="font-medium mb-3">My expertise spans across:</p>
                <ul className="expertise-list">
                  <li className="expertise-item">Frontend & Backend Development</li>
                  <li className="expertise-item">Mobile App Development</li>
                  <li className="expertise-item">Machine Learning & Computer Vision</li>
                  <li className="expertise-item">Deep Learning</li>
                  <li className="expertise-item">Large Language Models</li>
                </ul>
              </div>
              
              <p>
                I'm particularly fascinated by the intersection of computer vision and neuroscience, and I'm currently working on projects related to the application of biological processes in vision.
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
                  <div className="timeline-year">August 2023 - Present</div>
                  <div className="timeline-content">
                    <h4>
                      <img 
                        src={umdLogo} 
                        alt="UMD Logo" 
                        className="company-icon umd-logo"
                      />
                      University of Maryland
                    </h4>
                    <p>B.S. in Computer Science: Machine Learning Track</p>
                    <p className="minor">Minors in Neuroscience and Mathematics</p>
                    <p className="minor">Expected Graduation: December 2026</p>
                    <ul className="achievements-list">
                      <li>Dean's List: Spring 2024, Fall 2024, Spring 2025</li>
                      <li>Hack4Impact-UMD Director of Engineering, Tech Lead</li>
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
                            <li>Science of Sleep and Biological Rhythms</li>
                            <li>Fundamentals of Behavior and Learning</li>
                          </ul>
                          <h6>Mathematics</h6>
                          <ul className="courses-list">
                            <li>Linear Algebra</li>
                            <li>Linear Optimization</li>
                            <li>Probability Theory</li>
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
                {/* <div className="timeline-item">
                  <div className="timeline-year">2026</div>
                  <div className="timeline-content">
                    <h4>
                      <FontAwesomeIcon icon={faGoogle} />
                      Google
                    </h4>
                    <p>Incoming Software Engineering Intern</p>
                    <ul className="achievements-list">
                      <li>Summer 2026</li>
                    </ul>
                    <ul className="achievements-list">
                      <li>Implemented DevOps AI agent for detecting production incidents and errors</li>
                      <li>Built MCP tools dealing with incident data for various functionalities in LLM prompting</li>
                      <li>Wrote and finetuned prompts for Gemini and Claude in incident investigation</li>
                      <li>Reduced incident investigation time by 50% and improved incident investigation accuracy by 78%</li>
                    </ul>
                  </div>
                </div> */}
                <div className="timeline-item">
                  <div className="timeline-year">2025</div>
                  <div className="timeline-content">
                    <h4>
                      <img 
                        src={shopifyLogo} 
                        alt="Shopify Logo" 
                        className="company-icon"
                      />
                      Shopify
                    </h4>
                    <p>Software Engineering Intern</p>
                    <ul className="achievements-list">
                      <li>Implemented DevOps AI agent for detecting production incidents and errors</li>
                      <li>Built MCP tools dealing with incident data for various functionalities in LLM prompting</li>
                      <li>Wrote and finetuned prompts for Gemini and Claude in incident investigation</li>
                      <li>Reduced incident investigation time by 50% and improved incident investigation accuracy by 78%</li>
                    </ul>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2021 - 2023</div>
                  <div className="timeline-content">
                    <h4>
                      <img 
                        src={risingTeamLogo} 
                        alt="Rising Team Logo" 
                        className="company-icon"
                      />
                      Rising Team
                    </h4>
                    <p>Software Engineering Intern</p>
                    <ul className="achievements-list">
                      <li>Integrated a messaging functionality based on an existing Python application within the company to provide more user interaction</li>
                      <li>Designed and successfully implemented a Python interpreter to facilitate the conversion of company files to the newer framework - end product allowed software engineers to input the file into the interpreter and receive an output of the newly converted file</li>
                      <li>Built product components based on Figma files that are now actively used by product customers </li>
                      <li>Designed an OAuth Authentication flow between the company app and Zapier and implemented it using Python and Javascript</li>
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
