import React from 'react';
import { Container, Row, Col, Card, Image, Carousel, Button, Modal } from 'react-bootstrap';
import facundoImage from '../assets/img4.png';
import equipoImage from '../assets/img5.png';
import './About.css';

// Imágenes para el carrusel
import carouselImg1 from '../assets/img1.png';
import carouselImg2 from '../assets/img2.png';
import carouselImg6 from '../assets/img6.png';

const About = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <Container as="main" className="mt-5">
      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">El Lugar: Microfinca La Pampita</h2>
          <Carousel interval={3000} pause={false}>
            <Carousel.Item>
              <Image src={carouselImg1} className="d-block w-100 carousel-image object-fit-cover" alt="Vista panorámica de La Pampita Microfinca en Villa de las Rosas, Traslasierra, Córdoba - espacio de capacitación en horticultura ecológica" />
              <Carousel.Caption className="bg-dark p-2 rounded opacity-75 text-center">
                <h5>Un lugar en Traslasierra, Córdoba</h5>
                <p>La Pampita es una microfinca de 1 hectárea ubicada en Villa de Las Rosas, un entorno ideal para la agricultura.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={carouselImg2} className="d-block w-100 carousel-image object-fit-cover" alt="Cultivos ecológicos y técnicas de horticultura comercial sostenible en La Pampita Microfinca" />
              <Carousel.Caption className="bg-dark p-2 rounded opacity-75 text-center">
                <h5>Horticultura Ecológica</h5>
                <p>Desde hace 4 años, nos dedicamos a la horticultura comercial con un enfoque ecológico y regenerativo.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={carouselImg6} className="d-block w-100 carousel-image object-fit-cover" alt="Estudiantes en capacitación práctica de agricultura ecológica y aprendizaje directo en el campo" />
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
          <Button variant="primary" onClick={handleShow}>
            Leer más
          </Button>
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

      <Modal show={showModal} onHide={handleClose} size="lg">
        {/* <Modal.Header closeButton>
          <Modal.Title>Sobre Facundo José Sánchez</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <Image src={facundoImage} fluid className="mb-3 rounded" />
          <p>
            Soy ingeniero agrónomo y horticultor. Me recibí en la UNLPam y trabajé un año en procesos de formación docente en la cátedra de Horticultura. <br/> Sin embargo, decidí salir a viajar y conocer otras experiencias productivas para ampliar mi mirada y salir del mundo académico.<br/> Cultivo hortalizas hace más de 15 años en diversos formatos, siempre tratando de lograr la mejor calidad posible.<br/> Hace 6 años, una depresión fuerte me llevó a instalarme en el valle de Traslasierra, para agarrar la pala y empezar a cultivar y construir mi vida. <br/>Pase por varios sistemas productivos ecológicos extensivos, pero ninguno me llenaba el alma, cuando se produce en cantidad es difícil lograr calidad integral de una hortaliza.<br/> Gracias a la era digital descubrí que ese ideal de producción que tenía en mi cabeza, ya tenía forma concreta y exitosa en otras latitudes. Conocí el market garden a través de Youtube hace 4 años.<br/> Desde entonces, me levanto todos los días a hacer lo que amo: producir hortalizas de calidad y aplicar y desarrollar un modelo productivo y económico que otros puedan replicar.<br/> Durante estos años de aplicación del modelo de market garden, me enfrenté a numerosos desafíos que me enseñaron valiosas lecciones. La experiencia práctica me mostró la importancia de adaptarse a las condiciones locales y superar obstáculos inesperados.<br/> Es por eso que quiero compartir mis capacitaciones, para ahorrarte tiempo, dinero y frustración. Mi objetivo es transmitir mis conocimientos y experiencia de manera clara y práctica, para que puedas evitar los mismos errores que cometí y alcanzar el éxito en tu propio proyecto de market garden.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default About;
