import React, { useContext } from "react";
import CoinContext from "../context/CoinContext";
import Row from "./Row";
import Card from "./Card";

const List = ({ layout, ...rest }) => {
  const context = useContext(CoinContext);
  switch (layout) {
    case "cards":
      return <Cards {...rest} {...context} />;
    default:
      return <Table {...rest} {...context} />;
  }
};

const Table = ({ coins }) => {
  return (
    <div className="table">
      {coins.map(coin => (
        <Row {...coin} key={coin.id} />
      ))}
    </div>
  );
};

const Cards = ({ coins }) => {
  return (
    <div className="cards">
      {coins.map(coin => (
        <Card {...coin} key={coin.id} />
      ))}
    </div>
  );
};

export default List;
