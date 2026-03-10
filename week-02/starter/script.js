// ======================================
// FICHA DE DATOS - SISTEMA DE LABORATORIO
// Semana 02
// ======================================

// Variables principales del dominio
const equipmentName = "Microscopio Digital";
const totalEquipment = 1_500;
const isAvailable = true;
const currentTechnician = null;

// Constante de configuración
const MAX_LAB_CAPACITY = 2_000;

console.log("===============================");
console.log("FICHA DE DATOS: LABORATORIO");
console.log("===============================");

console.log("");
console.log("Nombre equipo: ", equipmentName);
console.log("Cantidad total: ", totalEquipment);
console.log("Disponible: ", isAvailable);

console.log("");
console.log("--- Tipos de datos ---");

// Uso de typeof
console.log("typeof equipmentName:", typeof equipmentName);
console.log("typeof totalEquipment:", typeof totalEquipment);
console.log("typeof isAvailable:", typeof isAvailable);

console.log("");
console.log("--- Conversiones ---");

// Conversión explícita
const equipmentAsText = String(totalEquipment);

console.log("Cantidad como texto:", equipmentAsText);
console.log("typeof equipmentAsText:", typeof equipmentAsText);

console.log("");
console.log("--- Valor nulo ---");

// Valor null del dominio
console.log("Técnico asignado:", currentTechnician);
console.log("¿Es null?:", currentTechnician === null);

console.log("");
console.log("===============================");
console.log("FIN DE FICHA");
console.log("===============================");