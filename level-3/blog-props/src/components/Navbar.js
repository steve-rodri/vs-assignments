import React, { useRef } from "react";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const menuRef = useRef();
  return (
    <nav>
      <Main menuRef={menuRef} />
      <Menu menuRef={menuRef} type="dropdown" />
    </nav>
  );
};

// ----------------------------------components---------------------------------

const Main = ({ menuRef }) => {
  return (
    <main>
      <h3>Start Bootstrap</h3>
      <DropdownButton menuRef={menuRef} />
      <Menu type="inline" />
    </main>
  );
};

const Menu = ({ menuRef: ref, type }) => {
  return (
    <ul className={`menu ${type}`} ref={ref}>
      <li>
        <button>Home</button>
      </li>
      <li>
        <button>About</button>
      </li>
      <li>
        <button>Sample Post</button>
      </li>
      <li>
        <button>Contact</button>
      </li>
    </ul>
  );
};

const DropdownButton = ({ menuRef }) => {
  const toggleMenu = () => menuRef.current.classList.toggle("show");
  return (
    <button id="dropdown-button" onClick={toggleMenu}>
      Menu <Hamburger />
    </button>
  );
};

export default Navbar;
