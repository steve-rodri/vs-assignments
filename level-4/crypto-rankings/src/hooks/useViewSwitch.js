import { useState } from "react";

const useViewSwitch = (...views) => {
  const [view, set] = useState();
  const view2 = view === views[0] ? views[1] : views[0];
  const swapView = () => {
    switch (view) {
      case views[1]:
        set(views[0]);
        break;
      default:
        set(views[1]);
        break;
    }
  };
  views = [view, view2];
  return [views, swapView, set];
};

export default useViewSwitch;
