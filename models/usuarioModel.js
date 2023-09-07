const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  usuario: String,
  clave: String,
});

module.exports = mongoose.model('Usuario', usuarioSchema);
