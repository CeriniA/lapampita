import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';

// Importar componentes de página
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <Container as="main" className="mt-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
