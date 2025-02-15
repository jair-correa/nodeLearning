//const HomeModel = require("../models/HomeModel");

//HomeModel.create({
//  titulo: "Um titulo teste",
//  descricao: "Uma descricao teste."
//})
//  .then(dados => console.log(dados))
//  .catch(e => console.log(e));

//exports.homePage = (req, res) => {
//  res.session.user = { nome: "Jair", login: true }, 
//  res.render("index");
//  return;
//};
exports.homePage = (req, res) => {
  //console.log(req.flash('success','yes'), req.flash('error','Ugh'),req.flash('info','XX'), req.flash;
  if (!req.session) {
    req.session = {}; // Garantir que a sessão seja inicializada
  }
  req.session.user = { nome: "Jair", login: true },  // Agora deve funcionar corretamente
  res.render("index");
  return;
};

exports.fixPost = (req, res) => {
  res.send(req.body);
  return;
};
