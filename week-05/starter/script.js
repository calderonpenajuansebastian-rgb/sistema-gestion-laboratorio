// ============================================
// Proyecto Semana 05 — Clasificador
// Dominio: sistema-gestion-laboratorio
// Autor: Juan Sebastián Calderón
// ============================================


// ==============================
// DATOS DEL ELEMENTO
// ==============================

// Elemento del sistema (ej: muestra de laboratorio)
const nombre = "Muestra de Sangre A1";
const estado = "activo";
const capacidad = 85; // porcentaje de uso
const categoria = "biologica";
const codigo = "LAB-MUE-001";

// Puede ser null (para usar ??)
const responsable = null;

// Objeto con datos opcionales (para usar ?.)
const laboratorio = {
    ubicacion: {
        ciudad: "Bogotá"
    }
};


// ==============================
// CLASIFICACIÓN CON IF/ELSE
// ==============================

// Clasificar capacidad del sistema
let nivelCapacidad;

if (capacidad >= 80) {
    nivelCapacidad = "ALTA";
} else if (capacidad >= 50) {
    nivelCapacidad = "MEDIA";
} else {
    nivelCapacidad = "BAJA";
}


// ==============================
// OPERADOR TERNARIO
// ==============================

// Estado activo o inactivo
const estadoSistema = estado === "activo" ? "DISPONIBLE" : "NO DISPONIBLE";


// ==============================
// SWITCH (TIPO DE CATEGORÍA)
// ==============================

let tipoCategoria;

switch (categoria) {
    case "biologica":
        tipoCategoria = "Muestra Biológica";
        break;
    case "quimica":
        tipoCategoria = "Muestra Química";
        break;
    case "fisica":
        tipoCategoria = "Muestra Física";
        break;
    default:
        tipoCategoria = "Categoría desconocida";
}


// ==============================
// NULLISH COALESCING (??)
// ==============================

// Si no hay responsable, poner uno por defecto
const responsableFinal = responsable ?? "No asignado";


// ==============================
// OPTIONAL CHAINING (?.)
// ==============================

// Acceder de forma segura a la ciudad
const ciudadLab = laboratorio?.ubicacion?.ciudad ?? "Ubicación no disponible";


// ==============================
// SALIDA FINAL (FICHA)
// ==============================

const ficha = `
=============================================
   SISTEMA DE GESTIÓN DE LABORATORIO
=============================================

Elemento:        ${nombre}
Código:          ${codigo}
Categoría:       ${tipoCategoria}
Capacidad:       ${capacidad}% (${nivelCapacidad})
Estado:          ${estadoSistema}
Responsable:     ${responsableFinal}
Ubicación:       ${ciudadLab}

=============================================
`;

console.log(ficha);