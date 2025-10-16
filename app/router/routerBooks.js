const express = require("express");
const routerBooks = express.Router();

const controllerBooks = require("../controllers/controllerBooks.js");

routerBooks.get("/livres",controllerBooks.liste)
routerBooks.get(`/livres/:id`,controllerBooks.livre)
routerBooks.delete('/livres/:id',controllerBooks.livre)
routerBooks.put('/livres/:id')

module.exports = { routerBooks };