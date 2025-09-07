import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Importar componentes de página
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';

// Componente para manejar títulos de página
const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return null;
};

function App() {
  return (
    <Router basename="/lapampita">
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={
              <>
                <PageTitle title="La Pampita Microfinca - Capacitación Intensiva en Horticultura Comercial Ecológica" />
                <Home />
              </>
            } />
            <Route path="/about" element={
              <>
                <PageTitle title="Nosotros - La Pampita Microfinca | Facundo José Sánchez Ingeniero Agrónomo" />
                <About />
              </>
            } />
            <Route path="/contact" element={
              <>
                <PageTitle title="Contacto - La Pampita Microfinca | Villa de las Rosas, Córdoba" />
                <Contact />
              </>
            } />
            <Route path="/courses" element={
              <>
                <PageTitle title="Cursos Online - La Pampita Microfinca | Horticultura Comercial Ecológica" />
                <Courses />
              </>
            } />
            <Route path="/courses/:slug" element={
              <>
                <PageTitle title="Curso de Horticultura - La Pampita Microfinca" />
                <CourseDetail />
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </Router>
  );
}

export default App;
