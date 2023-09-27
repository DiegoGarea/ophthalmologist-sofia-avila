import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo } from "../assets";
import {Sidebar} from '../components';

const Navbar = () => {
  return (
    <>
      <div className="sm:hidden">
        <Sidebar width={"100%"} customCrossIcon={ false } />
      </div>
      <nav
        className={`${styles.paddingX} bg-gradient-to-r from-cyan-500 to-blue-500 fixed top-0 w-full py-5 z-20 shadow-md shadow-slate-500`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 mx-4 rounded-full"
            />
            <p className="text-white text-lg font-bold">Dra. Sofia Avila</p>
          </Link>
          <ul className="hidden sm:flex gap-10 text-white font-bold text-lg">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
