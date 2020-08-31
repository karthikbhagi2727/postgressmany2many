module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "soal@2511",
    DB: "many2many",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };