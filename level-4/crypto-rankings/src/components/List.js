import React, { useContext } from "react";
import CoinContext from "../context/CoinContext";
import Row from "./Row";
import Card from "./Card";

const List = ({ view }) => {
  let { coins, store, layout, toggleFavorite } = useContext(CoinContext);
  const onFavorite = (e, coin) => {
    e.stopPropagation();
    toggleFavorite(coin);
  };
  if (view === "favorites") coins = store.filter(coin => coin.favorite);
  return (
    <div className={layout === "cards" ? "cards" : "table"}>
      {coins.map(coin =>
        layout === "cards" ? (
          <Card {...coin} key={coin.id} onFavorite={e => onFavorite(e, coin)} />
        ) : (
          <Row {...coin} key={coin.id} onFavorite={e => onFavorite(e, coin)} />
        )
      )}
    </div>
  );
};

export default List;
