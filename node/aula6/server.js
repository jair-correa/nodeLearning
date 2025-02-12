//importa o modulo express pro server.js
//vai ajudar a trabalhar a=nas rotas da nossa aplicação
const express = require("express");
const app = express();

//          | CRIAR | LER  |ATUALIZAR| APAGAR
//  CRUD -->| CREATE| READ |UPDATE   | DELETE
//          | post  | get  | put     | delete

//http://meusite.com/ <--gET --> entregue a ROTA home
//http://meusite.com/sobre <--gET --> entregue a ROTA sobre
//http://meusite.com/contato <--gET --> entregue a ROTA contato

//'/'=>rota
// função que recebe dois metodos (req,res)
app.get("/", (req, res) => {
  res.send(`
    <form action="/" method= "POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>`);
});

app.post("/", (req, res) => {
  res.send(`Recebi o formulario`);
});

//http://meusite.com/sobre NOVA ROTA
app.get("/sobre", (req, res) => {
  res.send("<b>SOBRE \n\n Obrigado por entrar em contato com a gente"); //envia ao cliente uma resposta
});
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 --> http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
