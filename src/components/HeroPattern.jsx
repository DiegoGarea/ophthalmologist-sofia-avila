import {ojo1, ojo2, lentes, cruz} from '../assets';

const HeroPattern = () => (
  <>
    <img
      src={ojo1}
      className="hidden sm:block w-8 absolute top-[5%] left-[20%] transform rotate-90 opacity-70"
    />
    <img
      src={lentes}
      className="hidden sm:block w-14 absolute top-[10%] left-[40%] transform rotate-90 opacity-70"
    />
    <img
      src={cruz}
      className="hidden sm:block w-10 absolute top-[15%] left-[60%] transform rotate-90 opacity-50"
    />
    <img
      src={ojo2}
      className="hidden sm:block w-8 absolute top-[20%] left-[80%] transform rotate-90 opacity-70"
    />
    <img
      src={ojo1}
      className="hidden sm:block w-8 absolute top-[15%] left-[20%] transform rotate-90 opacity-70"
    />
    <img
      src={lentes}
      className="hidden sm:block w-14 absolute top-[25%] left-[40%] transform rotate-90 opacity-70"
    />
    <img
      src={cruz}
      className="hidden sm:block w-8 absolute top-[5%] left-[60%] transform rotate-90 opacity-50"
    />
    <img
      src={ojo2}
      className="hidden sm:block w-8 absolute top-[10%] left-[80%] transform rotate-90 opacity-70"
    />
  </>
);

export default HeroPattern;
