const knex = require("knex");

const dbEnv = process.env.DB_ENV || "development";
const config = require("../knexfile.js");

const db = knex(config[dbEnv]);

module.exports = db;
