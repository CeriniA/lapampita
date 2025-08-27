import React from 'react';
import { Container, Row, Col, Card, Accordion, ListGroup, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSeedling, FaBriefcase, FaUserTie, FaRocket, FaBuilding, FaTractor } from 'react-icons/fa';

// Importar imágenes
import heroImage from '../assets/img7.png';
import img1 from '../assets/img1.png';

const Home = () => {
    return (
        <Container fluid as="main">
            {/* Hero Section */}
            <Row
                className="text-center text-white p-5 d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '400px'
                }}
            >
                <Col style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '2rem', borderRadius: '15px' }}>
                    <h1>El huerto comercial</h1>
                    <h2>Capacitación operativa intensiva de 5 días</h2>
                    <p className="lead">Por Ingeniero Agrónomo Facundo José Sánchez</p>
                    <Button href="https://forms.gle/jrRqbJQJhxRdgj9K8" target="_blank" variant="primary" size="lg">Inscribirse</Button>
                </Col>
            </Row>

            <Container className="mt-5">
                {/* Objetivos y Formación Section */}
                <Row className="mb-5 d-flex align-items-center">
                    <Col md={6} className="mb-4">
                        <Image src={img1} rounded fluid />
                    </Col>
                    <Col md={6} className="mb-4">
                        <h3>Objetivos de la Capacitación</h3>
                        <p>
                            Nuestra capacitación intensiva de 5 días tiene como objetivo introducirte y entrenarte en técnicas y herramientas productivas y de gestión, para que puedas experimentar y conocer este modelo de agroemprendimiento. Es un paso previo a la formación operativa profesional, permitiéndote tomar una decisión informada sobre tu futuro.
                        </p>
                        <p>
                            Se basa en el caso de Microfinca La Pampita, con 4 años de experiencia en horticultura comercial ecológica. Con sólo 1300m2 de cultivo, es posible generar una facturación de $1000 a $1500 USD mensuales, trabajando 30 horas semanales. Nos enfocamos en la eficiencia y la autogestión.
                        </p>
                    </Col>
                </Row>

                {/* Destinatarios Section */}
                <Row className="mb-5">
                    <Col md={12} className="text-center mb-5">
                        <h3>¿A quiénes está dirigida la capacitación?</h3>
                    </Col>

                    <Col md={4} className="mb-5 text-center">
                        <FaSeedling size={50} className="mb-3 text-success" />
                        <p>Personas que buscan un propósito ligado a la producción de alimentos saludables y sostenibles, conectándose con la naturaleza, sin importar su experiencia previa.</p>
                    </Col>

                    <Col md={4} className="mb-5 text-center">
                        <FaBriefcase size={50} className="mb-3 text-success" />
                        <p>Individuos que desean cambiar su rumbo laboral y aprender una nueva profesión para emprender.</p>
                    </Col>

                    <Col md={4} className="mb-5 text-center">
                        <FaUserTie size={50} className="mb-3 text-success" />
                        <p>Profesionales de cualquier área, que buscan sumar una actividad paralela a su trabajo actual.</p>
                    </Col>

                    <Col md={4} className="mb-5 text-center">
                        <FaRocket size={50} className="mb-3 text-success" />
                        <p>Emprendedores que desean montar y escalar un negocio sostenible.</p>
                    </Col>

                    <Col md={4} className="mb-5 text-center">
                        <FaBuilding size={50} className="mb-3 text-success" />
                        <p>Organizaciones o instituciones (municipios, gobiernos, ONG, etc.) que ven potencial en los huertos ecológicos para generar empleo y beneficios de triple impacto.</p>
                    </Col>

                    <Col md={4} className="mb-5 text-center">
                        <FaTractor size={50} className="mb-3 text-success" />
                        <p>Productores hortícolas que buscan mejorar su sistema, desde herramientas hasta gestión y administración.</p>
                    </Col>
                </Row>

                {/* Cronograma Section */}
                <Row className="mb-5">
                    <Col>
                        <h3 className="text-center mb-4">Cronograma de Clases</h3>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Día 1</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>8:00</strong> Desayuno.</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>9:00</strong> Práctica de renovación de lotes con herramientas manuales.</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>13:00</strong> Almuerzo.</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>14:00</strong> Plantación y siembra.</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>16:00</strong> Charla / Debate: La importancia de la instalación de Microfincas. (Bonus Track)</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>17:00</strong> Estudio sobre horticultura comercial / turismo / actividad física / Sociales.</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>18:00</strong> Merienda y fin de la jornada.</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Día 2</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>8:00</strong> Desayuno.</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>9:00</strong> Práctica de renovación de lotes con herramientas a nafta.</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>13:00</strong> Almuerzo.</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>14:00</strong> Compostaje.</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>16:00</strong> Merienda y fin de la jornada.</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Día 3</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>8:00</strong> Desayuno.</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>9:00</strong> Técnicas de deshierbe / herramientas.</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>13:00</strong> Almuerzo.</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>14:00</strong> Herramientas de gestión y administración, Planillas de costos y toma de pedidos, Base de datos de clientes.</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>16:00</strong> Merienda y fin de la jornada.</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Día 4</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>8:00</strong> Desayuno.</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>9:00</strong> Cosecha / post cosecha. Infraestructura / herramientas.</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>13:00</strong> Almuerzo.</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>14:00</strong> Empaque / entregas. Infraestructura / herramientas.</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>16:00</strong> Merienda y fin de la jornada.</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Día 5</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>8:00</strong> Desayuno.</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>9:00</strong> Técnicas de deshierbe manual, correcto uso del cuerpo.</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>13:00</strong> Almuerzo.</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>14:00</strong> Evacuación de dudas / consultas particulares.</ListGroup.Item>
                                        <ListGroup.Item style={{ backgroundColor: 'transparent' }}><strong>16:00</strong> Fin de la jornada. Merienda y Despedida.</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>

                {/* Inscripciones Section */}
                <Row className="text-center mb-5 d-flex align-items-stretch">
                    <Col md={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title>Fechas</Card.Title>
                                <Card.Text>23 al 27 de septiembre</Card.Text>
                                <Card.Text>28 de octubre al 1 de noviembre</Card.Text>
                                <Card.Text>25 al 29 de noviembre</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Title>Valor</Card.Title>
                                <Card.Text><strong>Argentinos:</strong> $400.000</Card.Text>
                                <Card.Text><strong>Extranjeros:</strong> 350 dólares</Card.Text>
                                <Card.Text><small>(Se abona el 50% como seña)</small></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100 bg-secondary-custom text-white">
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <Card.Title>Inscripciones</Card.Title>
                                <Card.Text>¡Asegura tu lugar!</Card.Text>
                                <Button href="https://forms.gle/jrRqbJQJhxRdgj9K8" target="_blank" variant="light" className="mb-2">Formulario de Inscripción</Button>
                                <Button href="http://wa.me/5493544564393" target="_blank" variant="outline-light">Enviar Comprobante</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Home;
