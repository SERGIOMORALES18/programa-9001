// Modelo para la tabla auditorias
const db = require('../config/db');

const Auditoria = {
  getAll: (callback) => {
    db.query('SELECT * FROM auditorias', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM auditorias WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO auditorias SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE auditorias SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM auditorias WHERE id = ?', [id], callback);
  }
};

module.exports = Auditoria;
