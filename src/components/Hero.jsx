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
        <img className="" src={person} alt="person" />
        <div>
          <h1 className={`${styles.heroHeadText} text-black`}>Hi There</h1>
          <p className={`${styles.heroSubText} text-black`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            fuga voluptatum enim, assumenda vel accusantium aspernatur ipsa odio
            iste odit natus, quaerat voluptate mollitia. Nisi pariatur nam
            exercitationem in ut.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
