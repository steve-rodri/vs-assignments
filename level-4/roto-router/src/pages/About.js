import React from "react";
import { loremIpsum as lorem } from "lorem-ipsum";

const About = () => {
  return (
    <div className="about page">
      <h1>About Us</h1>
      <section>
        <h3>{lorem({ count: 5, units: "words" })}</h3>
        <p>{lorem({ count: 50, units: "words" })}</p>
      </section>
      <section>
        <h3>{lorem({ count: 5, units: "words" })}</h3>
        <p>{lorem({ count: 50, units: "words" })}</p>
      </section>
      <section>
        <h3>{lorem({ count: 5, units: "words" })}</h3>
        <p>{lorem({ count: 50, units: "words" })}</p>
      </section>
    </div>
  );
};

export default About;
