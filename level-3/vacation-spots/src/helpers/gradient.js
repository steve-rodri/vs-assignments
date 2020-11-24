import season from "./season";

const gradient = () => {
  if (season === "Spring") {
    return "linear-gradient(112.5deg, rgba(45,255,45,.4), rgba(45,255,45,.1))";
  } else if (season === "Summer") {
    return "linear-gradient(112.5deg, rgba(255,235,0,.4), rgba(255,235,0,.1))";
  } else if (season === "Fall") {
    return "linear-gradient(112.5deg, rgba(255,127,0,.4), rgba(255,127,0,.1))";
  } else if (season === "Winter") {
    return "linear-gradient(112.5deg, rgba(0,100,255,.4), rgba(0,100,255,.1))";
  }
};

export default gradient();
