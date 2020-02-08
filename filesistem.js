const FS = require("fs");
/**
 * Ejemplo de código asincrono.
 * Pedimos al OS que cree un archivo.
 * Y cuando termine ejecuta una funcion.
 */


//Creamos un archivo, lo nombramos
FS.writeFile('./resumen-hasta.txt','1 Hora\n 1 Minuto\n Y 55 Segundos'+
'\n Y empieza a hablar de protocolo HTTP', function(err){
    if(err){
        console.log("Error->",err);
    }
     console.log("Archivo creado");
});
console.log("Ultima linea de código");


//leemos un archivo
FS.readFile('./resumen-hasta.txt', function(err, data){
    if(err){
        console.log("Error->",err);
    }        
        console.log("Archivo dice ->\n",data.toString());
});
/**
 * Ejemplo de código bloqueante
 *  const users = query('SELECT * FROM users');
 * 
 * Ejemplo código asincrono
 * query('SELECT * FROM users', function(err, users){
 *  if(err){
 *      console.log("Error->",err);
 * }else if(users){
 *      console.log("Usuarios->",users);
 * }
 * });
 */