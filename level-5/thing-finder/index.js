const express = require("express");
const app = express();
const laptops = require("./laptops");
const PORT = 4000;

app.route("/laptops").get((req, res) => {
  const byQuery = laptop => {
    let allConditionsMet = true;
    let keys = Object.keys(req.query);

    for (let i = 0; i < keys.length; i++) {
      if (laptop[keys[i]] !== req.query[keys[i]]) {
        allConditionsMet = false;
        break;
      }
    }
    return allConditionsMet;
  };

  res.send(laptops.filter(byQuery));
});

app.listen(PORT, console.log(`server running on ${PORT}`));
