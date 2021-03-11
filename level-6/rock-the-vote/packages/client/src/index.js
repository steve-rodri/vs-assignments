import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { UserProvider } from "./context/UserContext";
import { IssueProvider } from "./context/IssueContext";
import App from "./components/App";

const theme = extendTheme({ config: { initialColorMode: "dark" } });

const Root = () => (
  <Router>
    <ChakraProvider theme={theme}>
      <UserProvider>
        <IssueProvider>
          <App />
        </IssueProvider>
      </UserProvider>
    </ChakraProvider>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));
