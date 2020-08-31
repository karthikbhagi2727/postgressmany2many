const db = require("../models");
const Cast = db.cast;
const Movie = db.movie;

// create and save new cast
exports.create = (cast) => {
    return Cast.create({
      name: cast.name,
      role: cast.role,
    })
      .then((cast) => {
        console.log(">> Created Cast: " + JSON.stringify(cast, null, 5));
        return cast;
      })
      .catch((err) => {
        console.log(">> Error while creating Cast: ", err);
      });
  };

//retrieve all casts
exports.findAll = () => {
    return Cast.findAll({
      include: [
        {
          model: Movie,
          as: "movies",
          attributes: ["id", "name"],
          through: {
            attributes: [],
          },
          // through: {
          //   attributes: ["tag_id", "tutorial_id"],
          // },
        },
      ],
    })
      .then((casts) => {
        return casts;
      })
      .catch((err) => {
        console.log(">> Error while retrieving Casts: ", err);
      });
  };  

//get the cast for a given id
exports.findById = (id) => {
    return Cast.findByPk(id, {
      include: [
        {
          model: Movie,
          as: "movies",
          attributes: ["id", "name"],
          through: {
            attributes: [],
          },
          // through: {
          //   attributes: ["tag_id", "tutorial_id"],
          // },
        },
      ],
    })
      .then((cast) => {
        return cast;
      })
      .catch((err) => {
        console.log(">> Error while finding Casts: ", err);
      });
  };  