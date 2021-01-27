import React, { useContext } from "react";
import CoinContext from "../context/CoinContext";
import "../styles/NavBar.css";

const NavBar = props => {
  return (
    <nav>
      <ViewChangeButton {...props} />
      <LayoutPicker {...props} />
      <PageSwitcher {...props} />
    </nav>
  );
};

const ViewChangeButton = ({ altView, switchView }) => {
  return (
    <button className="view-change-button" onClick={switchView}>
      {altView}
    </button>
  );
};

const LayoutPicker = () => {
  const { layout, setLayout } = useContext(CoinContext);
  const active = l => (l === layout ? "active" : null);
  return (
    <div className="layout-picker">
      <button onClick={() => setLayout("table")} className={active("table")}>
        List
      </button>
      <button onClick={() => setLayout("cards")} className={active("cards")}>
        Icons
      </button>
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
