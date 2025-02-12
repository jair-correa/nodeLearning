//
//module.exports = (path, data) => {
//  fs.writeFile(path, data, { flags: "A" });
//};
const fs = require("fs").promises;
const path = require("path");
//const pathFile = path.resolve(__dirname, "..", "teste.txt");
const pathFile = path.resolve(__dirname, "teste.json");

const json = JSON.stringify(pessoas, "", 2);
fs.writeFile(pathFile, json, { flag: "w" });
