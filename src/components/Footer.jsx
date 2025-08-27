import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-primary-custom text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            <p>&copy; {new Date().getFullYear()} La Pampita. Todos los derechos reservados.</p>
            <p>Contacto: <a href="http://wa.me/5493544564393" target="_blank" rel="noopener noreferrer" className="text-white">+54 9 3544564393</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
