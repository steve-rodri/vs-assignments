const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("express-jwt");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();
const PORT = 4000;

mongoose.connect(
  `mongodb://localhost:27017/rock-the-vote`,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to mongo")
);

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

app.use((err, _, res) => {
  console.log(err);
  res.send({ error: err.message });
});

app.listen(PORT, console.log(`server running on ${PORT}`));
