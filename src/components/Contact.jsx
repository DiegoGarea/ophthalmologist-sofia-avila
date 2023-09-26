import React from 'react';
import {letras} from '../assets';
import {styles} from '../styles';
import SectionWrapper from '../hoc/SectionWrapper';
import {motion} from 'framer-motion';
import {fadeIn} from '../utils/motion';
import TypingText from './TypingText';

const Contact = () => {
  return (
    <div className="sm:flex sm:max-w-6xl justify-between sm:mx-auto mb-10 p-14 bg-blue-300 rounded-lg">
      <div className="flex">
        <img src={letras} alt="letras" className="w-[400px]" />
      </div>
      <div className="flex flex-col justify-center text-center  rounded-lg">
        <TypingText
          title="Agenda tu cita!"
          textStyles={`${styles.sectionHeadText} text-center`}
        />
        {/* <h2 className={`${styles.sectionHeadText}`}>Agenda tu cita!</h2> */}
        <motion.p
          variants={fadeIn('', '', 0.2, 2.5)}
          initial="hidden"
          whileInView="show"
          className={`${styles.sectionSubText} p-8`}
        >
          Protege tu visión y tu calidad de vida: ¡Hazte un chequeo
          oftalmológico anual para asegurarte de que tus ojos estén en su mejor
          estado!
        </motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'Contact');
