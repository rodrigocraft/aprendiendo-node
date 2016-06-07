var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Camisetas = mongoose.model('camisetas');

module.exports = function(app) {
    app.use('/', router);
};

router.get('/agregar', function(req, res) {
    res.render('agregar');
});

router.post('/agregar', function(req, res) {
    var nuevoRegistro = new Camisetas({
      color: req.body.color,
      precio: req.body.precio,
      descripcion: req.body.descripcion,
      imagen: req.body.imagen
    });
    nuevoRegistro.save();
    res.redirect('/tienda');
})
