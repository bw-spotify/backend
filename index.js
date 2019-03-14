require("dotenv").config();

const server = require("./server/server.js");

const port = process.env.PORT || 8000;
const db_env = process.env.DB_ENV || "development";

server.listen(port, () => {
  console.log(
    `\n\n*** Now listening on port: ${port} and env: "${db_env}" ***\n`
  );
});
