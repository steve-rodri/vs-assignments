const tally = {
  fizzbuzz: 0,
  fizz: 0,
  buzz: 0,
};

const fizzBuzz = () => {
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      tally.fizzbuzz += 1;
    } else if (i % 3 === 0) {
      console.log("Fizz");
      tally.fizz += 1;
    } else if (i % 5 === 0) {
      console.log("Buzz");
      tally.buzz += 1;
    } else {
      console.log(i);
    }
  }
};

fizzBuzz();
console.log(tally);
