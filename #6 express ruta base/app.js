var express = require('express');
var fs = require('fs');
var app = express();
    app.use(express.static(__dirname + '/public/'));
app.get('/', function(req, res) {
    res.sendFile('/index.html');
});
app.listen(3000, function () {
    console.log("El servidor se muestra en http://localhost:3000");
})
