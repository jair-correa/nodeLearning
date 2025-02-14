exports.homePage = (req, res) => {
  res.send(`
            <form action="/" method= "POST">
            Nome do cliente: <input type="text" name="nome">
            Outro campo: <input type="text" name="nome">
            <button>Enviar</button>
            </form>`);
};

exports.fixPost = (req, res) => {
  res.send(`Recebi o formulario com os dados POST`);
};
