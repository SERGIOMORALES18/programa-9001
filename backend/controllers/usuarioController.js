// Controlador para usuarios
const Usuario = require('../models/usuario');

module.exports = {
  getAll: (req, res) => {
    Usuario.getAll((err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  },
  getById: (req, res) => {
    Usuario.getById(req.params.id, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(result[0]);
    });
  },
  create: (req, res) => {
    Usuario.create(req.body, (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: result.insertId });
    });
  },
  update: (req, res) => {
    Usuario.update(req.params.id, req.body, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Usuario actualizado' });
    });
  },
  delete: (req, res) => {
    Usuario.delete(req.params.id, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Usuario eliminado' });
    });
  },

  login: (req, res) => {
    const { correo, contraseña } = req.body;
    if (!correo || !contraseña) {
      return res.status(400).json({ error: 'Correo y contraseña requeridos' });
    }
    Usuario.getByCorreo(correo, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!results || results.length === 0) {
        return res.status(401).json({ error: 'Usuario no encontrado' });
      }
      const usuario = results[0];
      if (usuario.contraseña !== contraseña) {
        return res.status(401).json({ error: 'Contraseña incorrecta' });
      }
      // No se usa token, solo respuesta de éxito
      res.json({ message: 'Login exitoso', usuario: { id: usuario.id, nombre: usuario.nombre, correo: usuario.correo, rol: usuario.rol } });
    });
  }
};
