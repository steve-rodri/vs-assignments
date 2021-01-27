import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { CoinContextProvider } from "./context/CoinContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import App from "./components/App";

const Root = () => (
  <Router>
    <ThemeContextProvider>
      <CoinContextProvider>
        <App />
      </CoinContextProvider>
    </ThemeContextProvider>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));
