import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RootProvider } from "./context";
import App from "./components/App";

const Root = () => (
  <BrowserRouter>
    <RootProvider>
      <App />
    </RootProvider>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById("root"));
