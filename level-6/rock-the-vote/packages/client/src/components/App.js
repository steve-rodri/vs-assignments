import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ProtectedRoute, UnknownRoute } from "../components";
import { Issues, Login, IssueDetail } from "../pages";
import { UserContext } from "../context";

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
      <ProtectedRoute path="/:id" component={IssueDetail} token={token} />
      <UnknownRoute />
    </Switch>
  );
};

export default App;
