import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { RootProvider } from "./context";
import App from "./components/App";

const Root = () => (
  <Router>
    <RootProvider>
      <App />
    </RootProvider>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));
