// Controles ISO 27001 (ejemplo, puedes completar los nombres reales)
const controlesISO27001 = [
  { numero: 1, nombre: "5.1 Políticas de seguridad de la información" },
  { numero: 2, nombre: "5.5.2 Funciones y responsabilidades de seguridad de la información" },
  { numero: 3, nombre: "5.3 Segregación de funciones" },
  { numero: 4, nombre: "5.4 Responsabilidades de la gerencia" },
  { numero: 5, nombre: "5.5 Contacto con autoridades" },
  { numero: 6, nombre: "5.6 Contacto con grupos de interés especial" },
  { numero: 7, nombre: "5.7 Inteligencia sobre amenazas" },
  { numero: 8, nombre: "5.8 Seguridad de la información en la gestión de proyectos" },
  { numero: 9, nombre: "5.9 Inventario de información y otros activos asociados" },
  { numero: 10, nombre: "5.10 Uso aceptable de la información y otros activos asociados" },
  { numero: 11, nombre: "5.11 Devolución de activos" },
  { numero: 12, nombre: "5.12 Clasificación de la información" },
  { numero: 13, nombre: "5.13 Etiquetado de Información" },
  { numero: 14, nombre: "5.14 Transferencia de información" },
  { numero: 15, nombre: "5.15 Control de acceso" },
  { numero: 16, nombre: "5.16 Gestión de identidad" },
  { numero: 17, nombre: "5.17 Información de autenticación" },
  { numero: 18, nombre: "5.18 Derechos de acceso" },
  { numero: 19, nombre: "5.19 Seguridad de la información en las relaciones con proveedores" },
  { numero: 20, nombre: "5.20 Abordar la seguridad de la información en los acuerdos con proveedores" },
  { numero: 21, nombre: "5.21 Gestión de la seguridad de la información en la cadena de suministro de TIC" },
  { numero: 22, nombre: "5.22 Monitoreo, revisión y gestión de cambios de servicios de proveedores" },
  { numero: 23, nombre: "5.23 Seguridad de la información para el uso de servicios en la nube" },
  { numero: 24, nombre: "5.24 Planificación y preparación de la gestión de incidentes de seguridad de la información" },
  { numero: 25, nombre: "5.25 Evaluación y decisión sobre eventos de seguridad de la información" },
  { numero: 26, nombre: "5.26 Respuesta a Incidentes de seguridad de la información" },
  { numero: 27, nombre: "5.27 Aprender de los incidentes de seguridad de la información" },
  { numero: 28, nombre: "5.28 Recolección de evidencia" },
  { numero: 29, nombre: "5.29 Seguridad de la información durante una interrupción" },
  { numero: 30, nombre: "5.30 Preparación de las TIC para la continuidad del negocio" },
  { numero: 31, nombre: "5.31 Requisitos legales, estatutarios, reglamentarios y contractuales" },
  { numero: 32, nombre: "5.32 Derechos de propiedad intelectual" },
  { numero: 33, nombre: "5.33 Protección de registros" },
  { numero: 34, nombre: "5.34 Privacidad y protección de la PII" },
  { numero: 35, nombre: "5.35 Revisión independiente de la seguridad de la información" },
  { numero: 36, nombre: "5.36 Cumplimiento de políticas, reglas y estándares de seguridad de la Información" },
  { numero: 37, nombre: "5.37 Procedimientos operativos documentados" },
  { numero: 38, nombre: "A6 Controles Orientados a las Personas 👨‍💻👩‍💻" },
  { numero: 39, nombre: "6.1 Detección." },
  { numero: 40, nombre: "6.2 Términos y condiciones de empleo." },
  { numero: 41, nombre: "6.3 Concientización, educación y capacitación sobre seguridad de la información." },
  { numero: 42, nombre: "6.4 Proceso disciplinario." },
  { numero: 43, nombre: "6.5 Responsabilidades después de la terminación o cambio de empleo." },
  { numero: 44, nombre: "6.6 Acuerdos de confidencialidad o no divulgación." },
  { numero: 45, nombre: "6.7 Trabajo remoto." },
  { numero: 46, nombre: "6.8 Informes de eventos de seguridad de la información." },
  { numero: 47, nombre: "A7 Controles Físicos 🔐🗃️🗄️" },
  { numero: 48, nombre: "7.1 Perímetros de seguridad física." },
  { numero: 49, nombre: "7.2 Entrada física." },
  { numero: 50, nombre: "7.3 Protección de oficinas, habitaciones e instalaciones." },
  { numero: 51, nombre: "7.4 Monitoreo de seguridad física." },
  { numero: 52, nombre: "7.5 Protección contra amenazas físicas y ambientales." },
  { numero: 53, nombre: "7.6 Trabajar en áreas seguras." },
  { numero: 54, nombre: "7.7 Limpiar escritorio y limpiar pantalla." },
  { numero: 55, nombre: "7.8 Ubicación y protección del equipo." },
  { numero: 56, nombre: "7.9 Seguridad de los activos fuera de las instalaciones." },
  { numero: 57, nombre: "7.10 Medios de almacenamiento." },
  { numero: 58, nombre: "7.11 Utilidades de soporte." },
  { numero: 59, nombre: "7.12 Seguridad del cableado." },
  { numero: 60, nombre: "7.13 Mantenimiento del equipo." },
  { numero: 61, nombre: "7.14 Eliminación segura o reutilización del equipo." },
  { numero: 62, nombre: "A8 Controles Tecnológicos 🛡️📲" },
  { numero: 63, nombre: "8.1 Dispositivos terminales de usuario." },
  { numero: 64, nombre: "8.2 Derechos de acceso privilegiado." },
  { numero: 65, nombre: "8.3 Restricción de acceso a la información." },
  { numero: 66, nombre: "8.4 Acceso al código fuente." },
  { numero: 67, nombre: "8.5 Autenticación segura." },
  { numero: 68, nombre: "8.6 Gestión de capacidad." },
  { numero: 69, nombre: "8.7 Protección contra malware." },
  { numero: 70, nombre: "8.8 Gestión de vulnerabilidades técnicas." },
  { numero: 71, nombre: "8.9 Gestión de configuración." },
  { numero: 72, nombre: "8.10 Eliminación de información." },
  { numero: 73, nombre: "8.11 Enmascaramiento de datos." },
  { numero: 74, nombre: "8.12 Prevención de fuga de datos." },
  { numero: 75, nombre: "8.13 Copia de seguridad de la información." },
  { numero: 76, nombre: "8.14 Redundancia de las instalaciones de procesamiento de información." },
  { numero: 77, nombre: "8.15 Registro." },
  { numero: 78, nombre: "8.16 Actividades de seguimiento." },
  { numero: 79, nombre: "8.17 Sincronización de reloj." },
  { numero: 80, nombre: "8.18 Uso de programas de utilidad privilegiados." },
  { numero: 81, nombre: "8.19 Instalación de software en sistemas operativos." },
  { numero: 82, nombre: "8.20 Seguridad de redes." },
  { numero: 83, nombre: "8.21 Seguridad de los servicios de red." },
  { numero: 84, nombre: "8.22 Segregación de redes." },
  { numero: 85, nombre: "8.23 Filtrado web." },
  { numero: 86, nombre: "8.24 Uso de criptografía." },
  { numero: 87, nombre: "8.25 Ciclo de vida de desarrollo seguro." },
  { numero: 88, nombre: "8.26 Requisitos de seguridad de la aplicación." },
  { numero: 89, nombre: "8.27 Principios de ingeniería y arquitectura de sistemas seguros." },
  { numero: 90, nombre: "8.28 Codificación segura." },
  { numero: 91, nombre: "8.29 Pruebas de seguridad en desarrollo y aceptación." },
  { numero: 92, nombre: "8.30 Desarrollo subcontratado." },
  { numero: 93, nombre: "8.31 Separación de los entornos de desarrollo, prueba y producción." },
  { numero: 94, nombre: "8.32 Gestión de cambios." },
  { numero: 95, nombre: "8.33 Información de prueba." },
  { numero: 96, nombre: "8.34 Protección de los sistemas de información durante las pruebas de auditoría." }
];

// Genera las filas del checklist
function renderChecklist() {
  const tbody = document.querySelector('#checklist27001 tbody');
  tbody.innerHTML = '';
  for (let i = 0; i < 93; i++) {
    const control = controlesISO27001[i] || { numero: i+1, nombre: `Control ${i+1}` };
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${control.numero}</td>
      <td>${control.nombre}</td>
      <td>
        <select>
          <option value="">--</option>
          <option value="cumple">Cumple</option>
          <option value="no-cumple">No cumple</option>
        </select>
      </td>
      <td><textarea placeholder="Observaciones"></textarea></td>
      <td><input type="date"></td>
    `;
    tbody.appendChild(tr);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  renderChecklist();
  const exportBtn = document.getElementById('exportBtn');
  if (exportBtn) {
    exportBtn.onclick = function() {
      const rows = Array.from(document.querySelectorAll('#checklist27001 tbody tr'));
      const data = rows.map(tr => {
        const tds = tr.querySelectorAll('td');
        return {
          Numero: tds[0].textContent,
          Control: tds[1].textContent,
          Cumple: tds[2].querySelector('select').value,
          Observaciones: tds[3].querySelector('textarea').value,
          Fecha: tds[4].querySelector('input').value
        };
      });
      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Checklist ISO 27001');
      XLSX.writeFile(wb, 'checklist-iso27001.xlsx');
    };
  }
});
