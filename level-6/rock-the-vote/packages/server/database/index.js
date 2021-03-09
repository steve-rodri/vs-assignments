const mongoose = require("mongoose");
const { config } = require("dotenv");

const { connect, connection, set } = mongoose;

config();

connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// set update operations to return the updated document
set("returnOriginal", false);

// CONNECTION EVENTS
connection.on("connected", () => {
  console.log(
    `Mongoose default connection open on ${connection.host} ${connection.name}`
  ); //eslint-disable-line
});

connection.on("error", err => {
  console.log(`Mongoose default connection error: ${err}`); //eslint-disable-line
});

connection.on("disconnected", () => {
  console.log("Mongoose default connection disconnected"); //eslint-disable-line
});
