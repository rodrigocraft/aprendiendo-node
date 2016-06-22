var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Camisetas = mongoose.model('camisetas');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/agregar', function (req, res) {
  res.render('agregar', {
    title: 'Agregar un producto'
  });
});

router.post('/agregar', function (req, res) {
  var nuevoRegistro = new Camisetas ({
    color: req.body.color,
    precio: req.body.precio,
    descripcion: req.body.descripcion,
    imagen: req.body.imagen
  });
  nuevoRegistro.save();
  res.redirect('/tienda');
});
