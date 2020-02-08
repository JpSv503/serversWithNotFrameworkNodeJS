//en el require, las letras van en minusculas
const OS = require("os");
console.log("Plataforma:\t",OS.platform());
console.log("Interfaces de Red\n",OS.networkInterfaces());