import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
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
  const { theme } = useContext(ThemeContext);
  return (
    <div className="row">
      <FavoriteButton {...props} />
      <Link to={`/${props.id}`} className={theme}>
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
