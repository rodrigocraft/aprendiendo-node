var express = require('express');
var app = express();
app.get('/', function(req, res) {
    res.send('Hola mundo con express');
});
app.listen(3000, function () {
    console.log('El servidor se muestra en http://localhost:3000');
})
