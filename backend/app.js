// Backend entry point
const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('API Auditorias ISO 9001');
});

// TODO: Import routes
// const auditoriasRoutes = require('./routes/auditorias');
// app.use('/auditorias', auditoriasRoutes);
// Importar y usar todas las rutas
app.use('/empresas', require('./routes/empresaRoutes'));
app.use('/usuarios', require('./routes/usuarioRoutes'));
app.use('/auditorias', require('./routes/auditoriaRoutes'));
app.use('/criterios', require('./routes/criterioAuditoriaRoutes'));
app.use('/resultados', require('./routes/resultadoCriterioRoutes'));
app.use('/acciones-mejora', require('./routes/accionMejoraRoutes'));
app.use('/documentos', require('./routes/documentoSoporteRoutes'));
app.use('/capacitaciones', require('./routes/capacitacionRoutes'));
app.use('/implementaciones', require('./routes/implementacionRoutes'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
