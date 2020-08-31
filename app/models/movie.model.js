module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define("movie", {
      name: {
        type: DataTypes.STRING,
      },
    });
  
    return Movie;
  };