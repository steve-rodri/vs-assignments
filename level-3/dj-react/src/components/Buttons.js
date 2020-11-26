import React from "react";

const Buttons = ({ toggleBW, setTopPurple, ...rest }) => {
  return (
    <div className="Buttons">
      <button onClick={toggleBW}>Small Time</button>
      <button onClick={setTopPurple}>Party</button>
      <Professional {...rest} />
      <BigTime {...rest} />
    </div>
  );
};

export default Buttons;

// -------------------------------Components----------------------------------

const Professional = ({ changeToBlue }) => (
  <>
    <button onClick={changeToBlue} name="bottom-left">
      Professional 1
    </button>
    <button onClick={changeToBlue} name="bottom-right">
      Professional 2
    </button>
  </>
);

const BigTime = ({ random }) => (
  <>
    <button onClick={random} name="top-left">
      Big Time 1
    </button>
    <button onClick={random} name="top-right">
      Big Time 2
    </button>
    <button onClick={random} name="bottom-left">
      Big Time 3
    </button>
    <button onClick={random} name="bottom-right">
      Big Time 4
    </button>
  </>
);
