const express = require("express");
const app = express();

//
app.use(express.urlencoded({ extended:true }));

//http://facebook.com/profiles/12345?campanhash=12345&nomecampanha=seila
app.get("/", (req, res) => {
  res.send(`
    <form action="/" method= "POST">
    Nome do cliente: <input type="text" name="nome">
    Outro campo: <input type="text" name="nome">
    <button>Enviar</button>
    </form>`);
});

app.get(`/testes/:idUsuarios?/:parametro?`, (req, res) => {//?configura o parametro como opcional
  console.log(req.params);
  console.log(req.query);
  
  res.send(`Oi`);
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`Oque voce me enviou foi:${req.body.nome}`);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 --> http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
