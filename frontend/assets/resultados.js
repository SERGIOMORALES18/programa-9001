// Script para gestionar resultados por criterio

document.addEventListener('DOMContentLoaded', () => {
  cargarResultados();
  document.getElementById('formResultado').addEventListener('submit', registrarResultado);
});

function cargarResultados() {
  fetch('http://localhost:3001/resultados')
    .then(res => res.json())
    .then(resultados => {
      const tbody = document.querySelector('#tablaResultados tbody');
      tbody.innerHTML = '';
      resultados.forEach(r => {
        tbody.innerHTML += `
          <tr>
            <td>${r.id}</td>
            <td>${r.auditoria_id}</td>
            <td>${r.criterio_id}</td>
            <td>${r.cumplimiento}</td>
            <td>${r.evidencia}</td>
            <td>${r.observaciones}</td>
            <td><button onclick="eliminarResultado(${r.id})">Eliminar</button></td>
          </tr>
        `;
      });
    });
}

function registrarResultado(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));
  fetch('http://localhost:3001/resultados', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(() => {
      form.reset();
      cargarResultados();
    });
}

function eliminarResultado(id) {
  if (!confirm('¿Eliminar este resultado?')) return;
  fetch(`http://localhost:3001/resultados/${id}`, {
    method: 'DELETE'
  })
    .then(() => cargarResultados());
}
