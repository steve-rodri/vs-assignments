import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ token, ...rest }) =>
  token ? <Route {...rest} /> : <Redirect to="/login" />;

export const UnknownRoute = () => (
  <Route path="*" render={() => <Redirect to="/" />} />
);
