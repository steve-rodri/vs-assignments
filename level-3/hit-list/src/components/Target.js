import React from "react";

const Target = ({ name, image }) => {
  const styles = {};
  if (image) styles.backgroundImage = `url(${image})`;
  return (
    <div className="Target" style={styles}>
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Target;
