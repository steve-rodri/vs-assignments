import React from "react";

const PercentChanges = ({ "1D": D, "7D": W, "30D": M, "365D": Y }) => {
  return (
    <div className="PercentChanges" style={{ display: "flex" }}>
      <Daily {...D} />
      <Weekly {...W} />
      <Monthly {...M} />
      <Yearly {...Y} />
    </div>
  );
};

const Daily = ({ priceChangePct }) => {
  return (
    <div className="daily">
      <h5>1d</h5>
      <p>{priceChangePct}</p>
    </div>
  );
};
const Weekly = ({ priceChangePct }) => {
  return (
    <div className="weekly">
      <h5>7d</h5>
      <p>{priceChangePct}</p>
    </div>
  );
};
const Monthly = ({ priceChangePct }) => {
  return (
    <div className="monthly">
      <h5>1m</h5>
      <p>{priceChangePct}</p>
    </div>
  );
};
const Yearly = ({ priceChangePct }) => {
  return (
    <div className="yearly">
      <h5>1y</h5>
      <p>{priceChangePct}</p>
    </div>
  );
};

export default PercentChanges;
