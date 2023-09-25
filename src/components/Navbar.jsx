import {navLinks} from '../constants';
import {Link} from 'react-router-dom';
import {styles} from '../styles';
import {hamburguer, logo} from '../assets';

const Navbar = () => {
  return (
    <nav
      className={`${styles.paddingX} bg-[#c2d9ff] fixed top-0 w-full py-5 z-20`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center"
          onClick={()=>{window.scrollTo(0, 0)}}
        >
          <img src={logo} alt="logo" className="w-10 h-10 mx-4 rounded-full" />
          <p>Dra. Sofia Avila</p>
        </Link>
        <ul className="hidden sm:flex gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden">
          <img src={hamburguer} alt="hamburger" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
