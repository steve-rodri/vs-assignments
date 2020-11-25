import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Icons />
      <p>Copyright © Your Website 2021</p>
    </footer>
  );
};

// --------------------------------components-----------------------------------

const Icons = () => {
  return (
    <div className="icons">
      <div className="icon">
        <i className="fab fa-twitter"></i>
      </div>
      <div className="icon">
        <i className="fab fa-facebook-f"></i>
      </div>
      <div className="icon">
        <i className="fab fa-github"></i>
      </div>
    </div>
  );
};
export default Footer;
