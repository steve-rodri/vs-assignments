import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CoinContext from "../context/CoinContext";
import { getCoinPriceData, getCoinInfo } from "../services/nomics";
import PercentChanges from "../components/PercentChanges";
import {
  FavoriteButton,
  Rank,
  Logo,
  Name,
  Price,
  MarketCap,
} from "../components/_coin-sub-components";

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
      <FavoriteButton {...coin} onFavorite={onFavorite} />
      <Rank {...coin} />
      <Logo {...coin} />
      <Name {...coin} />
      <Price {...coin} />
      <PercentChanges {...coin} />
      <MarketCap {...coin} />
    </div>
  );
};
export default Coin;
