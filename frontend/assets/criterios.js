// Script para gestionar criterios de auditoría

document.addEventListener('DOMContentLoaded', () => {
  cargarCriterios();
  document.getElementById('formCriterio').addEventListener('submit', registrarCriterio);
});

function cargarCriterios() {
  fetch('http://localhost:3001/criterios')
    .then(res => res.json())
    .then(criterios => {
      const tbody = document.querySelector('#tablaCriterios tbody');
      tbody.innerHTML = '';
      criterios.forEach(c => {
        tbody.innerHTML += `
          <tr>
            <td>${c.id}</td>
            <td>${c.nombre}</td>
            <td>${c.descripcion}</td>
            <td>${c.clausula_iso}</td>
            <td><button onclick="eliminarCriterio(${c.id})">Eliminar</button></td>
          </tr>
        `;
      });
    });
}

function registrarCriterio(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));
  fetch('http://localhost:3001/criterios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(() => {
      form.reset();
      cargarCriterios();
    });
}

function eliminarCriterio(id) {
  if (!confirm('¿Eliminar este criterio?')) return;
  fetch(`http://localhost:3001/criterios/${id}`, {
    method: 'DELETE'
  })
    .then(() => cargarCriterios());
}
