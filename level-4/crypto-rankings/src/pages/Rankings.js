import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useViewSwitch from "../hooks/useViewSwitch";
import NavBar from "../components/NavBar";
import List from "../components/List";

const Rankings = ({ match }) => {
  const [views, swapView, setView] = useViewSwitch("all", "favorites");
  const history = useHistory();
  const switchView = () => {
    swapView();
    if (views[0] === "all") history.replace("/favorites");
    else if (views[0] === "favorites") history.replace("/");
  };
  const [view, altView] = views;
  const props = { view, altView, switchView };
  useEffect(() => {
    if (match.path === "/favorites") setView("favorites");
    else if (match.path === "/") setView("all");
  }, [match.path, setView]);
  return (
    <div className="rankings">
      <NavBar {...props} />
      <List {...props} />
    </div>
  );
};

export default Rankings;
