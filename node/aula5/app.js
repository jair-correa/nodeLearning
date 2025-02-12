const path = require("path");
const pathFile = path.resolve(__dirname, "teste.json");
const write = require("./modules/write");
const read = require("./modules/read");

//const peoples = [
//{ nome: "Joao" },
//  { nome: "Maria" },
//  { nome: "Pedro" },
//  { nome: "Ana" }
//];
//const json = JSON.stringify(peoples, "", 2);
//write(pathFolder, json);

//Criando função para ler json utilizando async e await
async function readFile(path) {
  const data = await read(path);
  renderizeData(data);
}

//const dataFiles = readFile(pathFile)
//.then(data => console.log(data));
function renderizeData(data) {
  console.log(data);
}

readFile(pathFile);
