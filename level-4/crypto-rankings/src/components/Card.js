import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { Link } from "react-router-dom";
import PercentChanges from "./PercentChanges";
import {
  Rank,
  Logo,
  Name,
  Ticker,
  Price,
  MarketCap,
} from "./_coin-sub-components";
import "../styles/Card.css";

const Card = coin => {
  const { theme } = useContext(ThemeContext);
  return (
    <Link className={`card ${theme} `} to={`/${coin.id}`}>
      <Logo {...coin} />
      <div className="rank-group">
        <Rank {...coin} />
        <MarketCap {...coin} />
        <Price {...coin} />
      </div>
      <div className="name-group">
        <Name {...coin} showStar={true} />
        <Ticker {...coin} />
      </div>
      <PercentChanges {...coin} />
    </Link>
  );
};

export default Card;
