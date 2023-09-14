const { Router } = require("express");
const films = require("./films.json");

const filmsRouter = Router();

filmsRouter.get("/", (req, res) => {
  res.status(200).json(films);
});

module.exports = filmsRouter;