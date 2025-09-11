// Script para gestionar documentos de soporte

document.addEventListener('DOMContentLoaded', () => {
  cargarDocumentos();
  document.getElementById('formDocumento').addEventListener('submit', registrarDocumento);
});

function cargarDocumentos() {
  fetch('http://localhost:3001/documentos')
    .then(res => res.json())
    .then(documentos => {
      const tbody = document.querySelector('#tablaDocumentos tbody');
      tbody.innerHTML = '';
      documentos.forEach(d => {
        tbody.innerHTML += `
          <tr>
            <td>${d.id}</td>
            <td>${d.auditoria_id}</td>
            <td>${d.nombre_archivo}</td>
            <td>${d.tipo_documento}</td>
            <td>${d.fecha_subida}</td>
            <td><button onclick="eliminarDocumento(${d.id})">Eliminar</button></td>
          </tr>
        `;
      });
    });
}

function registrarDocumento(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));
  fetch('http://localhost:3001/documentos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(() => {
      form.reset();
      cargarDocumentos();
    });
}

function eliminarDocumento(id) {
  if (!confirm('¿Eliminar este documento?')) return;
  fetch(`http://localhost:3001/documentos/${id}`, {
    method: 'DELETE'
  })
    .then(() => cargarDocumentos());
}
