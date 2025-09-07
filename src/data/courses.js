import course1Image from '../assets/course-1.png';

export const coursesData = [
  {
    id: 1,
    slug: 'horticultura-biointensiva',
    title: 'Horticultura Biointensiva',
    description: 'Domina las técnicas más avanzadas de cultivo de alta densidad y máximo rendimiento en espacios reducidos. Este curso te enseñará cómo producir más alimentos en menos espacio, utilizando métodos sostenibles y ecológicos.',
    shortDescription: 'Aprende las técnicas más avanzadas de cultivo de alta densidad y máximo rendimiento en espacios reducidos.',
    price: 299,
    originalPrice: 399,
    duration: '8 semanas',
    students: 156,
    rating: 4.8,
    reviews: 47,
    thumbnail: course1Image,
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
];

// Función helper para obtener curso por slug
export const getCourseBySlug = (slug) => {
  return coursesData.find(course => course.slug === slug);
};

// Función helper para obtener todos los cursos
export const getAllCourses = () => {
  return coursesData;
};
