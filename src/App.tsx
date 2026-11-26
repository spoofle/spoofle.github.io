import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Research from './components/Research';
import OffTheClock from './components/OffTheClock';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />} />

            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Research />} />
            <Route path="/research" element={<Research />} />
            <Route path="/off-the-clock" element={<OffTheClock />} />
            <Route path="*" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
