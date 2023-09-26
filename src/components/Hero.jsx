import {styles} from '../styles';
import {person} from '../assets';

import {motion} from 'framer-motion';
import {fadeIn} from '../utils/motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <motion.div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col sm:flex-row-reverse items-center sm:justify-between gap-5`}
        variants={fadeIn('', '', 0.2, 1)}
        initial="hidden"
        whileInView="show"
      >
        <img src={person} alt="person" className="w-[500px] rounded-full" />
        <div>
          <h1 className={`${styles.heroHeadText} text-center`}>Hola!</h1>
          <p className={`${styles.heroSubText} text-[#f3fffc] `}>
            Soy la Dra. Sofía Ávila, oftalmóloga. Estoy aquí para cuidar de tu
            salud visual. Si tienes alguna pregunta no dudes en contactarme.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
