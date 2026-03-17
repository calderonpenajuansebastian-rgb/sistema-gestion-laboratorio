# Proyecto Semana 04 — Generador de Mensajes de Dominio

## 📌 Dominio del Proyecto

**sistema-gestion-laboratorio**

## 🎯 Objetivo

Desarrollar un generador de mensajes en consola usando **JavaScript**, aplicando los métodos de cadenas aprendidos durante la semana y utilizando **template literals** para construir la salida.

El programa genera información sobre un **Sistema de Gestión de Laboratorio**, mostrando una ficha informativa del sistema y una notificación corta.

---

## ⚙️ Tecnologías utilizadas

* JavaScript
* Node.js
* Consola de terminal

---

## 📂 Estructura del proyecto

3-proyecto/

├── README.md
├── starter/
│   └── script.js
└── solution/
  └── script.js

---

## 🚀 Cómo ejecutar el proyecto

1. Abrir la terminal.
2. Ubicarse en la carpeta del proyecto.
3. Ejecutar el siguiente comando:

node starter/script.js

---

## 🧩 Métodos de string utilizados

En este proyecto se utilizan varios métodos de cadenas para manipular la información del dominio:

* `trim()` → eliminar espacios al inicio y al final del texto
* `toUpperCase()` → convertir texto a mayúsculas
* `slice()` → extraer una parte del código
* `replace()` → modificar una palabra dentro de un texto
* `split()` → dividir la descripción en palabras
* `includes()` → verificar si una palabra existe dentro del texto
* `startsWith()` → validar cómo inicia un código
* `endsWith()` → validar cómo termina un código

---

## 🧾 Funcionalidades del script

El programa genera dos tipos de mensajes:

### 1️⃣ Ficha informativa del sistema

Muestra en consola:

* Nombre del sistema
* Categoría
* Código del sistema
* Descripción
* Número de palabras en la descripción
* Validaciones del código y contenido

### 2️⃣ Mensaje de notificación

Muestra un mensaje corto informando que el sistema está disponible.

Ejemplo:

📢 Nuevo sistema registrado: Sistema de Gestión de Laboratorio (LAB-SGL-2024)

---

## ✔ Validaciones implementadas

El script verifica información utilizando métodos de cadena:

* Si el código comienza con **LAB**
* Si la descripción contiene la palabra **laboratorio**
* Si el código termina en **2024**

---

## 👨‍💻 Autor

**Juan Sebastián Calderón**

Bootcamp de programación
