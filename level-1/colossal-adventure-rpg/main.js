const { question, keyIn } = require("readline-sync");
const player = { health: 100 };
let enemy;
let inventory = ["gold medal", "silver medal", "bronze medal"];
let enemies = [
  {
    type: "brute",
    health: 100,
    damage: {
      playerInflicted: {
        min: 25,
        max: 50,
      },
      dealtByAttack: {
        min: 10,
        max: 20,
      },
    },
  },
  {
    type: "colonel",
    health: 100,
    damage: {
      playerInflicted: {
        min: 20,
        max: 30,
      },
      dealtByAttack: {
        min: 10,
        max: 30,
      },
    },
  },
  {
    type: "lieutenant",
    health: 100,
    damage: {
      playerInflicted: {
        min: 10,
        max: 25,
      },
      dealtByAttack: {
        min: 5,
        max: 30,
      },
    },
  },
];

const getEnemy = () => {
  return enemies[Math.round(Math.random() * (enemies.length - 1))];
};

const randomEnemy = () => {
  let appeared = Math.round(Math.random() * 3) / 3 === 0;
  if (appeared) {
    let e = getEnemy();
    if (e) console.log(`\nA wild enemy(${e.type}) appears\n`);
    return e;
  }
};

const applyDamage = () => {
  let { min, max } = enemy.damage.playerInflicted;
  let damage = Math.floor(Math.random() * (max - min) + min);
  enemy.health = enemy.health - damage;
  console.log(`\nYou attacked!`);
};

const enemyAttacks = (retaliation) => {
  const { min, max } = enemy.damage.dealtByAttack;
  let damage = Math.floor(Math.random() * (max - min) + min);
  player.health = player.health - damage;
  console.log(
    `\nThe ${enemy.type} ${retaliation ? "retaliated!" : "attacked!"}\n`
  );
};

const increasePlayerHealth = () => {
  if (player.health > 50) player.health = 100;
  else player.health += 50;
  console.log(" - Your health increased!");
  console.log(" - Player Health:", player.health);
};

const recoverHealth = () => {
  if (player.health === 100) {
    return;
  } else if (player.health > 90) {
    player.health = 100;
    console.log(`+${100 - player.health}hp`);
  } else {
    player.health += 10;
    console.log("+10hp");
  }
};

const givePlayerSpecialItem = () => {
  let item = inventory[Math.floor(Math.random() * (inventory.length - 1))];
  if (!player.items) player.items = [item];
  else player.items.push(item);
  inventory = inventory.filter((i) => i !== item);
  console.log(` - You've received the ${item}.`);
  console.log(" - Player Items:", player.items);
};

const promptPlayerForAction = () => {
  console.log(`Enemy(${enemy.type}) Health:`, enemy.health);
  console.log("Player Health:", player.health);
  let question = `What do you want to do ${player.name}?\n [a]ttack\n [r]un\n [p]rint-profile\n: `;
  let action = keyIn(question, { limit: /arp/i });
  if (action === "a") attack();
  if (action === "r") run();
  if (action === "p") printProfile();
};

const attack = () => {
  applyDamage(enemy);
  if (enemy.health <= 0) {
    console.log(`\nYou've defeated the ${enemy.type}!\n`);
    enemies = enemies.filter((e) => e.type !== enemy.type);
    enemy = null;
    increasePlayerHealth();
    givePlayerSpecialItem();
  } else {
    enemyAttacks({ retaliation: true });
  }
};

const run = () => {
  let escaped = Math.floor(Math.random() * 2) / 2 === 0;
  if (escaped) {
    console.log("\nYou escaped!\n");
    //update enemy health in enemy array;
    enemies = enemies.map((e) => (e.type === enemy.type ? enemy : e));
    //reset active enemy
    enemy = null;
  } else {
    console.log("\nYou weren't able to escape!\n");
    enemyAttacks();
  }
};

const printProfile = () => {
  console.log("\n");
  console.log(" - Name:", player.name);
  console.log(" - Health:", player.health);
  console.log(" - Items:", player.items ? player.items : "none");
  console.log("\n");
};

console.log("Hello and welcome to Colossal Adventure");
player.name = question("What is your name? ");
let walking = keyIn("Please press [w] to start walking...", { limit: /w/i });

while (walking) {
  if (!enemies.length) {
    walking = false;
    console.log("\nYOU WON!");
    console.log("You've defeated all enemies and won the game");
  }

  enemy = randomEnemy();
  while (enemy && player.health > 0) {
    promptPlayerForAction();
  }

  if (player.health <= 0) {
    console.log("\nYour are dead. Game Over\n");
    walking = false;
  }

  if (walking && enemies.length) {
    console.log("\nstrolling along...");
    recoverHealth();
  }
}
