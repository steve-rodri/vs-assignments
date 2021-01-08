import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PageRouter from "./PageRouter";
import "../styles/App.css";

const App = () => {
  return (
    <>
      <Header />
      <PageRouter />
      <Footer />
    </>
  );
};

export default App;
