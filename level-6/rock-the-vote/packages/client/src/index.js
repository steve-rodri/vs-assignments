import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { IssueProvider } from "./context/IssueContext";
import App from "./components/App";

const Root = () => (
  <Router>
    <UserProvider>
      <IssueProvider>
        <App />
      </IssueProvider>
    </UserProvider>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));
