const knex = require("knex");

const db_env = process.env.DB_ENV || "development";
const config = require("../knexfile.js");

const db = knex(config[db_env]);

module.exports = db;
