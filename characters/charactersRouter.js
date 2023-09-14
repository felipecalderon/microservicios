const { Router } = require("express");
const characters = require("./characters.json");

const characterRouter = Router();

characterRouter.get("/", (req, res) => {
  res.status(200).json(characters);
});

module.exports = characterRouter;
