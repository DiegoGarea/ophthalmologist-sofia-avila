import {ojo1, ojo2, lentes, cruz, herobackground} from '../assets';

const HeroPattern = () => (
  <>
    <img
      src={ojo1}
      className="hidden sm:block w-8 absolute top-[5%] left-[20%] transform rotate-90 opacity-30"
    />
    <img
      src={lentes}
      className="hidden sm:block w-14 absolute top-[10%] left-[40%] transform rotate-90 opacity-40"
    />
    <img
      src={cruz}
      className="hidden sm:block w-10 absolute top-[15%] left-[60%] transform rotate-90 opacity-10"
    />
    <img
      src={ojo2}
      className="hidden sm:block w-8 absolute top-[20%] left-[80%] transform rotate-90 opacity-30"
    />
    <img
      src={ojo1}
      className="hidden sm:block w-8 absolute top-[15%] left-[20%] transform rotate-90 opacity-30"
    />
    <img
      src={lentes}
      className="hidden sm:block w-14 absolute top-[25%] left-[40%] transform rotate-90 opacity-40"
    />
    <img
      src={cruz}
      className="hidden sm:block w-8 absolute top-[5%] left-[60%] transform rotate-90 opacity-30"
    />
    <img
      src={ojo2}
      className="hidden sm:block w-8 absolute top-[10%] left-[80%] transform rotate-90 opacity-30"
    />
    <img
      src={herobackground}
      className="hidden w-full top-[2%] sm:block absolute transform opacity-10"
    />
  </>
);

export default HeroPattern;
