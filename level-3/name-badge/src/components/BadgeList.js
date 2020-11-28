import React from "react";
import Badge from "./Badge";

const BadgeList = ({ badges }) => {
  return (
    <div className="BadgeList">
      {badges.map((badge, i) => (
        <Badge key={`${badge.firstName}-${badge.lastName}-${i}`} {...badge} />
      ))}
    </div>
  );
};

export default BadgeList;
