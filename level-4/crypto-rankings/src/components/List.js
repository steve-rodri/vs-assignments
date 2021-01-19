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

const Table = ({ coins, store, toggleFavorite, view }) => {
  if (view === "favorites") coins = store.filter(coin => coin.favorite);
  return (
    <div className="table">
      {coins.map(coin => (
        <Row {...coin} key={coin.id} onFavorite={() => toggleFavorite(coin)} />
      ))}
    </div>
  );
};

const Cards = ({ coins, store, toggleFavorite, view }) => {
  if (view === "favorites") coins = store.filter(coin => coin.favorite);
  return (
    <div className="cards">
      {coins.map(coin => (
        <Card {...coin} key={coin.id} onFavorite={() => toggleFavorite(coin)} />
      ))}
    </div>
  );
};

export default List;
