import React from "react";
import { numWithCommas } from "../helpers/strings";

const PercentChanges = ({ "1D": D, "7D": W, "30D": M, "365D": Y }) => {
  return (
    <div className="percent-changes">
      <Daily {...D} />
      <Weekly {...W} />
      <Monthly {...M} />
      <Yearly {...Y} />
    </div>
  );
};

const stylePriceChange = num => {
  if (num > 0) return { color: "green" };
  if (num < 0) return { color: "red" };
};

const Daily = ({ priceChangePct }) => {
  let pct = numWithCommas((parseFloat(priceChangePct) * 100).toFixed(0));
  return (
    <div className="daily">
      <h5>1d</h5>
      <p style={stylePriceChange(priceChangePct)}>{`${pct}%`}</p>
    </div>
  );
};
const Weekly = ({ priceChangePct }) => {
  let pct = numWithCommas((parseFloat(priceChangePct) * 100).toFixed(0));
  return (
    <div className="weekly">
      <h5>7d</h5>
      <p style={stylePriceChange(priceChangePct)}>{`${pct}%`}</p>
    </div>
  );
};
const Monthly = ({ priceChangePct }) => {
  let pct = numWithCommas((parseFloat(priceChangePct) * 100).toFixed(0));
  return (
    <div className="monthly">
      <h5>1m</h5>
      <p style={stylePriceChange(priceChangePct)}>{`${pct}%`}</p>
    </div>
  );
};
const Yearly = ({ priceChangePct }) => {
  let pct = numWithCommas((parseFloat(priceChangePct) * 100).toFixed(0));
  return (
    <div className="yearly">
      <h5>1y</h5>
      <p style={stylePriceChange(priceChangePct)}>{`${pct}%`}</p>
    </div>
  );
};

export default PercentChanges;
