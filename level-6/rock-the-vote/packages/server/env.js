const { config } = require("dotenv");

config();

module.exports = {
  secret: process.env.SECRET,
  db: process.env.MONGO_DB_URI,
  clientUrl: process.env.CLIENT_URL,
  port: process.env.PORT,
};
