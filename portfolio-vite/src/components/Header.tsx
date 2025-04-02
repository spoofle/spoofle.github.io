import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="fade-in"
        >
          Hita Thota
        </motion.h1>
        <nav className="nav">
          <Link to="/" className="nav-link">About</Link>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/research" className="nav-link">Research</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/resume" className="nav-link">Resume</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 