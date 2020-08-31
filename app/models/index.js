const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cast = require("./cast.model.js")(sequelize, Sequelize);
db.movie = require("./movie.model.js")(sequelize, Sequelize);

db.movie.belongsToMany(db.cast, {
  through: "movie_cast",
  as: "casts",
  foreignKey: "movie_id",
});
db.cast.belongsToMany(db.movie, {
  through: "movie_cast",
  as: "movies",
  foreignKey: "cast_id",
});

module.exports = db;