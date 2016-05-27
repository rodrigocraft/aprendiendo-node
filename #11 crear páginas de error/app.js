var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname + '/public'));

var camisetasDatos = [
  {titulo:"Celeste", imagen:"img/camisetaceleste.jpg"},
  {titulo:"Naranja", imagen:"img/camisetanaranja.jpg"},
  {titulo:"Roja", imagen:"img/camisetaroja.jpg"},
  {titulo:"Verde", imagen:"img/camisetaverde.jpg"}
]

app.get('/', function(req, res) {
  res.render('index.pug');
});

app.get('/tienda', function(req, res) {
  res.render('tienda.pug', {
    titulo: "Tienda de Camisetas",
    camisetas: camisetasDatos
  });
});

app.get('/tienda/comprar/:camiseta', function(req, res) {
  var obj = camisetasDatos.filter(function (obj) {
      if (req.params.camiseta == obj.titulo) {
        res.render('compra.pug', obj)
      }
  })[0];
});

app.use(function (req, res) {
    res.status(400);
    res.render('404.pug', {
      titulo: '404: Página No Encontrada :('
    })
})

app.listen(3000, function () {
    console.log("El servidor se muestra en http://localhost:3000");
})
