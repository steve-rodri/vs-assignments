import React from "react";
import Card from "./Card";
import vacationSpots from "../vacation-spots.json";

const Main = () => {
  return (
    <main>
      {vacationSpots.map((spot, i) => (
        <Card key={`${spot.place}-${i}`} {...spot} />
      ))}
    </main>
  );
};

export default Main;
