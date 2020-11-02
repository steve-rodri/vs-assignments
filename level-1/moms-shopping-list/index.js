const form = document.querySelector("#add-todo");
const list = document.querySelector("#list");

const createListItem = (text) => {
  const item = document.createElement("li");
  const title = document.createElement("div");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  title.textContent = text;
  editButton.textContent = "edit";
  deleteButton.textContent = "X";

  item.appendChild(title);
  item.appendChild(editButton);
  item.appendChild(deleteButton);
  addListenersToItem(item);
  return item;
};

const addListenersToItem = (item) => {
  if (!item.children.length) return;
  let editButton = item.children[1];
  let deleteButton = item.lastElementChild;

  deleteButton.addEventListener("click", () => list.removeChild(item));

  const edit = () => {
    const titleDiv = item.firstElementChild;
    // add form with input
    const editForm = document.createElement("form");
    const input = document.createElement("input");
    input.name = "title";
    input.value = titleDiv.textContent;
    editForm.appendChild(input);
    // insert form in item
    item.insertBefore(editForm, titleDiv);
    // remove titleDiv
    item.removeChild(titleDiv);
    // change editButton text to save
    editButton.textContent = "save";
    // remove this eventHandler
    editButton.removeEventListener("click", edit);
    // add save eventHandler
    editButton.addEventListener("click", save);
    // add form eventHandler
    editForm.addEventListener("submit", save);
    // give focus to input
    input.select();
  };

  const save = (e) => {
    e.preventDefault();
    const editForm = item.firstElementChild;
    // add title
    const titleDiv = document.createElement("div");
    titleDiv.textContent = editForm.title.value;
    // insert title in item
    item.insertBefore(titleDiv, editForm);
    // remove editForm
    item.removeChild(editForm);
    // change editButton text to edit
    editButton.textContent = "edit";
    // remove this eventHandler
    editButton.removeEventListener("click", save);
    // add edit eventHandler
    editButton.addEventListener("click", edit);
  };

  editButton.addEventListener("click", edit);
};

// add listeners to pre-existing items
const listItems = Array.from(list.children);
listItems.forEach((item) => addListenersToItem(item));

// this creates a new item on form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newListItem = createListItem(form.title.value);
  list.appendChild(newListItem);
  form.title.value = "";
});
