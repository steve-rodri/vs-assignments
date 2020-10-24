// Qualifier
const header = document.querySelector(".header");
const title = document.createElement("h1");
title.textContent = "JavaScript Made This!!";
header.appendChild(title);

const subHeading = document.createElement("h4");
const myName = document.createElement("span");
myName.className = "name";
myName.textContent = "Steve";
subHeading.appendChild(myName);
subHeading.innerHTML = `${subHeading.innerHTML} wrote this in JavaScript`;
header.appendChild(subHeading);

// Bronze
const clearMessages = () => {
  const messages = document.querySelector(".messages");
  messages.innerHTML = "";
};

const addFunMessages = () => {
  const messagesDiv = document.querySelector(".messages");
  const messages = [
    "I have something even more serious to talk to you about.",
    "You again...",
    "Just hear me out...",
    "Here, just.. eat that.. leave me alone.",
  ];

  messages.forEach((message, i) => {
    let messageDiv = document.createElement("div");
    messageDiv.className = "message";
    messageDiv.textContent = message;
    if (i % 2 === 0) {
      messageDiv.classList.add("left");
    } else {
      messageDiv.classList.add("right");
    }
    messagesDiv.appendChild(messageDiv);
  });
};

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", clearMessages);

clearMessages();
addFunMessages();

//Silver

const styleMessage = (message, theme) => {
  if (!theme) theme = document.querySelector("#theme-drop-down").value;
  const onLeft = message.classList.contains("left");
  const onRight = message.classList.contains("right");
  switch (theme) {
    case "theme-one":
      if (onLeft) {
        message.style.backgroundColor = "burlywood";
        message.style.color = "black";
      } else if (onRight) {
        message.style.backgroundColor = "lightblue";
        message.style.color = "black";
      }
      break;
    case "theme-two":
      if (onLeft) {
        message.style.backgroundColor = "black";
        message.style.color = "white";
      } else if (onRight) {
        message.style.backgroundColor = "darkred";
        message.style.color = "white";
      }
      break;
    default:
      break;
  }
};

const handleThemeChange = ({ target: { value } }) => {
  const messages = document.querySelectorAll(".message");
  messages.forEach((message) => styleMessage(message, value));
};

const themeDropDown = document.querySelector("#theme-drop-down");
themeDropDown.addEventListener("change", handleThemeChange);

//Gold
const handleSubmit = (e) => {
  e.preventDefault();
  const input = document.querySelector("#input");
  const messagesDiv = document.querySelector(".messages");
  const messages = document.querySelectorAll(".message");
  const newMessage = document.createElement("div");
  const { value: theme } = document.querySelector("#theme-drop-down");

  newMessage.className = "message";
  newMessage.textContent = input.value;

  //Extra Credit
  if (messages.length % 2 === 0) {
    newMessage.classList.add("left");
  } else {
    newMessage.classList.add("right");
  }

  styleMessage(newMessage);
  messagesDiv.appendChild(newMessage);
  input.value = "";
};

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
