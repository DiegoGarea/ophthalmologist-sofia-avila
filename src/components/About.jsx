import SectionWrapper from '../hoc/SectionWrapper';
import {styles} from '../styles';
import {motion} from 'framer-motion';
import {fadeIn} from '../utils/motion';
import TypingText from './TypingText';

const About = () => {
  return (
    <>
      {/* <motion.div>
        <h2 className={`${styles.sectionHeadText} text-center mb-10`}>
          Conoceme
        </h2>
      </motion.div> */}
      <div className="mb-16">
        <TypingText
          title="Conoceme"
          textStyles={`${styles.sectionHeadText} text-center`}
        />
      </div>
      <motion.div
        className="bg-blue-400 p-7 sm:p-14 rounded-lg"
        variants={fadeIn('', '', 0.2, 1)}
        initial="hidden"
        whileInView="show"
      >
        <p className={`${styles.sectionSubText}`}>
          Permítanme presentarme, soy la Doctora Sofía Ávila, una oftalmóloga
          dedicada y apasionada por el cuidado de la salud visual. Mi compromiso
          inquebrantable es atender a cada paciente con el corazón y la
          experiencia que han sido el fundamento de mi carrera. Mi enfoque no se
          limita solo a tratar las condiciones oculares, sino a comprender las
          necesidades únicas de cada individuo. Creo firmemente que la atención
          médica debe ser personalizada y empática. Por lo tanto, no solo les
          ofrezco tratamientos avanzados, sino también apoyo emocional y
          educación para que mis pacientes tomen decisiones informadas sobre su
          salud visual.
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, 'about');
