exports.homePage = (req, res) => {
  res.render("index");
  return;
};

exports.fixPost = (req, res) => {
  res.send(req.body);
  return;
};
