import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Login, Detail } from "../pages";
import { ProtectedRoute, UnknownRoute } from "./routes";

const App = () => {
  return (
    <Switch>
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute path="/:id" component={Detail} />
      <Route to="/login" component={Login} />
      <UnknownRoute />
    </Switch>
  );
};

export default App;
