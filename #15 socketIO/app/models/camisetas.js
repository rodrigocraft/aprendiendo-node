var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var Camisetas = new Schema ({
  color: String,
  precio: String,
  descripcion: String,
  imagen: String
}, {collection: 'camisetas'});

mongoose.model('camisetas', Camisetas);
