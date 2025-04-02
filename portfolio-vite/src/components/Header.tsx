import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <h1>Hita Thota</h1>
        {/* <Link to="/" className="header-logo">
          
        </Link> */}
        <nav className="nav">
          <Link to="/about" className="nav-link">About</Link>
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