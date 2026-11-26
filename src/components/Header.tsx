import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="header-logo">
          <h1>Hita Thota</h1>
        </Link>
        <nav className="nav">
          <NavLink to="/work" className="nav-link">work</NavLink>
          <NavLink to="/off-the-clock" className="nav-link">off the clock</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
