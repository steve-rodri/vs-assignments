const addListenersToOperation = (type) => {
  document[type].addEventListener("submit", (e) => {
    e.preventDefault();
    let first = parseInt(document[type].first.value);
    let second = parseInt(document[type].second.value);
    if (isNaN(first) || isNaN(second)) return;

    let result;
    if (type === "add") result = first + second;
    if (type === "subtract") result = first - second;
    if (type === "multiply") result = first * second;

    let resultDiv = document.querySelector(`#${type}-result`);
    let answer = resultDiv.firstElementChild;
    if (!answer) {
      answer = document.createElement("p");
      answer.textContent = result;
      resultDiv.appendChild(answer);
    } else {
      if (type === "add") {
        answer.textContent = parseInt(answer.textContent) + second;
      } else if (type === "subtract") {
        answer.textContent = parseInt(answer.textContent) - second;
      } else if (type === "multiply") {
        answer.textContent = parseInt(answer.textContent) * second;
      }

      if (answer.textContent.length > 8) {
        if (resultDiv.style.justifyContent !== "stretch") {
          resultDiv.style.justifyContent = "stretch";
        }
      } else {
        if (resultDiv.style.justifyContent !== "center") {
          resultDiv.style.justifyContent = "center";
        }
      }
    }
  });
  document[type].first.addEventListener("change", () => clearResult(type));
  document[type].second.addEventListener("change", () => clearResult(type));
};

const clearResult = (operation) => {
  let resultDiv = document.querySelector(`#${operation}-result`);
  if (resultDiv.firstElementChild)
    resultDiv.removeChild(resultDiv.firstElementChild);
};

const clearFirst = (operation) => {
  document[operation].first.value = null;
};

const clearSecond = (operation) => {
  document[operation].second.value = null;
};

const clearAll = () => {
  operations.forEach(({ firstElementChild: { name: operation } }) => {
    clearFirst(operation);
    clearSecond(operation);
    clearResult(operation);
  });
};

document.querySelector(".clear-all").addEventListener("click", clearAll);

let clearButton = document.querySelector(".clear-all");
clearButton.addEventListener("mouseout", ({ target: button }) => {
  button.style.color = "black";
  button.style.textDecoration = "none";
});
clearButton.addEventListener("mouseover", ({ target: button }) => {
  button.style.color = "white";
  button.style.textDecoration = "underline";
});

const operations = document.querySelectorAll(".operation");
operations.forEach(({ firstElementChild: { name: operation } }) => {
  addListenersToOperation(operation);
});
