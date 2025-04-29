//  VARIABLES Y TIPOS DE DATOS
let nombreUno = 'Javier';
let booleanVerdadero = true;
let booleanFalso = false;
let numero = 10;

console.log(nombreUno, booleanFalso, booleanVerdadero, numero);

nombreUno = 'Juan'; // Reasignación
console.log(nombreUno);

const anio = 2025; // Constante (no cambia)
console.log(typeof anio, typeof nombreUno); // "number", "string"

//  OPERACIONES BÁSICAS
let stringDiez = '10'; // String (no es número)
let n1 = 10;
let n2 = 20;
const PI = 3.14;
let resultado = n2 * PI; // 62.800...
console.log(resultado);

//  INTERACCIÓN CON EL USUARIO (PROMPT)
let preguntaNombre = prompt('Decime tu nombre');
let edadParseada = parseInt(prompt('Decime tu edad')); // Convierte a número (entero)
let edadNumber = Number(prompt('Decime tu edad')); // Otra forma de convertir

console.log(preguntaNombre); // Muestra el nombre
console.log(typeof edadParseada); // "number"

//  ALERT Y CONFIRM
let suma = 100 + 200;
alert(`El resultado es: ${suma}`); // Muestra 300 en un popup

let confirmacion = confirm('¿Confirma la operación?');
console.log(confirmacion); // true o false

// CONDICIONALES (IF/ELSE)
let edad = 36;

if (edad < 18) {
    console.log('Usted es menor de edad');
} else if (edad === 35) {
    console.log('Usted tiene 35 años');
} else {
    console.log('No sabemos su edad exacta');
}

//  BUCLES (FOR)
for (let i = 1; i <= 5; i++) {
    console.log(`Número: ${i}`); // 1, 2, 3, 4, 5
}

// Ejemplo con prompt en bucle:
const cantPacientes = Number(prompt('¿Cuántos pacientes desea registrar?'));
for (let i = 1; i <= cantPacientes; i++) {
    const nombrePaciente = prompt(`Nombre del paciente ${i}`);
    const edadPaciente = Number(prompt(`Edad del paciente ${i}`));
    console.log(`Paciente ${nombrePaciente}, ${edadPaciente} años`);
}

//  BUCLE (WHILE)
let contador = 0;
while (contador <= 5) {
    console.log(`Contador: ${contador}`);
    contador++; // Incrementa hasta llegar a 5
}
// ================  VARIABLES Y ARRAYS ================
const usuarios = ["Ana", "Carlos", "Luisa"]; // Array de strings
const edades = [25, 30, 16]; // Array de números
const esAdmin = [true, false, true]; // Array de booleanos

// ================  CONDICIONALES (IF/ELSE) ================
// Ejemplo 1: Verificar si un usuario es mayor de edad
for (let i = 0; i < edades.length; i++) {
  if (edades[i] >= 18) {
    console.log(`${usuarios[i]} es mayor de edad (${edades[i]} años).`);
  } else {
    console.log(`${usuarios[i]} es menor de edad.`);
  }
}

// Ejemplo 2: Combinar condiciones con arrays
for (let i = 0; i < usuarios.length; i++) {
  if (edades[i] >= 18 && esAdmin[i]) {
    console.log(`⚡ ${usuarios[i]} es mayor de edad Y administrador.`);
  } else if (edades[i] < 18) {
    console.log(`🔞 ${usuarios[i]} no puede acceder (menor de edad).`);
  } else {
    console.log(`👤 ${usuarios[i]} es usuario estándar.`);
  }
}

// ================  BUCLES (FOR) CON ARRAYS ================
// Ejemplo 1: Recorrer un array y mostrar sus valores
console.log("--- Lista de usuarios ---");
for (let i = 0; i < usuarios.length; i++) {
  console.log(`Usuario ${i + 1}: ${usuarios[i]}`);
}

// Ejemplo 2: Sumar todas las edades
let sumaEdades = 0;
for (let i = 0; i < edades.length; i++) {
  sumaEdades += edades[i]; // sumaEdades = sumaEdades + edades[i]
}
console.log(`La suma de todas las edades es: ${sumaEdades}`);

// ================  INTERACCIÓN CON PROMPT ================
// Ejemplo: Agregar un nuevo usuario mediante prompt
const nuevoUsuario = prompt("Ingrese un nuevo nombre:");
const nuevaEdad = parseInt(prompt("Ingrese la edad:"));

if (nuevoUsuario && !isNaN(nuevaEdad)) {
  usuarios.push(nuevoUsuario); // Agrega al array
  edades.push(nuevaEdad);
  console.log(`✅ ${nuevoUsuario} (${nuevaEdad} años) fue añadido.`);
} else {
  console.log("❌ Datos inválidos.");
}

// ================  OPERACIONES CON ARRAYS ================
// Ejemplo: Filtrar usuarios mayores de 18
const mayoresDeEdad = [];
for (let i = 0; i < edades.length; i++) {
  if (edades[i] >= 18) {
    mayoresDeEdad.push(usuarios[i]);
  }
}
console.log("Usuarios mayores de edad:", mayoresDeEdad);

// ================  EJEMPLO ADICIONAL: DOM (OPCIONAL) ================
// Si tu examen requiere manipular HTML, aquí un ejemplo:
document.addEventListener("DOMContentLoaded", () => {
  const outputDiv = document.createElement("div");
  outputDiv.innerHTML = `<p>Resultados en consola. Usuarios: ${usuarios.join(", ")}</p>`;
  document.body.appendChild(outputDiv);
});