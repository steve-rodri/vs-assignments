import React from "react";
import PetsList from "./PetsList";

const Friend = ({ name, age, pets }) => {
  return (
    <li className="Friend">
      <h2>{`${name} - ${age}`}</h2>
      <p>Pets: </p>
      <PetsList pets={pets} />
    </li>
  );
};

export default Friend;
