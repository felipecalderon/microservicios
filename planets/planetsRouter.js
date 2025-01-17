const { Router } = require("express");
const planets = require("./planets.json");

const planetsRouter = Router();

planetsRouter.get("/planets", (req, res) => {
  res.status(200).json(planets);
});

module.exports = planetsRouter;
