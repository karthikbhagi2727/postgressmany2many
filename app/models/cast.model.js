module.exports = (sequelize, DataTypes) => {
    const Cast = sequelize.define("cast", {
      name: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.STRING,
      },
    });
  
    return Cast;
  };