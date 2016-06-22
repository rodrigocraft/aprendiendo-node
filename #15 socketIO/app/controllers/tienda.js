var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Camisetas = mongoose.model('camisetas');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/tienda', function (req, res, next) {
  Camisetas.find(function (err, camisetas) {
    if (err) return next(err);
    res.render('tienda', {
      title: 'Sección Compras',
      titulo: 'Tienda de Camisetas',
      camisetas: camisetas
    });
  });
});
