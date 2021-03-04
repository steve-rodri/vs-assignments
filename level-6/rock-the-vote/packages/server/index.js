const express = require("express");

const app = express();

require("./database");
require("./middleware")(app);
require("./routes")(app);

app.use((err, _, res) => {
  console.log(err); // eslint-disable-line
  res.send({ error: err.message });
});

app.listen(
  process.env.PORT,
  console.log(`Server listening on ${process.env.PORT}`) // eslint-disable-line
);
