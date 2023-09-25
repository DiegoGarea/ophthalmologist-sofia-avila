import SectionWrapper from '../hoc/SectionWrapper';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { services } from '../constants';
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const ServiceCard = ({image, title, description, index}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
    variants={fadeIn('right', 'spring', 0.5 * index, 0.65)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.15 }}
    >
    <ReactCardFlip 
    isFlipped={isFlipped} 
    flipSpeedBackToFront={1.1}
    flipSpeedFrontToBack={1.1}
    >
      <div className="relative flex flex-col items-center w-[300px] h-[400px] bg-blue-400 rounded-lg p-5">
        <img className="w-[250px] h-[250px] mb-6" src={image} alt="" />
        <h3 className='text-2xl'>{title}</h3>
        <button className='absolute w-full h-12 bg-[#3dd4cc] bottom-0 rounded-b-lg' onClick={handleClick}>Mas Informacion</button>
      </div>

      <div className="relative flex flex-col items-center w-[300px] h-[400px] bg-blue-400 rounded-lg p-5">
        <p>{description}</p>
        <button className='absolute w-full h-12 bg-orange-400 bottom-0 rounded-b-lg' onClick={handleClick}>Volver</button>
      </div>
    </ReactCardFlip>
    </motion.div>
  );
};

const Services = () => {
  return (
    <>
    <div
    className='flex flex-col items-center sm:flex-row sm:place-content-evenly gap-5'
    >
      {services.map((service, index) =>(
        <ServiceCard key={index} index={index} {...service}/>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Services, 'services');
