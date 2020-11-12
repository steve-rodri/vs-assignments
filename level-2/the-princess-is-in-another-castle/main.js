let gameActive = true;
const randomNum = () => Math.round(Math.random() * 2);

class Player {
  constructor() {
    this.name = "";
    this.totalCoins = 0;
    this.status = "Small";
    this.hasStar = false;
  }

  setName(namePicked) {
    this.name = namePicked;
  }

  gotHit() {
    if (this.hasStar) {
      console.log("The Star protected you");
      this.hasStar = false;
      return;
    }
    if (this.status === "Powered Up") {
      this.status = "Big";
    } else if (this.status === "Big") {
      this.status = "Small";
    } else if (this.status === "Small") {
      this.status = "Dead";
      gameActive = false;
      console.log("You Are Dead.");
      console.log(`Your final score was ${this.totalCoins} coins.`);
    }
  }

  gotPowerUp() {
    if (this.status === "Powered Up") {
      if (!this.hasStar) {
        console.log("Congratulations! You got a Star!");
        this.hasStar = true;
      }
    } else if (this.status === "Big") {
      this.status = "Powered Up";
    } else if (this.status === "Small") {
      this.status = "Big";
    }
  }

  addCoin() {
    this.totalCoins = this.totalCoins + 1;
  }

  print() {
    console.log(
      `Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${
        this.totalCoins
      }\n${this.hasStar ? "you have a Star\n" : ""}`
    );
  }
}

const Luigi = new Player();
Luigi.setName("Luigi");

const game = setInterval(() => {
  const num = randomNum();
  if (num === 0) Luigi.gotHit();
  if (num === 1) Luigi.gotPowerUp();
  if (num === 2) Luigi.addCoin();
  Luigi.print();
  if (!gameActive) clearInterval(game);
}, 1000);
