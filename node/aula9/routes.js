//Carregar o express
const express = require("express");
//Cria variavel temporaria
const route = express.Router();
const homeController = require("./controllers/homeController");
const myselfController = require("./controllers/myselfController");
const contatoController = require("./controllers/contatoController");
//Rotas da home
route.get("/", homeController.homePage);
route.post("/", homeController.fixPost);

route.get('/myself/', myselfController.homePage);
//Rotas para contato
route.get('/contato',contatoController.homePage);

module.exports = route;