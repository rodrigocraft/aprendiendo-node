var http = require('http');

http.createServer(function (request, respuesta) {
    respuesta.writeHead(200, {'Content-Type': 'text-plain'});
    respuesta.write("Hola NginX - Prueba");
    respuesta.end();
}).listen(3000, 'localhost');
console.log("El servidor se muestra en http://localhost:3000");
