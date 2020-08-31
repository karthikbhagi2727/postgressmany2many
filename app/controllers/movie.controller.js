const db = require("../models");
const Cast = db.cast;
const Movie = db.movie;

//create and save new movies
exports.create = (movie) => {
    return Movie.create({
      name: movie.name,
    })
      .then((movie) => {
        console.log(">> Created movie: " + JSON.stringify(movie, null, 2));
        return movie;
      })
      .catch((err) => {
        console.log(">> Error while creating movie: ", err);
      });
  };

//finding all movies
exports.findAll = () => {
    return Movie.findAll({
      include: [
        {
          model: Cast,
          as: "casts",
          attributes: ["id", "name", "role"],
          through: {
            attributes: [],
          }
        },
      ],
    })
      .then((movies) => {
        return movies;
      })
      .catch((err) => {
        console.log(">> Error while retrieving movies: ", err);
      });
  };  

//finding a movie for an id
exports.findById = (id) => {
    return Movie.findByPk(id, {
      include: [
        {
          model: Cast,
          as: "casts",
          attributes: ["id", "name", "role"],
          through: {
            attributes: [],
          }
        },
      ],
    })
      .then((movie) => {
        return movie;
      })
      .catch((err) => {
        console.log(">> Error while finding movie: ", err);
      });
  };

//add cast to a movie
exports.addCast = (movieId, castId) => {
    return Movie.findByPk(movieId)
      .then((movie) => {
        if (!movie) {
          console.log("Movie not found!");
          return null;
        }
        return Cast.findByPk(castId).then((cast) => {
          if (!cast) {
            console.log("Cast not found!");
            return null;
          }
  
          movie.addCast(cast);
          console.log(`>> added Cast id=${cast.id} to Movie id=${movie.id}`);
          return movie;
        });
      })
      .catch((err) => {
        console.log(">> Error while adding Cast to Movie: ", err);
      });
  };  
