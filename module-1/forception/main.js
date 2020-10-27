let people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
let alphabet = "abcdefghijklmnopqrstuvwxyz";

const forception = (people, alphabet) => {
  let output = [];
  people.forEach((person) => {
    output.push(person + ":");
    alphabet.split("").forEach((letter) => {
      output.push(letter.toUpperCase());
    });
  });
  console.log(output);
};

forception(people, alphabet);
