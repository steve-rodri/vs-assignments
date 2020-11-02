let fruit = ["banana", "apple", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
console.log("vegetables: ", vegetables);

fruit.shift();
console.log("fruit: ", fruit);

const indexOfOrange = fruit.findIndex((f) => f === "orange");
fruit.push(indexOfOrange);
console.log("fruit: ", fruit);

vegetables.push(vegetables.length);
console.log("vegetables: ", vegetables);

let food = [fruit, vegetables].flat();
console.log("food: ", food);

food.splice(4, 2);
console.log("food: ", food);

food.reverse();
console.log("food: ", food);

console.log(food.join(","));
