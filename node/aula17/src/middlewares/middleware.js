exports.middlewareGlobal = (req, res, next) => {
  res.locals.localVariable = "Este é o valor da variave local";
  next();
};
exports.outroMiddleware = (req, res, next) => {
  next();
};
