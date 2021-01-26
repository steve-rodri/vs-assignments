import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CoinContext from "../context/CoinContext";
import { getCoinPriceData, getCoinInfo } from "../services/nomics";
import PercentChanges from "../components/PercentChanges";
import Chart from "../components/Chart";
import {
  FavoriteButton,
  Rank,
  Logo,
  Name,
  Price,
  MarketCap,
  Links,
  Description,
} from "../components/_coin-sub-components";
import "../styles/Coin.css";

const Coin = () => {
  const [coin, setCoin] = useState({});
  const { store, toggleFavorite } = useContext(CoinContext);
  const { coinId } = useParams();
  const onFavorite = e => {
    e.stopPropagation();
    toggleFavorite(coin);
  };
  useEffect(() => {
    const fetchCoin = async () => {
      let tmp = store.find(c => c.id === coinId);
      if (!tmp) tmp = await getCoinPriceData(coinId);
      const info = await getCoinInfo(coinId);
      tmp = { ...tmp, ...info };
      setCoin(tmp);
    };
    fetchCoin();
  }, [coinId, store]);
  return (
    <div className="coin">
      <aside>
        <Logo {...coin} />
        <div className="rank-group">
          <Name {...coin} />
          <Rank {...coin} />
          <Price {...coin} />
          <MarketCap {...coin} />
        </div>
        <FavoriteButton {...coin} onFavorite={onFavorite} />
        <Links {...coin} />
      </aside>
      <main>
        <Chart {...coin} />
        <PercentChanges {...coin} />
        <Description {...coin} />
      </main>
    </div>
  );
};
export default Coin;
