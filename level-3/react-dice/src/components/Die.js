import React from "react";

const Die = ({ value, selected, onSelect }) => {
  const styles = {};
  if (selected) styles.borderColor = "dodgerblue";
  return (
    <div className="Die" style={styles} onClick={onSelect}>
      {value}
    </div>
  );
};

export default Die;
