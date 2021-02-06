const express = require("express");
const interceptor = require("./interceptor");
const app = express();
const PORT = 4000;

app.use(interceptor);

app.route("/").get((_, res) => {
  res.send({
    make: "Nissan",
    model: "Altima",
    year: 2003,
  });
});

app.listen(PORT, console.log(`server running on port ${PORT}`));
