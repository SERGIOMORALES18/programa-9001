// --- Wizard Auditoría ISO 9001 ---
// Recolecta datos de todos los pasos y los envía al backend al finalizar

const auditoriaWizardData = {
  paso1: {},
  criteriosSeleccionados: [],
  resultados: [],
  resumen: ''
};

// Paso 1: Datos generales
document.getElementById('nextStep1').onclick = function() {
  const form = document.getElementById('formAuditoria');
  const data = Object.fromEntries(new FormData(form));
  auditoriaWizardData.paso1 = data;
  var fecha = new Date();
  document.getElementById('registroFecha').value = fecha.toLocaleString();
  setStep(2);
};

// Paso 2: Criterios seleccionados
document.getElementById('nextStep2').onclick = function() {
  const checklist = document.querySelectorAll('#step2 input[type="checkbox"]');
  auditoriaWizardData.criteriosSeleccionados = Array.from(checklist).map((c, i) => ({
    item: c.closest('tr').children[0].textContent,
    descripcion: c.closest('tr').children[1].textContent,
    seleccionado: c.checked
  }));
  setStep(3);
};

// Paso 3: Resultados y evidencias
document.getElementById('nextStep3').onclick = function() {
  const rows = document.querySelectorAll('#resultadosCriterios tbody tr');
  auditoriaWizardData.resultados = Array.from(rows).map(row => ({
    id: row.children[0].textContent,
    criterio: row.children[1].textContent,
    cumplimiento: row.children[2].querySelector('select').value,
    evidencia: row.children[3].querySelector('input').value,
    observaciones: row.children[4].querySelector('input').value
  }));
  setStep(4);
};

// Paso 6: Resumen final y envío
document.getElementById('finishWizard').onclick = function() {
  auditoriaWizardData.resumen = document.getElementById('resumenFinal').value;
  // Validaciones básicas
  const paso1 = auditoriaWizardData.paso1 || {};
  if (!paso1.empresa_id || !paso1.fecha_auditoria || !paso1.auditor_id) {
    alert('Completa los campos obligatorios del Paso 1 antes de finalizar.');
    setStep(1);
    return;
  }

  if (!confirm('¿Confirmas que deseas finalizar y guardar la auditoría?')) return;

  // Enviar al backend (ruta wizard)
  fetch('http://localhost:3001/auditorias/wizard', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(auditoriaWizardData)
  })
    .then(res => {
          if (res.ok) {
            const note = document.getElementById('wizardNotification');
            note.style.color = '#0a7';
            note.textContent = 'Auditoría guardada correctamente.';
            setTimeout(() => { note.textContent = ''; }, 4000);
            setStep(1);
            document.getElementById('formAuditoria').reset();
            document.getElementById('resumenFinal').value = '';
          } else {
            const note = document.getElementById('wizardNotification');
            note.style.color = '#d33';
            note.textContent = 'Error al guardar la auditoría.';
          }
    })
    .catch(() => alert('Error de conexión al guardar la auditoría.'));
};
