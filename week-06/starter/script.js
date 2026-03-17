// ============================================
// Proyecto Semana 06 — Reporte con Bucles
// Dominio: sistema-gestion-laboratorio
// Autor: Juan Sebastián Calderón
// ============================================


// ==============================
// 1. DATOS DEL DOMINIO (ARRAY)
// ==============================

const muestras = [
    { nombre: "Muestra A1", categoria: "biologica", valor: 80 },
    { nombre: "Muestra B2", categoria: "quimica", valor: 60 },
    { nombre: "Muestra C3", categoria: "biologica", valor: 90 },
    { nombre: "Muestra D4", categoria: "fisica", valor: 40 },
    { nombre: "Muestra E5", categoria: "quimica", valor: 70 },
    { nombre: "Muestra F6", categoria: "fisica", valor: 50 }
];


// ==============================
// 2. LISTAR ELEMENTOS (for...of)
// ==============================

console.log("\n=== LISTA DE MUESTRAS ===");

for (const muestra of muestras) {
    console.log(`Nombre: ${muestra.nombre} | Categoría: ${muestra.categoria} | Valor: ${muestra.valor}`);
}


// ==============================
// 3. CONTAR POR CATEGORÍA
// ==============================

let biologicas = 0;
let quimicas = 0;
let fisicas = 0;

for (const muestra of muestras) {
    if (muestra.categoria === "biologica") {
        biologicas++;
    } else if (muestra.categoria === "quimica") {
        quimicas++;
    } else if (muestra.categoria === "fisica") {
        fisicas++;
    }
}

console.log("\n=== CONTEO POR CATEGORÍA ===");
console.log(`Biológicas: ${biologicas}`);
console.log(`Químicas: ${quimicas}`);
console.log(`Físicas: ${fisicas}`);


// ==============================
// 4. TOTAL Y PROMEDIO
// ==============================

let suma = 0;

for (const muestra of muestras) {
    suma += muestra.valor;
}

const promedio = suma / muestras.length;

console.log("\n=== ESTADÍSTICAS ===");
console.log(`Total: ${suma}`);
console.log(`Promedio: ${promedio.toFixed(2)}`);


// ==============================
// 5. MÁXIMO Y MÍNIMO
// ==============================

let max = muestras[0];
let min = muestras[0];

for (const muestra of muestras) {
    if (muestra.valor > max.valor) {
        max = muestra;
    }
    if (muestra.valor < min.valor) {
        min = muestra;
    }
}

console.log("\n=== VALORES EXTREMOS ===");
console.log(`Mayor valor: ${max.nombre} (${max.valor})`);
console.log(`Menor valor: ${min.nombre} (${min.valor})`);


// ==============================
// 6. REPORTE FINAL (for clásico)
// ==============================

console.log("\n=== REPORTE FINAL ===");

for (let i = 0; i < muestras.length; i++) {
    const m = muestras[i];

    const estado = m.valor >= promedio ? "POR ENCIMA DEL PROMEDIO" : "POR DEBAJO DEL PROMEDIO";

    console.log(`${i + 1}. ${m.nombre} - ${m.valor} → ${estado}`);
}