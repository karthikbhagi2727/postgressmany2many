const db = require("./app/models");
const CastController = require("./app/controllers/cast.controller");
const MovieController = require("./app/controllers/movie.controller");

const run = async () => {
    const cast1 = await CastController.create({
        name: "Sushanth Singh Rajput",
        role: "Hero",
    });
    const cast2 = await CastController.create({
        name: "Shraddha Kapoor",
        role: "heroin",
      });
      
      const cast3 = await CastController.create({
        name: "Varun Sharma",
        role: "comedian",
      });
      
      const cast4 = await CastController.create({
        name: "Sanjana Sanghi",
        role: "heroin",
      });

     const cast5 = await CastController.create({
        name: "Mukesh Chhabra",
       role: "director",
     });

      const movie1 = await MovieController.create({
        name: "Chichore",
      });

      const movie2 = await MovieController.create({
        name: "Dil Bechare",
      });

      await MovieController.addCast(movie1.id, cast1.id);

      await MovieController.addCast(movie1.id, cast2.id);

      await MovieController.addCast(movie1.id, cast3.id);

      await MovieController.addCast(movie2.id, cast1.id);

      await MovieController.addCast(movie2.id, cast4.id);

      await MovieController.addCast(movie2.id, cast5.id);

      const _movie1 = await MovieController.findById(movie1.id);
console.log(">> movie1", JSON.stringify(_movie1, null, 2));


 const movies = await MovieController.findAll();
 console.log(">> movies", JSON.stringify(movies, null, 2));

 const casts = await CastController.findAll();
console.log(">> casts", JSON.stringify(casts, null, 5));
};
// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});