import React from "react";
import season from "../helpers/season";
import gradient from "../helpers/gradient";
import "./Card.css";

const Card = ({ place, price, timeToGo }) => {
  const styles = {
    background: season === timeToGo ? gradient : "",
  };

  const dollarSigns = () => {
    if (price < 500) return "$";
    if (price >= 500 && price <= 1000) return "$$";
    if (price > 1000) return "$$$";
  };

  return (
    <div className="card" style={styles}>
      <h2>{place}</h2>
      <h4 className="dollar-signs">{dollarSigns()}</h4>
      <ul>
        <li>When to go: {`${timeToGo}`}</li>
        <li>Price: ${price}</li>
      </ul>
    </div>
  );
};

export default Card;
