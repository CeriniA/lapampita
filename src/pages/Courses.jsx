import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSeedling, FaClock, FaUsers, FaPlay } from 'react-icons/fa';
import { getAllCourses } from '../data/courses';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carga de cursos desde fuente centralizada
    setTimeout(() => {
      setCourses(getAllCourses());
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <Container className="mt-5">
        <Row>
          <Col className="text-center">
            <h2>Cargando cursos...</h2>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container as="main" className="mt-5">
      {/* Hero Section */}
      <Row className="mb-5">
        <Col>
          <div className="text-center mb-5">
            <h1>Cursos Online de Horticultura</h1>
            <p className="lead">
              Aprende horticultura comercial ecológica desde casa con el Ing. Agrónomo Facundo José Sánchez
            </p>
          </div>
        </Col>
      </Row>

      {/* Courses Grid */}
      <Row>
        {courses.map(course => (
          <Col md={6} lg={4} key={course.id} className="mb-4">
            <Card className="h-100 course-card">
              <div className="position-relative">
                <Card.Img 
                  variant="top" 
                  src={course.thumbnail} 
                  alt={`Curso de ${course.title} - Horticultura comercial ecológica`}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="position-absolute top-0 end-0 m-2">
                  <span className={`badge ${course.level === 'Principiante' ? 'bg-success' : course.level === 'Intermedio' ? 'bg-warning' : 'bg-danger'}`}>
                    {course.level}
                  </span>
                </div>
              </div>
              
              <Card.Body className="d-flex flex-column">
                <Card.Title>{course.title}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {course.shortDescription}
                </Card.Text>
                
                <div className="course-meta mb-3">
                  <div className="d-flex justify-content-between text-muted small">
                    <span><FaClock className="me-1" />{course.duration}</span>
                    <span><FaUsers className="me-1" />{course.students} estudiantes</span>
                  </div>
                </div>
                
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h4 className="text-primary mb-0">${course.price}</h4>
                    <small className="text-muted">USD</small>
                  </div>
                  <Button 
                    as={Link} 
                    to={`/courses/${course.slug}`}
                    variant="primary"
                    className="d-flex align-items-center"
                  >
                    <FaPlay className="me-2" />
                    Ver Curso
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Call to Action */}
      <Row className="mt-5 mb-5">
        <Col>
          <div className="text-center p-4 bg-light rounded">
            <h3>¿Necesitas ayuda para elegir?</h3>
            <p>Contáctanos y te ayudamos a encontrar el curso perfecto para tu nivel y objetivos.</p>
            <Button as={Link} to="/contact" variant="outline-primary" size="lg">
              Contactar Asesor
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
