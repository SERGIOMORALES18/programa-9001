// Modelo para la tabla resultados_criterios
const db = require('../config/db');

const ResultadoCriterio = {
  getAll: (callback) => {
    db.query('SELECT * FROM resultados_criterios', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM resultados_criterios WHERE id = ?', [id], callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO resultados_criterios SET ?', data, callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE resultados_criterios SET ? WHERE id = ?', [data, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM resultados_criterios WHERE id = ?', [id], callback);
  }
};

module.exports = ResultadoCriterio;
