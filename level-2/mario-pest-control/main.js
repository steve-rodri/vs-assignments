let goomba = document.goomba;
let bobOmb = document["bob-omb"];
let cheepCheep = document["cheep-cheep"];

let forms = [goomba, bobOmb, cheepCheep];
let inputs = [goomba.caught, bobOmb.caught, cheepCheep.caught];

let subTotals = {
  goomba: 0,
  "bob-omb": 0,
  "cheep-cheep": 0,
};

const costPerItem = (name) => {
  switch (name) {
    case "goomba":
      return 5;
    case "bob-omb":
      return 7;
    case "cheep-cheep":
      return 11;
    default:
      return 0;
  }
};

const updateTotal = () => {
  const totalEl = document.querySelector("#total");
  let totalPrice = Object.values(subTotals).reduce((a, b) => a + b);
  totalEl.textContent = totalPrice;
};

const updateSubTotal = ({ target: { value, parentElement } }) => {
  let numCaught = parseInt(value);
  if (isNaN(numCaught)) numCaught = 0;
  let price = costPerItem(parentElement.name);

  subTotals[parentElement.name] = numCaught * price;
  updateTotal();
};

Array.from(inputs).forEach((input) => {
  input.addEventListener("change", updateSubTotal);
  input.addEventListener("focus", () => input.select());
});

Array.from(forms).forEach((form) => {
  form.addEventListener("submit", (e) => e.preventDefault());
});
