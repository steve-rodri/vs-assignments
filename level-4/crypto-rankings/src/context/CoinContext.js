import React, { createContext, useState, useReducer, useEffect } from "react";
// import throttle from "lodash/throttle";
import coinReducer from "../helpers/coinReducer";
import { loadState, saveState } from "../helpers/persistState";
import { getCoins } from "../services/nomics";

const CoinContext = createContext();

const CoinContextProvider = ({ children }) => {
  const persistedState = loadState("coin-context");
  const initialState = persistedState || { coins: [], store: [], page: 1 };
  const [state, dispatch] = useReducer(coinReducer, initialState);
  const [layout, setLayout] = useState("table");

  const toggleFavorite = coin => {
    coin.favorite = !coin.favorite;
    dispatch({ type: "UPDATE_COIN", payload: coin });
  };

  useEffect(() => {
    const fetchCoins = async () => {
      const coins = await getCoins(state.page);
      if (coins) dispatch({ type: "ADD_COINS", payload: coins });
    };
    if (state.store.length / 100 < state.page) fetchCoins();
  }, [state.page, state.store]);

  useEffect(() => {
    saveState(state, "coin-context");
  }, [state]);

  const value = {
    ...state,
    nextPage: () => dispatch({ type: "NEXT_PAGE" }),
    prevPage: () => dispatch({ type: "PREV_PAGE" }),
    toggleFavorite,
    layout,
    setLayout,
  };
  return <CoinContext.Provider value={value}>{children}</CoinContext.Provider>;
};

export { CoinContextProvider };

export default CoinContext;
