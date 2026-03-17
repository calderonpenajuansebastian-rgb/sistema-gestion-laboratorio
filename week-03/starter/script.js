// =======================================
// CALCULADORA - SISTEMA DE LABORATORIO
// Proyecto Semana 03
// =======================================

// Datos del laboratorio
let equipmentPrice = 2_500_000;
let quantity = 8;
let maintenanceCost = 300_000;
let discount = 0.10;

// ---------------------------------------
// Operaciones aritméticas
// ---------------------------------------

const totalEquipmentCost = equipmentPrice * quantity;
const maintenanceTotal = maintenanceCost * quantity;
const discountValue = totalEquipmentCost * discount;
const finalCost = totalEquipmentCost - discountValue;

// resto de equipos para mantenimiento
const maintenanceRemainder = quantity % 3;

console.log("====== CALCULADORA LABORATORIO ======");
console.log("Precio por equipo:", equipmentPrice);
console.log("Cantidad:", quantity);
console.log("Costo total equipos:", totalEquipmentCost);
console.log("Costo mantenimiento:", maintenanceTotal);
console.log("Descuento aplicado:", discountValue);
console.log("Costo final:", finalCost);
console.log("Equipos restantes mantenimiento:", maintenanceRemainder);

// ---------------------------------------
// Asignación compuesta
// ---------------------------------------

let totalBudget = 10_000_000;

totalBudget -= finalCost;
totalBudget += 500_000;

console.log("");
console.log("Presupuesto restante:", totalBudget);

// ---------------------------------------
// Comparaciones estrictas
// ---------------------------------------

const maxCapacity = 10;
const isFull = quantity >= maxCapacity;

console.log("");
console.log("¿Laboratorio lleno?:", isFull);
console.log("¿Cantidad exacta 8?:", quantity === 8);
console.log("¿Cantidad diferente de 5?:", quantity !== 5);

// ---------------------------------------
// Operadores lógicos
// ---------------------------------------

const hasMaintenance = maintenanceCost > 0;
const canOperate = quantity > 0 && hasMaintenance;
const needsEquipment = quantity < maxCapacity || !hasMaintenance;

console.log("");
console.log("¿Tiene mantenimiento?:", hasMaintenance);
console.log("¿Puede operar el laboratorio?:", canOperate);
console.log("¿Necesita más equipos?:", needsEquipment);

console.log("");
console.log("=====================================");
console.log("CALCULADORA DE LABORATORIO FINALIZADA");
console.log("=====================================");