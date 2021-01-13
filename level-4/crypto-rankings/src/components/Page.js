import React from "react";
import { useRouteMatch as useRoute } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Coin from "../pages/Coin";

const Page = () => {
  const home = useRoute("/");
  const favorites = useRoute("/favorites");
  const coin = useRoute("/:coinId)");
  if (home.isExact) return <Home />;
  if (favorites) return <Favorites />;
  if (coin) return <Coin />;
};

export default Page;
