import SectionWrapper from '../hoc/SectionWrapper';
import {motion} from 'framer-motion';
import {fadeIn} from '../utils/motion';
import {services} from '../constants';
import {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import {styles} from '../styles';
import TypingText from './TypingText';

const ServiceCard = ({image, title, description, index}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      className="w-full sm:flex justify-center"
      variants={fadeIn('right', 'spring', 0.5 * index, 0.65)}
      initial="hidden"
      whileInView="show"
      viewport={{once: true, amount: 0.15}}
    >
      <ReactCardFlip
        isFlipped={isFlipped}
        flipSpeedBackToFront={1.1}
        flipSpeedFrontToBack={1.1}
      >
        <div
          className={`${styles.heroSubText} relative flex flex-col items-center sm:w-[300px]  h-[400px] bg-blue-400 rounded-lg p-5`}
        >
          <img className="w-[250px] h-[250px] mb-6" src={image} alt="" />
          <h3 className="text-2xl">{title}</h3>
          <button
            className={`${styles.heroSubText} absolute w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-500 bottom-0 rounded-b-lg`}
            onClick={handleClick}
          >
            Mas Informacion
          </button>
        </div>

        <div
          className={`text-white text-center relative flex flex-col items-center sm:w-[300px] h-[400px] bg-blue-400 rounded-lg p-8`}
        >
          <p>{description}</p>
          <button
            className="absolute w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-500 bottom-0 rounded-b-lg"
            onClick={handleClick}
          >
            Volver
          </button>
        </div>
      </ReactCardFlip>
    </motion.div>
  );
};

const Services = () => {
  return (
    <>
      {/* <motion.div className="mb-10">
        <h2 className={`${styles.sectionHeadText} text-center`}>Servicios</h2>
      </motion.div> */}
      <div className="mb-16">
        <TypingText
          title="Servicios"
          textStyles={`${styles.sectionHeadText} text-center`}
        />
      </div>
      <div className="flex flex-col items-center sm:flex-row sm:place-content-evenly gap-5">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Services, 'services');
