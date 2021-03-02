const mongoose = require("mongoose");
const dotenv = require("dotenv");
mongoose.Promise = require("bluebird");

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// CONNECTION EVENTS
mongoose.connection.on("connected", () => {
  // eslint-disable-next-line no-console
  console.log(
    `Database connection open to ${mongoose.connection.host} ${mongoose.connection.name}`
  );
});

mongoose.connection.on("error", err => {
  console.log(`Mongoose default connection error: ${err}`); //eslint-disable-line
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose default connection disconnected"); //eslint-disable-line
});
