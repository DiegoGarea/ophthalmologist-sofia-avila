import {motion} from 'framer-motion';
import {whatsapp, facebook, instagram} from '../assets';
import {fadeIn} from '../utils/motion';

const Footer = () => {
  return (
    <footer className="h-[500px] w-full bg-[#c2d9ff] p-5  sm:h-[140px]">
      <motion.div
        className="sm:flex sm:flex-row-reverse sm:items-center sm:max-w-7xl justify-between sm:mx-auto"
        variants={fadeIn('', '', 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
      >
        <div className="sm:flex sm:h-[125px]">
          <button
            onClick={() => window.open('https://wa.me/+523314662319', '_blank')}
            className="w-full bg-[#29a71a] flex justify-center items-center rounded-lg mb-5 sm:w-[33%] sm:mr-[10px] overflow-hidden"
          >
            <img src={whatsapp} alt="whatsapp" className="w-[120px]" />
          </button>
          <div className="flex justify-between mb-5">
            <bottom
              onClick={() =>
                window.open(
                  'https://www.instagram.com/dra.dianasofiaavila/',
                  '_blank'
                )
              }
              className="w-[48%] flex items-center bg-gradient-to-r from-amber-500 to-pink-500 justify-center rounded-lg"
            >
              <img src={instagram} alt="instagram" className="w-[100px]" />
            </bottom>
            <bottom
              onClick={() =>
                window.open(
                  'https://www.facebook.com/profile.php?id=100095421096881',
                  '_blank'
                )
              }
              className="w-[48%] bg-[#1976d2] flex justify-center rounded-lg"
            >
              <img src={facebook} alt="facebook" className="w-[120px]" />
            </bottom>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center text-md h-[43%] rounded-lg">
          <h4>CEDULA MEDICO GENERAL:000000000</h4>
          <h4>CEDULA DE ESPECIALIDAD:000000000</h4>
          <h4>AVISO DE PUBLICIDAD:000000000</h4>
          <p>Correo: dsofiaavilam@gmail.com</p>
          <a href="">web design</a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
