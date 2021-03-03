const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("express-jwt");
const morgan = require("morgan");

const app = express();

require("./database");

dotenv.config();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: "http://localhost:3000" }));
app.use(
  jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }).unless({
    path: ["/auth"],
  })
);

app.use(require("./routes/auth"));
app.use(require("./routes/issue"));
app.use(require("./routes/comment"));

app.use((err, _, res) => {
  console.log(err); // eslint-disable-line
  res.send({ error: err.message });
});

app.listen(
  process.env.PORT,
  console.log(`server listening on ${process.env.PORT}`) // eslint-disable-line
);
