import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BountiesContextProvider } from "./context/BountiesContext";

const Root = () => (
  <BountiesContextProvider>
    <App />
  </BountiesContextProvider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
