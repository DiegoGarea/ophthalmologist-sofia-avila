import {navLinks} from '../constants';
import {Link} from 'react-router-dom';
import {styles} from '../styles';

const Navbar = () => {
  return (
    <nav className={`${styles.paddingX} bg-[#c2d9ff] fixed top-0 w-full py-5`}>
      <div className="flex justify-between max-w-7xl mx-auto">
        <Link to="/" onClick={window.scrollTo(0, 0)}>
          <img src="" alt="" />
          <p>Dra. Sofia Avila</p>
        </Link>
        <ul className="list:none sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
