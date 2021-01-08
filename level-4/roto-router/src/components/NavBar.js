import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  let { pathname } = useLocation();
  const style = path => (pathname === path ? { color: "white" } : {});
  return (
    <nav>
      <Link to="/" style={style("/")}>
        Home
      </Link>
      <Link to="/about" style={style("/about")}>
        About
      </Link>
      <Link to="/services" style={style("/services")}>
        Services
      </Link>
    </nav>
  );
};

export default NavBar;
