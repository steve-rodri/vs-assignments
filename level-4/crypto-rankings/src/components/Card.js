import React from "react";
import PercentChanges from "./PercentChanges";
import {
  Rank,
  Logo,
  LinkedName,
  Ticker,
  Price,
  MarketCap,
} from "./_coin-sub-components";
import "../styles/Card.css";

const Card = props => {
  return (
    <div className="card">
      <Logo {...props} />
      <div className="rank-group">
        <Rank {...props} />
        <MarketCap {...props} />
        <Price {...props} />
      </div>
      <div className="name-group">
        <LinkedName {...props} />
        <Ticker {...props} />
      </div>
      <PercentChanges {...props} />
    </div>
  );
};

export default Card;
