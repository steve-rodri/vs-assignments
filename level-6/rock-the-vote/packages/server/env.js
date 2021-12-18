const { config } = require("dotenv");

config();

const env = process.env.NODE_ENV || "development";

module.exports = {
  secret: process.env.SECRET,
  db: process.env[`MONGO_DB_${env.toUpperCase()}_URI`],
  clientUrl: process.env[`CLIENT_${env.toUpperCase()}_URL`],
  port: process.env.PORT,
};

// To deploy to Heroku you must configure environment variables on their website
// or using the CLI
