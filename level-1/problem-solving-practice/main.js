const largest = (numbers) => numbers.reduce((m, n) => (m > n ? m : n));
console.log(largest([3, 5, 2, 8, 1]));

const lettersWithStrings = (words, char) => words.filter((w) => w.match(char));
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"));

const isDivisible = (n1, n2) => n1 % n2 === 0;
console.log(isDivisible(4, 2));
console.log(isDivisible(9, 3));
console.log(isDivisible(15, 4));
