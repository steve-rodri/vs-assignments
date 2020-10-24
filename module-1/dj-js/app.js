let box = document.querySelector("#box");

const turnBlue = () => {
  box.style.backgroundColor = "blue";
};

const turnRed = () => {
  box.style.backgroundColor = "red";
};

const turnYellow = () => {
  box.style.backgroundColor = "yellow";
};

const turnGreen = () => {
  box.style.backgroundColor = "green";
};

const turnOrange = () => {
  box.style.backgroundColor = "orange";
};

const onKeyPress = ({ which }) => {
  if (which === 66) turnBlue();
  if (which === 82) turnRed();
  if (which === 89) turnYellow();
  if (which === 71) turnGreen();
  if (which === 79) turnOrange();
};

box.addEventListener("mouseover", turnBlue);
box.addEventListener("mousedown", turnRed);
box.addEventListener("mouseup", turnYellow);
box.addEventListener("dblclick", turnGreen);
document.addEventListener("scroll", turnOrange);
document.addEventListener("keydown", onKeyPress);
