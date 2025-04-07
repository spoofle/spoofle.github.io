import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Resume from './components/Resume';
import Research from './components/Research';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import ResearchAbstract from './components/ResearchAbstract';

const Home = () => {
  return (
    <>
      <About />
      <div className="projects-research-container">
        <Portfolio />
        <Research />
      </div>
      <Blog />
      <Resume />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
            <Route path="/research/:projectId" element={<ResearchAbstract />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/research" element={<Research />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
