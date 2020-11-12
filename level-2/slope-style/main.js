// Rest and Spread Operator
function collectAnimals(...animals) {
  return animals;
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));

// Object Literals
function combineFruit(fruit, sweets, vegetables) {
  return {
    fruit,
    sweets,
    vegetables,
  };
}
console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]));

// Destructuring
const vacation = {
  location: "Burly Idaho",
  duration: "2 weeks",
};
function parseSentence({ location, duration }) {
  return `We're going to have a good time in ${location} for ${duration}`;
}
console.log(parseSentence(vacation));

function returnFirst(items) {
  const [firstItem, ...rest] = items; /*change this line to be es6*/
  return firstItem;
}
const favoriteActivities = [
  "magnets",
  "snowboarding",
  "philanthropy",
  "janitor work",
  "eating",
];
function returnFavorites(arr) {
  const [firstFav, secondFav, thirdFav] = arr;
  return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
}
console.log(returnFavorites(favoriteActivities));

// Rest and Spread Operator
const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];
function combineAnimals(...animals) {
  return animals.flat();
}
console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// convert to ES6
const product = (...numbers) => numbers.reduce((acc, num) => acc * num, 1);
console.log(product(1, 2, 3, 4));

const unshift = (arr, ...rest) => [...rest, ...arr];
console.log(unshift([1, 2, 3], 4, 5, 6, 7, 8));

// Destructuring
function populatePeople(names) {
  return names.map(function (name) {
    name = name.split(" ");
    const [firstName, lastName] = name;
    return {
      firstName,
      lastName,
    };
  });
}
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));
