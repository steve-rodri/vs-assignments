let officeItems = [
  "stapler",
  "monitor",
  "computer",
  "desk",
  "lamp",
  "computer",
  "lamp",
  "stapler",
  "computer",
  "computer",
];
let count = 0;
officeItems.forEach((item) => (item === "computer" ? count++ : null));
console.log("Number of Computers: ", count);

console.log("\n------------------\n");

let peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male",
  },
  {
    name: "Madeline",
    age: 80,
    gender: "female",
  },
  {
    name: "Cheryl",
    age: 22,
    gender: "female",
  },
  {
    name: "Sam",
    age: 30,
    gender: "male",
  },
  {
    name: "Suzy",
    age: 4,
    gender: "female",
  },
];

peopleWhoWantToSeeMadMaxFuryRoad.forEach((person) => {
  // for this purpose its him or her
  const pronoun = person.gender === "male" ? "him" : "her";

  if (person.age > 18) {
    console.log(
      person.name,
      "is old enough to see Mad Max,",
      `let ${pronoun} in.`
    );
  } else {
    console.log(
      person.name,
      "is not old enough to see Mad Max,",
      `don't let ${pronoun} in.`
    );
  }
});

console.log("\n------------------\n");

const numberArrays = [
  [2, 5, 435, 4, 3],
  [1, 1, 1, 1, 3],
  [9, 3, 4, 2],
];

numberArrays.forEach((numbers) => {
  let sum = numbers.reduce((a, n) => a + n);
  let lightOff = sum % 2 === 0;

  if (lightOff) {
    console.log("The light is off.");
  } else {
    console.log("The light is on.");
  }
});
