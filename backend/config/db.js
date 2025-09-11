// Configuración y conexión a la base de datos MySQL
// Utiliza las variables de entorno definidas en backend/.env

const mysql = require('mysql2');
require('dotenv').config();

// Crear el pool de conexiones
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Exportar el pool para usarlo en otros módulos
module.exports = pool;

/*
  Uso:
  const db = require('../config/db');
  db.query('SELECT * FROM empresas', (err, results) => {
    if (err) throw err;
    console.log(results);
  });
*/
