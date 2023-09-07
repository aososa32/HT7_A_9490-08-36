const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/config');

module.exports = (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    req.usuario = decoded.usuario;
    next();
  });
};
