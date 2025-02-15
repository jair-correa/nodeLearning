const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
//acesso por desetruturação
const { middlewareGlobal } = require("./src/middlewares/middleware");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

// Nossos propiros middelwares
app.use(middlewareGlobal);
app.use(routes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 --> http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
