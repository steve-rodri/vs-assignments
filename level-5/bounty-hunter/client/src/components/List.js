import React, { useContext } from "react";
import Bounty from "./Bounty";
import BountiesContext from "../context/BountiesContext";

const List = () => {
  const { bounties } = useContext(BountiesContext);
  return (
    <ul>
      {bounties.map((props, i) => (
        <Bounty {...props} key={i} />
      ))}
    </ul>
  );
};

export default List;
