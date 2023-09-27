import { slide as Menu } from "react-burger-menu";
import { navLinks } from "../constants";
import { facebook, instagram, whatsapp, close } from "../assets";
import { useState } from "react";

const Sidebar = (props) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <Menu
      {...props}
      isOpen={open}
      onStateChange={({ isOpen }) => setOpen(isOpen)}
    >
      <div className="h-full relative">
        <div 
        className="absolute top-[-40px] right-[-25px] cursor-pointer"
        onClick={toggleMenu}
        >
          <img className="h-[40px] w-[40px]" src={close} alt="close" />
        </div>
        <div className="h-[50%]">
          <ul className=" text-white text-center font-bold text-6xl leading-loose">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={toggleMenu}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col h-[50%]">
          <button
            className="w-full bg-[#29a71a] flex justify-center items-center 
          rounded-lg mb-3"
            onClick={() => window.open("https://wa.me/+523314662319", "_blank")}
          >
            <img src={whatsapp} alt="whatsapp" className="w-[120px]" />
          </button>
          <button
            onClick={() =>
              window.open(
                "https://www.instagram.com/dra.dianasofiaavila/",
                "_blank"
              )
            }
            className="w-full h-[120px] flex items-center bg-gradient-to-r from-amber-500 to-pink-500 justify-center rounded-lg mb-3"
          >
            <img src={instagram} alt="instagram" className="w-[100px]" />
          </button>
          <button
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=100095421096881",
                "_blank"
              )
            }
            className="w-full bg-[#1976d2] flex justify-center rounded-lg"
          >
            <img src={facebook} alt="facebook" className="w-[120px]" />
          </button>
        </div>
      </div>
    </Menu>
  );
};

export default Sidebar;
