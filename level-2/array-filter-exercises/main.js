const fiveAndGreaterOnly = (a) => a.filter((n) => n > 5);
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

const evensOnly = (a) => a.filter((n) => n % 2 === 0);
console.log(evensOnly([3, 6, 8, 2]));

const fiveCharactersOrFewerOnly = (a) => a.filter((s) => s.length <= 5);
console.log(
  fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])
);

let people = [
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true },
];

const peopleWhoBelongToTheIlluminati = (a) => a.filter((p) => p.member);
console.log(peopleWhoBelongToTheIlluminati(people));

people = [
  { name: "Angelina Jolie", age: 80 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 },
];

const ofAge = (a) => a.filter((p) => p.age > 18);
console.log(ofAge(people));
