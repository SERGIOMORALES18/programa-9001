// Modelo para la tabla implementaciones
const db = require('../config/db');

const Implementacion = {
  getAll: (callback) => {
    db.query('SELECT * FROM implementaciones', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM implementaciones WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO implementaciones SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE implementaciones SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM implementaciones WHERE id = ?', [id], callback);
  }
};

module.exports = Implementacion;
