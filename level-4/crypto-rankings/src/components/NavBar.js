import React, { useContext } from "react";
import CoinContext from "../context/CoinContext";

const NavBar = props => {
  return (
    <div className="NavBar">
      <ViewChangeButton {...props} />
      <LayoutPicker {...props} />
      <PageSwitcher {...props} />
    </div>
  );
};

const ViewChangeButton = ({ altView, switchView }) => {
  return <button onClick={switchView}>{altView}</button>;
};

const LayoutPicker = () => {
  const { setLayout } = useContext(CoinContext);
  return (
    <div className="layout-picker">
      <button onClick={() => setLayout("table")}>List</button>
      <button onClick={() => setLayout("cards")}>Icons</button>
    </div>
  );
};

const PageSwitcher = ({ view }) => {
  const { nextPage, prevPage } = useContext(CoinContext);
  if (view === "favorites") return null;
  return (
    <div className="page-switcher">
      <button onClick={() => prevPage()}>Prev 100</button>
      <button onClick={() => nextPage()}>Next 100</button>
    </div>
  );
};

export default NavBar;
