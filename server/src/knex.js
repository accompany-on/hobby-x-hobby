const config = require("../knexfile");

const knexConfig =
  process.env.NODE_ENV === "production"
    ? config.production
    : config.development;

const knex = require("knex")(knexConfig);

module.exports = knex;
