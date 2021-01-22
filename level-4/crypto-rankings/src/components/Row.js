import React from "react";
import { Link } from "react-router-dom";
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
    <div className="row">
      <FavoriteButton {...props} />
      <Link to={`/${props.id}`}>
        <Rank {...props} />
        <Logo {...props} />
        <Name {...props} />
        <Price {...props} />
        <PercentChanges {...props} />
        <MarketCap {...props} />
      </Link>
    </div>
  );
};

export default Row;
