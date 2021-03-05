const express = require("express");
const { config } = require("dotenv");

const app = express();

config();
require("./database");
require("./services/middleware")(app);
require("./routes")(app);
require("./services/catchErrors")(app);

const { PORT } = process.env;
app.listen(PORT, console.log(`Server listening on ${PORT}`)); //eslint-disable-line
