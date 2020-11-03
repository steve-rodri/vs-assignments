let peopleArray = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47,
  },
  {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12,
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78,
  },
  {
    firstName: "Morty",
    lastName: "Smith",
    age: 29,
  },
  {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27,
  },
  {
    firstName: "Pasha",
    lastName: "Datsyuk",
    age: 13,
  },
  {
    firstName: "Lev",
    lastName: "Tolstoy",
    age: 82,
  },
];

const sortedOfAge = (arr) =>
  arr
    .filter((p) => p.age > 18)
    .sort((a, b) => (a.lastName < b.lastName ? -1 : 1))
    .map((p) => `<li>${p.firstName} ${p.lastName} is ${p.age}</li>`);
// console.log(sortedOfAge(peopleArray));

const morePeople = [
  {
    firstName: "Michael",
    lastName: "Scott",
    age: 40,
  },
  {
    firstName: "Dwight",
    lastName: "Schrute",
    age: 33,
  },
  {
    firstName: "Jim",
    lastName: "Halpert",
    age: 34,
  },
];

peopleArray = peopleArray.concat(morePeople);
console.log(peopleArray);

const filterYA = (arr) => {
  arr = arr.filter((p) => {
    lastLetter = p.lastName.split("").pop();
    return lastLetter === "y" || lastLetter === "a";
  });
  arr.splice(1, 1);
  return arr.reverse();
};

console.log(filterYA(peopleArray));
