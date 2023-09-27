import {motion} from 'framer-motion';
import {facebook, instagram} from '../assets';
import {fadeIn} from '../utils/motion';

const Footer = () => {
  return (
    <footer className="h-[315px] w-full bg-gradient-to-r from-cyan-500 to-blue-500 p-5  sm:h-[140px]">
      <motion.div
        className="sm:flex sm:flex-row-reverse sm:items-center sm:max-w-7xl h-full justify-between sm:mx-auto"
        variants={fadeIn('', '', 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
      >
        <div className="sm:flex sm:h-[125px] sm:mr-16 sm:mt-5">
          <div className="flex justify-between mb-5 sm:mb-5">
            <button
              onClick={() =>
                window.open(
                  'https://www.instagram.com/dra.dianasofiaavila/',
                  '_blank'
                )
              }
              className="w-[48%] flex items-center bg-gradient-to-r from-amber-500 to-pink-500 justify-center rounded-lg"
            >
              <img src={instagram} alt="instagram" className="w-[100px]" />
            </button>
            <button
              onClick={() =>
                window.open(
                  'https://www.facebook.com/profile.php?id=100095421096881',
                  '_blank'
                )
              }
              className="w-[48%] bg-[#1976d2] flex justify-center rounded-lg"
            >
              <img src={facebook} alt="facebook" className="w-[120px]" />
            </button>
          </div>
        </div>
        <div className="flex flex-col text-white font-semibold text-center text-md rounded-lg sm:text-sm sm:ml-16">
          <h4>CEDULA MEDICO GENERAL:000000000</h4>
          <h4>CEDULA DE ESPECIALIDAD:000000000</h4>
          <h4>AVISO DE PUBLICIDAD:000000000</h4>
          <a className="mb-2" href="mailto:dsofiaavilam@gmail.com">
            dsofiaavilam@gmail.com
          </a>
          <hr className="mb-2" />
          <a href="">web design</a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
