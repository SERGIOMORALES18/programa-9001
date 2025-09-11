// Script para gestionar empresas

document.addEventListener('DOMContentLoaded', () => {
  cargarEmpresas();
  document.getElementById('formEmpresa').addEventListener('submit', registrarEmpresa);
});

function cargarEmpresas() {
  fetch('http://localhost:3001/empresas')
    .then(res => res.json())
    .then(empresas => {
      const tbody = document.querySelector('#tablaEmpresas tbody');
      tbody.innerHTML = '';
      empresas.forEach(e => {
        tbody.innerHTML += `
          <tr>
            <td>${e.id}</td>
            <td>${e.razon_social}</td>
            <td>${e.nit}</td>
            <td>${e.representante_legal}</td>
            <td>${e.sector_economico}</td>
            <td>${e.tipo_empresa}</td>
            <td>${e.telefonos}</td>
            <td>${e.email}</td>
            <td><button onclick="eliminarEmpresa(${e.id})">Eliminar</button></td>
          </tr>
        `;
      });
    });
}

function registrarEmpresa(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));
  fetch('http://localhost:3001/empresas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(() => {
      form.reset();
      cargarEmpresas();
    });
}

function eliminarEmpresa(id) {
  if (!confirm('¿Eliminar esta empresa?')) return;
  fetch(`http://localhost:3001/empresas/${id}`, {
    method: 'DELETE'
  })
    .then(() => cargarEmpresas());
}
