import React from "react";
import PercentChanges from "./PercentChanges";
import {
  FavoriteButton,
  Rank,
  Logo,
  Name,
  Price,
  MarketCap,
} from "./_coin-sub-components";

const Row = props => {
  return (
    <div className="row" style={{ display: "flex" }}>
      <FavoriteButton {...props} />
      <Rank {...props} />
      <Logo {...props} />
      <Name {...props} />
      <Price {...props} />
      <PercentChanges {...props} />
      <MarketCap {...props} />
    </div>
  );
};

export default Row;
