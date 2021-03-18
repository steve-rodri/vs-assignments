const express = require("express");
const { config } = require("dotenv");
const { errorCatch } = require("./utils");

const app = express();

config();

require("./database");
require("./middleware")(app);
require("./routes")(app);

errorCatch(app);

const { PORT } = process.env;
app.listen(PORT, console.log(`Server listening on port ${PORT}`)); //eslint-disable-line
