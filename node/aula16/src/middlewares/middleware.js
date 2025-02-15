exports.middlewareGlobal = (req, res, next) => {
  next();
};
exports.outroMiddleware = (req, res, next) => {
  next();
};
/*
module.exports = (req, res, next) => {
  if (req.body.cliente) {
    req.body.cliente = req.body.cliente.replace('Correa','Nao Use Correa');
    console.log();
    console.log(`Vi que voce postou ${req.body.cliente}`);
    console.log();
  }
  next();
};

*/
