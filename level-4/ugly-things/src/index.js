import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { UglyThingContextProvider } from "./context/UglyThingContext";

const Root = () => (
  <UglyThingContextProvider>
    <App />
  </UglyThingContextProvider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
