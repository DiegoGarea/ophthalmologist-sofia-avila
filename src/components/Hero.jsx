import { styles } from "../styles";
import { person } from "../assets";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col sm:flex-row-reverse items-center sm:justify-between gap-5`}
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
      </div>
    </section>
  );
};

export default Hero;
