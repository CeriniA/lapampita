import { Container, Row, Col, Card } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container as="main" className="mt-5">
      <Row className="text-center mb-5">
        <Col>
          <h2>Contacto</h2>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Información de Contacto</Card.Title>
              <Card.Text>
                <strong>Email:</strong> <a href="mailto:facujsanchez@gmail.com">facujsanchez@gmail.com</a>
              </Card.Text>
              <Card.Text>
                <strong>Teléfono / WhatsApp:</strong> <a href="http://wa.me/5493544564393" target="_blank" rel="noopener noreferrer">+54 9 3544564393</a>
              </Card.Text>
              <Card.Text>
                <strong>Ubicación:</strong> Villa de las Rosas, Traslasierra, Córdoba, Argentina.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
            <Card className="h-100">
                <Card.Body>
                    <Card.Title>Horarios de Atención</Card.Title>
                    <Card.Text>Lunes a Viernes: 9:00 AM - 6:00 PM</Card.Text>
                    <Card.Text>Sábados: 9:00 AM - 1:00 PM</Card.Text>
                    <Card.Text>Domingos: Cerrado</Card.Text>
                </Card.Body>
            </Card>
        </Col>
      </Row>

    </Container>
  );
};

export default Contact;
