//const HomeModel = require("../models/HomeModel");

//HomeModel.create({
//  titulo: "Um titulo teste",
//  descricao: "Uma descricao teste."
//})
//  .then(dados => console.log(dados))
//  .catch(e => console.log(e));

exports.homePage = (req, res) => {
  res.render("index");
  return;
};

exports.fixPost = (req, res) => {
  res.send(req.body);
  return;
};
