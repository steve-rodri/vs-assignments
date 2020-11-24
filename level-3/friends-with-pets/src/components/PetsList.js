import React from "react";
import Pet from "./Pet";

const PetsList = ({ pets }) => {
  return (
    <ul className="Pets">
      {pets.map((pet, i) => (
        <Pet key={`${i}-${pet}`} {...pet} />
      ))}
    </ul>
  );
};

export default PetsList;
