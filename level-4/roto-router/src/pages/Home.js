import React from "react";
import manPlumbing from "../assets/man-plumbing.jpg";

const Home = () => {
  return (
    <div className="home page">
      <h1>ABC Plumbing</h1>
      <img src={manPlumbing} alt="man-plumbing" />
    </div>
  );
};

export default Home;
