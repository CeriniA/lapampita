import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Accordion, ListGroup, Modal } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { FaClock, FaUsers, FaPlay, FaLock, FaCheck, FaStar, FaDownload } from 'react-icons/fa';

const CourseDetail = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userAccess, setUserAccess] = useState({
    isLoggedIn: false,
    hasPurchased: false,
    user: null
  });
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    // Simular carga de curso específico
    const mockCourses = {
      'horticultura-biointensiva': {
        id: 1,
        slug: 'horticultura-biointensiva',
        title: 'Horticultura Biointensiva',
        description: 'Domina las técnicas más avanzadas de cultivo de alta densidad y máximo rendimiento en espacios reducidos. Este curso te enseñará cómo producir más alimentos en menos espacio, utilizando métodos sostenibles y ecológicos.',
        price: 299,
        originalPrice: 399,
        duration: '8 semanas',
        students: 156,
        rating: 4.8,
        reviews: 47,
        thumbnail: '/assets/course-1.jpg',
        level: 'Intermedio',
        instructor: 'Ing. Agrónomo Facundo José Sánchez',
        whatYouLearn: [
          'Técnicas de cultivo biointensivo de alta densidad',
          'Optimización del uso del espacio y recursos',
          'Métodos de compostaje intensivo',
          'Rotación de cultivos para máximo rendimiento',
          'Herramientas y equipamiento especializado',
          'Planificación y gestión de la producción'
        ],
        curriculum: [
          {
            title: 'Fundamentos de la Horticultura Biointensiva',
            lessons: [
              { title: 'Historia y principios básicos', duration: '15 min', free: true },
              { title: 'Preparación profunda del suelo', duration: '25 min', free: false },
              { title: 'Selección de variedades apropiadas', duration: '20 min', free: false }
            ]
          },
          {
            title: 'Técnicas de Siembra y Plantación',
            lessons: [
              { title: 'Espaciado intensivo de cultivos', duration: '30 min', free: false },
              { title: 'Siembra en hexágono vs. hileras', duration: '22 min', free: false },
              { title: 'Transplante y cuidados iniciales', duration: '18 min', free: false }
            ]
          },
          {
            title: 'Manejo del Suelo y Nutrición',
            lessons: [
              { title: 'Compostaje biointensivo', duration: '35 min', free: false },
              { title: 'Cultivos de carbono', duration: '28 min', free: false },
              { title: 'Fertilización natural', duration: '20 min', free: false }
            ]
          }
        ],
        requirements: [
          'Conocimientos básicos de horticultura',
          'Acceso a un espacio de cultivo (mínimo 10m²)',
          'Herramientas básicas de jardinería'
        ],
        includes: [
          '25+ videos en alta definición',
          'Material descargable (PDFs, plantillas)',
          'Acceso de por vida al curso',
          'Certificado de finalización',
          'Soporte directo del instructor',
          'Grupo privado de estudiantes'
        ]
      }
    };

    setTimeout(() => {
      const courseData = mockCourses[slug];
      if (courseData) {
        setCourse(courseData);
        // Simular verificación de acceso (después conectarás con tu API)
        setUserAccess({
          isLoggedIn: false, // Cambiar según estado real
          hasPurchased: false, // Cambiar según compra real
          user: null
        });
      }
      setLoading(false);
    }, 1000);
  }, [slug]);

  const handlePurchase = () => {
    if (!userAccess.isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    // Aquí integrarías con Stripe o tu sistema de pagos
    alert('Redirigiendo a página de pago...');
  };

  const handleLogin = () => {
    // Aquí integrarías con tu sistema de autenticación
    alert('Redirigiendo a login...');
    setShowLoginModal(false);
  };

  if (loading) {
    return (
      <Container className="mt-5">
        <Row>
          <Col className="text-center">
            <h2>Cargando curso...</h2>
          </Col>
        </Row>
      </Container>
    );
  }

  if (!course) {
    return (
      <Container className="mt-5">
        <Row>
          <Col className="text-center">
            <h2>Curso no encontrado</h2>
            <Button as={Link} to="/courses" variant="primary">
              Ver todos los cursos
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container as="main" className="mt-5">
      <Row>
        {/* Main Content */}
        <Col lg={8}>
          {/* Course Header */}
          <div className="mb-4">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                <li className="breadcrumb-item"><Link to="/courses">Cursos</Link></li>
                <li className="breadcrumb-item active">{course.title}</li>
              </ol>
            </nav>
            
            <h1>{course.title}</h1>
            <p className="lead">{course.description}</p>
            
            <div className="d-flex align-items-center gap-3 mb-3">
              <Badge bg={course.level === 'Principiante' ? 'success' : course.level === 'Intermedio' ? 'warning' : 'danger'}>
                {course.level}
              </Badge>
              <span className="d-flex align-items-center">
                <FaStar className="text-warning me-1" />
                {course.rating} ({course.reviews} reseñas)
              </span>
              <span><FaUsers className="me-1" />{course.students} estudiantes</span>
              <span><FaClock className="me-1" />{course.duration}</span>
            </div>
            
            <p className="text-muted">Por {course.instructor}</p>
          </div>

          {/* Course Video/Preview */}
          <Card className="mb-4">
            <div style={{ height: '300px', backgroundColor: '#f8f9fa' }} className="d-flex align-items-center justify-content-center">
              <div className="text-center">
                <FaPlay size={50} className="text-primary mb-3" />
                <h4>Vista previa del curso</h4>
                <p>Video introductorio gratuito</p>
              </div>
            </div>
          </Card>

          {/* What You'll Learn */}
          <Card className="mb-4">
            <Card.Header>
              <h4>¿Qué aprenderás?</h4>
            </Card.Header>
            <Card.Body>
              <Row>
                {course.whatYouLearn.map((item, index) => (
                  <Col md={6} key={index} className="mb-2">
                    <div className="d-flex align-items-start">
                      <FaCheck className="text-success me-2 mt-1" />
                      <span>{item}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>

          {/* Course Curriculum */}
          <Card className="mb-4">
            <Card.Header>
              <h4>Contenido del curso</h4>
            </Card.Header>
            <Card.Body>
              <Accordion>
                {course.curriculum.map((section, sectionIndex) => (
                  <Accordion.Item eventKey={sectionIndex.toString()} key={sectionIndex}>
                    <Accordion.Header>
                      {section.title} ({section.lessons.length} lecciones)
                    </Accordion.Header>
                    <Accordion.Body>
                      <ListGroup variant="flush">
                        {section.lessons.map((lesson, lessonIndex) => (
                          <ListGroup.Item key={lessonIndex} className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                              {lesson.free ? (
                                <FaPlay className="text-success me-2" />
                              ) : (
                                <FaLock className="text-muted me-2" />
                              )}
                              <span>{lesson.title}</span>
                              {lesson.free && <Badge bg="success" className="ms-2">Gratis</Badge>}
                            </div>
                            <span className="text-muted">{lesson.duration}</span>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Card.Body>
          </Card>

          {/* Requirements */}
          <Card className="mb-4">
            <Card.Header>
              <h4>Requisitos</h4>
            </Card.Header>
            <Card.Body>
              <ul>
                {course.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>

        {/* Sidebar */}
        <Col lg={4}>
          <Card className="sticky-top" style={{ top: '20px' }}>
            <Card.Body>
              <div className="text-center mb-3">
                <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                  <h3 className="text-primary mb-0">${course.price}</h3>
                  {course.originalPrice && (
                    <span className="text-muted text-decoration-line-through">${course.originalPrice}</span>
                  )}
                </div>
                <small className="text-muted">Precio en USD</small>
              </div>

              {userAccess.hasPurchased ? (
                <Button variant="success" size="lg" className="w-100 mb-3">
                  <FaPlay className="me-2" />
                  Continuar curso
                </Button>
              ) : (
                <Button variant="primary" size="lg" className="w-100 mb-3" onClick={handlePurchase}>
                  Comprar curso
                </Button>
              )}

              <div className="text-center mb-3">
                <small className="text-muted">30 días de garantía de devolución</small>
              </div>

              <hr />

              <h5>Este curso incluye:</h5>
              <ul className="list-unstyled">
                {course.includes.map((item, index) => (
                  <li key={index} className="mb-2">
                    <FaCheck className="text-success me-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Necesitas iniciar sesión para comprar este curso.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLoginModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Iniciar Sesión
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CourseDetail;
