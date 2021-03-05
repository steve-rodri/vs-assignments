const mongoose = require("mongoose");
const dotenv = require("dotenv");

const { connect, connection, set } = mongoose;
const { on, host, name } = connection;

dotenv.config();

connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// set update operations to return the updated document
set("returnOriginal", false);

// CONNECTION EVENTS
on("connected", () => {
  console.log(`Mongoose default connection open on ${host} ${name}`); //eslint-disable-line
});

on("error", err => {
  console.log(`Mongoose default connection error: ${err}`); //eslint-disable-line
});

on("disconnected", () => {
  console.log("Mongoose default connection disconnected"); //eslint-disable-line
});
