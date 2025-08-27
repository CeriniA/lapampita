import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container as="main" className="mt-5">
      <Row className="text-center mb-5">
        <Col>
          <h2>Contacto y Preguntas Frecuentes</h2>
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
                <strong>Ubicación:</strong> San Lorenzo, Traslasierra, Córdoba, Argentina.
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

      <Row>
        <Col>
          <h3 className="text-center mb-4">Preguntas Frecuentes (FAQ)</h3>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>¿Necesito experiencia previa?</Accordion.Header>
              <Accordion.Body>
                No, la capacitación está diseñada tanto para principiantes como para personas con algo de experiencia que deseen mejorar sus técnicas.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>¿Qué incluye el valor del curso?</Accordion.Header>
              <Accordion.Body>
                Incluye todas las clases teóricas y prácticas, materiales de estudio, herramientas para las prácticas y certificado de asistencia. No incluye alojamiento ni comidas.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>¿Hay opciones de alojamiento cerca?</Accordion.Header>
              <Accordion.Body>
                Sí, en la zona de San Lorenzo y Villa de las Rosas hay una amplia variedad de cabañas y posadas. Podemos ofrecerte un listado de recomendaciones.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
