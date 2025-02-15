require('dotenv').config();

const express = require("express");
const app = express();
//chamar mongoose
const mongoose = require("mongoose");

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit("OK"); //Cria sinal e esctuta para seguir com a conexao
  })
  .catch(e => console.log(e));

//notifica sobre a conexao da base de dados
const routes = require("./routes");
const path = require("path");
//acesso por desetruturação
const { middlewareGlobal } = require("./src/middlewares/middleware");
const e = require("express");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

// Nossos propiros middelwares
app.use(middlewareGlobal);
app.use(routes);

app.on("OK", () => {
  app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000 --> http://localhost:3000");
    console.log("Servidor executando na porta 3000");
  });
});
