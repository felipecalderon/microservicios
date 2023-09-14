const express = require("express");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use(require('./charactersRouter'))
module.exports = server;
