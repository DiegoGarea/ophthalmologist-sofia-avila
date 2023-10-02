import {service1, service2, service3} from '../assets';

const navLinks = [
  {
    id: 'about',
    title: 'Conoceme',
  },
  {
    id: 'services',
    title: 'Servicios',
  },
  {
    id: 'Contact',
    title: 'Contacto',
  },
];

const services = [
  {
    image: service1,
    title: 'Consulta',
    description:
      ' La consulta con un oftalmólogo es esencial para detectar problemas oculares a tiempo y encontrar soluciones adecuadas, ya sea mediante corrección visual con gafas o lentes de contacto, o el tratamiento de afecciones más serias. Estoy aquí para ayudarte en lo que necesites. ¡No dudes en agendar tu cita!',
  },
  {
    image: service2,
    title: 'Laser',
    description:
      ' Los beneficios de la cirugía láser incluyen precisión, recuperación rápida, menos dolor y cicatrices mínimas, además de menor tiempo de hospitalización. También ofrece resultados efectivos y personalización según las necesidades del paciente. ¡Agenda tu cita hoy mismo!',
  },
  {
    image: service3,
    title: 'Cirugia Quirurgica',
    description:
      ' La cirugía tradicional varía según el caso y ofrece experiencia, versatilidad y resultados probados en procedimientos médicos y quirúrgicos. La elección del procedimiento depende de cada situación en particular. Agenda tu cita',
  },
];

// este es el correo de sofia para agregar al footer dsofiaavilam@gmail.com

export {navLinks, services};
