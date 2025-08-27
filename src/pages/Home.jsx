import React from 'react';
import { Container, Row, Col, Card, Accordion, ListGroup, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSeedling, FaBriefcase, FaUserTie, FaRocket, FaBuilding, FaTractor } from 'react-icons/fa';
import './Home.css';

// Importar imágenes
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const Home = () => {
    return (
        <Container fluid as="main" className="p-0 pt-0">
            {/* Hero Section */}
            <Row
                className="text-center text-white d-flex align-items-center justify-content-center hero-section g-0"
            >
                <Col className="bg-black bg-opacity-50 p-4 rounded-0 rounded-md-4">
                    <h1>El huerto comercial</h1>
                    <h2>Capacitación operativa intensiva de 5 días</h2>
                    <p className="lead">Por Ingeniero Agrónomo Facundo José Sánchez</p>
                    <Button href="https://forms.gle/jrRqbJQJhxRdgj9K8" target="_blank" variant="primary" size="lg">Inscribirse</Button>
                </Col>
            </Row>

            <Container className="mt-5 p-0">
                {/* Objetivos y Formación Section */}
                <Row className="mb-5 d-flex align-items-center m-0">
                    <Col md={6} className="mb-4 p-0">
                        <Image src={img1} rounded fluid  />
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

                {/* Call to Action Section */}
                <Row className="text-center mb-5">
                    <Col>
                        <h1 className="mb-4">¡Únete a esta formación intensiva para aprender cómo hacerlo!</h1>
                        <Button href="https://forms.gle/jrRqbJQJhxRdgj9K8" target="_blank" variant="primary" size="lg">Inscribirse</Button>
                    </Col>
                </Row>

                {/* Que Incluye Section */}
                <Row className="mb-5">
                    <Col className="text-center">
                        <h2 className="mb-4">¿Qué incluye el curso?</h2>
                    </Col>
                </Row>
                <Row className="mb-5 d-flex align-items-stretch text-center">
                    <Col md={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Formación Intensiva</Card.Title>
                                <Card.Text>
                                    Los 5 días de formación intensiva, con los materiales y la disponibilidad de herramientas que utilizaremos durante estos días.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>Alojamiento</Card.Title>
                                <Card.Text>
                                    Alojamiento en carpa o lugar para casa rodante. En caso de querer alojarse en habitaciones, hay cabañas para alquilar muy cerca del huerto (o hostel) a precios accesibles, donde pueden alojarse hasta 5 personas para dividir el costo (nosotros nos haremos cargo de la gestión si todos los participantes del curso están de acuerdo).
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="h-100">
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Comidas</Card.Title>
                                <Card.Text>
                                    Desayunos, almuerzos y meriendas. El almuerzo es Espartano e incluye carnes, huevos y hojas verdes. Si tienes una elección alimentaria diferente, puedes comunicarlo en el formulario de inscripción. La cena no está incluida.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Call to Action Button */}
                <Row className="text-center mb-5">
                    <Col>
                        <Button href="https://forms.gle/jrRqbJQJhxRdgj9K8" target="_blank" variant="primary" size="lg">Formulario de Inscripción</Button>
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
                                        <ListGroup.Item className="list-group-item-transparent"><strong>8:00</strong> Desayuno.</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>9:00</strong> Práctica de renovación de lotes con herramientas manuales.</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>13:00</strong> Almuerzo.</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>14:00</strong> Plantación y siembra.</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>16:00</strong> Charla / Debate: La importancia de la instalación de Microfincas. (Bonus Track)</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>17:00</strong> Estudio sobre horticultura comercial / turismo / actividad física / Sociales.</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>18:00</strong> Merienda y fin de la jornada.</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Día 2</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="list-group-item-transparent"><strong>8:00</strong> Desayuno.</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>9:00</strong> Práctica de renovación de lotes con herramientas a nafta.</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>13:00</strong> Almuerzo.</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>14:00</strong> Compostaje.</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>16:00</strong> Merienda y fin de la jornada.</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Día 3</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="list-group-item-transparent"><strong>8:00</strong> Desayuno.</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>9:00</strong> Técnicas de deshierbe / herramientas.</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>13:00</strong> Almuerzo.</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>14:00</strong> Herramientas de gestión y administración, Planillas de costos y toma de pedidos, Base de datos de clientes.</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>16:00</strong> Merienda y fin de la jornada.</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Día 4</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="list-group-item-transparent"><strong>8:00</strong> Desayuno.</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>9:00</strong> Cosecha / post cosecha. Infraestructura / herramientas.</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>13:00</strong> Almuerzo.</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>14:00</strong> Empaque / entregas. Infraestructura / herramientas.</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>16:00</strong> Merienda y fin de la jornada.</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Día 5</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="list-group-item-transparent"><strong>8:00</strong> Desayuno.</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>9:00</strong> Técnicas de deshierbe manual, correcto uso del cuerpo.</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>13:00</strong> Almuerzo.</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>14:00</strong> Evacuación de dudas / consultas particulares.</ListGroup.Item>
                                        <ListGroup.Item className="list-group-item-transparent"><strong>16:00</strong> Fin de la jornada. Merienda y Despedida.</ListGroup.Item>
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

                {/* Preguntas Frecuentes */}
                <Container className="my-5">
                    <h2 className="text-center mb-4">Preguntas frecuentes</h2>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>¿Qué pasa antes de adquirir el curso?</Accordion.Header>
                                    <Accordion.Body>
                                        Antes de adquirir el curso, nos encargamos de brindarte una asistencia virtual gratuita para que puedas despejar todas tus dudas.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>¿Qué pasa cuando adquiero el curso?</Accordion.Header>
                                    <Accordion.Body>
                                        Una vez que adquieres el curso, nos ponemos en contacto contigo para ayudarte a coordinar tu llegada y estadía.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>¿Cuál es la metodología de enseñanza?</Accordion.Header>
                                    <Accordion.Body>
                                        La modalidad es 100% presencial, práctica y teórica. Aclararemos tus dudas todas las veces que creas necesario y te ayudaremos a adquirir destrezas con las herramientas/ técnicas, corregir posturas para no dañar el cuerpo y todo lo que esté a nuestro alcance.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>¿Cuántos alumnos habrán?</Accordion.Header>
                                    <Accordion.Body>
                                        No más de diez para no perder calidad en el aprendizaje.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>¿Se entregará material de apoyo?</Accordion.Header>
                                    <Accordion.Body>
                                        -Diseño de riego.<br />
                                        -Planilla de inversión inicial (máxima/ mínima) necesaria para el huerto.<br />
                                        -PDF's de fichas técnicas de cultivos más importantes.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>¿Hay requisitos previos en conocimiento, técnicas o destrezas?</Accordion.Header>
                                    <Accordion.Body>
                                        No es necesario contar con ningún tipo de conocimiento o destreza previa.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>¿Cuál es la política de reembolso?</Accordion.Header>
                                    <Accordion.Body>
                                        Una vez que nos envíes el comprobante de tu seña, queda reservado tu lugar. Si el evento se cancela por motivos de fuerza mayor, te lo comunicaremos inmeditamente y podrás elegir que te devolveremos la seña o transferir tu seña para el próximo curso. Si por motivos personales cancelas tu participación:<br />
                                        - más de un mes antes de la fecha del curso, te devolveremos el 100% de tu dinero.<br />
                                        - dentro del mes previo al curso, no podremos devolverte tu seña, pero sí podrás tener ese monto a favor para tomar el curso en otro momento.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7">
                                    <Accordion.Header>¿Es mejor hacer la capacitación intensiva o esperar para realizar la formación profesional?</Accordion.Header>
                                    <Accordion.Body>
                                        Te recomendamos realizar la capacitación intensiva si estas considerando dedicarte al agroemprendedurismo o vivir de la tierra. Queremos ser honestos contigo, no hay soluciones mágicas ni fórmulas milagrosas para el éxito en este campo. La formación intensiva te brindará una visión clara y realista de lo que implica este tipo de proyecto, y te permitirá decidir si es el camino adecuado para ti.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="8">
                                    <Accordion.Header>¿Necesito ser dueño de la tierra?</Accordion.Header>
                                    <Accordion.Body>
                                        No, existen alternativas para acceder a tierra sin ser propietario. Puedes:<br />
                                        - Alquilar tierra,<br />
                                        - Colaborar con municipios, gobiernos, ONG, clubes, etc. para obtener tierra en préstamo,<br />
                                        - Aprovechar terrenos ociosos de instituciones como iglesias, catedrales o vías del tren,<br />
                                        En Argentina, hay una gran cantidad de tierra fiscal o sin producir, solo se necesitan manos y modelos adecuados de trabajo y comercialización (y es ahí donde nosotros entramos). Además, la pequeña escala del huerto permite que se desarrolle en ambientes urbanos y periurbanos, lo que te da aún más opciones para empezar tu proyecto de agroemprendedurismo.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="9">
                                    <Accordion.Header>¿Necesito tener un tractor para empezar?</Accordion.Header>
                                    <Accordion.Body>
                                        No, no es necesario. Puedes comenzar sin un tractor propio. Hay alternativas más accesibles:<br />
                                        - Contratar un servicio de motocultivador,<br />
                                        - Arrendar un motocultivador,<br />
                                        Estas opciones te permiten acceder a la maquinaria necesaria sin el costo inicial de compra. Puedes empezar a trabajar en tu huerto sin la inversión inicial en un tractor.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="10">
                                    <Accordion.Header>¿Necesito experiencia previa?</Accordion.Header>
                                    <Accordion.Body>
                                        No, la capacitación está diseñada tanto para principiantes como para personas con algo de experiencia que deseen mejorar sus técnicas.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="11">
                                    <Accordion.Header>¿Qué incluye el valor del curso?</Accordion.Header>
                                    <Accordion.Body>
                                        Incluye todas las clases teóricas y prácticas, materiales de estudio, herramientas para las prácticas y certificado de asistencia. No incluye alojamiento ni comidas.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="12">
                                    <Accordion.Header>¿Hay opciones de alojamiento cerca?</Accordion.Header>
                                    <Accordion.Body>
                                        Sí, en la zona de San Lorenzo y Villa de las Rosas hay una amplia variedad de cabañas y posadas. Podemos ofrecerte un listado de recomendaciones.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Container>
    );
};

export default Home;
