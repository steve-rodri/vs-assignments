import React from "react";

const Pet = ({ name, breed }) => {
  return (
    <li className="Pet">
      <h3>
        {name} - <span>{breed}</span>
      </h3>
    </li>
  );
};

export default Pet;
