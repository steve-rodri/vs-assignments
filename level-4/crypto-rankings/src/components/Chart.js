import React from "react";
import TradingViewWidget, {
  Themes,
  IntervalTypes,
  BarStyles,
} from "react-tradingview-widget";

const Chart = ({ id }) => {
  return (
    <div className="chart">
      <TradingViewWidget
        symbol={`${id}USD`}
        theme={Themes.LIGHT}
        interval={IntervalTypes.D}
        style={BarStyles.LINE}
        allow_symbol_change={false}
        autosize
      />
    </div>
  );
};

export default Chart;
