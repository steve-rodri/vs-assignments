const express = require("express");
const { port } = require("./env");
const { errCatch } = require("./utils");

const app = express();

require("./database");
require("./middleware")(app);
require("./routes")(app);

errCatch(app);

app.listen(port, console.log(`Server listening on port ${port}`)); //eslint-disable-line
