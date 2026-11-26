import { motion } from 'framer-motion';

const OffTheClock = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="research-section"
    >
      <div className="container">
        <div className="section-number">off the clock</div>
        <h1 className="statement">Running, films, and books.</h1>

        <ol className="focus-list">
          <li>
            <span className="focus-number">01</span>
            <div>
              <h3>running</h3>
              <p>
                I ran the DC Half Marathon in 2026 and I&rsquo;m running the San Francisco Half
                in July 2027.
              </p>
            </div>
          </li>
          <li>
            <span className="focus-number">02</span>
            <div>
              <h3>films</h3>
              <p>
                I rank movies on{' '}
                <a
                  href="https://letterboxd.com/constellations_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  letterboxd
                </a>
                . Current favorites are Cinema Paradiso (1988) and It&rsquo;s a Wonderful Life
                (1946), and I&rsquo;m very fond of Little Miss Sunshine (2006).
              </p>
            </div>
          </li>
          <li>
            <span className="focus-number">03</span>
            <div>
              <h3>reading</h3>
              <p>
                Right now it&rsquo;s No One Knows by Osamu Dazai, with Jhumpa Lahiri&rsquo;s In
                Other Words next on the list.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </motion.section>
  );
};

export default OffTheClock;
