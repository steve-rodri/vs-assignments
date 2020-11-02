const capitalizeAndLowercase = (str) => {
  const upCase = str
    .split("")
    .map((l) => l.toUpperCase())
    .join("");
  return upCase + str.toLowerCase();
};

console.log(capitalizeAndLowercase("HelLo"));

const findMiddleIndex = (str) => {
  return Math.floor(str.length / 2);
};

console.log(findMiddleIndex("Hello"));
console.log(findMiddleIndex("Hello World"));

const returnFirstHalf = (str) => {
  return str.slice(0, findMiddleIndex(str));
};

console.log(returnFirstHalf("Hello"));
console.log(returnFirstHalf("Hello World"));

const capitalizeHalf = (str) => {
  let firstHalf = returnFirstHalf(str).toUpperCase();
  let secondHalf = str.slice(findMiddleIndex(str)).toLowerCase();
  return firstHalf + secondHalf;
};
console.log(capitalizeHalf("Hello"));
console.log(capitalizeHalf("Hello World"));

const capitalizeAfterSpace = (str) => {
  let words = str.split(" ");
  words = words.map((word) => {
    let letters = word.split("");
    let first = letters.shift().toUpperCase();
    letters.unshift(first);
    return letters.join("");
  });
  return words.join(" ");
};

console.log(capitalizeAfterSpace("hey friends! practice practice practice!"));
