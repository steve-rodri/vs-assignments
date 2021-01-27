import React from "react";
import nomicsLogo from "../assets/images/nomics.png";

const Footer = () => {
  return (
    <footer>
      <p>powered by</p>
      <img src={nomicsLogo} alt="nomics" className="nomics-logo" />
    </footer>
  );
};

export default Footer;
