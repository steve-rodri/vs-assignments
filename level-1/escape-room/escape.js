const { question } = require("readline-sync");

let trapped = true,
  hasKey,
  dead;

console.log("You're trapped in a room with limited options...");
while (trapped) {
  const resp = question(
    "What do you want to do?\na: Put hand in hole\nb: Find the key\nc: Open the door\n:"
  );

  if (resp === "a") {
    console.log("\nYou are dead.");
    trapped = false;
    dead = true;
  }

  if (resp === "b") {
    if (hasKey) {
      console.log("\nYou already found the key!\n");
    } else {
      hasKey = true;
      console.log("\nYou found the key!\n");
    }
  }

  if (resp === "c") {
    if (hasKey) {
      trapped = false;
    } else {
      console.log("\nThe door is locked! Find the key!\n");
    }
  }
}

if (!dead) console.log("\nYou made it out alive!");
