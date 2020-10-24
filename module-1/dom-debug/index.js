const colors = ["red", "blue", "green"];

document.getElementById("add").addEventListener("click", function (e) {
  const subItem = createSubItem(e);
  document.getElementById("list").appendChild(subItem);
});

function createDropDown(subItem) {
  const dropDown = document.createElement("select");
  for (let i = 0; i < colors.length; i++) {
    const option = document.createElement("option");
    option.innerHTML = colors[i];
    option.value = colors[i];
    dropDown.appendChild(option);
  }
  dropDown.addEventListener("change", function (e) {
    subItem.style.backgroundColor = e.target.value;
  });
  subItem.style.backgroundColor = dropDown.value;
  return dropDown;
}

function createSubItem(e) {
  const subItem = document.createElement("div");
  let { value } = document.getElementById("input");
  subItem.textContent = value;
  const dropDown = createDropDown(subItem);
  subItem.appendChild(dropDown);
  subItem.setAttribute("class", "subItem");
  return subItem;
}
