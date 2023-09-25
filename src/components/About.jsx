import SectionWrapper from '../hoc/SectionWrapper';
import {styles} from '../styles';
import {motion} from 'framer-motion';
import {fadeIn} from '../utils/motion';

const About = () => {
  return (
    <section className="bg-[#c2d9ff] p-5 rounded-lg">
      <motion.div
        className="p-10"
        variants={fadeIn('', '', 0.2, 1)}
        initial="hidden"
        whileInView="show"
      >
        <h2 className={`${styles.sectionHeadText} text-center mb-5`}>
          Conoceme...
        </h2>

        <p className={`${styles.sectionSubText}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
          praesentium qui. Et temporibus ducimus id architecto debitis
          doloremque voluptatem ipsum fuga quaerat, voluptas facilis aliquid sed
          omnis sequi porro officiis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eligendi, aspernatur quasi expedita ab distinctio,
          hic tempore veniam repudiandae dolores ipsam temporibus nulla iure
          accusamus illo nobis dolore facilis. Ullam, et.
        </p>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(About, 'about');
