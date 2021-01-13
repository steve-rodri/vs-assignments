import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { CoinContextProvider } from "./context/CoinContext";
import App from "./components/App";

const Root = () => (
  <Router>
    <CoinContextProvider>
      <App />
    </CoinContextProvider>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));
