const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuarioModel');
const { secretKey } = require('../config/config');

exports.login = async (req, res) => {
  const { usuario, clave } = req.body;

  // Validar las credenciales (aquí puedes agregar tu lógica de autenticación)
  if (usuario === 'admin' && clave === 'admin') {
    // Generar un token JWT
    const token = jwt.sign({ usuario }, secretKey, { expiresIn: '1h' });

    res.json({ Token: token });
  } else {
    res.status(401).json({ message: 'Credenciales incorrectas' });
  }
};
