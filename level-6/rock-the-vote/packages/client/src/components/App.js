import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Issues, Login, Detail } from "../pages";
import { ProtectedRoute, UnknownRoute } from "./routes";
import UserContext from "../context/UserContext";

const App = () => {
  const { token } = useContext(UserContext);
  return (
    <Switch>
      <Route
        path="/login"
        render={props => (token ? <Redirect to="/" /> : <Login {...props} />)}
      />
      <ProtectedRoute exact path="/" component={Issues} token={token} />
      <ProtectedRoute path="/users/:id" component={Issues} token={token} />
      <ProtectedRoute path="/:id" component={Detail} token={token} />
      <UnknownRoute />
    </Switch>
  );
};

export default App;
