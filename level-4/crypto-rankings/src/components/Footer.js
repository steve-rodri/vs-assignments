import React from "react";
import nomicsLogo from "../assets/images/nomics.png";

const Footer = () => {
  return (
    <footer>
      <a
        className="nomics"
        href="https://nomics.com"
        target="blank"
        rel="noreferrer"
      >
        <img src={nomicsLogo} alt="nomics" className="nomics-logo" />
      </a>
      <a
        className="nomics"
        href="https://nomics.com"
        target="blank"
        rel="noreferrer"
      >
        <p>Crypto Market Cap & Pricing Data Provided By Nomics.</p>
      </a>
    </footer>
  );
};

export default Footer;
