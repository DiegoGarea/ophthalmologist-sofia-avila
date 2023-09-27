import React from 'react';
import {letras} from '../assets';
import {styles} from '../styles';
import SectionWrapper from '../hoc/SectionWrapper';
import {motion} from 'framer-motion';
import {fadeIn} from '../utils/motion';
import TypingText from './TypingText';
import {whatsapp} from '../assets';

const Contact = () => {
  return (
    <>
      <div className="mb-10">
        <TypingText
          title="Agenda tu cita!"
          textStyles={`${styles.sectionHeadText} text-center`}
        />
      </div>
      <div className="sm:flex sm:max-w-6xl h-[575px] justify-between sm:mx-auto mb-10 p-14 bg-blue-400 rounded-lg relative">
        <div className="flex mb-5">
          <img src={letras} alt="letras" className="w-[400px] mb-5" />
        </div>
        <div className="flex flex-col text-center rounded-lg sm:w-[50%]">
          <motion.p
            variants={fadeIn('', '', 0.2, 2.5)}
            initial="hidden"
            whileInView="show"
            className={`${styles.sectionSubText} sm:mt-16`}
          >
            Protege tu visión y tu calidad de vida: ¡Hazte un chequeo
            oftalmológico anual para asegurarte de que tus ojos estén en su
            mejor estado!
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 sm:left-[47%] sm:w-[50%] sm:p-10 sm:bottom-[20%]">
          <button
            className="w-full bg-[#29a71a] flex justify-center items-center 
          rounded-b-lg sm:rounded-lg"
            onClick={() => window.open('https://wa.me/+523314662319', '_blank')}
          >
            <img src={whatsapp} alt="whatsapp" className="w-[120px]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'Contact');
