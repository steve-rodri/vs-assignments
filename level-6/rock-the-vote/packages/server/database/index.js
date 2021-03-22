const mongoose = require("mongoose");
const { db } = require("../env");

const { connect, connection, set } = mongoose;

connect(db, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// set update operations to return the updated document
set("returnOriginal", false);

// CONNECTION EVENTS
connection.on("connected", () => {
  // eslint-disable-next-line
  console.log(
    `Mongoose default connection open on ${connection.host} ${connection.name}`
  );
});

connection.on("error", err => {
  console.log(`Mongoose default connection error: ${err}`); //eslint-disable-line
});

connection.on("disconnected", () => {
  console.log("Mongoose default connection disconnected"); //eslint-disable-line
});
