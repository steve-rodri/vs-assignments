import React from "react";

const TableHeaderRow = () => {
  return (
    <header>
      <div className="rank">
        <h5>Rank</h5>
      </div>
      <div></div>
      <div className="name">
        <h5>Name</h5>
      </div>
      <div className="price">
        <h5>Price</h5>
      </div>
      <div className="change">
        <h5>Change (%)</h5>
      </div>
      <div className="market-cap">
        <h5>Market Cap</h5>
      </div>
    </header>
  );
};

export default TableHeaderRow;
