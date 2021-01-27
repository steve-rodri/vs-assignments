import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import TradingViewWidget, {
  Themes,
  IntervalTypes,
  BarStyles,
} from "react-tradingview-widget";

const Chart = ({ id }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="chart">
      <TradingViewWidget
        symbol={`${id}USD`}
        theme={Themes[theme.toUpperCase()]}
        interval={IntervalTypes.D}
        style={BarStyles.LINE}
        allow_symbol_change={false}
        autosize
      />
    </div>
  );
};

export default Chart;
