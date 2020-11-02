// Preliminaries

console.log("\nPreliminaries\n");

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("----------------");

for (let i = 9; i >= 0; i--) {
  console.log(i);
}

console.log("----------------");

let fruits = ["banana", "orange", "apple", "kiwi"];
fruits.forEach((fruit) => console.log(fruit));

console.log("----------------");

console.log("\nBronze\n");

let array = [];
for (let i = 0; i < 10; i++) {
  array.push(i);
}
console.log(array);

console.log("----------------");

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

console.log("----------------");
fruits.push("pear");
fruits.push("peach");

let newFruits = [];
fruits.forEach((fruit, i) => (i % 2 === 0 ? newFruits.push(fruit) : null));

console.log(newFruits);

console.log("----------------");

console.log("\nSilver\n");

let peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor",
  },
  {
    name: "Justin Bieber",
    occupation: "Singer",
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician",
  },
  {
    name: "Oprah",
    occupation: "Entertainer",
  },
];

peopleArray.forEach((person) => console.log(person.name));

console.log("----------------");

let names = [];
let occupations = [];

peopleArray.forEach((person) => {
  names.push(person.name);
  occupations.push(person.occupation);
});

console.log("Names:", names);
console.log("Occupations:", occupations);

console.log("----------------");

names = [];
occupations = [];
peopleArray.forEach((person, i) => {
  if (i % 2 === 0) {
    names.push(person.name);
  } else {
    occupations.push(person.occupation);
  }
});

console.log("Names:", names);
console.log("Occupations:", occupations);

console.log("----------------");

console.log("\nGold\n");

array = [];

for (i = 0; i < 3; i++) {
  let row = [];
  for (let j = 0; j < 3; j++) {
    row.push(0);
  }
  array.push(row);
  row = [];
}

console.log(array);

console.log("----------------");

array = [];
for (let i = 0; i < 3; i++) {
  let row = [];
  for (let j = 0; j < 3; j++) {
    row.push(i);
  }
  array.push(row);
  row = [];
}

console.log(array);

console.log("----------------");

array = [];
for (let i = 0; i < 3; i++) {
  let row = [];
  for (let j = 0; j < 3; j++) {
    row.push(j);
  }
  array.push(row);
  row = [];
}

console.log(array);

console.log("----------------");

array = [];
for (let i = 0; i < 3; i++) {
  let row = [];
  for (let j = 0; j < 3; j++) {
    row.push("x");
  }
  array.push(row);
  row = [];
}

console.log(array);
