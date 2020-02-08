const HTTP = require("http");
const COLORS = require('colors');
//handleServer->manejador del servidor

const handleServer = function(req, res){
    //mostramos tipo de contenido, tipo de respuesta
    res.writeHead(200, { 'content-type': 'text/html'}); //Indicamos un estado de respuesta
    res.write('<h1>Hola mundo</h1>');
    res.end();
 }

 const server = HTTP.createServer(handleServer);
 server.listen(3000, function(){
     console.log('server on port 3000'.bgBlue);
 });



 /** Use->Node Package Manager
 *NPM y frameworks ============ lo habla en 1hh17mm;
 * npmjs.com
 */