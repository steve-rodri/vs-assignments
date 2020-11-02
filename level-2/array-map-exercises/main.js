const doubleNumbers = (a) => a.map((n) => n * 2);
console.log(doubleNumbers([2, 5, 100]));

const stringItUp = (a) => a.map((n) => n.toString());
console.log(stringItUp([2, 5, 100]));

const capitalizeNames = (a) =>
  a.map((n) => {
    n = n.toLowerCase();
    n = n.split("");
    n[0] = n[0].toUpperCase();
    return n.join("");
  });
console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

const namesOnly = (a) => a.map((p) => p.name);
const names = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];
console.log(namesOnly(names));

const makeStrings = (a) =>
  a.map((p) =>
    p.age > 70 ? `${p.name} can go to The Matrix` : `${p.name} is under age!!`
  );
console.log(makeStrings(names));

const readyToPutInTheDOM = (a) =>
  a.map((p) => `<h1>${p.name}</h1><h2>${p.age}</h2>`);
console.log(readyToPutInTheDOM(names));
