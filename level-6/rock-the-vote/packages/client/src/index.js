import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import App from "./components/App";

const Root = () => (
  <Router>
    <UserProvider>
      <App />
    </UserProvider>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));
