const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const app = express();
const PORT = 4000;

mongoose.connect(
  "mongodb://localhost:27017/crud-store",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to mongo")
);

app.use(express.json());
app.use(morgan("dev"));

app.use("/inventory", require("./routes/inventory"));

app.use((err, req, res, next) => {
  console.log(err);
  res.send({ error: err.message });
});

app.listen(PORT, console.log(`server listening on port ${PORT}`));
