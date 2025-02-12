//const falaNome = require('./mod1').falaNome;
//console.log(falaNome());
//----------------------------------------------------------------

//const mod1=require('./mod1');
//const falaNome = mod1.falaNome;
//console.log(falaNome());

//const {nome,sobrenome,falaNome} = require('./mod1');
//console.log(nome,sobrenome);
//console.log(falaNome());

const { Pessoa } = require("./mod1");
const axios = require("axios");
const p1 = new Pessoa("Maria", "Rosa");
console.log(p1);

axios
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then(response => console.log(response.data))
  .catch(e => console.log(e));

console.log("--------------------------------");
