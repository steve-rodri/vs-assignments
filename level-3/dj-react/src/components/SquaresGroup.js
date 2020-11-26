import React from "react";
import Square from "./Square";

const SquaresGroup = ({ colors }) => {
  return (
    <div className="SquaresGroup">
      {colors.map((color, i) => (
        <Square key={`square-${i}`} color={color} />
      ))}
    </div>
  );
};

export default SquaresGroup;
