let { question, questionInt } = require("readline-sync");

const input = question("What phrase would you like to encrypt? ").toLowerCase();
const shift = questionInt("How many letters would you like to shift? ");
const alphabet = "abcdefghijklmnopqrstuvwxyz";

const encrypt = (str, shift) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    const charMatch = alphabet.match(str[i]);
    if (charMatch) {
      let shiftedIndex = (charMatch.index + shift) % alphabet.length;
      newStr += alphabet[shiftedIndex];
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};

console.log(encrypt(input, shift));
