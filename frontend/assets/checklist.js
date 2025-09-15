// Ítems del checklist ISO 9001:2015 (4.1 a 10.3)
const checklistISO9001 = [
  { codigo: '4.1', texto: 'Comprensión de la organización y su contexto' },
  { codigo: '4.2', texto: 'Comprensión de las necesidades y expectativas de las partes interesadas' },
  { codigo: '4.3', texto: 'Determinación del alcance del sistema de gestión de la calidad' },
  { codigo: '4.4', texto: 'Sistema de gestión de la calidad y sus procesos' },
  { codigo: '5.1', texto: 'Liderazgo y compromiso' },
  { codigo: '5.2', texto: 'Política de la calidad' },
  { codigo: '5.3', texto: 'Roles, responsabilidades y autoridades en la organización' },
  { codigo: '6.1', texto: 'Acciones para abordar riesgos y oportunidades' },
  { codigo: '6.2', texto: 'Objetivos de la calidad y planificación para lograrlos' },
  { codigo: '6.3', texto: 'Planificación de los cambios' },
  { codigo: '7.1', texto: 'Recursos' },
  { codigo: '7.2', texto: 'Competencia' },
  { codigo: '7.3', texto: 'Toma de conciencia' },
  { codigo: '7.4', texto: 'Comunicación' },
  { codigo: '7.5', texto: 'Información documentada' },
  { codigo: '8.1', texto: 'Planificación y control operacional' },
  { codigo: '8.2', texto: 'Requisitos para los productos y servicios' },
  { codigo: '8.3', texto: 'Diseño y desarrollo de los productos y servicios' },
  { codigo: '8.4', texto: 'Control de los procesos, productos y servicios suministrados externamente' },
  { codigo: '8.5', texto: 'Producción y provisión del servicio' },
  { codigo: '8.6', texto: 'Liberación de los productos y servicios' },
  { codigo: '8.7', texto: 'Control de las salidas no conformes' },
  { codigo: '9.1', texto: 'Seguimiento, medición, análisis y evaluación' },
  { codigo: '9.2', texto: 'Auditoría interna' },
  { codigo: '9.3', texto: 'Revisión por la dirección' },
  { codigo: '10.1', texto: 'No conformidad y acción correctiva' },
  { codigo: '10.2', texto: 'Mejora continua' },
  { codigo: '10.3', texto: 'Mejora' }
];

// Renderizar checklist en la página checklist.html
document.addEventListener('DOMContentLoaded', function() {
  const tbody = document.getElementById('tbodyChecklist');
  if (!tbody) return;
  // Cargar estado guardado
  let estado = JSON.parse(localStorage.getItem('checklistISO9001') || '{}');
  checklistISO9001.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.codigo}</td>
      <td>${item.texto}</td>
      <td>
        <select data-codigo="${item.codigo}">
          <option value="">-- Seleccione --</option>
          <option value="cumple">Cumple</option>
          <option value="no_cumple">No cumple</option>
          <option value="parcial">Parcial</option>
        </select>
      </td>
    `;
    tbody.appendChild(tr);
    // Restaurar estado
    if (estado[item.codigo]) {
      tr.querySelector('select').value = estado[item.codigo];
    }
    // Guardar al cambiar
    tr.querySelector('select').addEventListener('change', function() {
      estado[item.codigo] = this.value;
      localStorage.setItem('checklistISO9001', JSON.stringify(estado));
    });
  });
});
