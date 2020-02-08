const OS = require("os");
/**
 * con sistema operativo
 en el require, las letras van en minusculas
 */
console.log("Plataforma:\t",OS.platform());
console.log("Interfaces de Red\n",OS.networkInterfaces());