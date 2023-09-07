exports.getData = (req, res) => {
    const usuario = req.usuario;
    // Puedes obtener los datos del usuario desde la base de datos aquí
  
    res.json({ usuario });
  };
  