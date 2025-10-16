// Backend entry point
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Por defecto usar almacenamiento JSON local si no se especifica DB
if (!process.env.DB_USE) process.env.DB_USE = 'json';
console.log('DB_USE =', process.env.DB_USE);

// Helper para montar rutas sin que fallen el arranque si una ruta da error
function tryUse(mountPath, relRequire) {
  try {
    app.use(mountPath, require(relRequire));
    console.log(`Mounted ${mountPath} -> ${relRequire}`);
  } catch (err) {
    console.error(`Warning: could not mount ${mountPath} (${relRequire}):`, err.message);
  }
}

// Habilitar CORS para permitir peticiones desde el frontend (file:// o servido)
app.use(cors());
app.use(express.json());

// Servir archivos estáticos del frontend (opcional pero útil):
// acceder a http://localhost:3001/pages/login.html, etc.
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Example route
// Redirigir a login.html cuando se accede a la raíz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'pages', 'login.html'));
});

// Importar y usar todas las rutas (con tolerancia a errores)
tryUse('/empresas', './routes/empresaRoutes');
tryUse('/usuarios', './routes/usuarioRoutes');
tryUse('/auditorias', './routes/auditoriaRoutes');
tryUse('/criterios', './routes/criterioAuditoriaRoutes');
tryUse('/resultados', './routes/resultadoCriterioRoutes');
tryUse('/acciones-mejora', './routes/accionMejoraRoutes');
tryUse('/documentos', './routes/documentoSoporteRoutes');
tryUse('/capacitaciones', './routes/capacitacionRoutes');
tryUse('/implementaciones', './routes/implementacionRoutes');

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
