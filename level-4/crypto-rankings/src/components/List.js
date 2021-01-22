import React, { useContext } from "react";
import CoinContext from "../context/CoinContext";
import TableHeaderRow from "./TableHeaderRow";
import Row from "./Row";
import Card from "./Card";
import "../styles/Row.css";

const List = ({ view }) => {
  let { coins, store, layout, toggleFavorite } = useContext(CoinContext);
  const onFavorite = (e, coin) => {
    e.stopPropagation();
    toggleFavorite(coin);
  };
  if (view === "favorites") coins = store.filter(coin => coin.favorite);
  const className =
    layout === "cards"
      ? view === "favorites"
        ? "cards favorites"
        : "cards"
      : "table";
  return (
    <div className={className}>
      {layout === "table" && <TableHeaderRow />}
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
