import { Container, Row, Col, Card, Image, Carousel } from 'react-bootstrap';
import facundoImage from '../assets/img4.png';
import equipoImage from '../assets/img5.png';
import './About.css';

// Imágenes para el carrusel
import carouselImg1 from '../assets/img1.png';
import carouselImg2 from '../assets/img2.png';
import carouselImg6 from '../assets/img6.png';

const About = () => {
  return (
    <Container as="main" className="mt-5">
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">El Lugar: Microfinca La Pampita</h2>
          <Carousel interval={3000} pause={false}>
            <Carousel.Item>
              <Image src={carouselImg1} className="d-block w-100 carousel-image object-fit-cover" alt="Vista de la microfinca" />
              <Carousel.Caption className="bg-dark p-2 rounded opacity-75 text-center">
                <h5>Un lugar en Traslasierra, Córdoba</h5>
                <p>La Pampita es una microfinca de 1 hectárea ubicada en Villa de Las Rosas, un entorno ideal para la agricultura.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={carouselImg2} className="d-block w-100 carousel-image object-fit-cover" alt="Cultivos ecológicos" />
              <Carousel.Caption className="bg-dark p-2 rounded opacity-75 text-center">
                <h5>Horticultura Ecológica</h5>
                <p>Desde hace 4 años, nos dedicamos a la horticultura comercial con un enfoque ecológico y regenerativo.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={carouselImg6} className="d-block w-100 carousel-image object-fit-cover" alt="Aprendizaje práctico" />
              <Carousel.Caption className="bg-dark p-2 rounded opacity-75 text-center">
                <h5>Aprendizaje y Producción</h5>
                <p>Es un espacio donde la teoría se encuentra con la práctica, fomentando un aprendizaje real y directo.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <Row className="text-center mb-4">
        <Col>
          <h2>El Equipo</h2>
        </Col>
      </Row>

      <Row className="text-center">
        <Col md={6} className="mb-4">
          <Image src={facundoImage} roundedCircle className="mb-3 profile-image object-fit-cover" />
          <h4>Facundo José Sánchez</h4>
          <p className="text-muted"><strong>Ingeniero Agrónomo</strong></p>
          <p>
            Especializado en la gestión y producción de sistemas <strong>hortícolas ecológicos</strong>. Con una década de experiencia, Facundo lidera la capacitación, compartiendo su conocimiento práctico y su <strong>pasión</strong> por la <strong>agricultura sostenible</strong>.
          </p>
        </Col>
        <Col md={6} className="mb-4">
          <Image src={equipoImage} roundedCircle className="mb-3 profile-image object-fit-cover" />
          <h4>Equipo de Apoyo</h4>
          <p className="text-muted">Colaboradores</p>
          <p>
            Contamos con un equipo de colaboradores apasionados que asisten en la logística, preparación de materiales y aseguran que cada participante tenga una experiencia enriquecedora y completa durante la capacitación.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
