require("dotenv").config(); // Carregar variáveis de ambiente
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const flash = require("connect-flash");
const path = require("path");
const { middlewareGlobal } = require("./src/middlewares/middleware");
const routes = require("./routes");
const session = require("express-session");
const MongoStore = require("connect-mongo"); // Corrigido

// Conectar ao banco de dados MongoDB
mongoose
  .connect(process.env.CONNECTIONSTRING) // Conexão do mongoose com a string de conexão
  .then(() => {
    app.emit("OK"); // Cria sinal para iniciar o servidor
  })
  .catch(e => console.log(e));

// Middleware global para carregar as variáveis globais
app.use(express.static(path.resolve(__dirname, "frontend")));

// Configuração do session com MongoStore
app.use(
  session({
    secret: process.env.SESSION_SECRET, // Segredo da sessão
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.CONNECTIONSTRING, // Corrigido para passar a URL de conexão
      collectionName: "sessions" // Nome da coleção para armazenar as sessões
    }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }, // 7 dia
    httpOnly: true
  })
);

// Configurações do express
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));

// Usando flash para mensagens
app.use(flash());

// Configuração do view engine
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

// Usando middleware global e as rotas
app.use(middlewareGlobal);
app.use(routes);

// Iniciar o servidor após a conexão com o banco
app.on("OK", () => {
  app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000 --> http://localhost:3000");
  });
});
