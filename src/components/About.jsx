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
      <div className="mb-10">
        <TypingText title="Conoceme" textStyles={`${styles.sectionHeadText} text-center`}/>
      </div>
      <motion.div
        className="bg-[#c2d9ff] p-5 rounded-lg"
        variants={fadeIn('', '', 0.2, 1)}
        initial="hidden"
        whileInView="show"
      >
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
    </>
  );
};

export default SectionWrapper(About, 'about');
