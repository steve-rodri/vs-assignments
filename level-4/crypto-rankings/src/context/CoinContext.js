import React, { createContext, useState, useEffect } from "react";
import { getCoins } from "../services/nomics";

const CoinContext = createContext();

const CoinContextProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);

  const nextPage = () => setPage(p => p + 1);
  const prevPage = () => setPage(p => p - 1);

  useEffect(() => {
    const fetchCoins = async () => {
      const coins = await getCoins(page);
      setCoins(coins);
    };
    fetchCoins();
  }, [page]);

  const valueProps = { coins, nextPage, prevPage };
  return (
    <CoinContext.Provider value={valueProps}>{children}</CoinContext.Provider>
  );
};

export { CoinContextProvider };

export default CoinContext;
