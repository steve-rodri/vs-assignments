import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RootProvider } from "./context";
import { ColorModeScript } from "@chakra-ui/react";
import App from "./components/App";
import theme from "./theme";

const Root = () => (
  <BrowserRouter>
    <RootProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </RootProvider>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById("root"));
