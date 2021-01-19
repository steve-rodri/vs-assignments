import React from "react";
import PercentChanges from "./PercentChanges";
import {
  Rank,
  Logo,
  Name,
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
      <Name {...props} />
      <Ticker {...props} />
      <PercentChanges {...props} />
    </div>
  );
};

export default Card;
