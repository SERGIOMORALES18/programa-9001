// Modelo para la tabla documentos_soporte
const db = require('../config/db');

const DocumentoSoporte = {
  getAll: (callback) => {
    db.query('SELECT * FROM documentos_soporte', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM documentos_soporte WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO documentos_soporte SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE documentos_soporte SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM documentos_soporte WHERE id = ?', [id], callback);
  }
};

module.exports = DocumentoSoporte;
