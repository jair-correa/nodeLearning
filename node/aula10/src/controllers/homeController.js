exports.homePage = (req, res) => {
  res.render('index');
};

exports.fixPost = (req, res) => {
  res.send(`Recebi o formulario com os dados POST`);
};
