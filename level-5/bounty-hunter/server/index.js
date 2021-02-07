const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();

mongoose.connect(
  "mongodb://localhost:27017/bounty-hunter",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to MongoDB")
);

app.use(express.json());
app.use(morgan("dev"));

app.use("/", require("./routes/bounty"));

app.use((err, _, res) => {
  console.log(err);
  res.send({ error: err.message });
});

app.listen(4000, () => console.log("server running on port 4000"));
