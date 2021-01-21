import React from "react";
import { Switch, Route } from "react-router-dom";
import Rankings from "../pages/Rankings";
import Coin from "../pages/Coin";

const Page = () => (
  <Switch>
    <Route exact path="/" component={Rankings} />
    <Route exact path="/favorites" component={Rankings} />
    <Route path="/:coinId" component={Coin} />
  </Switch>
);

export default Page;
