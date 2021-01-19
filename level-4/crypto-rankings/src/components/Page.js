import React from "react";
import { useRouteMatch as useRoute } from "react-router-dom";
import Rankings from "../pages/Rankings";
import Coin from "../pages/Coin";

const Page = () => {
  const home = useRoute("/");
  const favorites = useRoute("/favorites");
  const coin = useRoute("/:coinId)");
  if (home.isExact) return <Rankings {...home} />;
  if (favorites.isExact) return <Rankings {...favorites} />;
  if (coin) return <Coin {...coin} />;
};

export default Page;
