//const nome = "Jorge";
//const sobrenome = "Sousa";
//
//const falaNome = () => `Olá, meu nome é ${nome} ${sobrenome}`;
//
////module.exports.nome = nome;
////module.exports.sobrenome = sobrenome;
////module.exports.falaNome = falaNome;
//exports.nome = nome;
//exports.sobrenome = sobrenome;
//exports.falaNome = falaNome;
//console.log(module.exports);

class Pessoa{
  constructor(nome){
    this.nome = nome;
  }
}
exports.Pessoa = Pessoa;