// Let and Const

const name = "John";
let age = 101;

function runForLoop(pets) {
  var petObjects = [];
  for (var i = 0; i < pets.length; i++) {
    let pet = { type: pets[i] };
    let name;
    if (pets[i] === "cat") {
      name = "fluffy";
    } else {
      name = "spot";
    }
    console.log("pet name: ", name);
    pet.name = name;
    petObjects.push(pet);
  }
  console.log("man name: ", name);
  return petObjects;
}

runForLoop(["cat", "dog"]);

// Task 1

const carrots = ["bright orange", "ripe", "rotten"];

function mapVegetables(arr) {
  return arr.map((carrot) => ({ type: "carrot", name: carrot }));
}

// Task 2

const people = [
  {
    name: "Princess Peach",
    friendly: false,
  },
  {
    name: "Luigi",
    friendly: true,
  },
  {
    name: "Mario",
    friendly: true,
  },
  {
    name: "Bowser",
    friendly: false,
  },
];

function filterForFriendly(arr) {
  return arr.filter((person) => person.friendly);
}

// Task 3

const doMathSum = (a, b) => a + b;

const produceProduct = (a, b) => a * b;

// Task 4

const printString = (firstName = "Jane", lastName = "Doe", age = 100) => {
  return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;
};

// Task 5

const animals = [
  {
    type: "dog",
    name: "theodore",
  },
  {
    type: "cat",
    name: "whiskers",
  },
  {
    type: "pig",
    name: "piglette",
  },
  {
    type: "dog",
    name: "sparky",
  },
];

const filterForDogs = (arr) => arr.filter((animal) => animal.type === "dog");

// Template Literals

const greeting = (location = "Hawaii", name = "Janice") => {
  return `Hi ${name}!\n\nWelcome to Hawaii.\n\nI hope you enjoy your stay. Please ask the president of Hawaii if you need anything.`;
};
