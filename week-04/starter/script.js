// ============================================
// Proyecto Semana 04
// Generador de Mensajes de Dominio
// Dominio: sistema-gestion-laboratorio
// Autor: Juan Sebastián Calderón
// ============================================


// ==============================
// DATOS DEL DOMINIO
// ==============================

// Nombre principal del sistema
const entidad = "  Sistema de Gestión de Laboratorio  ";

// Categoría del sistema
const categoria = "Software de administración científica";

// Descripción larga
const descripcion = "Sistema diseñado para registrar muestras, analizar resultados y gestionar información de experimentos en el laboratorio.";

// Código del sistema
const codigo = "LAB-SGL-2024";


// ==============================
// MÉTODOS DE STRING
// ==============================

// trim() elimina espacios al inicio y al final
const entidadLimpia = entidad.trim();

// toUpperCase() convierte el nombre en mayúsculas
const entidadMayus = entidadLimpia.toUpperCase();

// slice() obtiene una parte del código
const codigoCorto = codigo.slice(0,7);

// replace() modifica una palabra
const categoriaModificada = categoria.replace("científica", "de laboratorio");

// split() separa la descripción en palabras
const palabrasDescripcion = descripcion.split(" ");


// ==============================
// VALIDACIONES
// ==============================

// startsWith() verifica cómo inicia el código
const codigoEmpiezaLAB = codigo.startsWith("LAB");

// includes() busca una palabra dentro de la descripción
const contieneLaboratorio = descripcion.includes("laboratorio");

// endsWith() verifica cómo termina el código
const codigoTermina2024 = codigo.endsWith("2024");


// ==============================
// TARJETA DE INFORMACIÓN
// ==============================

const ficha = `
=============================================
   SISTEMA GESTION LABORATORIO — FICHA
=============================================

Entidad:      ${entidadLimpia}
Categoría:    ${categoriaModificada}
Código:       ${codigo}
Código corto: ${codigoCorto}

Descripción:
${descripcion}

Cantidad de palabras en descripción: ${palabrasDescripcion.length}

----------- VALIDACIONES -----------

¿El código empieza con LAB?: ${codigoEmpiezaLAB}
¿La descripción contiene "laboratorio"?: ${contieneLaboratorio}
¿El código termina en 2024?: ${codigoTermina2024}

=============================================
`;


// ==============================
// MENSAJE DE NOTIFICACIÓN
// ==============================

const notificacion = `
📢 Nuevo sistema registrado: ${entidadLimpia} (${codigo})
`;


// ==============================
// SALIDA EN CONSOLA
// ==============================

console.log(ficha);
console.log(notificacion);