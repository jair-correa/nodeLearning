const Cachorro = require("../B/C/D/mod");//Requisição para acesso a pasta de outro arquivo

module.exports = class Cachorro {
  constructor(nome) {
    this.nome = nome;
  }
  latir() {
    console.log(`${this.nome} está chorando`);
  }
};
