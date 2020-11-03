const total = (a) => a.reduce((a, b) => a + b);
console.log(total([1, 2, 3]));

const stringConcat = (a) => a.reduce((a, b) => a + b.toString());
console.log(stringConcat([1, 2, 3]));

const totalVotes = (a) => a.reduce((a, b) => (b.voted ? a + 1 : a), 0);
let voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];
console.log(totalVotes(voters));

const shoppingSpree = (a) => a.reduce((a, b) => a + b.price, 0);
var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

console.log(shoppingSpree(wishlist));

const flatten = (a) => a.reduce((a, b) => a.concat(b));
var arrays = [["1", "2", "3"], [true], [4, 5, 6]];
console.log(flatten(arrays));

const voterResults = (a) =>
  a.reduce(
    (a, b) => {
      if (b.age >= 18 && b.age <= 25) {
        a.numYoungPeople += 1;
        if (b.voted) a.numYoungVotes += 1;
      } else if (b.age >= 26 && b.age <= 35) {
        a.numMidsPeople += 1;
        if (b.voted) a.numMidsVotes += 1;
      } else if (b.age >= 36 && b.age <= 55) {
        a.numOldsPeople += 1;
        if (b.voted) a.numOldsVotes += 1;
      }
      return a;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidsVotes: 0,
      numMidsPeople: 0,
      numOldsVotes: 0,
      numOldsPeople: 0,
    }
  );
console.log(voterResults(voters));

const axios = require("axios");

const getRepos = async () => {
  try {
    const { data: repos } = await axios.get(
      `https://api.github.com/users/steverodri91/repos`
    );
    const watchers = repos.reduce((a, b) => a + b.watchers, 0);
    console.log("watchers:", watchers);
  } catch (e) {
    console.log(e);
  }
};

getRepos();
