import React from "react";
import Target from "./Target";
import "./Targets.css";

const Targets = ({ data }) => {
  return (
    <div className="Targets">
      {data.map((target, i) => (
        <Target key={`${i}-${target.name}`} {...target} />
      ))}
    </div>
  );
};

export default Targets;
