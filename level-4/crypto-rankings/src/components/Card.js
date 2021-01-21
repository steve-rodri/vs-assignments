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

const Card = props => {
  return (
    <div className="card">
      <Logo {...props} />
      <Rank {...props} />
      <MarketCap {...props} />
      <Price {...props} />
      <LinkedName {...props} />
      <Ticker {...props} />
      <PercentChanges {...props} />
    </div>
  );
};

export default Card;
